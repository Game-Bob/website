import type { Application } from "../../types/apps";

export const colorbeat: Application = {
    slug: "colorbeat",
    title: "ColorBeat",
    subtitle: "Domina el juego pulsando en el momento exacto.",
    category: "Juegos",
    isGame: true,
    theme: {
        primary: "hsl(160, 100%, 50%)", primaryGradient: "hsl(160, 100%, 50%)",
        accent: "hsl(280, 80%, 60%)", radiusMain: "16px", glowAccent: "hsla(160, 100%, 50%, 0.4)",
        headerTitleGradient: "hsl(160, 100%, 50%)", textTitleGradient: "hsl(160, 100%, 50%)",
        bgApp: "hsl(220, 30%, 8%)", bgSurface: "hsl(220, 25%, 12%)", bgCard: "hsl(220, 25%, 12%)",
        textMain: "hsl(220, 10%, 90%)", glass: "hsla(220, 30%, 8%, 0.9)", glassBorderColor: "hsla(160, 100%, 50%, 0.2)",
        glassHighlight: "rgba(255, 255, 255, 0.05)", shadowPrimary: "0 8px 32px -4px hsla(160, 100%, 50%, 0.3)", shadowCard: "0 8px 32px hsla(0, 0%, 0%, 0.3)",
    },
    tagline: "Sincroniza tus pulsos. Escala la cima.",
    description: "Domina el juego pulsando en el momento exacto al ritmo de los pulsos de color. Cada beat te acerca a la cima.",
    philosophy: "El ritmo no se piensa, se siente. ColorBeat es una experiencia de flujo puro donde tu reflejo es la única música.",
    concept: { label: "La Experiencia", main: "FLUJO", highlighted: "RÍTMICO" },
    benefitsTitle: { main: "Siente el", highlighted: "pulso." },
    quote: { text: "En el caos del color, el ritmo es tu única guía.", author: "GameBob" },
    videos: ["M7m_1Yp18H0"],
    bannerText: "Acción rítmica pura. La utilidad de sinestesia ahora es un juego arcade completo.",
    hasDetailPage: true,
    roadmap: {
        statusLabel: "Lanzado", statusType: "released", progress: 100,
        tasks: [
            { name: "Concepto", status: "done" }, { name: "Prototipado", status: "done" }, { name: "Core Loop", status: "done" },
            { name: "Habilidades", status: "done" }, { name: "Logros", status: "done" }, { name: "Arte", status: "done" },
            { name: "UI/UX", status: "done" }, { name: "Audio", status: "done" }, { name: "QA", status: "done" }, { name: "Lanzamiento", status: "done" },
        ],
    },
    media: {
        icon: "/assets/apps/colorbeat/icon.webp", showcase: "/assets/apps/colorbeat/hero.webp",
        hero: "/assets/apps/colorbeat/hero.webp", screenshots: ["/assets/apps/colorbeat/screenshot_1.webp"],
    },
    stores: { googlePlay: "https://play.google.com/store/apps/details?id=com.colorbeat.app", appStore: "" },
    benefits: [
        { title: "Jugabilidad", text: "Sincroniza tus pulsaciones con el ritmo.", icon: "mdi:music-note-eighth" },
        { title: "Progresión", text: "Desbloquea nuevos desafíos a medida que mejoras técnica.", icon: "mdi:chart-line-variant" },
        { title: "Habilidades", text: "Árbol de mejoras permanentes y habilidades especiales.", icon: "mdi:sitemap" },
        { title: "Poder Visual", text: "Efectos visuales premium con animaciones de Jackpot.", icon: "mdi:eye-outline" },
    ],
    features: [
        { title: "Tienda", text: "Consigue gemas para temas visuales exclusivos.", icon: "mdi:store-outline" },
        { title: "Power-Ups", text: "Utiliza escudos y ondas de choque para sobrevivir.", icon: "mdi:flash-outline" },
        { title: "Calibración", text: "Asegura sincronización perfecta en cualquier dispositivo.", icon: "mdi:target" },
        { title: "Efectos", text: "Animaciones de Jackpot y diseño vibrante.", icon: "mdi:creation" },
    ],
    highlights: [{ label: "Puntuación", value: "Infinita" }, { label: "Ritmo", value: "Total" }],
};
