import { coffeeCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-coffee';
import type { CategoryDefinition } from '../types';

const categoryColor = "#92400e";

export const coffee: CategoryDefinition = {
    key: "coffee",
    entry,
    theme: "amber",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};
