
import type { Project } from "../types";

export const fortuneCookie: Project = {
    slug: "fortune-cookie",
    isGame: true,
    theme: {
        primary: "#BF9F5A",
        accent: "#F2E5BD",
    },
    media: {
        icon: "/assets/apps/fortune-cookie/icon.webp",
        showcase: "/assets/apps/fortune-cookie/showcase.webp",
    },
    stores: {
        googlePlay: "https://play.google.com/store/apps/details?id=com.gamebob.cookie.fortune",
        appStore: "https://apps.apple.com/us/app/cookie-fortune-daily-luck/id6758163442",
    },
    roadmap: {
        statusType: "released",
        progress: 100,
    }
};
