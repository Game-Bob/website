import type { APIRoute, GetStaticPaths } from 'astro';
import { SUPPORTED_LANGUAGES, slugMapping } from '../../../../../../i18n/utils';
import { CATEGORIES } from '../../../../../../data/utilities/registry';
import { buildSection } from '../../../../../../data/utilities/builder';

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [];

    for (const lang of SUPPORTED_LANGUAGES) {
        for (const catDef of CATEGORIES) {
            const section = await buildSection(lang, catDef);

            for (const toolDef of catDef.AllTools) {
                const toolLocale = await toolDef.entry.i18n[lang]!();
                const startUrl = `/${lang}/${slugMapping.utilities[lang]}/${slugMapping.categories[lang]}/${section.slug}/${toolLocale.slug}/`;

                paths.push({
                    params: {
                        lang,
                        utilities: slugMapping.utilities[lang],
                        categories: slugMapping.categories[lang],
                        categorySlug: section.slug,
                        toolSlug: toolLocale.slug,
                    },
                    props: {
                        title: toolLocale.title,
                        description: toolLocale.description,
                        startUrl,
                        imageSlug: toolDef.entry.id,
                    },
                });
            }
        }
    }

    return paths;
};

export const GET: APIRoute = ({ props }) => {
    const { title, description, startUrl, imageSlug } = props as {
        title: string;
        description: string;
        startUrl: string;
        imageSlug: string;
    };

    const manifest = {
        name: title,
        short_name: title.length > 12 ? title.substring(0, 12) : title,
        description,
        start_url: startUrl,
        scope: startUrl,
        icons: [{
            src: `/images/utilities/${imageSlug}.webp`,
            sizes: '512x512',
            type: 'image/webp',
            purpose: 'any',
        }],
        theme_color: '#0f172a',
        background_color: '#0f172a',
        display: 'standalone',
        orientation: 'portrait',
    };

    return new Response(JSON.stringify(manifest, null, 2), {
        headers: { 'Content-Type': 'application/manifest+json' },
    });
};
