export interface PostMortemEntry {
    id: string;
    image?: string;
    hasCodeSteps?: boolean;
}

export const postMortemEntries: PostMortemEntry[] = [
    {
        id: "debug-por-url",
        image: "spa-url-debug.webp",
    },
    {
        id: "ia-vaga-linter",
        image: "ia-vaga-linter.webp",
        hasCodeSteps: true,
    },
    {
        id: "ansiedad-stores",
        image: "ansiedad-stores.webp",
    },
    {
        id: "color-beat-arbol-habilidades",
        image: "color-beat-fail.webp",
    },
    {
        id: "caos-traducciones",
        image: "translation-chaos.webp",
        hasCodeSteps: true,
    },
];
