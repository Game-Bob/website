import { musicCategory as entry } from '@jjlmoya/utils-music/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-music/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#d946ef";

export const music: CategoryDefinition = {
    key: "music",
    packageName: "@jjlmoya/utils-music",
    entry,
    theme: "violet",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};
