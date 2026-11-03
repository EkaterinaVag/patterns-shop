'use client';

import Link from 'next/link';
import { useEffect, useEffectEvent, useRef } from 'react';
import type { RefObject } from 'react';

import { NAV_ITEMS } from '@/widgets/header/model/navigation';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    triggerRef: RefObject<HTMLButtonElement | null>;
}

export const MOBILE_MENU_ID = 'mobile-menu';

export function MobileMenu({ isOpen, onClose, triggerRef }: MobileMenuProps) {
    const panelRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    // закрытие меню всегда возвращает фокус на бургер
    const closeMenu = () => {
        onClose();
        triggerRef.current?.focus();
    };

    // Effect Event видит актуальный closeMenu, но не перезапускает эффект
    const closeMenuFromEffect = useEffectEvent(closeMenu);

    useEffect(() => {
        if (!isOpen) return;

        // фокус уходит в открывшуюся панель, а не остаётся на бургере
        closeButtonRef.current?.focus();

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeMenuFromEffect();
                return;
            }

            if (event.key !== 'Tab') return;

            const panel = panelRef.current;
            if (!panel) return;

            const focusable = Array.from(
                panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
            );
            if (focusable.length === 0) return;

            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            const active = document.activeElement;

            // фокус оказался вне панели — заводим его внутрь
            if (!panel.contains(active)) {
                event.preventDefault();
                (event.shiftKey ? last : first).focus();
                return;
            }

            if (event.shiftKey && active === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && active === last) {
                event.preventDefault();
                first.focus();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    return (
        <div
            id={MOBILE_MENU_ID}
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Меню"
            inert={!isOpen}
            className={`
                    fixed inset-y-0 right-0 w-full overflow-y-auto
                    bg-bg z-50 shadow-2xl p-6
                    flex flex-col
                    transition-transform duration-300 ease-in-out md:hidden
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                 `}
        >
            <button
                type="button"
                ref={closeButtonRef}
                onClick={closeMenu}
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
                        onClick={closeMenu}
                        className="text-ink hover:text-blush-strong transition-colors"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
