'use client';

import { useState } from 'react';

type ViewMode = 'grid' | 'list';

export function ViewToggle() {
  const [view, setView] = useState<ViewMode>('grid');

  return (
    <div className="flex items-center">
      <button
        type="button"
        onClick={() => setView('grid')}
        title="Сетка"
        aria-label="Показать сеткой"
        aria-pressed={view === 'grid'}
        className={`
          p-2 rounded-lg
          cursor-pointer
          transition-colors
          ${view === 'grid' ? 'text-blush' : 'text-muted hover:text-ink'}
        `}
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      </button>

      <button
        type="button"
        onClick={() => setView('list')}
        title="Список"
        aria-label="Показать списком"
        aria-pressed={view === 'list'}
        className={`
          p-2 rounded-lg
          cursor-pointer
          transition-colors
          ${view === 'list' ? 'text-blush' : 'text-muted hover:text-ink'}
        `}
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="8" y1="6" x2="21" y2="6" />
          <line x1="8" y1="12" x2="21" y2="12" />
          <line x1="8" y1="18" x2="21" y2="18" />
          <line x1="3" y1="6" x2="3.01" y2="6" />
          <line x1="3" y1="12" x2="3.01" y2="12" />
          <line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
      </button>
    </div>
  );
}