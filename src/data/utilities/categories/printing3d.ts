import { printing3dCategory as entry, printing3dCategorySEO as SEOComponent, ALL_TOOLS as PRINTING3D_TOOLS } from '@jjlmoya/utils-printing3d';
import type { CategoryDefinition } from '../types';

const TOOL_COLORS = [
    '#d97706',
    '#dc2626',
    '#2563eb',
    '#7c3aed',
];

export const printing3d: CategoryDefinition = {
    key: 'printing3d',
    entry,
    SEOComponent,
    theme: 'orange',
    toolsWithColors: PRINTING3D_TOOLS.map((tool, i) => ({ toolEntry: tool.entry, color: TOOL_COLORS[i] ?? '#d97706' })),
    AllTools: PRINTING3D_TOOLS,
};
