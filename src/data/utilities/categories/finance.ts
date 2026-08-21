import { financeCategory as entry } from '@jjlmoya/utils-finance/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-finance/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#059669";

export const finance: CategoryDefinition = {
    key: "finance",
    packageName: "@jjlmoya/utils-finance",
    entry,
    theme: "green",
    noindex: true,
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};
