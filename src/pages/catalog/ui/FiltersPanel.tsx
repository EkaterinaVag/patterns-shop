import { CATEGORIES, DIFFICULTIES, DURATIONS } from '@/features/filter-patterns/model/constants';
import { FilterGroup } from './filters/FilterGroup';
import { FilterPill } from './filters/FilterPill';
import { SearchInput } from './filters/SearchInput';

interface FiltersPanelProps {
  idPrefix: string;
}

export function FiltersPanel({ idPrefix }: FiltersPanelProps) {
  return (
    <>
      <SearchInput />

      <FilterGroup title="Категории">
        {CATEGORIES.map((cat) => (
          <FilterPill
            key={cat.id}
            id={`${idPrefix}-${cat.id}`}
            label={cat.label}
            name="category"
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Сложность">
        {DIFFICULTIES.map((diff) => (
          <FilterPill
            key={diff.id}
            id={`${idPrefix}-${diff.id}`}
            label={diff.label}
            name="difficulty"
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Время изготовления">
        {DURATIONS.map((dur) => (
          <FilterPill
            key={dur.id}
            id={`${idPrefix}-${dur.id}`}
            label={dur.label}
            name="duration"
          />
        ))}
      </FilterGroup>
    </>
  );
}
