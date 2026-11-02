'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

interface PaginationProps {
  totalPages: number;
}

const buttonClass =
  'flex h-10 min-w-10 items-center justify-center rounded-full border px-3 text-sm transition-colors';

function Arrow({
  href,
  direction,
  disabled,
}: {
  href: string;
  direction: 'prev' | 'next';
  disabled: boolean;
}) {
  const icon = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points={direction === 'prev' ? '15 18 9 12 15 6' : '9 18 15 12 9 6'} />
    </svg>
  );

  if (disabled) {
    return (
      <span aria-hidden="true" className={`${buttonClass} border-border text-subtle`}>
        {icon}
      </span>
    );
  }

  return (
    <Link
      href={href}
      aria-label={direction === 'prev' ? 'Предыдущая страница' : 'Следующая страница'}
      className={`${buttonClass} border-border text-ink hover:border-blush`}
    >
      {icon}
    </Link>
  );
}

export function Pagination({ totalPages }: PaginationProps) {
  const pathname = usePathname() ?? '/patterns';
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams?.get('page')) || 1;
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams ?? undefined);

    // первую страницу не пишем в URL
    if (pageNumber <= 1) params.delete('page');
    else params.set('page', String(pageNumber));

    const query = params.toString();
    return query ? `${pathname}?${query}` : pathname;
  };

  if (totalPages <= 1) return null;

  return (
    <nav aria-label="Пагинация" className="mt-10 flex items-center justify-center gap-2">
      <Arrow href={createPageURL(safePage - 1)} direction="prev" disabled={safePage <= 1} />

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) =>
        page === safePage ? (
          <span
            key={page}
            aria-current="page"
            className={`${buttonClass} border-blush bg-blush font-semibold text-ink`}
          >
            {page}
          </span>
        ) : (
          <Link
            key={page}
            href={createPageURL(page)}
            className={`${buttonClass} border-border text-ink hover:border-blush`}
          >
            {page}
          </Link>
        ),
      )}

      <Arrow href={createPageURL(safePage + 1)} direction="next" disabled={safePage >= totalPages} />
    </nav>
  );
}
