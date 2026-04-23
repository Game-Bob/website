import { natureCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-nature';
import type { CategoryDefinition } from '../types';

const categoryColor = "#22c55e";

export const nature: CategoryDefinition = {
    key: "nature",
    entry,
    theme: "green",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};
