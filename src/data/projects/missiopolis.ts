
import type { Project } from "../types";

export const missiopolis: Project = {
    slug: "missiopolis",
    isGame: true,
    theme: {
        primary: "#3B82F6",
        accent: "#60A5FA",
    },
    media: {
        icon: "/assets/apps/missiopolis/hero.webp",
        showcase: "/assets/apps/missiopolis/hero.webp",
    },
    stores: {
        googlePlay: "",
        appStore: "",
    },
    roadmap: {
        statusType: "planning",
        progress: 10,
    }
};
