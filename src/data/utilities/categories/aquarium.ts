import { aquariumCategory as entry } from '@jjlmoya/utils-aquarium/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-aquarium/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#0284c7";

export const aquarium: CategoryDefinition = {
    key: "aquarium",
    packageName: "@jjlmoya/utils-aquarium",
    entry,
    theme: "cyan",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};
