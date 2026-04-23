import { homeCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-home';
import type { CategoryDefinition } from '../types';

const categoryColor = "#f97316";

export const home: CategoryDefinition = {
    key: "home",
    entry,
    theme: "green",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};
