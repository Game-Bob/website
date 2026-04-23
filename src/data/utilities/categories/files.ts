import { filesCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-files';
import type { CategoryDefinition } from '../types';

const categoryColor = "#6b7280";

export const files: CategoryDefinition = {
    key: "files",
    entry,
    theme: "cyan",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};
