'use client';
import { Pattern, PatternCard, PatternCardList } from '@/entities/pattern';
import { useViewStore } from '@/features/view-toggle';

interface CatalogGridProps {
  patterns: Pattern[]
}

export function CatalogGrid({ patterns }: CatalogGridProps) {
  const { view } = useViewStore();

  const gridClass = view === 'grid'
    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
    : 'flex flex-col gap-4';

  return (
    <div className={gridClass}>
      {patterns.map((pattern) => (
        view === 'grid' ?
          <PatternCard key={pattern.id} pattern={pattern} />
          :
          <PatternCardList key={pattern.id} pattern={pattern} />
      ))}
    </div>
  );
}