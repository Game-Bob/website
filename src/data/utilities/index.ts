import type { SectionData } from "./types";
import { type Language } from "../../i18n/utils";

import { getBikeSection } from "./bike";

export async function getSections(lang: Language): Promise<SectionData[]> {
    return [
        await getBikeSection(lang),
    ];
}

export type { SectionData, UtilityItem } from "./types";
