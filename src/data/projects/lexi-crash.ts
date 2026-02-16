
import type { Project } from "../types";

export const lexiCrash: Project = {
    slug: "lexi-crash",
    isGame: true,
    theme: {
        primary: "#00D2FF",
        accent: "#00EBFF",
    },
    media: {
        icon: "/assets/apps/lexi-crash/icon.webp",
        showcase: "/assets/apps/lexi-crash/showcase.webp",
    },
    stores: {
        googlePlay: "https://play.google.com/store/apps/details?id=com.gamebob.lexicrash",
        appStore: "",
    },
    roadmap: {
        statusType: "released",
        progress: 98,
    }
};
