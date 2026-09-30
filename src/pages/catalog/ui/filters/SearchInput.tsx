interface SearchInputProps {
  placeholder?: string;
}

export function SearchInput({ placeholder = 'Поиск по выкройкам' }: SearchInputProps) {
  return (
    <div className="relative mb-6">
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>

      <input
        type="text"
        placeholder={placeholder}
        className="
          w-full
          pl-10 pr-4 py-3
          rounded-full
          border border-border
          bg-cream-soft
          text-sm text-ink
          placeholder:text-muted
          focus:outline-none focus:border-blush
          transition-colors
        "
      />
    </div>
  );
}