import { describe, expect, it } from 'vitest';
import { CATEGORIES, INDEXABLE_CATEGORIES } from './registry';

describe('utility category indexing policy', () => {
  it('marks only health and finance as noindex', () => {
    const nonIndexableCategories = CATEGORIES
      .filter(({ noindex }) => noindex)
      .map(({ key }) => key);

    expect(nonIndexableCategories).toEqual(['health', 'finance']);
  });

  it('keeps noindex categories and all their tools out of the sitemap source', () => {
    expect(INDEXABLE_CATEGORIES.some(({ key }) => key === 'health')).toBe(false);
    expect(INDEXABLE_CATEGORIES.some(({ key }) => key === 'finance')).toBe(false);
    expect(INDEXABLE_CATEGORIES.some(({ key }) => key === 'printing3d')).toBe(true);
  });
});
