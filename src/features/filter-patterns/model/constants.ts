export const CATEGORIES = [
    { id: 'animals', label: 'Животные' },
    { id: 'flowers', label: 'Цветы' },
    { id: 'food', label: 'Еда' },
    { id: 'decor', label: 'Декор' },
    { id: 'toys', label: 'Игрушки' },
] as const;

export const DIFFICULTIES = [
    { id: 'beginner', label: 'Начальный' },
    { id: 'easy', label: 'Легкий' },
    { id: 'medium', label: 'Средний' },
    { id: 'hard', label: 'Высокий' },
] as const;

export const DURATIONS = [
    { id: '1h', label: 'до 1 часа' },
    { id: '2-3h', label: '2-3 часа' },
    { id: 'day', label: 'Весь день' },
] as const;