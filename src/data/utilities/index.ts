import type { SectionData } from "./types";

import { getBikeSection } from "./bike";

export async function getSections(lang: 'en' | 'fr'): Promise<SectionData[]> {
    return [
        await getBikeSection(lang),
    ];
}

export type { SectionData, UtilityItem } from "./types";
