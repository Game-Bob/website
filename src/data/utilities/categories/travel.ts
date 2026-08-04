import { travelCategory as entry } from '@jjlmoya/utils-travel/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-travel/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#14b8a6";

export const travel: CategoryDefinition = {
    key: "travel",
    packageName: "@jjlmoya/utils-travel",
    entry,
    theme: "blue",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};
