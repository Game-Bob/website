import { describe, it, expect } from "vitest";
import { SUPPORTED_LANGUAGES, getLocalizedSlug } from "../src/i18n/utils";
import { CATEGORIES } from "../src/data/utilities/registry";
import { generateSitemap } from "../src/utils/sitemapGenerator";
import type { Language } from "../src/i18n/utils";

async function getSitemapUrls(lang: Language): Promise<string[]> {
  const sitemap = await generateSitemap(lang);
  const matches = sitemap.match(/<loc>([^<]+)<\/loc>/g);
  return matches ? matches.map(m => m.replace(/<\/?loc>/g, '')) : [];
}

async function getExpectedUrls(lang: Language): Promise<string[]> {
  const baseUrl = `https://www.gamebob.dev`;
  const langPath = lang === 'en' ? '/en' : `/${lang}`;
  const utilitiesSlug = getLocalizedSlug(lang, 'utilities');
  const categoriesSlug = getLocalizedSlug(lang, 'categories');
  const appsSlug = getLocalizedSlug(lang, 'apps');

  const urls = [
    `${baseUrl}${langPath}/`,
    `${baseUrl}${langPath}/${appsSlug}/`,
    `${baseUrl}${langPath}/${utilitiesSlug}/`,
  ];

  const categoryPromises = CATEGORIES.map(async (catDef) => {
    const cat = await catDef.entry.i18n[lang]?.();
    if (!cat) return [];

    const categoryUrl = `${baseUrl}${langPath}/${utilitiesSlug}/${categoriesSlug}/${cat.slug}/`;
    const toolPromises = catDef.AllTools.map(async (toolDef) => {
      const tool = await toolDef.entry.i18n[lang]?.();
      if (!tool) return '';
      return `${baseUrl}${langPath}/${utilitiesSlug}/${categoriesSlug}/${cat.slug}/${tool.slug}/`;
    });

    const toolUrls = await Promise.all(toolPromises);
    return [categoryUrl, ...toolUrls.filter(Boolean)];
  });

  const allCategoryUrls = await Promise.all(categoryPromises);
  urls.push(...allCategoryUrls.flat());
  urls.push(`${baseUrl}${langPath}/widgets/`);

  return urls.sort();
}

describe("Sitemap Coverage", () => {
  for (const lang of SUPPORTED_LANGUAGES) {
    it(`Sitemap for ${lang} should include all pages`, async () => {
      const sitemapUrls = await getSitemapUrls(lang);
      const expectedUrls = await getExpectedUrls(lang);

      const sitemapSet = new Set(sitemapUrls);
      const expectedSet = new Set(expectedUrls);

      const missing = expectedUrls.filter(url => !sitemapSet.has(url));
      const extra = sitemapUrls.filter(url => !expectedSet.has(url));

      const message = [
        `Sitemap for ${lang}: ${sitemapUrls.length} URLs found vs ${expectedUrls.length} expected`,
        missing.length > 0 ? `Missing URLs (${missing.length}): ${missing.join(', ')}` : '',
        extra.length > 0 ? `Extra URLs (${extra.length}): ${extra.join(', ')}` : '',
      ].filter(Boolean).join('\n');

      expect(sitemapUrls.length, message).toBe(expectedUrls.length);
    });
  }
});
