import { sportsCategory as entry } from '@jjlmoya/utils-sports/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-sports/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#ef4444";

export const sports: CategoryDefinition = {
    key: "sports",
    packageName: "@jjlmoya/utils-sports",
    entry,
    theme: "red",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};
