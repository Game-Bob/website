export interface CategoryDefinition {
    key: string;
    entry: any;
    SEOComponent: any;
    theme: string;
    toolsWithColors: Array<{ toolEntry: any; color: string }>;
    AllTools: any[];
}

export interface UtilityItem {
    title: string;
    description: string;
    href: string;
    iconBg: string;
    iconFg: string;
    color: string;
    appSlug?: string;
}

export interface SectionData {
    title: string;
    slug: string;
    icon: string;
    theme?: string;
    description: string;
    seo?: Array<{ type: string; text?: string; html?: string; level?: number }>;
    utilities: UtilityItem[];
}
