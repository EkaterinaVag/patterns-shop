import type { ReactNode } from 'react';

interface FilterGroupProps {
  title: string;
  children: ReactNode;
}

export function FilterGroup({ title, children }: FilterGroupProps) {
  return (
    <div className="mb-6">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {children}
      </div>
    </div>
  );
}