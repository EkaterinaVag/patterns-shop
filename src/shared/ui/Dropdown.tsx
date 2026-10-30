'use client';

import { useId, useRef, useState } from 'react';

export interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function Dropdown({
  options,
  defaultValue,
  onChange,
  className,
}: DropdownProps) {
  const [selected, setSelected] = useState(defaultValue ?? options[0]?.value ?? '');
  const popoverRef = useRef<HTMLDivElement>(null);

  const uid = useId().replace(/:/g, '');
  const popoverId = `dropdown-${uid}`;
  const anchorName = `--dropdown-${uid}`;

  const selectedLabel = options.find((o) => o.value === selected)?.label ?? '';

  function handleSelect(value: string) {
    setSelected(value);
    onChange?.(value);
    popoverRef.current?.hidePopover();
  }

  return (
    <div className={`relative ${className ?? ''}`}>
      <button
        type="button"
        popoverTarget={popoverId}
        popoverTargetAction="toggle"
        aria-haspopup="listbox"
        style={{ anchorName }}
        className="
          flex items-center justify-between
          px-5 py-2.5 rounded-full
          border border-border bg-bg
          text-sm text-ink
          cursor-pointer
          transition-colors
          hover:border-blush
          focus-visible:outline-none
          min-w-[200px]
        "
      >
        <span>Сортировка:&nbsp;</span>
        <span className="font-medium">{selectedLabel}</span>
        <svg
          className="w-4 h-4 text-muted ms-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <div
        ref={popoverRef}
        id={popoverId}
        popover="auto"
        role="listbox"
        aria-label="Сортировка"
        style={{ positionAnchor: anchorName }}
        className="
          w-min min-w-[280px]
          bg-bg
          border border-border
          rounded-2xl
          shadow-card-hover
          py-2
          [position-area:bottom]
          [margin:0]
        "
      >
        {options.map((option) => {
          const isActive = option.value === selected;
          return (
            <button
              key={option.value}
              type="button"
              role="option"
              aria-selected={isActive}
              onClick={() => handleSelect(option.value)}
              className={`
                w-full text-left
                cursor-pointer
                px-5 py-2.5
                text-sm
                transition-colors
                ${
                  isActive
                    ? 'text-blush-strong font-semibold'
                    : 'text-ink hover:bg-cream'
                }
              `}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
