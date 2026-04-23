import { streamingCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-streaming';
import type { CategoryDefinition } from '../types';

const categoryColor = "#8b5cf6";

export const streaming: CategoryDefinition = {
    key: "streaming",
    entry,
    theme: "violet",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};
