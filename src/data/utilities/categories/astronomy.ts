import { astronomyCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-astronomy';
import type { CategoryDefinition } from '../types';

const categoryColor = "#6366f1";

export const astronomy: CategoryDefinition = {
    key: "astronomy",
    entry,
    theme: "indigo",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};
