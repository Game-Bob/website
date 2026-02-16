
import type { Project } from "../types";

export const digBot: Project = {
    slug: "dig-bot",
    isGame: true,
    theme: {
        primary: "#21C55D",
        accent: "#FACC15",
    },
    media: {
        icon: "/assets/apps/dig-bot/icon.webp",
        showcase: "/assets/apps/dig-bot/bg-menu.webp",
    },
    stores: {
        googlePlay: "",
        appStore: "",
    },
    roadmap: {
        statusType: "developing",
        progress: 60,
    }
};
