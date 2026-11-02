import { FiltersPanel } from './FiltersPanel';

export function FilterSidebar() {
  return (
    <aside className="
      hidden
      lg:block
      bg-bg
      rounded-3xl
      border border-border
      p-5
      lg:sticky lg:top-24
      lg:self-start
    ">
      <FiltersPanel idPrefix="filters-desktop" />
    </aside>
  );
}