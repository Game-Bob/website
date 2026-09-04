import type { APIRoute } from 'astro';
import { SUPPORTED_LANGUAGES } from '../i18n/utils';

const SECTION_SLUGS = {
  concepts: {
    en: 'concepts', fr: 'concepts', de: 'konzepte', it: 'concetti', pt: 'conceitos',
    nl: 'concepten', sv: 'koncept', pl: 'koncepcje', id: 'konsep',
    tr: 'kavramlar', ru: 'kontseptsii', ja: 'concepts', ko: 'concepts', zh: 'concepts',
  },
  games: {
    en: 'games', fr: 'jeux', de: 'spiele', it: 'giochi', pt: 'jogos',
    nl: 'spellen', sv: 'spel', pl: 'gry', id: 'game', tr: 'oyunlar', ru: 'igry',
    ja: 'games', ko: 'games', zh: 'games',
  },
} as const;

const mfeSitemapUrls = SUPPORTED_LANGUAGES.flatMap(lang => {
  const origin = `https://www.gamebob.dev/${lang}`;
  return [
    `${origin}/${SECTION_SLUGS.concepts[lang]}/sitemap.xml`,
    `${origin}/${SECTION_SLUGS.games[lang]}/sitemap.xml`,
  ];
});

const sitemapUrls = [
  ...SUPPORTED_LANGUAGES.map(lang =>
  `https://www.gamebob.dev/sitemap-${lang}.xml`,
  ),
  ...mfeSitemapUrls,
];

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
