import { healthCategory as entry, ALL_TOOLS as HEALTH_TOOLS } from '@jjlmoya/utils-health';
import type { CategoryDefinition } from '../types';

const TOOL_COLORS = [
    '#ef4444',
    '#f97316',
    '#f59e0b',
    '#10b981',
    '#06b6d4',
    '#3b82f6',
    '#8b5cf6',
    '#ec4899',
    '#14b8a6',
    '#84cc16',
    '#f43f5e',
    '#a78bfa',
    '#fb923c',
    '#34d399',
    '#60a5fa',
    '#e879f9',
];

export const health: CategoryDefinition = {
    key: 'health',
    entry,
    theme: 'red',
    toolsWithColors: HEALTH_TOOLS.map((tool, i) => ({ toolEntry: tool.entry, color: TOOL_COLORS[i] ?? '#ef4444' })),
};
