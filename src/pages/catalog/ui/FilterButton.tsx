'use client';

interface FilterButtonProps {
    isOpen: boolean;
    controls: string;
    handleClick: () => void;
}

export default function FilterButton({ isOpen, controls, handleClick }: FilterButtonProps) {
    return (
        <button
            type="button"
            aria-expanded={isOpen}
            aria-controls={controls}
            className='
          lg:hidden
          flex items-center justify-between
          px-5 py-2.5 rounded-full
          border border-border bg-bg
          text-sm text-ink
          cursor-pointer
          transition-colors
          hover:border-blush
          focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring-blush-strong focus-visible:ring-offset-2
        ' onClick={handleClick}>
            Фильтры
        </button>
    )
}
