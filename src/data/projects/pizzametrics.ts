
import type { Project } from "../types";

export const pizzametrics: Project = {
    slug: "pizzametrics",
    isGame: false,
    theme: {
        primary: "#FF3D00",
        accent: "#2E7D32",
    },
    media: {
        icon: "/assets/apps/pizzametrics/icon.webp",
        showcase: "/assets/apps/pizzametrics/showcase.webp",
    },
    stores: {
        googlePlay: "https://play.google.com/store/apps/details?id=com.gamebob.pizzametrics",
        appStore: "https://apps.apple.com/us/app/pizzametrics/id6758212062",
    },
    roadmap: {
        statusType: "released",
        progress: 100,
    }
};
