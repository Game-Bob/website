import { financeCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-finance';
import type { CategoryDefinition } from '../types';

const categoryColor = "#059669";

export const finance: CategoryDefinition = {
    key: "finance",
    entry,
    theme: "green",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};
