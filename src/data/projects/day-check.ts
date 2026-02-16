
import type { Project } from "../types";

export const dayCheck: Project = {
    slug: "day-check",
    isGame: false,
    theme: {
        primary: "#9C27B0",
        accent: "#00BCD4",
    },
    media: {
        icon: "/assets/apps/day-check/icon.webp",
        showcase: "/assets/apps/day-check/hero.webp",
    },
    stores: {
        googlePlay: "https://play.google.com/store/apps/details?id=com.gamebob.daycheck.utility",
        appStore: "",
    },
    roadmap: {
        statusType: "released",
        progress: 100,
    }
};
