import { describe, it, expect, beforeAll } from 'vitest';
import { CATEGORIES } from '../src/data/utilities/registry';
import { SUPPORTED_LANGUAGES, type Language } from '../src/i18n/utils';
import fs from 'node:fs';
import path from 'node:path';

type CategoryContent = {
  slug: string;
  title: string;
  description: string;
  seo?: Array<any>;
  faq?: Array<any>;
  howTo?: Array<any>;
};

const SHARING_LOCALES = ['ja', 'ko', 'zh'];
const ASIAN_LOCALES = ['ja', 'ko', 'zh'];

const SCRIPT_RULES = {
  ja: { name: 'Japanese (kana/kanji)', regex: /[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}]/gu, minRatio: 0.45 },
  ko: { name: 'Korean (hangul)', regex: /\p{Script=Hangul}/gu, minRatio: 0.55 },
  ru: { name: 'Russian (cyrillic)', regex: /\p{Script=Cyrillic}/gu, minRatio: 0.65 },
  zh: { name: 'Chinese (han)', regex: /\p{Script=Han}/gu, minRatio: 0.45 },
} as const;

const DIACRITIC_RULES = {
  de: /[äöüÄÖÜß]/g,
  es: /[áéíóúüñÁÉÍÓÚÜÑ]/g,
  fr: /[àâæçéèêëîïôœùûüÿÀÂÆÇÉÈÊËÎÏÔŒÙÛÜŸ]/g,
  it: /[àèéìíîòóùúÀÈÉÌÍÎÒÓÙÚ]/g,
  pl: /[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g,
  pt: /[áâãàçéêíóôõúüÁÂÃÀÇÉÊÍÓÔÕÚÜ]/g,
  sv: /[åäöÅÄÖ]/g,
  tr: /[çğıöşüÇĞİÖŞÜ]/g,
} as const;

const AI_TYPOGRAPHY_GARBAGE = ['\u2013', '\u2014', '\u2026', '\u201C', '\u201D', '\u2018', '\u2019', '\u00AB', '\u00BB', '\u200B', '\u201E'];
const SPANISH_MARKERS = [/\bherramienta\b/i, /\bpuedes\b/i, /\bdebes\b/i, /\btus\b/i, /\blos datos\b/i, /\bel resultado\b/i];

const categoryContentMap = new Map<string, Map<Language, CategoryContent>>();

beforeAll(async () => {
  await Promise.all(
    CATEGORIES.map(async (cat) => {
      const langMap = new Map<Language, CategoryContent>();
      await Promise.all(
        SUPPORTED_LANGUAGES.map(async (lang) => {
          const loader = cat.entry.i18n[lang];
          if (loader) {
            const content = await loader();
            if (content) {
              langMap.set(lang, content);
            }
          }
        })
      );
      categoryContentMap.set(cat.key, langMap);
    })
  );
}, 60000);

describe('Category Quality, SEO & Strict Tool Rules Enforcement', () => {

  describe('Category Slug Rules (Matching Tool Rules)', () => {
    CATEGORIES.forEach((cat) => {
      it(`category "${cat.key}" slug rules per locale`, () => {
        const langMap = categoryContentMap.get(cat.key);
        const enSlug = langMap?.get('en')?.slug;
        expect(enSlug, `Category "${cat.key}" must have an "en" slug`).toBeTruthy();

        SUPPORTED_LANGUAGES.forEach((lang) => {
          const content = langMap?.get(lang);
          if (!content) return;
          const slug = content.slug;

          expect(slug, `Category "${cat.key}" [${lang}] slug must be lowercase kebab-case (a-z0-9-)`).toMatch(/^[a-z0-9-]+$/);
          expect(slug, `Category "${cat.key}" [${lang}] slug cannot end with a 2-letter language code`).not.toMatch(/-[a-z]{2}$/);

          if (lang !== 'en') {
            if (SHARING_LOCALES.includes(lang)) {
              expect(
                slug,
                `Category "${cat.key}" [${lang}] must share the exact English slug ("${enSlug}")`
              ).toBe(enSlug);
            } else {
              expect(
                slug,
                `Category "${cat.key}" [${lang}] slug ("${slug}") must NOT be in English ("${enSlug}"). Each non-asian locale must be translated.`
              ).not.toBe(enSlug);
            }
          }
        });
      });
    });

    SUPPORTED_LANGUAGES.forEach((lang) => {
      it(`all categories in language [${lang}] must have unique slugs`, () => {
        const slugs = new Map<string, string>();
        for (const cat of CATEGORIES) {
          const content = categoryContentMap.get(cat.key)?.get(lang);
          if (!content) continue;
          if (SHARING_LOCALES.includes(lang)) continue;

          expect(
            slugs.has(content.slug),
            `Duplicate category slug "${content.slug}" in language "${lang}" between "${cat.key}" and "${slugs.get(content.slug)}"`
          ).toBe(false);
          slugs.set(content.slug, cat.key);
        }
      });
    });
  });

  describe('SEO Parity & Structural Completeness (Matching Tool Rules)', () => {
    CATEGORIES.forEach((cat) => {
      it(`category "${cat.key}" must maintain SEO section count & structural parity across all 15 locales`, () => {
        const langMap = categoryContentMap.get(cat.key);
        const enContent = langMap?.get('en');
        expect(enContent).toBeDefined();

        const enSeoCount = enContent?.seo?.length ?? 0;
        expect(enSeoCount, `Category "${cat.key}" [en] must define at least 1 SEO section`).toBeGreaterThan(0);

        SUPPORTED_LANGUAGES.forEach((lang) => {
          const content = langMap?.get(lang);
          expect(content, `Category "${cat.key}" missing translation for "${lang}"`).toBeDefined();

          const locSeoCount = content?.seo?.length ?? 0;
          expect(
            locSeoCount,
            `Category "${cat.key}" [${lang}] SEO section count (${locSeoCount}) must match EN (${enSeoCount})`
          ).toBe(enSeoCount);

          if (enContent?.seo && content?.seo) {
            content.seo.forEach((sec, idx) => {
              const enSecType = enContent.seo![idx]?.type;
              expect(
                sec.type,
                `Category "${cat.key}" [${lang}] SEO section #${idx} type "${sec.type}" must match EN type "${enSecType}"`
              ).toBe(enSecType);
            });
          }
        });
      });

      it(`category "${cat.key}" SEO text length in non-EN locales must not be lazy or truncated`, () => {
        const langMap = categoryContentMap.get(cat.key);
        const enContent = langMap?.get('en');
        if (!enContent?.seo) return;

        const getLength = (seoArr: any[]) =>
          seoArr.reduce((sum, sec) => sum + (JSON.stringify(sec).length), 0);

        const enLen = getLength(enContent.seo);

        SUPPORTED_LANGUAGES.forEach((lang) => {
          if (lang === 'en') return;
          const content = langMap?.get(lang);
          if (!content?.seo) return;

          const locLen = getLength(content.seo);
          const isAsian = ASIAN_LOCALES.includes(lang);
          const minRatio = isAsian ? 0.20 : 0.65;
          const minLen = Math.floor(enLen * minRatio);

          expect(
            locLen,
            `Category "${cat.key}" [${lang}] SEO content appears truncated/lazy (${locLen} chars vs EN ${enLen} chars)`
          ).toBeGreaterThanOrEqual(minLen);
        });
      });
    });
  });

  describe('Native Script & Diacritics Density (Matching Tool Rules)', () => {
    CATEGORIES.forEach((cat) => {
      SUPPORTED_LANGUAGES.forEach((lang) => {
        it(`category "${cat.key}" [${lang}] script & diacritics compliance`, () => {
          const content = categoryContentMap.get(cat.key)?.get(lang);
          if (!content) return;

          const fullText = [content.title, content.description, JSON.stringify(content.seo ?? [])].join(' ');
          const letters = (fullText.match(/\p{L}/gu) || []).length;
          if (letters < 20) return;

          if (lang in SCRIPT_RULES) {
            const rule = SCRIPT_RULES[lang as keyof typeof SCRIPT_RULES];
            const nativeMatches = (fullText.match(rule.regex) || []).length;
            const ratio = nativeMatches / letters;

            expect(
              ratio,
              `Category "${cat.key}" [${lang}] has suspicious non-native script content (${(ratio * 100).toFixed(1)}% ${rule.name}, expected >= ${(rule.minRatio * 100).toFixed(0)}%)`
            ).toBeGreaterThanOrEqual(rule.minRatio);
          }

          if (lang in DIACRITIC_RULES) {
            const regex = DIACRITIC_RULES[lang as keyof typeof DIACRITIC_RULES];
            const diacriticMatches = (fullText.match(regex) || []).length;
            const density = (diacriticMatches / letters) * 1000;

            expect(
              density,
              `Category "${cat.key}" [${lang}] has missing accents or diacritics (${density.toFixed(2)} per 1000 letters). Encoding issue or missing translation.`
            ).toBeGreaterThanOrEqual(0.05);
          }
        });
      });
    });
  });

  describe('Spanish Leakage & Typography Cleanliness (Matching Tool Rules)', () => {
    CATEGORIES.forEach((cat) => {
      SUPPORTED_LANGUAGES.forEach((lang) => {
        if (lang === 'es') return;
        it(`category "${cat.key}" [${lang}] must not leak Spanish text or AI typography garbage`, () => {
          const content = categoryContentMap.get(cat.key)?.get(lang);
          if (!content) return;

          const text = [content.title, content.description, JSON.stringify(content.seo ?? [])].join(' ');

          AI_TYPOGRAPHY_GARBAGE.forEach((char) => {
            expect(
              text.includes(char),
              `Category "${cat.key}" [${lang}] contains AI typography garbage character "${char}"`
            ).toBe(false);
          });

          let spanishHits = 0;
          SPANISH_MARKERS.forEach((pattern) => {
            if (pattern.test(text)) spanishHits++;
          });

          expect(
            spanishHits,
            `Category "${cat.key}" [${lang}] contains untranslated Spanish leakage`
          ).toBeLessThan(2);
        });
      });
    });

    CATEGORIES.forEach((cat) => {
      it(`category "${cat.key}" [es] must use inverted punctuation marks (¿? ¡!)`, () => {
        const content = categoryContentMap.get(cat.key)?.get('es');
        if (!content) return;

        const text = [content.title, content.description, JSON.stringify(content.seo ?? [])].join(' ');
        
        const questionEndMatches = [...text.matchAll(/\?/g)];
        questionEndMatches.forEach((match) => {
          const index = match.index ?? 0;
          const prevSegment = text.slice(Math.max(0, index - 120), index);
          expect(
            prevSegment.includes('¿'),
            `Category "${cat.key}" [es] missing opening question mark '¿' before question ending at index ${index}`
          ).toBe(true);
        });
      });
    });
  });

  describe('SEO & OpenGraph Asset Alignment', () => {
    CATEGORIES.forEach((cat) => {
      it(`category "${cat.key}" must have a valid associated OpenGraph image asset`, () => {
        const enContent = categoryContentMap.get(cat.key)?.get('en');
        expect(enContent, `Category "${cat.key}" english content required for OG image resolution`).toBeDefined();
        
        const fallbackSlug = cat.key === 'converters' ? 'universal-image-converter' : enContent!.slug;
        const mainImagePath = path.join(process.cwd(), 'public', 'images', 'utilities', `${cat.key}.webp`);
        const fallbackImagePath = path.join(process.cwd(), 'public', 'images', 'utilities', `${fallbackSlug}.webp`);
        
        const firstTool = cat.toolsWithColors[0]?.toolEntry;
        let toolImagePath = '';
        if (firstTool) {
          toolImagePath = path.join(process.cwd(), 'public', 'images', 'utilities', `${firstTool.id}.webp`);
        }

        const hasValidAsset = fs.existsSync(mainImagePath) || fs.existsSync(fallbackImagePath) || (toolImagePath && fs.existsSync(toolImagePath));
        expect(
          hasValidAsset,
          `OpenGraph image missing for category "${cat.key}" at expected paths`
        ).toBe(true);
      });
    });
  });
});
