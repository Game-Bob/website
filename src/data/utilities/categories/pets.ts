import { petsCategory as entry, PetsCategorySEO, ALL_TOOLS as PET_TOOLS, petAge, petRation } from '@jjlmoya/utils-pets';
import type { CategoryDefinition } from '../types';

export const pets: CategoryDefinition = {
    key: "pets",
    entry,
    SEOComponent: PetsCategorySEO,
    theme: "amber",
    toolsWithColors: [
        { toolEntry: petAge, color: "#f59e0b" },
        { toolEntry: petRation, color: "#10b981" },
    ],
    AllTools: PET_TOOLS,
};
