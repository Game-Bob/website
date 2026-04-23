import { toolsCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-tools';
import type { CategoryDefinition } from '../types';

const categoryColor = "#6b7280";

export const tools: CategoryDefinition = {
    key: "tools",
    entry,
    theme: "violet",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};
