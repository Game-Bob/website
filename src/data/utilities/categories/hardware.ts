import { hardwareCategory as entry, ALL_TOOLS as HARDWARE_TOOLS } from '@jjlmoya/utils-hardware';
import type { CategoryDefinition } from '../types';

const TOOL_COLORS = [
    '#64748b',
    '#475569',
    '#334155',
    '#1e293b',
    '#0f172a',
    '#94a3b8',
    '#78716c',
];

export const hardware: CategoryDefinition = {
    key: 'hardware',
    entry,
    theme: 'slate',
    toolsWithColors: HARDWARE_TOOLS.map((tool, i) => ({ toolEntry: tool.entry, color: TOOL_COLORS[i] ?? '#64748b' })),
};
