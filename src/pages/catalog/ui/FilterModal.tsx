'use client';

import { useEffect, useId } from 'react';

import { FiltersPanel } from './FiltersPanel';

interface FilterModalProps {
  onClose: () => void;
}

export function FilterModal({ onClose }: FilterModalProps) {
  const titleId = useId();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-50 flex items-end justify-center lg:hidden"
    >
      <div
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative flex max-h-[90vh] w-full flex-col overflow-hidden rounded-t-3xl bg-bg">
        <div className="flex items-center justify-between px-6 pb-4 pt-6">
          <h2 id={titleId} className="text-xl font-serif">Фильтры</h2>
          <button
            onClick={onClose}
            aria-label="Закрыть"
            className="p-2 text-muted hover:text-ink cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto overscroll-contain px-6">
          <FiltersPanel idPrefix="filters-mobile" />
        </div>

        <div className="border-t border-border bg-bg p-4">
          <button
            onClick={onClose}
            className="w-full bg-blush hover:bg-blush-hover text-white font-semibold py-3 rounded-full transition-colors cursor-pointer"
          >
            Применить
          </button>
        </div>
      </div>
    </div>
  );
}
