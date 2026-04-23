import { musicCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-music';
import type { CategoryDefinition } from '../types';

const categoryColor = "#d946ef";

export const music: CategoryDefinition = {
    key: "music",
    entry,
    theme: "violet",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};
