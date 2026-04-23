import { printing3dCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-printing3d';
import type { CategoryDefinition } from '../types';

const categoryColor = "#f43f5e";

export const printing3d: CategoryDefinition = {
    key: "printing3d",
    entry,
    theme: "orange",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};
