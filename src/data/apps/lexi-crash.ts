import type { Application } from "../../types/apps";

export const lexiCrash: Application = {
    slug: "lexi-crash",
    title: "LexiCrash",
    subtitle: "Forma palabras, supera retos y evita el colapso.",
    category: "Juegos / Puzle / Agilidad Mental",
    isGame: true,
    theme: {
        primary: "#00D2FF", primaryGradient: "linear-gradient(135deg, #00D2FF 0%, #007AFF 100%)",
        accent: "#00EBFF", radiusMain: "1.5rem", glowAccent: "rgba(0, 210, 255, 0.4)",
        headerTitleGradient: "linear-gradient(180deg, #FFFFFF 0%, #00D2FF 100%)", textTitleGradient: "linear-gradient(180deg, #FFFFFF 0%, #00D2FF 100%)",
        bgApp: "radial-gradient(circle at top, #001A2C 0%, #000B14 100%)", bgSurface: "#00121F", bgCard: "#001A2C",
        textMain: "#E5F7FF", glass: "rgba(0, 26, 44, 0.8)", glassBorderColor: "rgba(0, 210, 255, 0.15)",
        glassHighlight: "rgba(255, 255, 255, 0.03)", shadowPrimary: "0 10px 40px -12px rgba(0, 210, 255, 0.25)", shadowCard: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    },
    tagline: "El Tetris de las palabras ha llegado.",
    description: "Pon a prueba tu agilidad mental en el puzzle de palabras definitivo. Combina letras a toda velocidad, supera retos globales y evita que el tablero colapse.",
    philosophy: "LexiCrash no es solo un juego de palabras; es una prueba de reflejos y estrategia visual. Experiencia táctil pura, donde cada milisegundo cuenta.",
    concept: { label: "La Experiencia", main: "DOMINA EL CAOS,", highlighted: "LIBERA LAS PALABRAS." },
    benefitsTitle: { main: "Supera tus propios", highlighted: "límites mentales" },
    quote: { text: "La agilidad mental es el puente entre el caos de las letras y la victoria de las palabras.", author: "LexiCrash Team" },
    media: {
        icon: "/assets/apps/lexi-crash/icon.webp", showcase: "/assets/apps/lexi-crash/icon.webp",
        hero: "/assets/apps/lexi-crash/screenshot_2.webp", screenshots: ["/assets/apps/lexi-crash/screenshot_2.webp", "/assets/apps/lexi-crash/screenshot_3.webp", "/assets/apps/lexi-crash/screenshot_1.webp"],
    },
    stores: { googlePlay: "https://play.google.com/store/apps/details?id=com.gamebob.lexicrash", appStore: "https://apps.apple.com/es/app/lexicrash/id6758558703" },
    benefits: [
        { title: "Modo Crash", text: "Adrenalina pura. Las letras caen sin pausa.", icon: "mdi:lightning-bolt" },
        { title: "Modo Relax", text: "Estrategia sin presión. Tómate tu tiempo.", icon: "mdi:weather-sunny" },
        { title: "Reto Diario", text: "Una palabra, un tablero, todo el mundo.", icon: "mdi:calendar-star" },
        { title: "Maestría Visual", text: "Interfaz optimizada y estética neon inmersiva.", icon: "mdi:eye" },
    ],
    features: [
        { title: "Progresión", text: "Visualiza tu evolución y rompe tus propios récords.", icon: "mdi:trending-up" },
        { title: "Comunidad", text: "Únete a jugadores en los desafíos diarios.", icon: "mdi:account-group" },
        { title: "Expansión", text: "Actualizaciones periódicas con nuevas mecánicas.", icon: "mdi:plus-box-outline" },
    ],
    highlights: [{ label: "Jugadores", value: "+10k" }, { label: "Palabras", value: "+1M" }, { label: "Rating", value: "5.0" }],
    videos: [],
    bannerText: "¡LexiCrash ya disponible en App Store y Google Play!",
    hasDetailPage: true,
    roadmap: {
        statusLabel: "Disponible", statusType: "released", progress: 100,
        tasks: [
            { name: "Desarrollo Core", status: "done" }, { name: "Modos de Juego", status: "done" }, { name: "Sistema de Retos", status: "done" },
            { name: "Pulido y UI/UX", status: "done" }, { name: "Publicación Android", status: "done" }, { name: "Publicación iOS", status: "done" },
        ],
    },
};
