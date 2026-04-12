import { sportsCategory as entry, sportsCategorySEO as SEOComponent, ALL_TOOLS as SPORTS_TOOLS } from '@jjlmoya/utils-sports';
import type { CategoryDefinition } from '../types';

const TOOL_COLORS = [
    '#ef4444',
    '#f97316',
    '#f59e0b',
    '#10b981',
];

export const sports: CategoryDefinition = {
    key: 'sports',
    entry,
    SEOComponent,
    theme: 'red',
    toolsWithColors: SPORTS_TOOLS.map((tool, i) => ({ toolEntry: tool.entry, color: TOOL_COLORS[i] ?? '#ef4444' })),
    AllTools: SPORTS_TOOLS,
};
