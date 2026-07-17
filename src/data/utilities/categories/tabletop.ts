import { tabletopCategory as entry } from '@jjlmoya/utils-tabletop/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-tabletop/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#6366f1";

export const tabletop: CategoryDefinition = {
    key: "tabletop",
    packageName: "@jjlmoya/utils-tabletop",
    entry,
    theme: "indigo",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};
