import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
    site: "https://www.gamebob.dev",
    integrations: [sitemap()],
    i18n: {
        defaultLocale: "en",
        locales: [
            "es",
            "en",
            "it",
            "fr",
            "de",
            "pt",
            "ja",
            "ko",
            "zh",
            "ru",
            "tr",
            "nl",
            "pl",
            "sv",
            "id",
        ],
        routing: {
            prefixDefaultLocale: false,
            fallbackType: "redirect",
        },
    },
    trailingSlash: "always",
    compressHTML: true,
});
