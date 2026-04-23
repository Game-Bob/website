import { developerCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-developer';
import type { CategoryDefinition } from '../types';

const categoryColor = "#3b82f6";

export const developer: CategoryDefinition = {
    key: "developer",
    entry,
    theme: "blue",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};
