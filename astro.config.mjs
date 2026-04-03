import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
    site: "https://www.gamebob.dev",
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
});
