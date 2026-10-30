'use client';

interface BurgerButtonProps {
    isOpen: boolean;
    controls: string;
    handleClick: () => void;
}

export default function BurgerButton({ isOpen, controls, handleClick }: BurgerButtonProps) {
    return (
        <button
            type="button"
            onClick={handleClick}
            aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isOpen}
            aria-controls={controls}
            className="
                md:hidden
                rounded-md p-1 text-ink cursor-pointer
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-blush-strong focus-visible:ring-offset-2
            "
        >
            <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2.4" aria-hidden="true">
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
        </button>
    )
}
