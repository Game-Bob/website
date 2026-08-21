import { coffeeCategory as entry } from '@jjlmoya/utils-coffee/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-coffee/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#92400e";

export const coffee: CategoryDefinition = {
    key: "coffee",
    packageName: "@jjlmoya/utils-coffee",
    entry,
    theme: "amber",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};
