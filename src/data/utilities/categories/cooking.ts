import { cookingCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-cooking';
import type { CategoryDefinition } from '../types';

const categoryColor = "#f97316";

export const cooking: CategoryDefinition = {
    key: "cooking",
    entry,
    theme: "orange",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};
