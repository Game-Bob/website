import { civicCategory as entry } from '@jjlmoya/utils-civic/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-civic/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#2563eb";

export const civic: CategoryDefinition = {
    key: "civic",
    packageName: "@jjlmoya/utils-civic",
    entry,
    theme: "blue",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};
