'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export type FilterKey = 'category' | 'difficulty' | 'duration' | 'sort' | 'search';

export function useFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname() ?? '/patterns';

  const setFilter = useCallback(
    (key: FilterKey, value: string | null) => {
      const params = new URLSearchParams(searchParams?.toString() ?? '');

      if (value) params.set(key, value);
      else params.delete(key);

      params.delete('page');

      const query = params.toString();
      router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const getFilter = useCallback(
    (key: FilterKey) => searchParams?.get(key) ?? null,
    [searchParams],
  );

  return { setFilter, getFilter };
}
