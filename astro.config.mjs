import { defineConfig } from "astro/config";
import icon from "astro-icon";
import vercel from "@astrojs/vercel";

export default defineConfig({
    site: "https://www.gamebob.dev",
    adapter: vercel(),
    integrations: [icon()],
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
        watch: {
            ignored: [".vercel/**", "dist/**"],
        },
    },
    preview: {
        port: 4322,
    },
    vite: {
        server: {
            watch: {
                ignored: [".vercel/**", "dist/**"],
            },
        },
        optimizeDeps: {
            include: ["qrcode"],
        },
    },
});
