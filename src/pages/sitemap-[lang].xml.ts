import type { APIRoute } from 'astro';
import { SUPPORTED_LANGUAGES, type Language } from '../i18n/utils';
import { generateSitemap } from '../utils/sitemapGenerator';

export const prerender = true;

export async function getStaticPaths() {
  return SUPPORTED_LANGUAGES.map(lang => ({
    params: { lang },
  }));
}

export const GET: APIRoute = async ({ params }) => {
  const lang = params.lang as Language;
  const sitemap = await generateSitemap(lang);

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
