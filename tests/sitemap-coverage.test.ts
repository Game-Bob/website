import { beforeAll, describe, it, expect } from "vitest";
import { SUPPORTED_LANGUAGES, getLocalizedSlug } from "../src/i18n/utils";
import { CATEGORIES } from "../src/data/utilities/registry";
import { generateSitemap } from "../src/utils/sitemapGenerator";
import type { Language } from "../src/i18n/utils";

type ToolContent = { slug: string };
type CatContent = { slug: string };

const catCache = new Map<string, CatContent>();
const toolCache = new Map<string, ToolContent>();

beforeAll(async () => {
    await Promise.all(
        SUPPORTED_LANGUAGES.flatMap(lang =>
            CATEGORIES.flatMap(cat => [
                cat.entry.i18n[lang]?.().then((c: CatContent) => c && catCache.set(`${lang}:${cat.key}`, c)),
                ...cat.toolsWithColors.map(({ toolEntry }: { toolEntry: any }) =>
                    toolEntry.i18n[lang]?.().then((c: ToolContent) => c && toolCache.set(`${lang}:${toolEntry.id}`, c))
                ),
            ])
        )
    );
});

async function getSitemapUrls(lang: Language): Promise<string[]> {
    const sitemap = await generateSitemap(lang);
    const matches = sitemap.match(/<loc>([^<]+)<\/loc>/g);
    return matches ? matches.map(m => m.replace(/<\/?loc>/g, '')) : [];
}

function getExpectedUrls(lang: Language): string[] {
    const baseUrl = `https://www.gamebob.dev`;
    const langPath = `/${lang}`;
    const utilitiesSlug = getLocalizedSlug(lang, 'utilities');
    const categoriesSlug = getLocalizedSlug(lang, 'categories');
    const appsSlug = getLocalizedSlug(lang, 'apps');

    const urls = [
        `${baseUrl}${langPath}/`,
        `${baseUrl}${langPath}/${appsSlug}/`,
        `${baseUrl}${langPath}/${utilitiesSlug}/`,
        `${baseUrl}${langPath}/widgets/`,
    ];

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

describe("Sitemap Coverage", () => {
    for (const lang of SUPPORTED_LANGUAGES) {
        it(`Sitemap for ${lang} should include all pages`, async () => {
            const sitemapUrls = await getSitemapUrls(lang);
            const expectedUrls = getExpectedUrls(lang);

            const sitemapSet = new Set(sitemapUrls);
            const expectedSet = new Set(expectedUrls);

            const missing = expectedUrls.filter(url => !sitemapSet.has(url));
            const extra = sitemapUrls.filter(url => !expectedSet.has(url));

            const message = [
                `Sitemap for ${lang}: ${sitemapUrls.length} URLs found vs ${expectedUrls.length} expected`,
                missing.length > 0 ? `Missing (${missing.length}): ${missing.slice(0, 5).join(', ')}` : '',
                extra.length > 0 ? `Extra (${extra.length}): ${extra.slice(0, 5).join(', ')}` : '',
            ].filter(Boolean).join('\n');

            expect(sitemapUrls.length, message).toBe(expectedUrls.length);
        });
    }

    it("Hreflang alternates for es tools (jjlmoya.es) should be /utilidades/tool-slug/ without /categorias/", async () => {
        const sitemap = await generateSitemap('en');
        const allHrefs = sitemap.match(/<xhtml:link[^>]*hreflang="es"[^>]*href="([^"]+)"[^>]*\/>/g) || [];

        const esToolUrls = allHrefs
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
