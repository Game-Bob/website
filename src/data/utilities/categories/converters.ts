import { convertersCategory as entry } from '@jjlmoya/utils-converters/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-converters/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#06b6d4";

export const converters: CategoryDefinition = {
    key: "converters",
    packageName: "@jjlmoya/utils-converters",
    entry,
    theme: "amber",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};
