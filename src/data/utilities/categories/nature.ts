import { natureCategory as entry } from '@jjlmoya/utils-nature/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-nature/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#22c55e";

export const nature: CategoryDefinition = {
    key: "nature",
    packageName: "@jjlmoya/utils-nature",
    entry,
    theme: "green",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};
