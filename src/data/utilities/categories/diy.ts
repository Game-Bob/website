import { diyCategory as entry, diyCategorySEO as SEOComponent, ALL_TOOLS as DIY_TOOLS } from '@jjlmoya/utils-diy';
import type { CategoryDefinition } from '../types';

const TOOL_COLORS = [
    '#f97316',
    '#fb923c',
    '#fdba74',
    '#fed7aa',
    '#fecaca',
    '#fca5a5',
    '#f87171',
    '#ef4444',
    '#dc2626',
    '#b91c1c',
];

export const diy: CategoryDefinition = {
    key: 'diy',
    entry,
    SEOComponent,
    theme: 'orange',
    toolsWithColors: DIY_TOOLS.map((tool, i) => ({ toolEntry: tool.entry, color: TOOL_COLORS[i] ?? '#f97316' })),
    AllTools: DIY_TOOLS,
};
