import { educationCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-education';
import type { CategoryDefinition } from '../types';

const categoryColor = "#8b5cf6";

export const education: CategoryDefinition = {
    key: "education",
    entry,
    theme: "blue",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};
