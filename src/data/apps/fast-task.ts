import type { Application } from "../../types/apps";

export const fastTask: Application = {
    slug: "fast-task",
    title: "Fast Task",
    subtitle: "Gestión de tareas y GTD ágil",
    category: "Productividad / Utilidades",
    isGame: false,
    theme: {
        primary: "#04D991", primaryGradient: "linear-gradient(135deg, #0d1318 0%, #04D991 100%)",
        accent: "#04D991", radiusMain: "1.5rem", glowAccent: "rgba(4, 217, 145, 0.4)",
        headerTitleGradient: "linear-gradient(180deg, #FFFFFF 0%, #04D991 100%)", textTitleGradient: "linear-gradient(180deg, #FFFFFF 0%, #04D991 100%)",
        bgApp: "radial-gradient(circle at top, #0d1318 0%, #05080a 100%)", bgSurface: "#0d1318", bgCard: "#141c23",
        textMain: "#E5FFF4", glass: "rgba(13, 19, 24, 0.8)", glassBorderColor: "rgba(255, 255, 255, 0.1)",
        glassHighlight: "rgba(255, 255, 255, 0.03)", shadowPrimary: "0 10px 40px -12px rgba(4, 217, 145, 0.25)", shadowCard: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    },
    tagline: "Escribe. Envía. Olvida. Paz.",
    description: "Captura bugs, ideas o tareas en 3 segundos. Envía notas a GitHub, Make o Linear mediante interfaz de chat. Productividad pura.",
    philosophy: "Fast-Task no es un gestor de proyectos pesado. Es tu canal de entrada ultra-rápido para que nada interrumpa tu foco.",
    concept: { label: "La Filosofía", main: "CERO FRICCIÓN,", highlighted: "VELOCIDAD ABSOLUTA." },
    benefitsTitle: { main: "Optimiza tu flujo de", highlighted: "trabajo diario" },
    quote: { text: "La mejor tarea es la que se captura en un segundo y se resuelve en el momento justo.", author: "Fast Task Team" },
    media: {
        icon: "/assets/apps/fast-task/icon.webp", showcase: "/assets/apps/fast-task/feature-graphic.webp",
        hero: "/assets/apps/fast-task/1.webp", screenshots: ["/assets/apps/fast-task/1.webp", "/assets/apps/fast-task/2.webp", "/assets/apps/fast-task/3.webp", "/assets/apps/fast-task/4.webp", "/assets/apps/fast-task/5_split.webp", "/assets/apps/fast-task/6_features.webp"],
    },
    stores: { googlePlay: "https://play.google.com/store/apps/details?id=com.gamebob.fasttask", appStore: "https://apps.apple.com/es/app/fasttask-escribe-olvida-paz/id6759599830" },
    price: "4,95€",
    benefits: [
        { title: "Captura rápida", text: "Funciona como un chat: llegas, escribes y envías.", icon: "mdi:lightning-bolt" },
        { title: "Integraciones", text: "Conecta directamente con GitHub, Linear o Make.", icon: "mdi:connection" },
        { title: "Privacidad", text: "Tus tokens viven en tu dispositivo. Sin servidores.", icon: "mdi:shield-check" },
        { title: "Offline-First", text: "Envía tus tareas incluso sin cobertura.", icon: "mdi:wifi-off" },
    ],
    features: [
        { title: "Sin formularios", text: "Interfaz de chat para la máxima velocidad.", icon: "mdi:chat-processing-outline" },
        { title: "Herramientas", text: "Crea issues, tareas o dispara automatizaciones.", icon: "mdi:google-assistant" },
        { title: "Organizador", text: "Crea proyectos locales para separar contextos.", icon: "mdi:folder-table-outline" },
    ],
    highlights: [{ label: "Velocidad", value: "<3s" }, { label: "Integraciones", value: "Nativas" }, { label: "Offline", value: "First" }],
    videos: [],
    bannerText: "¡Fast Task ya disponible en App Store y Google Play!",
    hasDetailPage: true,
    roadmap: {
        statusLabel: "Disponible", statusType: "released", progress: 100,
        tasks: [
            { name: "Desarrollo Core", status: "done" }, { name: "Integración GitHub", status: "done" }, { name: "Integración Make", status: "done" },
            { name: "Integración Linear", status: "done" }, { name: "Pulido Final UI", status: "done" }, { name: "Lanzamiento Beta", status: "done" }, { name: "Publicación Stores", status: "done" },
        ],
    },
};
