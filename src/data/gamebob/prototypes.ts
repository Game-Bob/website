export interface Prototype {
    id: string;
    slug: string;
    icon: string;
    themeColor: string;
    verdict?: "liked" | "disliked";
}

export const prototypes: Prototype[] = [
    {
        id: "evolution",
        slug: "evolution",
        icon: "mdi:dna",
        themeColor: "#a855f7",
        verdict: "liked",
    },
    {
        id: "scroll-momentum",
        slug: "scroll-momentum",
        icon: "mdi:mouse-move-vertical",
        themeColor: "#0ea5e9",
    },
    {
        id: "debt-empire",
        slug: "debt-empire",
        icon: "mdi:office-building",
        themeColor: "#3b82f6",
    },
];
