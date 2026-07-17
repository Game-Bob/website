import { cookingCategory as entry } from '@jjlmoya/utils-cooking/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-cooking/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#f97316";

export const cooking: CategoryDefinition = {
    key: "cooking",
    packageName: "@jjlmoya/utils-cooking",
    entry,
    theme: "orange",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};
