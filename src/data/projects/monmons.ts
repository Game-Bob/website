
import type { Project } from "../types";

export const monmons: Project = {
    slug: "monmons",
    isGame: true,
    theme: {
        primary: "#4CAF50",
        accent: "#8BC34A",
    },
    media: {
        icon: "/assets/apps/monmons/icon.webp",
        showcase: "/assets/apps/monmons/showcase.webp",
    },
    stores: {
        googlePlay: "",
        appStore: "",
    },
    roadmap: {
        statusType: "developing",
        progress: 40,
    }
};
