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

const categoryContentMap = new Map<string, Map<string, CategoryContent>>();

beforeAll(async () => {
  await Promise.all(
    CATEGORIES.map(async (cat) => {
      const langMap = new Map<string, CategoryContent>();
      await Promise.all(
        [...SUPPORTED_LANGUAGES, 'es'].map(async (lang) => {
          const loader = cat.entry.i18n[lang as Language];
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

describe('Categories QA Quality & Localization Suite', () => {
  describe('SEO Slug Integrity & Transliteration Rules', () => {
    CATEGORIES.forEach((cat) => {
      it(`category "${cat.key}" must follow slug i18n rules across all locales`, () => {
        const enContent = categoryContentMap.get(cat.key)?.get('en');
        expect(enContent, `Category "${cat.key}" missing English locale`).toBeDefined();
        const enSlug = enContent!.slug;

        SUPPORTED_LANGUAGES.forEach((lang) => {
          const content = categoryContentMap.get(cat.key)?.get(lang);
          expect(content, `Category "${cat.key}" missing locale [${lang}]`).toBeDefined();
          const slug = content!.slug;

          expect(slug, `Category "${cat.key}" [${lang}] slug cannot be empty`).toBeTruthy();
          expect(slug, `Category "${cat.key}" [${lang}] slug must be lowercase`).toBe(slug.toLowerCase());
          expect(slug, `Category "${cat.key}" [${lang}] slug cannot end with lang code suffix`).not.toMatch(
            new RegExp(`-${lang}$`)
          );

          if (SHARING_LOCALES.includes(lang)) {
            expect(
              slug,
              `Category "${cat.key}" [${lang}] must share the exact English slug "${enSlug}"`
            ).toBe(enSlug);
          }

          if (lang === 'ru') {
            expect(
              slug,
              `Category "${cat.key}" [ru] slug "${slug}" must be transliterated to Latin alphabet`
            ).toMatch(/^[a-z0-9-]+$/);
          }
        });
      });
    });
  });

  describe('Structural SEO & Section Parity', () => {
    CATEGORIES.forEach((cat) => {
      it(`category "${cat.key}" must have 100% structural parity with English reference`, () => {
        const enContent = categoryContentMap.get(cat.key)?.get('en');
        if (!enContent) return;

        const enSeoCount = enContent.seo?.length ?? 0;
        const enFaqCount = enContent.faq?.length ?? 0;

        SUPPORTED_LANGUAGES.forEach((lang) => {
          if (lang === 'en') return;
          const content = categoryContentMap.get(cat.key)?.get(lang);
          if (!content) return;

          expect(
            content.seo?.length ?? 0,
            `Category "${cat.key}" [${lang}] SEO sections count mismatch with EN`
          ).toBe(enSeoCount);

          expect(
            content.faq?.length ?? 0,
            `Category "${cat.key}" [${lang}] FAQ items count mismatch with EN`
          ).toBe(enFaqCount);
        });
      });
    });
  });

  describe('Native Script Density & Diacritic Requirements', () => {
    CATEGORIES.forEach((cat) => {
      Object.entries(SCRIPT_RULES).forEach(([lang, rule]) => {
        it(`category "${cat.key}" [${lang}] must fulfill ${rule.name} density requirement`, () => {
          const content = categoryContentMap.get(cat.key)?.get(lang);
          if (!content) return;

          const text = [content.title, content.description, JSON.stringify(content.seo ?? [])].join(' ');
          const matches = text.match(rule.regex);
          const matchedCharCount = matches ? matches.length : 0;
          const totalLetters = (text.match(/[\p{L}]/gu) || []).length;

          if (totalLetters > 20) {
            const ratio = matchedCharCount / totalLetters;
            expect(
              ratio,
              `Category "${cat.key}" [${lang}] script ratio (${ratio.toFixed(2)}) below required (${rule.minRatio})`
            ).toBeGreaterThanOrEqual(rule.minRatio);
          }
        });
      });

      Object.entries(DIACRITIC_RULES).forEach(([lang, regex]) => {
        it(`category "${cat.key}" [${lang}] should contain natural native diacritics`, () => {
          const content = categoryContentMap.get(cat.key)?.get(lang);
          if (!content) return;

          const text = [content.title, content.description, JSON.stringify(content.seo ?? [])].join(' ');
          const totalLetters = (text.match(/[\p{L}]/gu) || []).length;

          if (totalLetters > 50) {
            const matches = text.match(regex);
            const diacriticCount = matches ? matches.length : 0;
            const ratio = diacriticCount / totalLetters;
            expect(
              ratio,
              `Category "${cat.key}" [${lang}] diacritic ratio (${ratio.toFixed(3)}) is suspiciously low`
            ).toBeGreaterThanOrEqual(0.005);
          }
        });
      });
    });
  });

  describe('Spanish Leakage & Typography Cleanliness (Matching Tool Rules)', () => {
    CATEGORIES.forEach((cat) => {
      SUPPORTED_LANGUAGES.forEach((lang) => {
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
