import { musicCategory as entry, musicCategorySEO as SEOComponent, ALL_TOOLS as MUSIC_TOOLS } from '@jjlmoya/utils-music';
import type { CategoryDefinition } from '../types';

const TOOL_COLORS = [
    '#7c3aed',
    '#8b5cf6',
    '#6d28d9',
    '#9333ea',
    '#a855f7',
    '#c026d3',
];

export const music: CategoryDefinition = {
    key: 'music',
    entry,
    SEOComponent,
    theme: 'violet',
    toolsWithColors: MUSIC_TOOLS.map((tool, i) => ({ toolEntry: tool.entry, color: TOOL_COLORS[i] ?? '#7c3aed' })),
    AllTools: MUSIC_TOOLS,
};
