export interface Prototype {
    title: string;
    slug: string;
    icon: string;
    themeColor: string;
    description: string;
    verdict?: "liked" | "disliked";
}

export const prototypes: Prototype[] = [
    {
        title: "Evolución",
        slug: "evolucion",
        icon: "mdi:dna",
        themeColor: "#a855f7",
        description: "Alquimia del caos. Combina elementos, crea criaturas y enfréntalas.",
        verdict: "liked",
    },
    {
        title: "Scroll Velocity Momentum",
        slug: "scroll-momentum",
        icon: "mdi:mouse-move-vertical",
        themeColor: "#0ea5e9",
        description:
            "Propulsión inercial. Usa la velocidad del scroll como motor en un mundo sin fricción.",
    },
    {
        title: "Imperio de Deuda",
        slug: "imperio-deuda",
        icon: "mdi:office-building",
        themeColor: "#3b82f6",
        description:
            "Domina el mercado global. Construye distritos, gestiona sinergias y liquida una deuda billonaria.",
    },
];
