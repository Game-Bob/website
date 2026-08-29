import { genealogyCategory as entry } from '@jjlmoya/utils-genealogy/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-genealogy/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#0f766e";

export const genealogy: CategoryDefinition = {
    key: "genealogy",
    packageName: "@jjlmoya/utils-genealogy",
    entry,
    theme: "teal",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};
