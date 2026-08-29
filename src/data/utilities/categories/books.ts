import { booksCategory as entry } from '@jjlmoya/utils-books/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-books/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#92400e";

export const books: CategoryDefinition = {
    key: "books",
    packageName: "@jjlmoya/utils-books",
    entry,
    theme: "amber",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};
