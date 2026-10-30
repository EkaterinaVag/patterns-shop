'use client';

import Link from 'next/link';
import { useEffect } from 'react';

import { NAV_ITEMS } from '@/widgets/header/model/navigation';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export const MOBILE_MENU_ID = 'mobile-menu';

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    return (
        <>
            <div
                onClick={onClose}
                aria-hidden="true"
                className={`
                    fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm md:hidden
                    transition-opacity duration-300
                    ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}
                `}
            />

            <div
                id={MOBILE_MENU_ID}
                inert={!isOpen}
                className={`
                    fixed top-0 right-0 w-full
                    bg-bg z-50 shadow-2xl p-6
                    flex flex-col
                    transition-transform duration-300 ease-in-out md:hidden
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                 `}
            >
                <button
                    type="button"
                    onClick={onClose}
                    className="
                        self-end mb-8 p-2 text-muted hover:text-ink cursor-pointer
                        rounded-md
                        focus-visible:outline-none
                        focus-visible:ring-2 focus-visible:ring-blush-strong focus-visible:ring-offset-2
                    "
                    aria-label="Закрыть меню"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" aria-hidden="true">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <nav
                    aria-label="Мобильная навигация"
                    className="flex flex-col gap-6 text-lg font-medium tracking-wide text-right"
                >
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={onClose}
                            className="text-ink hover:text-blush-strong transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
}
