import Link from 'next/link';

const NAV_ITEMS = [
  { href: '/', label: 'Главная' },
  { href: '/patterns', label: 'Каталог выкроек' },
  { href: '/blog', label: 'Блог' },
  { href: '/contacts', label: 'Контакты' },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50
        bg-white/75 backdrop-blur-md
        border-b border-border">
      <div className="mx-auto max-w-7xl px-4 h-18 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight font-serif"
        >
          <span className="text-ink">Felt</span>
          <span className="text-blush"> Patterns</span>
        </Link>

        <nav className="flex gap-8 text-sm font-medium">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted hover:text-ink transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}