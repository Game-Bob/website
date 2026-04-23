import { diyCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-diy';
import type { CategoryDefinition } from '../types';

const categoryColor = "#f59e0b";

export const diy: CategoryDefinition = {
    key: "diy",
    entry,
    theme: "orange",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};
