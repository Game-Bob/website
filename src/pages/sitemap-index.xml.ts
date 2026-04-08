import type { APIRoute } from 'astro';
import { SUPPORTED_LANGUAGES } from '../i18n/utils';

const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${SUPPORTED_LANGUAGES.map(lang => `  <sitemap>
    <loc>https://www.gamebob.dev/sitemap-${lang}.xml</loc>
  </sitemap>`).join('\n')}
</sitemapindex>`;

export const GET: APIRoute = () => {
  return new Response(sitemapIndex, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
