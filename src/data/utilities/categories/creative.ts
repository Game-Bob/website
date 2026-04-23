import { creativeCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-creative';
import type { CategoryDefinition } from '../types';

const categoryColor = "#a855f7";

export const creative: CategoryDefinition = {
    key: "creative",
    entry,
    theme: "fuchsia",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};
