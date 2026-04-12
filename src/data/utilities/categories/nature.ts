import { natureCategory as entry, natureCategorySEO as SEOComponent, ALL_TOOLS as NATURE_TOOLS } from '@jjlmoya/utils-nature';
import type { CategoryDefinition } from '../types';

const TOOL_COLORS = [
    '#16a34a',
    '#15803d',
    '#166534',
    '#14532d',
];

export const nature: CategoryDefinition = {
    key: 'nature',
    entry,
    SEOComponent,
    theme: 'green',
    toolsWithColors: NATURE_TOOLS.map((tool, i) => ({ toolEntry: tool.entry, color: TOOL_COLORS[i] ?? '#16a34a' })),
    AllTools: NATURE_TOOLS,
};
