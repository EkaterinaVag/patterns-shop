import type { Pattern } from './types';

export const CATEGORY_LABELS = {
  animals: 'Животные',
  flowers: 'Цветы',
  food: 'Еда',
  decor: 'Декор',
  toys: 'Игрушки',
} satisfies Record<Pattern['category'], string>;

export const DIFFICULTY_LABELS = {
  beginner: 'Начальный',
  easy: 'Легкий',
  medium: 'Средний',
  hard: 'Высокий',
} satisfies Record<Pattern['difficulty'], string>;

export const DURATION_LABELS = {
  '1h': 'до 1 часа',
  '2-3h': '2–3 часа',
  'day': 'весь день',
} satisfies Record<Pattern['duration'], string>;
