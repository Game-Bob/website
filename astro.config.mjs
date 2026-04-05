import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import vercel from "@astrojs/vercel";

export default defineConfig({
    site: "https://www.gamebob.dev",
    adapter: vercel(),
    integrations: [sitemap(), icon()],
    i18n: {
        defaultLocale: "en",
        locales: ["en", "fr"],
        routing: {
            prefixDefaultLocale: true,
            redirectToDefaultLocale: false,
        },
    },
    trailingSlash: "always",
    compressHTML: true,
    server: {
        port: 4322,
    },
    preview: {
        port: 4322,
    },
});
