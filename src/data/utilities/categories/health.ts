import { healthCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-health';
import type { CategoryDefinition } from '../types';

const categoryColor = "#ef4444";

export const health: CategoryDefinition = {
    key: "health",
    entry,
    theme: "red",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};
