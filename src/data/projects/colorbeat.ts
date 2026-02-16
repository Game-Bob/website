
import type { Project } from "../types";

export const colorbeat: Project = {
    slug: "colorbeat",
    isGame: true,
    theme: {
        primary: "#00FF99",
        accent: "#BF4FCC",
    },
    media: {
        icon: "/assets/apps/colorbeat/icon.webp",
        showcase: "/assets/apps/colorbeat/hero.webp",
    },
    stores: {
        googlePlay: "https://play.google.com/store/apps/details?id=com.colorbeat.app",
        appStore: "",
    },
    roadmap: {
        statusType: "released",
        progress: 100,
    }
};
