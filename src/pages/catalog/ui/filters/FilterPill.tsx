interface FilterPillProps {
  id: string;
  label: string;
  name: string;
}

export function FilterPill({ id, label, name }: FilterPillProps) {
  return (
    <label
      htmlFor={id}
      className="
        inline-flex items-center gap-2
        px-4 py-2 rounded-full
        border border-border
        bg-cream-soft
        text-sm text-ink
        cursor-pointer
        transition-colors
        hover:border-blush hover:text-blush
        has-[:checked]:bg-blush has-[:checked]:text-white has-[:checked]:border-blush
      "
    >
      <input
        type="checkbox"
        id={id}
        name={name}
        className="sr-only"
      />
      {label}
    </label>
  );
}