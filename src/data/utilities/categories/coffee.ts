import { coffeeCategory as entry, ALL_TOOLS as COFFEE_TOOLS } from '@jjlmoya/utils-coffee';
import type { CategoryDefinition } from '../types';

const TOOL_COLORS = [
    '#92400e',
    '#78350f',
    '#451a03',
    '#6b3a2a',
];

export const coffee: CategoryDefinition = {
    key: 'coffee',
    entry,
    theme: 'amber',
    toolsWithColors: COFFEE_TOOLS.map((tool, i) => ({ toolEntry: tool.entry, color: TOOL_COLORS[i] ?? '#92400e' })),
};
