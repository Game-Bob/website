import { dronesCategory as entry } from '@jjlmoya/utils-drones/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-drones/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#10b981";

export const drones: CategoryDefinition = {
    key: "drones",
    packageName: "@jjlmoya/utils-drones",
    entry,
    theme: "sky",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};
