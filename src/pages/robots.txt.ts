import type { APIRoute } from 'astro';

const robots = `# robots.txt for gamebob.dev
# Full SEO optimization for maximum indexing and positioning

# Allow all bots
User-agent: *
Allow: /

# Disallow query parameters that create duplicate content
Disallow: /*?*sort=
Disallow: /*?*filter=
Disallow: /*?*utm_

# Allow Google crawling with generous limits
User-agent: Googlebot
Allow: /
Crawl-delay: 0
Request-rate: 100/1h

# Allow Bing crawling
User-agent: Bingbot
Allow: /
Crawl-delay: 1
Request-rate: 30/1h

# Allow other search engines
User-agent: *
Crawl-delay: 1
Request-rate: 30/1h

# Sitemap
Sitemap: https://www.gamebob.dev/sitemap-index.xml

# Allow specific crawlers for rich snippets
User-agent: Applebot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: Yandexbot
Allow: /

# Block bad bots and scrapers
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
`;

export const GET: APIRoute = () => {
  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
