import type { Application } from "../../types/apps";

export const dayCheck: Application = {
    slug: "day-check",
    title: "Day Check",
    subtitle: "Contador de Días",
    category: "Productividad",
    isGame: false,
    theme: {
        primary: "hsl(265, 80%, 65%)", primaryGradient: "hsl(265, 80%, 65%)",
        accent: "hsl(180, 70%, 50%)", radiusMain: "24px", glowAccent: "hsla(265, 80%, 65%, 0.4)",
        headerTitleGradient: "hsl(265, 80%, 65%)", textTitleGradient: "hsl(265, 80%, 65%)",
        bgApp: "hsl(250, 25%, 10%)", bgSurface: "hsl(250, 20%, 14%)", bgCard: "hsl(250, 20%, 14%)",
        textMain: "hsl(250, 10%, 92%)", glass: "hsla(250, 25%, 10%, 0.8)", glassBorderColor: "hsla(265, 80%, 65%, 0.2)",
        glassHighlight: "rgba(255, 255, 255, 0.05)", shadowPrimary: "0 8px 32px -4px hsla(265, 80%, 65%, 0.3)", shadowCard: "0 8px 32px hsla(0, 0%, 0%, 0.3)",
    },
    tagline: "El tiempo, hecho arte.",
    description: "Gestiona la cuenta atrás para tus momentos más especiales con un diseño elegante y minimalista. Haz que cada segundo cuente.",
    philosophy: "El tiempo es nuestro recurso más preciado; visualizarlo con belleza nos ayuda a vivirlo con más intensidad.",
    concept: { label: "El Enfoque", main: "TIEMPO", highlighted: "VISUAL" },
    benefitsTitle: { main: "Tu tiempo,", highlighted: "tu control." },
    quote: { text: "El tiempo es aquello que más queremos, pero lo que peor usamos.", author: "William Penn" },
    media: {
        icon: "/assets/apps/day-check/icon.webp", showcase: "/assets/apps/day-check/hero.webp",
        hero: "/assets/apps/day-check/hero.webp", screenshots: ["/assets/apps/day-check/hero.webp"],
    },
    stores: { googlePlay: "https://play.google.com/store/apps/details?id=com.gamebob.daycheck.utility", appStore: "https://apps.apple.com/es/app/day-check-contador-de-d%C3%ADas/id6758218778" },
    benefits: [
        { title: "Cuenta Atrás", text: "Rastrea el tiempo que falta o ha pasado.", icon: "mdi:timer-sand" },
        { title: "Widgets", text: "Mantén tus sugerencias visibles en tu pantalla de inicio.", icon: "mdi:widgets" },
        { title: "Glassmorphism", text: "Interfaz moderna con efectos de vidrio y desenfoques.", icon: "mdi:blur" },
        { title: "Privacidad", text: "Tus datos viven en tu dispositivo de forma segura.", icon: "mdi:shield-check" },
    ],
    features: [
        { title: "Personalización", text: "Elige entre gama cromática única para cada evento.", icon: "mdi:palette-swatch" },
        { title: "Notificaciones", text: "Alertas inteligentes y recordatorios previo al evento.", icon: "mdi:bell-ring" },
        { title: "Categorías", text: "Agrupa eventos para un acceso rápido y organizado.", icon: "mdi:folder-star" },
        { title: "Modo Oscuro", text: "Diseño premium meticuloso para día y noche.", icon: "mdi:brightness-4" },
    ],
    highlights: [{ label: "Estética", value: "Premium" }, { label: "Precisión", value: "Total" }],
    videos: ["7yrHoCccCiw", "BH3hQ2VlPDc"],
    bannerText: "¡Day Check ya disponible en App Store y Google Play!",
    hasDetailPage: true,
    roadmap: {
        statusLabel: "Disponible", statusType: "released", progress: 100,
        tasks: [{ name: "Fechas", status: "done" }, { name: "Categorías", status: "done" }, { name: "Diseño", status: "done" }, { name: "Android", status: "done" }, { name: "iOS", status: "done" }],
    },
};
