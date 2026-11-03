'use client';

import { useEffect, useId, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';

export interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  label: string;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

type PopoverToggleEvent = Event & { newState?: 'open' | 'closed' };

export function Dropdown({
  label,
  options,
  value,
  onChange,
  className,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const uid = useId().replace(/:/g, '');
  const popoverId = `dropdown-${uid}`;
  const anchorName = `--dropdown-${uid}`;

  const selectedIndex = Math.max(0, options.findIndex((option) => option.value === value));
  const selectedLabel = options[selectedIndex]?.label ?? '';

  function focusOption(index: number) {
    if (options.length === 0) return;
    const next = (index + options.length) % options.length;
    optionRefs.current[next]?.focus();
  }

  function openPopover() {
    const popover = popoverRef.current;
    if (!popover || popover.matches(':popover-open')) return;
    popover.showPopover();
  }

  function closePopover(restoreFocus = false) {
    const popover = popoverRef.current;
    if (popover?.matches(':popover-open')) popover.hidePopover();
    if (restoreFocus) triggerRef.current?.focus();
  }

  useEffect(() => {
    const popover = popoverRef.current;
    if (!popover) return;

    const handleToggle = (event: Event) => {
      const isOpenNow = (event as PopoverToggleEvent).newState === 'open';
      setIsOpen(isOpenNow);

      if (isOpenNow) {
        requestAnimationFrame(() => {
          optionRefs.current[selectedIndex]?.focus();
        });
      }
    };

    popover.addEventListener('toggle', handleToggle);
    return () => popover.removeEventListener('toggle', handleToggle);
  }, [selectedIndex]);

  function handleListKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const currentIndex = optionRefs.current.findIndex((el) => el === document.activeElement);

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        focusOption(currentIndex === -1 ? selectedIndex + 1 : currentIndex + 1);
        break;
      case 'ArrowUp':
        event.preventDefault();
        focusOption(currentIndex === -1 ? selectedIndex - 1 : currentIndex - 1);
        break;
      case 'Home':
        event.preventDefault();
        focusOption(0);
        break;
      case 'End':
        event.preventDefault();
        focusOption(options.length - 1);
        break;
      case 'Escape':
        event.preventDefault();
        closePopover(true);
        break;
      case 'Tab':
        // закрываем, но не мешаем браузеру уйти к следующему элементу от кнопки
        closePopover(true);
        break;
      default:
        break;
    }
  }

  return (
    <div className={`relative ${className ?? ''}`}>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={popoverId}
        onClick={() => (isOpen ? closePopover() : openPopover())}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault();
            openPopover();
          }
        }}
        style={{ anchorName }}
        className="
          flex items-center justify-between
          px-4 py-2.5 rounded-full
          border border-border bg-bg
          text-sm text-ink
          cursor-pointer
          transition-colors
          hover:border-blush
          focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring-blush-strong focus-visible:ring-offset-2
          min-w-[200px]
        "
      >
        <span>{label}:&nbsp;</span>
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
        aria-label={label}
        onKeyDown={handleListKeyDown}
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
        {options.map((option, index) => {
          const isActive = option.value === value;
          return (
            <button
              key={option.value}
              ref={(element) => {
                optionRefs.current[index] = element;
              }}
              type="button"
              role="option"
              aria-selected={isActive}
              tabIndex={-1}
              onClick={() => {
                onChange(option.value);
                closePopover(true);
              }}
              className={`
                w-full text-left
                cursor-pointer
                px-5 py-2.5
                text-sm
                transition-colors
                focus-visible:outline-none focus-visible:bg-cream
                ${isActive
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
