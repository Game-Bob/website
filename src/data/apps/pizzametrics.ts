import type { Application } from "../../types/apps";

export const pizzametrics: Application = {
    slug: "pizzametrics",
    title: "Pizzametrics",
    subtitle: "La precisión que tu masa merece.",
    category: "Cocina",
    isGame: false,
    theme: {
        primary: "hsl(0, 71%, 50%)", primaryGradient: "hsl(0, 71%, 50%)",
        accent: "hsl(132, 29%, 31%)", radiusMain: "12px", glowAccent: "none",
        headerTitleGradient: "hsl(0, 71%, 50%)", textTitleGradient: "hsl(0, 71%, 50%)",
        bgApp: "hsl(38, 50%, 98%)", bgSurface: "hsl(0, 0%, 100%)", bgCard: "hsl(0, 0%, 100%)",
        textMain: "hsl(235, 19%, 21%)", glass: "hsla(38, 50%, 98%, 0.85)",
        glassBorderColor: "hsla(235, 19%, 21%, 0.08)", glassHighlight: "rgba(255, 255, 255, 0.02)",
        shadowPrimary: "0 8px 20px -4px hsla(0, 69%, 50%, 0.2)", shadowCard: "0 8px 24px hsla(235, 19%, 21%, 0.08)",
    },
    tagline: "Domina la ciencia del cornicione.",
    description: "Calcula ingredientes, temperaturas de agua y tiempos de fermentación con precisión científica. Diseñada para pizzaiolos que buscan resultados profesionales en cada horneado.",
    philosophy: "La pizza napolitana no es solo comida, es una obsesión química. Pizzametrics nace para que dejes de adivinar y empieces a ejecutar con la precisión que exige un cornicione perfecto.",
    concept: { label: "El Estándar", main: "PASIÓN", highlighted: "NAPOLITANA" },
    benefitsTitle: { main: "El fin de la", highlighted: "incertidumbre." },
    quote: { text: "La mejor herramienta es la que no estorba mientras estás cocinando.", author: "jjlmoya" },
    media: {
        icon: "/assets/apps/pizzametrics/icon.webp", showcase: "/assets/apps/pizzametrics/showcase.webp",
        hero: "/assets/apps/pizzametrics/hero.webp", screenshots: ["/assets/apps/pizzametrics/screenshot_real.webp"],
    },
    stores: {
        googlePlay: "https://play.google.com/store/apps/details?id=com.gamebob.pizzametrics",
        appStore: "https://apps.apple.com/us/app/pizzametrics/id6758212062",
    },
    benefits: [
        { title: "Precisión Absoluta", text: "Algoritmos diseñados para darte el peso exacto de cada ingrediente.", icon: "mdi:scale-balanced" },
        { title: "Control Total", text: "Ajusta la hidratación, el tipo de harina y la levadura en segundos.", icon: "mdi:tune-variant" },
        { title: "Resultados Constantes", text: "Elimina el azar de tu cocina. Replica tus mejores masas.", icon: "mdi:refresh" },
        { title: "Diseño Minimalista", text: "Sin distracciones. Herramienta profesional que se siente como extensión.", icon: "mdi:palette-swatch-outline" },
    ],
    features: [
        { title: "Escalado", text: "Calcula para 1 o para 100 pizzas. Proporciones perfectas.", icon: "mdi:trending-up" },
        { title: "Fermentación", text: "Temporizadores inteligentes para el punto óptimo de tu masa.", icon: "mdi:timer-sand" },
        { title: "Localización", text: "Disponible en 16 idiomas con terminología técnica adaptada.", icon: "mdi:translate" },
        { title: "Avanzado", text: "Gestión experta de Biga y Poolish. Cálculo automático.", icon: "mdi:flask-outline" },
        { title: "Térmico", text: "Calculadora de temperatura de agua precisa para masa perfecta.", icon: "mdi:thermometer-alert" },
        { title: "Multipieza", text: "Ajuste dinámico para producciones desde 1 hasta 100 bolas.", icon: "mdi:dots-grid" },
    ],
    highlights: [{ label: "Vera", value: "Pizza" }],
    videos: ["wDNPmCBqwm8", "nCYASztgWLw"],
    bannerText: "¡Domina tu masa! Esta utilidad ahora es una App con muchas más funciones y precisión.",
    hasDetailPage: true,
    roadmap: {
        statusLabel: "Lanzado en App Store y Google Play", statusType: "released", progress: 100,
        tasks: [
            { name: "Cálculo de harinas y agua", status: "done" }, { name: "Algoritmo de fermentación", status: "done" },
            { name: "Gestión de Biga/Poolish", status: "done" }, { name: "Publicación en Google Play", status: "done" },
        ],
    },
};
