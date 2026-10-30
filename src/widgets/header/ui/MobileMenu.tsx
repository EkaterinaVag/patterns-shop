'use client';

import Link from 'next/link';

import { NAV_ITEMS } from '@/widgets/header/model/navigation';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    return (
        <div
            className={`
                    fixed top-0 right-0 w-full
                    bg-bg z-50 shadow-2xl p-6
                    flex flex-col
                    transition-transform duration-300 ease-in-out md:hidden
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                 `}
        >
            <button
                onClick={onClose}
                className="self-end mb-8 p-2 text-muted hover:text-ink cursor-pointer"
                aria-label="Закрыть меню"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>

            <nav className="flex flex-col gap-6 text-lg font-medium tracking-wide text-right">
                {NAV_ITEMS.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={onClose}
                        className="text-ink hover:text-blush transition-colors"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </div>
    );
}