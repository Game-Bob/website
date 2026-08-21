import { homeCategory as entry } from '@jjlmoya/utils-home/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-home/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#f97316";

export const home: CategoryDefinition = {
    key: "home",
    packageName: "@jjlmoya/utils-home",
    entry,
    theme: "green",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};
