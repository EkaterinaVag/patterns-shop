import { FilterGroup } from './filters/FilterGroup';
import { FilterPill } from './filters/FilterPill';
import { SearchInput } from './filters/SearchInput';

const CATEGORIES = [
  { id: 'animals', label: 'Животные' },
  { id: 'flowers', label: 'Цветы' },
  { id: 'food', label: 'Еда' },
  { id: 'decor', label: 'Декор' },
  { id: 'toys', label: 'Игрушки' },
] as const;

const DIFFICULTIES = [
  { id: 'beginner', label: 'Начальный' },
  { id: 'easy', label: 'Легкий' },
  { id: 'medium', label: 'Средний' },
  { id: 'hard', label: 'Высокий' },
] as const;

const DURATIONS = [
  { id: '1h', label: 'до 1 часа' },
  { id: '2-3h', label: '2-3 часа' },
  { id: 'day', label: 'Весь день' },
] as const;

export function FilterSidebar() {
  return (
    <aside className="
      bg-bg
      rounded-3xl
      border border-border
      p-5
      lg:sticky lg:top-24
      lg:self-start
    ">
      <SearchInput />

      <FilterGroup title="Категории">
        {CATEGORIES.map((cat) => (
          <FilterPill
            key={cat.id}
            id={cat.id}
            label={cat.label}
            name="category"
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Сложность">
        {DIFFICULTIES.map((diff) => (
          <FilterPill
            key={diff.id}
            id={diff.id}
            label={diff.label}
            name="difficulty"
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Время изготовления">
        {DURATIONS.map((dur) => (
          <FilterPill
            key={dur.id}
            id={dur.id}
            label={dur.label}
            name="duration"
          />
        ))}
      </FilterGroup>
    </aside>
  );
}