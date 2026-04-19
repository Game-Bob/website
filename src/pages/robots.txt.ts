import type { APIRoute } from 'astro';

const robots = `User-agent: Baiduspider
Allow: /
Crawl-delay: 1

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Crawl-delay: 1
Allow: /
Disallow: /widgets?*
Disallow: /*/widgets?*

User-agent: Applebot
User-agent: DuckDuckBot
User-agent: Yandexbot
Allow: /

User-agent: MJ12bot
User-agent: AhrefsBot
User-agent: SemrushBot
User-agent: DotBot
User-agent: MojeekBot
Disallow: /

User-agent: *
Allow: /
Disallow: /*?*sort=
Disallow: /*?*filter=
Disallow: /*?*utm_
Disallow: /widgets?*
Disallow: /*/widgets?*
Crawl-delay: 1

Sitemap: https://www.gamebob.dev/sitemap-index.xml
`;

export const GET: APIRoute = () => {
  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};