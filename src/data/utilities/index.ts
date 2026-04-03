import type { Language } from "../../i18n/utils";
import { CATEGORIES } from "./registry";
import { buildSection } from "./builder";

export async function getSections(lang: Language) {
    return Promise.all(CATEGORIES.map(cat => buildSection(lang, cat)));
}

export type { SectionData, UtilityItem } from "./types";
