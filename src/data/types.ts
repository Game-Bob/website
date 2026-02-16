
export type ProjectStatus = "released" | "developing" | "planning" | "qa";

export interface ProjectTheme {
    primary: string;
    accent: string;
}

export interface ProjectMedia {
    icon: string;
    showcase: string;
}

export interface ProjectStores {
    googlePlay?: string;
    appStore?: string;
    website?: string;
}

export interface ProjectRoadmap {
    statusType: ProjectStatus;
    progress: number;
    // Future expansion: milestones, version history, etc.
}

export interface Project {
    slug: string;
    isGame: boolean;
    theme: ProjectTheme;
    media: ProjectMedia;
    stores: ProjectStores;
    roadmap: ProjectRoadmap;
    tags?: string[];
}
