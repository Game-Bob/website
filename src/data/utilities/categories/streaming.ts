import { streamingCategory as entry, ALL_TOOLS as STREAMING_TOOLS } from '@jjlmoya/utils-streaming';
import type { CategoryDefinition } from '../types';

const TOOL_COLORS = [
    '#7c3aed',
    '#06b6d4',
];

export const streaming: CategoryDefinition = {
    key: 'streaming',
    entry,
    theme: 'violet',
    toolsWithColors: STREAMING_TOOLS.map((tool, i) => ({ toolEntry: tool.entry, color: TOOL_COLORS[i] ?? '#7c3aed' })),
};
