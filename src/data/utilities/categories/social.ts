import { socialCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-social';
import type { CategoryDefinition } from '../types';

const categoryColor = "#3b82f6";

export const social: CategoryDefinition = {
    key: "social",
    entry,
    theme: "red",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};
