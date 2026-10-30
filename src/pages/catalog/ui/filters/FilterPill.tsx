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
        hover:border-blush hover:text-blush-strong
        has-[:checked]:bg-blush has-[:checked]:text-ink has-[:checked]:border-blush
        has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-blush-strong has-[:focus-visible]:ring-offset-2
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
