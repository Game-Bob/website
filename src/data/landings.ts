import { ALL_LANDING_DEFINITIONS, type KnownLocale, type LandingCardContent, type LandingDefinition } from "@jjlmoya/landings";
import { SUPPORTED_LANGUAGES, type Language } from "../i18n/languages";

export type SiteLanding = {
    definition: LandingDefinition;
    card: LandingCardContent;
    lang: Language;
};

export async function getLandingCard(definition: LandingDefinition, lang: Language): Promise<LandingCardContent | null> {
    const loader = definition.entry.i18n[lang as KnownLocale] ?? definition.entry.i18n.en;
    return loader ? loader() : null;
}

export async function getAllLocalizedLandings(): Promise<SiteLanding[]> {
    const landings = await Promise.all(
        SUPPORTED_LANGUAGES.flatMap((lang) =>
            ALL_LANDING_DEFINITIONS.map(async (definition) => {
                const card = await getLandingCard(definition, lang);
                return card ? { definition, card, lang } : null;
            })
        )
    );

    return landings.filter((landing): landing is SiteLanding => landing !== null);
}

export async function getLandingById(id: string, lang: Language): Promise<SiteLanding | null> {
    const definition = ALL_LANDING_DEFINITIONS.find((landing) => landing.entry.id === id);
    if (!definition) return null;

    const card = await getLandingCard(definition, lang);
    return card ? { definition, card, lang } : null;
}

export async function getLandingPath(id: string, lang: Language): Promise<string | null> {
    const landing = await getLandingById(id, lang);
    return landing ? `/${lang}/${landing.card.slug}/` : null;
}
