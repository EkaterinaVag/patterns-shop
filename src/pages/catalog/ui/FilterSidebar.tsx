import { FilterGroup } from './filters/FilterGroup';
import { FilterPill } from './filters/FilterPill';
import { SearchInput } from './filters/SearchInput';

const CATEGORIES = [
  { id: 'cat-animals', label: 'Животные' },
  { id: 'cat-flowers', label: 'Цветы' },
  { id: 'cat-food', label: 'Еда' },
  { id: 'cat-decor', label: 'Декор' },
  { id: 'cat-toys', label: 'Игрушки' },
] as const;

const DIFFICULTIES = [
  { id: 'diff-beginner', label: 'Начальный' },
  { id: 'diff-easy', label: 'Легкий' },
  { id: 'diff-medium', label: 'Средний' },
  { id: 'diff-hard', label: 'Высокий' },
] as const;

const DURATIONS = [
  { id: 'time-1h', label: 'до 1 часа' },
  { id: 'time-2h', label: '2-3 часа' },
  { id: 'time-day', label: 'Весь день' },
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