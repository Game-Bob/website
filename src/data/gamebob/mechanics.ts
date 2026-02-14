export interface MechanicItem {
    id: string;
    url: string;
    icon: string;
    platforms: "mobile" | "desktop" | "all";
}

export const mechanics: MechanicItem[] = [
    {
        id: "slingshot",
        url: "/mechanics/slingshot/",
        icon: "mdi:gesture-swipe",
        platforms: "all",
    },
    {
        id: "swipe",
        url: "/mechanics/swipe/",
        icon: "mdi:gesture-swipe-horizontal",
        platforms: "all",
    },
    {
        id: "gravity-well",
        url: "/mechanics/gravity-well/",
        icon: "mdi:magnet",
        platforms: "all",
    },
    {
        id: "flocking",
        url: "/mechanics/flocking/",
        icon: "mdi:bird",
        platforms: "all",
    },
    {
        id: "tap-fly",
        url: "/mechanics/tap-fly/",
        icon: "mdi:arrow-up-bold",
        platforms: "all",
    },
    {
        id: "hold-jump",
        url: "/mechanics/hold-jump/",
        icon: "mdi:arrow-collapse-down",
        platforms: "all",
    },
    {
        id: "clicker",
        url: "/mechanics/clicker/",
        icon: "mdi:cursor-default-click",
        platforms: "all",
    },
    {
        id: "autorunner",
        url: "/mechanics/autorunner/",
        icon: "mdi:run-fast",
        platforms: "all",
    },
    {
        id: "platformer",
        url: "/mechanics/platformer/",
        icon: "mdi:gamepad-variant",
        platforms: "desktop",
    },
    {
        id: "size-matters",
        url: "/mechanics/size-matters/",
        icon: "mdi:arrow-expand-all",
        platforms: "all",
    },
    {
        id: "one-bullet-shooter",
        url: "/mechanics/one-bullet-shooter/",
        icon: "mdi:bullet",
        platforms: "desktop",
    },
    {
        id: "echolocation",
        url: "/mechanics/echolocation/",
        icon: "mdi:radar",
        platforms: "all",
    },
    {
        id: "vibrator-cracker",
        url: "/mechanics/vibrator-cracker/",
        icon: "mdi:safe",
        platforms: "all",
    },
    {
        id: "magnetic-finger",
        url: "/mechanics/magnetic-finger/",
        icon: "mdi:magnet",
        platforms: "all",
    },
    {
        id: "color-chameleon",
        url: "/mechanics/color-chameleon/",
        icon: "mdi:palette",
        platforms: "all",
    },
    {
        id: "the-barrier",
        url: "/mechanics/the-barrier/",
        icon: "mdi:vector-line",
        platforms: "all",
    },
    {
        id: "finger-twister",
        url: "/mechanics/finger-twister/",
        icon: "mdi:hand-back-right",
        platforms: "mobile",
    },
    {
        id: "gravity-flip",
        url: "/mechanics/gravity-flip/",
        icon: "mdi:flip-vertical",
        platforms: "all",
    },
    {
        id: "neon-grapple",
        url: "/mechanics/neon-grapple/",
        icon: "mdi:hook",
        platforms: "all",
    },
    {
        id: "rhythm-jump",
        url: "/mechanics/rhythm-jump/",
        icon: "mdi:palette-swatch",
        platforms: "all",
    },
    {
        id: "draw-the-path",
        url: "/mechanics/draw-the-path/",
        icon: "mdi:draw",
        platforms: "all",
    },
    {
        id: "viewport-collision",
        url: "/mechanics/viewport-collision/",
        icon: "mdi:resize",
        platforms: "desktop",
    },
    {
        id: "bullet-time-painting",
        url: "/mechanics/bullet-time-painting/",
        icon: "mdi:brush",
        platforms: "all",
    },
    {
        id: "momentum-transfer",
        url: "/mechanics/momentum-transfer/",
        icon: "mdi:billiards",
        platforms: "all",
    },
];
