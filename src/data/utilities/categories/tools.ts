import { toolsCategory as entry, toolsCategorySEO as SEOComponent, ALL_TOOLS as TOOLS_TOOLS } from '@jjlmoya/utils-tools';
import type { CategoryDefinition } from '../types';

const TOOL_COLORS = [
    '#6366f1',
    '#8b5cf6',
    '#a78bfa',
    '#7c3aed',
    '#6d28d9',
    '#5b21b6',
    '#4c1d95',
    '#818cf8',
    '#c4b5fd',
    '#ddd6fe',
    '#ede9fe',
    '#f5f3ff',
];

export const tools: CategoryDefinition = {
    key: 'tools',
    entry,
    SEOComponent,
    theme: 'violet',
    toolsWithColors: TOOLS_TOOLS.map((tool, i) => ({ toolEntry: tool.entry, color: TOOL_COLORS[i] ?? '#6366f1' })),
    AllTools: TOOLS_TOOLS,
};
