import { textilesCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-textiles';
import type { CategoryDefinition } from '../types';

const categoryColor = "#a78bfa";

export const textiles: CategoryDefinition = {
    key: "textiles",
    entry,
    theme: "purple",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};
