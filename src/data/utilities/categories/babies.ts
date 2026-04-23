import { babiesCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-babies';
import type { CategoryDefinition } from '../types';

const categoryColor = "#f472b6";

export const babies: CategoryDefinition = {
    key: "babies",
    entry,
    theme: "pink",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};
