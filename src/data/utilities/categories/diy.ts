import { diyCategory as entry } from '@jjlmoya/utils-diy/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-diy/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#f59e0b";

export const diy: CategoryDefinition = {
    key: "diy",
    packageName: "@jjlmoya/utils-diy",
    entry,
    theme: "orange",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};
