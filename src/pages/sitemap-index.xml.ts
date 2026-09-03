import type { APIRoute } from 'astro';
import { SUPPORTED_LANGUAGES } from '../i18n/utils';

const MFE_UTILITY_VERTICALS = ['civic', 'tabletop'] as const;
const sitemapUrls = SUPPORTED_LANGUAGES.flatMap(lang => [
  `https://www.gamebob.dev/sitemap-${lang}.xml`,
  ...MFE_UTILITY_VERTICALS.map(vertical =>
    `https://www.gamebob.dev/_utilities/${lang}/${vertical}/sitemap.xml`,
  ),
]);

const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(url => `  <sitemap>
    <loc>${url}</loc>
  </sitemap>`).join('\n')}
</sitemapindex>`;

export const GET: APIRoute = () => {
  return new Response(sitemapIndex, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
