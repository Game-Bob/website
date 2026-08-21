import { textilesCategory as entry } from '@jjlmoya/utils-textiles/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-textiles/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#a78bfa";

export const textiles: CategoryDefinition = {
    key: "textiles",
    packageName: "@jjlmoya/utils-textiles",
    entry,
    theme: "purple",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};
