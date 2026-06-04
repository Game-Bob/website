import { tabletopCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-tabletop';
import type { CategoryDefinition } from '../types';

const categoryColor = "#6366f1";

export const tabletop: CategoryDefinition = {
    key: "tabletop",
    entry,
    theme: "indigo",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};
