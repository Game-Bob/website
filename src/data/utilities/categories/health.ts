import { healthCategory as entry } from '@jjlmoya/utils-health/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-health/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#ef4444";

export const health: CategoryDefinition = {
    key: "health",
    packageName: "@jjlmoya/utils-health",
    entry,
    theme: "red",
    noindex: true,
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};
