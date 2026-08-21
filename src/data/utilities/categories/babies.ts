import { babiesCategory as entry } from '@jjlmoya/utils-babies/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-babies/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#f472b6";

export const babies: CategoryDefinition = {
    key: "babies",
    packageName: "@jjlmoya/utils-babies",
    entry,
    theme: "pink",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};
