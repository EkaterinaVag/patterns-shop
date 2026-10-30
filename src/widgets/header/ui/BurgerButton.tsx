'use client';

interface BurgerButtonProps {
    handleClick: () => void;
}

export default function BurgerButton({ handleClick }: BurgerButtonProps) {
    return (
        <button className='md:hidden text-ink cursor-pointer' onClick={handleClick}>
            <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2.4">
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
        </button>
    )
}