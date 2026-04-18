import { petsCategory as entry, petAge, petRation } from '@jjlmoya/utils-pets';
import type { CategoryDefinition } from '../types';

export const pets: CategoryDefinition = {
    key: "pets",
    entry,
    theme: "amber",
    toolsWithColors: [
        { toolEntry: petAge, color: "#f59e0b" },
        { toolEntry: petRation, color: "#10b981" },
    ],
};
