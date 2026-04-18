import { developerCategory as entry, ALL_TOOLS as DEVELOPER_TOOLS } from '@jjlmoya/utils-developer';
import type { CategoryDefinition } from '../types';

const TOOL_COLORS = [
    '#3b82f6',
    '#2563eb',
    '#1d4ed8',
    '#1e40af',
    '#1e3a8a',
    '#0c4a6e',
    '#06b6d4',
    '#0891b2',
    '#0e7490',
    '#164e63',
    '#6366f1',
    '#4f46e5',
    '#4338ca',
    '#3730a3',
    '#312e81',
    '#8b5cf6',
    '#7c3aed',
    '#6d28d9',
    '#5b21b6',
    '#4c1d95',
    '#ec4899',
    '#db2777',
    '#be185d',
    '#9d174d',
];

export const developer: CategoryDefinition = {
    key: 'developer',
    entry,
    theme: 'blue',
    toolsWithColors: DEVELOPER_TOOLS.map((tool, i) => ({ toolEntry: tool.entry, color: TOOL_COLORS[i] ?? '#3b82f6' })),
};
