import { gamesCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-games';
import type { CategoryDefinition } from '../types';

const categoryColor = "#ec4899";

export const games: CategoryDefinition = {
    key: "games",
    entry,
    theme: "purple",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};
