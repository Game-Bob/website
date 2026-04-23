import { hardwareCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-hardware';
import type { CategoryDefinition } from '../types';

const categoryColor = "#64748b";

export const hardware: CategoryDefinition = {
    key: "hardware",
    entry,
    theme: "slate",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};
