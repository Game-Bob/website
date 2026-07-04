import { workCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-work';
import type { CategoryDefinition } from '../types';

const categoryColor = "#60a5fa";

export const work: CategoryDefinition = {
    key: "work",
    packageName: "@jjlmoya/utils-work",
    entry,
    theme: "blue",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};
