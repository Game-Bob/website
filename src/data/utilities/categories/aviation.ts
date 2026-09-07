import { aviationCategory as entry } from '@jjlmoya/utils-aviation/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-aviation/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#0284c7";

export const aviation: CategoryDefinition = {
    key: "aviation",
    packageName: "@jjlmoya/utils-aviation",
    entry,
    theme: "sky",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};
