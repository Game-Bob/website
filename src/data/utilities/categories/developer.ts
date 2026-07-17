import { developerCategory as entry } from '@jjlmoya/utils-developer/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-developer/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#3b82f6";

export const developer: CategoryDefinition = {
    key: "developer",
    packageName: "@jjlmoya/utils-developer",
    entry,
    theme: "blue",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};
