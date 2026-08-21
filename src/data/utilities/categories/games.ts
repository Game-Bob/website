import { gamesCategory as entry } from '@jjlmoya/utils-games/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-games/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#ec4899";

export const games: CategoryDefinition = {
    key: "games",
    packageName: "@jjlmoya/utils-games",
    entry,
    theme: "purple",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};
