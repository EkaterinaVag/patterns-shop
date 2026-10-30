import { CATEGORIES, DIFFICULTIES, DURATIONS } from '@/features/filter-patterns/model/constants';
import { FilterGroup } from './filters/FilterGroup';
import { FilterPill } from './filters/FilterPill';
import { SearchInput } from './filters/SearchInput';

export function FilterSidebar() {
  return (
    <aside className="
      hidden
      md:block
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