import type { ReactNode } from 'react';

interface FilterGroupProps {
  title: string;
  children: ReactNode;
}

export function FilterGroup({ title, children }: FilterGroupProps) {
  return (
    <fieldset className="mb-6 min-w-0 border-0 p-0">
      <legend className="mb-3 p-0 text-xs font-semibold uppercase tracking-wider text-muted">
        {title}
      </legend>
      <div className="flex flex-wrap gap-2">
        {children}
      </div>
    </fieldset>
  );
}
