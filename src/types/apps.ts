export interface AppTheme {
    primary: string;
    primaryGradient?: string;
    accent?: string;
    radiusMain?: string;
    glowAccent?: string;
    headerTitleGradient?: string;
    textTitleGradient?: string;
    bgApp?: string;
    bgSurface?: string;
    bgCard?: string;
    textMain?: string;
    glass?: string;
    glassBorderColor?: string;
    glassHighlight?: string;
    shadowPrimary?: string;
    shadowCard?: string;
}

export interface AppTask {
    name: string;
    status: "done" | "in_progress" | "planned" | string;
}

export interface AppRoadmap {
    statusLabel: string;
    statusType: string;
    progress: number;
    tasks: AppTask[];
}

export interface AppMedia {
    icon: string;
    showcase?: string;
    hero?: string;
    screenshots?: string[];
}

export interface AppStores {
    googlePlay?: string;
    appStore?: string;
}

export interface AppFeature {
    title: string;
    text: string;
    icon: string;
}

export interface AppHighlight {
    label: string;
    value: string;
}

export interface Application {
    slug: string;
    title: string;
    subtitle?: string;
    category?: string;
    isGame?: boolean;
    theme: AppTheme;
    tagline?: string;
    description?: string;
    philosophy?: string;
    concept?: { label: string; main: string; highlighted: string; };
    benefitsTitle?: { main: string; highlighted: string; };
    quote?: { text: string; author: string; };
    videos?: string[];
    shorts?: string[];
    bannerText?: string;
    hasDetailPage?: boolean;
    roadmap?: AppRoadmap;
    price?: string;
    media: AppMedia;
    stores: AppStores;
    benefits?: AppFeature[];
    features?: AppFeature[];
    highlights?: AppHighlight[];
}
