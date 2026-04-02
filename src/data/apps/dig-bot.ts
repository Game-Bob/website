import type { Application } from "../../types/apps";

export const digBot: Application = {
    slug: "dig-bot",
    title: "Dig Bot",
    subtitle: "Tú diseñas el camino, él hace el trabajo sucio.",
    category: "Juegos / Estrategia / Acción",
    isGame: true,
    theme: {
        primary: "#21C55D", primaryGradient: "linear-gradient(135deg, #22C55E 0%, #15803D 100%)",
        accent: "#FACC15", radiusMain: "1.5rem", glowAccent: "rgba(34, 197, 94, 0.4)",
        headerTitleGradient: "linear-gradient(180deg, #FFFFFF 0%, #22C55E 100%)", textTitleGradient: "linear-gradient(180deg, #FFFFFF 0%, #22C55E 100%)",
        bgApp: "radial-gradient(circle at top, #14211A 0%, #05070B 100%)", bgSurface: "#1B2E24", bgCard: "#223C2E",
        textMain: "#F8FAFC", glass: "rgba(27, 46, 36, 0.8)", glassBorderColor: "rgba(34, 197, 94, 0.15)",
        glassHighlight: "rgba(255, 255, 255, 0.03)", shadowPrimary: "0 10px 40px -12px rgba(34, 197, 94, 0.25)",
        shadowCard: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    },
    tagline: "El primer juego de minería donde el robot es autónomo y tú eres el arquitecto.",
    description: "En Dig Bot, la estrategia lo es todo. Tu trabajo es remodelar el mundo a su paso: destruye bloques, calcula caídas y protege a tu bot para alcanzar los tesoros valiosos.",
    philosophy: "Dig Bot nace como un experimento de delegación de control. Al eliminar el movimiento directo, el jugador se enfoca en la ingeniería del terreno y la gestión de riesgos.",
    concept: { label: "La Ingeniería", main: "DOMINA EL", highlighted: "TERRENO." },
    benefitsTitle: { main: "Conviértete en el mejor", highlighted: "gestor de entornos" },
    quote: { text: "No es cuestión de fuerza, sino de cómo esculpes el camino hacia la victoria.", author: "Dig Bot Engineer" },
    media: {
        icon: "/assets/apps/dig-bot/icon.webp", showcase: "/assets/apps/dig-bot/hero.webp",
        hero: "/assets/apps/dig-bot/bg-menu.webp", screenshots: ["/assets/apps/dig-bot/bg-menu.webp", "/assets/apps/dig-bot/hero.webp"],
    },
    stores: { googlePlay: "", appStore: "" },
    benefits: [
        { title: "Minería Directa", text: "Interacción táctil inmediata para destruir bloques.", icon: "mdi:pickaxe" },
        { title: "Protección Activa", text: "Evita que el robot sea aplastado por bloques inestables.", icon: "mdi:shield-check" },
        { title: "Rutas de Tesoro", text: "Excava estratégicamente para que recolecte carga.", icon: "mdi:treasure-chest" },
        { title: "Física Real", text: "Todo el mundo obedece a la gravedad. Cálculos tácticos.", icon: "mdi:clippy" },
    ],
    features: [
        { title: "Autónomo", text: "Robot con lógica interna de desplazamiento automático.", icon: "mdi:robot" },
        { title: "Limpieza", text: "Destruye bloques para evitar que el bot se detenga.", icon: "mdi:shredder" },
        { title: "Biomas", text: "Nuevas capas con biomas únicos y obstáculos dinámicos.", icon: "mdi:layers-triple" },
    ],
    highlights: [], videos: [],
    bannerText: "En desarrollo: Dig Bot se está gestando en las profundidades del laboratorio.",
    hasDetailPage: true,
    roadmap: {
        statusLabel: "En Desarrollo", statusType: "developing", progress: 60,
        tasks: [
            { name: "Prototipo de Movimiento", status: "done" }, { name: "Generación de Biomas", status: "done" },
            { name: "Sistema de Inventario", status: "done" }, { name: "Pulido de Física", status: "active" }, { name: "Lanzamiento Beta", status: "pending" },
        ],
    },
};
