import { nauticalCategory as entry } from '@jjlmoya/utils-nautical/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-nautical/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#0284c7";

export const nautical: CategoryDefinition = {
    key: "nautical",
    packageName: "@jjlmoya/utils-nautical",
    entry,
    theme: "cyan",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};
