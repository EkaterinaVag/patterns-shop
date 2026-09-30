import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Хлебные крошки"
      className={className}
    >
      <ol className="flex items-center gap-2 text-sm text-muted justify-center">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-ink transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-blush">{item.label}</span>
              )}

              {!isLast && (
                <span aria-hidden="true" className="text-subtle">
                  ›
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}