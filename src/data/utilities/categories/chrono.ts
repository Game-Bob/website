import { chronoCategory as entry } from '@jjlmoya/utils-chrono/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-chrono/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#d97706";

export const chrono: CategoryDefinition = {
    key: "chrono",
    packageName: "@jjlmoya/utils-chrono",
    entry,
    theme: "amber",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};
