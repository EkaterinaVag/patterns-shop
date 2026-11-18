'use client';

import { useEffect, useState } from 'react';

import { useFilters } from '@/features/filter-patterns';

interface SearchInputProps {
  placeholder?: string;
}

export function SearchInput({ placeholder = 'Поиск по выкройкам' }: SearchInputProps) {
  const { getFilter, setFilter } = useFilters();
  const urlValue = getFilter('search') ?? '';
  const [value, setValue] = useState(urlValue);
  const [syncedUrlValue, setSyncedUrlValue] = useState(urlValue);

  // если URL изменился извне (назад/вперёд), подстраиваем поле во время рендера
  // https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes
  if (urlValue !== syncedUrlValue) {
    setSyncedUrlValue(urlValue);
    setValue(urlValue);
  }

  // дебаунс, чтобы не пушить историю на каждую букву
  useEffect(() => {
    if (value === urlValue) return;

    const timeout = setTimeout(() => {
      setFilter('search', value.trim() || null);
    }, 300);

    return () => clearTimeout(timeout);
  }, [value, urlValue, setFilter]);

  return (
    <div className="relative mb-6">
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>

      <input
        type="search"
        name="search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        aria-label={placeholder}
        placeholder={placeholder}
        className="
          w-full
          pl-10 pr-4 py-3
          rounded-full
          border border-border
          bg-cream-soft
          text-sm text-ink
          placeholder:text-muted
          focus:outline-none focus:border-blush
          focus-visible:ring-2 focus-visible:ring-blush-strong focus-visible:ring-offset-2
          transition-colors
        "
      />
    </div>
  );
}
