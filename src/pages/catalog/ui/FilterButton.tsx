'use client';

interface FilterButtonProps {
    handleClick: () => void;
}

export default function FilterButton({ handleClick }: FilterButtonProps) {
    return (
        <button className='
          md:hidden
          flex items-center justify-between
          px-5 py-2.5 rounded-full
          border border-border bg-bg
          text-sm text-ink
          cursor-pointer
          transition-colors
          hover:border-blush
          focus:outline-none focus:border-blush
        ' onClick={handleClick}>
            Фильтры
        </button>
    )
}