import { streamingCategory as entry } from '@jjlmoya/utils-streaming/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-streaming/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#8b5cf6";

export const streaming: CategoryDefinition = {
    key: "streaming",
    packageName: "@jjlmoya/utils-streaming",
    entry,
    theme: "violet",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};
