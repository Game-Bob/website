import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { slugMapping } from "../src/i18n/utils";
import { CATEGORIES } from "../src/data/utilities/registry";
import { buildSection } from "../src/data/utilities/builder";

const BASE_URL = "http://localhost:4322";

const FORBIDDEN_IMAGES = [
    "favicon.png",
    "favicon.webp",
    "favicon.ico",
    "apple-touch-icon.png",
    "favicon-96x96.png",
];

async function getAllPages(): Promise<string[]> {
    const lang = "en";
    const pages = new Set<string>();

    pages.add(`/${lang}/`);
    pages.add(`/${lang}/${slugMapping.apps[lang]}/`);
    pages.add(`/${lang}/${slugMapping.utilities[lang]}/`);
    pages.add(`/${lang}/widgets/`);

    for (const catDef of CATEGORIES) {
        const section = await buildSection(lang, catDef);
        pages.add(`/${lang}/${slugMapping.utilities[lang]}/${slugMapping.categories[lang]}/${section.slug}/`);

        for (const toolDef of catDef.AllTools) {
            const toolLocale = await toolDef.entry.i18n[lang]!();
            pages.add(`/${lang}/${slugMapping.utilities[lang]}/${slugMapping.categories[lang]}/${section.slug}/${toolLocale.slug}/`);
        }
    }

    return [...pages];
}

const pages = await getAllPages();

describe("SEO: OpenGraph image verification", () => {
    pages.forEach((pagePath) => {
        it(`"${pagePath}" should have a custom OG image`, async () => {
            let response;
            try {
                response = await fetch(`${BASE_URL}${pagePath}`);
            } catch {
                throw new Error(`Could not connect to ${BASE_URL}. Is the dev server running?`);
            }

            expect(response.status, `Page ${pagePath} returned ${response.status}`).toBe(200);

            const text = await response.text();

            const ogImageMatch = text.match(/<meta property="og:image" content="([^"]+)"/);
            const twitterImageMatch = text.match(/<meta property="twitter:image" content="([^"]+)"/);

            expect(ogImageMatch, `"${pagePath}" is missing <meta property="og:image">`).not.toBeNull();
            expect(twitterImageMatch, `"${pagePath}" is missing <meta property="twitter:image">`).not.toBeNull();

            const ogImage = ogImageMatch![1].toLowerCase();
            const twitterImage = twitterImageMatch![1].toLowerCase();

            const imageRelativePath = ogImage.replace(/^https?:\/\/[^/]+/, "");
            const imageFilePath = path.join(process.cwd(), "public", imageRelativePath);
            expect(
                fs.existsSync(imageFilePath),
                `Image "${ogImage}" referenced in "${pagePath}" does not exist on disk`
            ).toBe(true);

            FORBIDDEN_IMAGES.forEach((forbidden) => {
                expect(ogImage.endsWith(forbidden.toLowerCase()), `"${pagePath}" uses forbidden OG image "${forbidden}"`).toBe(false);
                expect(twitterImage.endsWith(forbidden.toLowerCase()), `"${pagePath}" uses forbidden Twitter image "${forbidden}"`).toBe(false);
            });
        });
    });
});
