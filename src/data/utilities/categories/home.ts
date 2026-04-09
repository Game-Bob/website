import { homeCategory as entry, homeCategorySEO as SEOComponent, ALL_TOOLS as HOME_TOOLS } from '@jjlmoya/utils-home';
import type { CategoryDefinition } from '../types';

const TOOL_COLORS = [
    "#10b981",
    "#f59e0b",
    "#6366f1",
    "#06b6d4",
    "#f97316",
    "#8b5cf6",
];

export const home: CategoryDefinition = {
    key: "home",
    entry,
    SEOComponent,
    theme: "green",
    toolsWithColors: HOME_TOOLS.map((tool, i) => ({ toolEntry: tool.entry, color: TOOL_COLORS[i] ?? "#10b981" })),
    AllTools: HOME_TOOLS,
};
