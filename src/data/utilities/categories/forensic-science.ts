import { forensicCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-forensic-science';
import type { CategoryDefinition } from '../types';

const categoryColor = "#7c3aed";

export const forensicScience: CategoryDefinition = {
    key: "forensic-science",
    entry,
    theme: "violet",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};
