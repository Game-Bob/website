import { bikeCategory as entry } from '@jjlmoya/utils-bike/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-bike/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#ef4444";

export const bikes: CategoryDefinition = {
    key: "bikes",
    packageName: "@jjlmoya/utils-bike",
    entry,
    theme: "rose",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};
