import {
  CATEGORY_LABELS,
  DIFFICULTY_LABELS,
  DURATION_LABELS,
} from '@/entities/pattern/model/labels';

const CATEGORY_IDS = ['animals', 'flowers', 'food', 'decor', 'toys'] as const;
const DIFFICULTY_IDS = ['beginner', 'easy', 'medium', 'hard'] as const;
const DURATION_IDS = ['1h', '2-3h', 'day'] as const;

/**
 * Опции для фильтров собираются из подписей сущности, чтобы формулировки
 * в карточке и в фильтрах не расходились.
 */
export const CATEGORIES = CATEGORY_IDS.map((id) => ({
    id,
    label: CATEGORY_LABELS[id],
}));

export const DIFFICULTIES = DIFFICULTY_IDS.map((id) => ({
    id,
    label: DIFFICULTY_LABELS[id],
}));

export const DURATIONS = DURATION_IDS.map((id) => ({
    id,
    label: DURATION_LABELS[id],
}));
