import { SUPPORTED_LANGUAGES, type Language, getLocalizedSlug, externalLanguages } from '../i18n/utils';
import { CATEGORIES } from '../data/utilities/registry';

export interface SitemapEntry {
  url: string; lastmod?: string; changefreq?: string; priority?: number; hreflang?: Record<string, string>;
}

const BASE_URL = `https://www.gamebob.dev`;
const toLangPath = (lang: Language) => lang === 'en' ? '/en' : `/${lang}`;

function allLangBases() {
  return [
    ...SUPPORTED_LANGUAGES.map(lang => ({ lang, base: `${BASE_URL}${toLangPath(lang)}` })),
    ...Object.entries(externalLanguages).map(([lang, domain]) => ({ lang, base: domain as string })),
  ];
}

async function resolveCatPath(catDef: any, lang: Language): Promise<string | null> {
  const cat = await catDef.entry.i18n[lang]?.();
  return cat ? `${getLocalizedSlug(lang, 'utilities')}/${getLocalizedSlug(lang, 'categories')}/${cat.slug}` : null;
}
async function resolveToolPath(catDef: any, toolDef: any, lang: Language): Promise<string | null> {
  const cat = await catDef.entry.i18n[lang]?.();
  const tool = await toolDef.entry.i18n[lang]?.();
  return (cat && tool) ? `${getLocalizedSlug(lang, 'utilities')}/${getLocalizedSlug(lang, 'categories')}/${cat.slug}/${tool.slug}` : null;
}
async function buildHreflangFor(resolve: (lang: Language) => Promise<string | null>): Promise<Record<string, string>> {
  const hreflang: Record<string, string> = {};
  for (const { lang, base } of allLangBases()) {
    const path = await resolve(lang as Language);
    if (path) hreflang[lang] = `${base}/${path}/`;
  }
  return hreflang;
}

async function getToolUrls(catDef: any, cat: any, lang: Language): Promise<SitemapEntry[]> {
  const u = getLocalizedSlug(lang, 'utilities');
  const c = getLocalizedSlug(lang, 'categories');
  const urls: SitemapEntry[] = [];
  for (const toolDef of catDef.AllTools) {
    const tool = await toolDef.entry.i18n[lang]?.();
    if (!tool) continue;
    urls.push({
      url: `${BASE_URL}${toLangPath(lang)}/${u}/${c}/${cat.slug}/${tool.slug}/`,
      changefreq: 'monthly',
      priority: 0.6,
      hreflang: await buildHreflangFor(l => resolveToolPath(catDef, toolDef, l)),
    });
  }
  return urls;
}

async function getCategoryUrls(lang: Language): Promise<SitemapEntry[]> {
  const u = getLocalizedSlug(lang, 'utilities');
  const c = getLocalizedSlug(lang, 'categories');
  const urls: SitemapEntry[] = [];
  for (const catDef of CATEGORIES) {
    const cat = await catDef.entry.i18n[lang]?.();
    if (!cat) continue;
    urls.push({
      url: `${BASE_URL}${toLangPath(lang)}/${u}/${c}/${cat.slug}/`,
      changefreq: 'weekly',
      priority: 0.7,
      hreflang: await buildHreflangFor(l => resolveCatPath(catDef, l)),
    });
    urls.push(...await getToolUrls(catDef, cat, lang));
  }
  return urls;
}

function buildHreflang(path: string): Record<string, string> {
  return Object.fromEntries(allLangBases().map(({ lang, base }) => [lang, `${base}${path}`]));
}
function getStaticUrls(lang: Language): SitemapEntry[] {
  const lPath = toLangPath(lang);
  const u = getLocalizedSlug(lang, 'utilities');
  const a = getLocalizedSlug(lang, 'apps');
  const e = (path: string, cf: string, p: number): SitemapEntry => ({ url: `${BASE_URL}${lPath}${path}`, changefreq: cf, priority: p, hreflang: buildHreflang(path) });
  return [e('/', 'daily', 1.0), e(`/${a}/`, 'weekly', 0.8), e(`/${u}/`, 'weekly', 0.8), e('/widgets/', 'weekly', 0.8)];
}

function renderUrl({ url, hreflang, changefreq, priority }: SitemapEntry): string {
  const links = hreflang ? Object.entries(hreflang).map(([l, href]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${href}"/>`) : [];
  const lines = [`  <url>`, `    <loc>${url}</loc>`, ...links];
  if (changefreq) lines.push(`    <changefreq>${changefreq}</changefreq>`);
  if (priority !== undefined) lines.push(`    <priority>${priority}</priority>`);
  lines.push(`  </url>`);
  return lines.join('\n');
}

export async function generateSitemap(lang: Language): Promise<string> {
  const allUrls = [...getStaticUrls(lang), ...await getCategoryUrls(lang)];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allUrls.map(renderUrl).join('\n')}
</urlset>`;
}
