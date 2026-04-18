import { defineConfig } from "astro/config";
import icon from "astro-icon";
import vercel from "@astrojs/vercel";

export default defineConfig({
    site: "https://www.gamebob.dev",
    adapter: vercel(),
    integrations: [icon()],
    i18n: {
        defaultLocale: "en",
        locales: ["en", "fr", "de", "it", "pt", "nl", "sv", "pl", "id", "tr", "ru", "ja", "ko", "zh"],
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
    vite: {
        server: {
            watch: {
                ignored: (path) => path.includes('.vercel') || path.includes('/dist/'),
            },
        },
        optimizeDeps: {
            include: ["qrcode"],
        },
    },
});
