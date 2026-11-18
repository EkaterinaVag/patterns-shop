'use client';

import { useFilters } from '@/features/filter-patterns';
import { CATEGORIES, DIFFICULTIES, DURATIONS } from '@/features/filter-patterns/model/constants';

import { FilterGroup } from './FilterGroup';
import { FilterPill } from './FilterPill';
import { SearchInput } from './SearchInput';

interface FiltersPanelProps {
  idPrefix: string;
}

export function FiltersPanel({ idPrefix }: FiltersPanelProps) {
  const { getFilter, setFilter } = useFilters();

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
            checked={getFilter('category') === cat.id}
            onCheckedChange={(checked) => setFilter('category', checked ? cat.id : null)}
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
            checked={getFilter('difficulty') === diff.id}
            onCheckedChange={(checked) => setFilter('difficulty', checked ? diff.id : null)}
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
            checked={getFilter('duration') === dur.id}
            onCheckedChange={(checked) => setFilter('duration', checked ? dur.id : null)}
          />
        ))}
      </FilterGroup>
    </>
  );
}
