import { printing3dCategory as entry } from '@jjlmoya/utils-printing3d/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-printing3d/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#f43f5e";

export const printing3d: CategoryDefinition = {
    key: "printing3d",
    packageName: "@jjlmoya/utils-printing3d",
    entry,
    theme: "orange",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};
