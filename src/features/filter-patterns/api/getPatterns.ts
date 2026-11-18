import type { Pattern } from '@/entities/pattern';
import { MOCK_PATTERNS, type PaginatedResponse } from '@/shared/api';

import { FilterSchema } from '../model/types';

const LIMIT = 9;

export type GetPatternsResult =
  | { ok: true; data: PaginatedResponse<Pattern> }
  | { ok: false };

/**
 * Один источник фильтрации/сортировки/пагинации для серверной страницы
 * и для API-роута, чтобы выдача не разъезжалась.
 */
export function getPatterns(input: unknown): GetPatternsResult {
  const parsed = FilterSchema.safeParse(input);
  if (!parsed.success) return { ok: false };

  const { category, difficulty, duration, sort, page, search } = parsed.data;

  const filtered = MOCK_PATTERNS.filter((pattern) => {
    if (category && pattern.category !== category) return false;
    if (difficulty && pattern.difficulty !== difficulty) return false;
    if (duration && pattern.duration !== duration) return false;
    if (search && !pattern.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  switch (sort) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'new':
      filtered.sort((a, b) => b.createdAt - a.createdAt);
      break;
    default:
      filtered.sort((a, b) => b.views - a.views);
  }

  const totalPages = Math.max(1, Math.ceil(filtered.length / LIMIT));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * LIMIT;

  return {
    ok: true,
    data: {
      items: filtered.slice(start, start + LIMIT),
      total: filtered.length,
      page: safePage,
      totalPages,
      limit: LIMIT,
    },
  };
}
