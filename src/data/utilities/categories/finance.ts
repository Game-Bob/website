import { financeCategory as entry, financeCategorySEO as SEOComponent, ALL_TOOLS as FINANCE_TOOLS } from '@jjlmoya/utils-finance';
import type { CategoryDefinition } from '../types';

const TOOL_COLORS = [
    '#16a34a',
    '#15803d',
    '#059669',
    '#0d9488',
    '#065f46',
    '#047857',
    '#10b981',
    '#34d399',
    '#6ee7b7',
    '#a7f3d0',
    '#d1fae5',
    '#ecfdf5',
];

export const finance: CategoryDefinition = {
    key: 'finance',
    entry,
    SEOComponent,
    theme: 'green',
    toolsWithColors: FINANCE_TOOLS.map((tool, i) => ({ toolEntry: tool.entry, color: TOOL_COLORS[i] ?? '#16a34a' })),
    AllTools: FINANCE_TOOLS,
};
