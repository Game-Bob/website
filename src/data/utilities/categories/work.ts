import { workCategory as entry, workCategorySEO as SEOComponent, ALL_TOOLS as WORK_TOOLS } from '@jjlmoya/utils-work';
import type { CategoryDefinition } from '../types';

const TOOL_COLORS = [
    '#3b82f6',
    '#1d4ed8',
    '#1e40af',
    '#1e3a8a',
    '#0c4a6e',
    '#082f49',
    '#0369a1',
    '#0ea5e9',
    '#06b6d4',
];

export const work: CategoryDefinition = {
    key: 'work',
    entry,
    SEOComponent,
    theme: 'blue',
    toolsWithColors: WORK_TOOLS.map((tool, i) => ({ toolEntry: tool.entry, color: TOOL_COLORS[i] ?? '#3b82f6' })),
    AllTools: WORK_TOOLS,
};
