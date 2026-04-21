import type { APIRoute } from 'astro';

const robots = `User-agent: Googlebot
Allow: /
Disallow: /*/widgets?*

User-agent: Bingbot
Allow: /
Disallow: /*/widgets?*

User-agent: Baiduspider
Allow: /
Crawl-delay: 1
Disallow: /*/widgets?*

User-agent: PetalBot
Allow: /
Disallow: /*/widgets?*

User-agent: Applebot
User-agent: DuckDuckBot
Allow: /

User-agent: Yandexbot
Allow: /
Clean-param: utm_source&utm_medium&utm_campaign&utm_content&utm_term&sort&filter /

User-agent: SeznamBot
Allow: /
Disallow: /*/widgets?*

User-agent: MJ12bot
Disallow: /

User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: DotBot
Disallow: /

User-agent: MojeekBot
Disallow: /

User-agent: DataForSeoBot
Disallow: /

User-agent: BLEXBot
Disallow: /

User-agent: MegaIndex
Disallow: /

User-agent: *
Allow: /
Disallow: /*?*sort=
Disallow: /*?*filter=
Disallow: /*?*utm_
Disallow: /*/widgets?*

Sitemap: https://www.gamebob.dev/sitemap-index.xml
`;

export const GET: APIRoute = () => {
  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};