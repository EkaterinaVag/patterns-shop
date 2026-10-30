'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import BurgerButton from './BurgerButton'
import MobileMenu, { MOBILE_MENU_ID } from './MobileMenu';
import { NAV_ITEMS } from '@/widgets/header/model/navigation';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

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

        <nav aria-label="Основная навигация" className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
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

        <BurgerButton isOpen={isMenuOpen} controls={MOBILE_MENU_ID} handleClick={() => setIsMenuOpen((open) => !open)} />
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </header>
  );
}