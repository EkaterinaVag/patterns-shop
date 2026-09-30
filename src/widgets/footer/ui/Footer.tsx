// src/widgets/Footer/ui/Footer.tsx
import Link from 'next/link';

const NAV_LINKS = [
    { href: '/about', label: 'О проекте' },
    { href: '/patterns', label: 'Каталог' },
    { href: '/blog', label: 'Блог' },
] as const;

const HELP_LINKS = [
    { href: '/faq', label: 'Вопросы и ответы' },
    { href: '/contacts', label: 'Контакты' },
    { href: '/privacy', label: 'Политика конфиденциальности' },
] as const;

export function Footer() {
    return (
        <footer className="bg-cream border-t border-border mt-auto">
            <div className="mx-auto max-w-7xl px-4 py-12">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-10 mb-10">
                    <div>
                        <div className="font-serif text-2xl text-ink mb-4">
                            <span>Felt</span>
                            <span className="text-blush"> Patterns</span>
                        </div>
                        <p className="text-sm text-muted max-w-xs">
                            Создаем уют своими руками с 2020 года.
                        </p>
                    </div>

                    <div className='tracking-wide'>
                        <h4 className="font-semibold text-ink mb-4">Навигация</h4>
                        <ul className="space-y-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted hover:text-blush transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='tracking-wide'>
                        <h4 className="font-semibold text-ink mb-4">Помощь</h4>
                        <ul className="space-y-3">
                            {HELP_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted hover:text-blush transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-6 text-center">
                    <p className="text-sm text-muted">© Copyright 2026 Felt Patterns</p>
                </div>
            </div>
        </footer>
    );
}