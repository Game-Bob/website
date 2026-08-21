import { alcoholCategory as entry } from '@jjlmoya/utils-alcohol/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-alcohol/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#f43f5e";

export const alcohol: CategoryDefinition = {
    key: "alcohol",
    packageName: "@jjlmoya/utils-alcohol",
    entry,
    theme: "amber",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};
