import { beforeAll, describe, it, expect } from "vitest";
import { SUPPORTED_LANGUAGES, getLocalizedSlug } from "../src/i18n/utils";
import { CATEGORIES } from "../src/data/utilities/registry";
import { generateSitemap } from "../src/utils/sitemapGenerator";
import type { Language } from "../src/i18n/utils";
import { ALL_LANDING_DEFINITIONS, type KnownLocale } from "@jjlmoya/landings";

type ToolContent = { slug: string };
type CatContent = { slug: string };
type LandingContent = { slug: string };
type UrlParts = { baseUrl: string; langPath: string; utilitiesSlug: string; categoriesSlug: string; appsSlug: string };
const catCache = new Map<string, CatContent>();
const toolCache = new Map<string, ToolContent>();
const landingCache = new Map<string, LandingContent>();
beforeAll(async () => {
    await Promise.all(
        SUPPORTED_LANGUAGES.flatMap(lang => [
            ...CATEGORIES.flatMap(cat => [
                cat.entry.i18n[lang]?.().then((c: CatContent) => c && catCache.set(`${lang}:${cat.key}`, c)),
                ...cat.toolsWithColors.map(({ toolEntry }: { toolEntry: any }) =>
                    toolEntry.i18n[lang]?.().then((c: ToolContent) => c && toolCache.set(`${lang}:${toolEntry.id}`, c))
                ),
            ]),
            ...ALL_LANDING_DEFINITIONS.map(({ entry }) =>
                (entry.i18n[lang as KnownLocale] ?? entry.i18n.en)?.().then((c: LandingContent) => c && landingCache.set(`${lang}:${entry.id}`, c))
            ),
        ])
    );
});
async function getSitemapUrls(lang: Language): Promise<string[]> {
    const sitemap = await generateSitemap(lang);
    const matches = sitemap.match(/<loc>([^<]+)<\/loc>/g);
    return matches ? matches.map(m => m.replace(/<\/?loc>/g, '')) : [];
}
function getUrlParts(lang: Language): UrlParts {
    return {
        baseUrl: "https://www.gamebob.dev",
        langPath: `/${lang}`,
        utilitiesSlug: getLocalizedSlug(lang, 'utilities'),
        categoriesSlug: getLocalizedSlug(lang, 'categories'),
        appsSlug: getLocalizedSlug(lang, 'apps'),
    };
}
function getStaticExpectedUrls(parts: UrlParts): string[] {
    const { baseUrl, langPath, utilitiesSlug, appsSlug } = parts;
    return [`${baseUrl}${langPath}/`, `${baseUrl}${langPath}/${appsSlug}/`, `${baseUrl}${langPath}/${utilitiesSlug}/`, `${baseUrl}${langPath}/widgets/`];
}
function getLandingExpectedUrls(lang: Language, parts: UrlParts): string[] {
    return ALL_LANDING_DEFINITIONS.flatMap(({ entry }) => {
        const landingContent = landingCache.get(`${lang}:${entry.id}`);
        return landingContent ? [`${parts.baseUrl}${parts.langPath}/${landingContent.slug}/`] : [];
    });
}
function getCategoryExpectedUrls(lang: Language, parts: UrlParts): string[] {
    const { baseUrl, langPath, utilitiesSlug, categoriesSlug } = parts;
    const urls: string[] = [];
    for (const cat of CATEGORIES) {
        const catContent = catCache.get(`${lang}:${cat.key}`);
        if (!catContent) continue;
        urls.push(`${baseUrl}${langPath}/${utilitiesSlug}/${categoriesSlug}/${catContent.slug}/`);
        for (const { toolEntry } of cat.toolsWithColors) {
            const toolContent = toolCache.get(`${lang}:${toolEntry.id}`);
            if (!toolContent) continue;
            urls.push(`${baseUrl}${langPath}/${utilitiesSlug}/${categoriesSlug}/${catContent.slug}/${toolContent.slug}/`);
        }
    }
    return urls.sort();
}
function getExpectedUrls(lang: Language): string[] {
    const parts = getUrlParts(lang);
    return [...getStaticExpectedUrls(parts), ...getLandingExpectedUrls(lang, parts), ...getCategoryExpectedUrls(lang, parts)].sort();
}
describe("Sitemap Coverage", () => {
    for (const lang of SUPPORTED_LANGUAGES) {
        it(`Sitemap for ${lang} should include all pages`, async () => {
            const sitemapUrls = await getSitemapUrls(lang);
            const expectedUrls = getExpectedUrls(lang);
            const sitemapSet = new Set(sitemapUrls);
            const expectedSet = new Set(expectedUrls);
            const missing = expectedUrls.filter(url => !sitemapSet.has(url));
            const extra = sitemapUrls.filter(url => !expectedSet.has(url));
            const message = [`Sitemap for ${lang}: ${sitemapUrls.length} URLs found vs ${expectedUrls.length} expected`, missing.length ? `Missing (${missing.length}): ${missing.slice(0, 5).join(', ')}` : '', extra.length ? `Extra (${extra.length}): ${extra.slice(0, 5).join(', ')}` : ''].filter(Boolean).join('\n');
            expect(sitemapUrls.length, message).toBe(expectedUrls.length);
        });
    }
    it("Hreflang alternates for es tools (jjlmoya.es) should be /utilidades/tool-slug/ without /categorias/", async () => {
        const sitemap = await generateSitemap('en');
        const esToolUrls = (sitemap.match(/<xhtml:link[^>]*hreflang="es"[^>]*href="([^"]+)"[^>]*\/>/g) || [])
            .map(h => h.match(/href="([^"]+)"/)?.[1])
            .filter((url): url is string => !!url && url.includes('jjlmoya.es/utilidades/') && url.split('/').filter(Boolean).length === 2);
        esToolUrls.forEach(url => {
            const pathPart = new URL(url).pathname;
            const segments = pathPart.split('/').filter(Boolean);
            expect(segments.length).toBe(2);
            expect(segments[0]).toBe('utilidades');
            expect(url).not.toContain('/categorias/');
        });
    });
});
