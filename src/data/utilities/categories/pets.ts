import { petsCategory as entry } from '@jjlmoya/utils-pets/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-pets/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#fbbf24";

export const pets: CategoryDefinition = {
    key: "pets",
    packageName: "@jjlmoya/utils-pets",
    entry,
    theme: "amber",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};
