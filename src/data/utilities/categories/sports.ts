import { sportsCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-sports';
import type { CategoryDefinition } from '../types';

const categoryColor = "#ef4444";

export const sports: CategoryDefinition = {
    key: "sports",
    entry,
    theme: "red",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};
