import { statisticsCategory as entry, ALL_TOOLS as STATISTICS_TOOLS } from '@jjlmoya/utils-statistics';
import type { CategoryDefinition } from '../types';

const TOOL_COLORS = [
    '#0891b2',
    '#06b6d4',
    '#22d3ee',
    '#06b6d4',
    '#0891b2',
    '#0e7490',
    '#164e63',
];

export const statistics: CategoryDefinition = {
    key: 'statistics',
    entry,
    theme: 'cyan',
    toolsWithColors: STATISTICS_TOOLS.map((tool, i) => ({ toolEntry: tool.entry, color: TOOL_COLORS[i] ?? '#0891b2' })),
};
