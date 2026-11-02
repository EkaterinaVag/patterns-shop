'use client';

import { useEffect, useId, useRef } from 'react';

import { FiltersPanel } from './FiltersPanel';

interface FilterModalProps {
  id: string;
  onClose: () => void;
}

export function FilterModal({ id, onClose }: FilterModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const onCloseRef = useRef(onClose);

  const titleId = useId();

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!dialog.open) dialog.showModal();

    const handleCancel = (event: Event) => {
      event.preventDefault();
      onCloseRef.current();
    };

    dialog.addEventListener('cancel', handleCancel);

    return () => {
      dialog.removeEventListener('cancel', handleCancel);
      if (dialog.open) dialog.close();
    };
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)');
    const handleChange = () => {
      if (media.matches) onCloseRef.current();
    };

    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  return (
    <dialog
      id={id}
      ref={dialogRef}
      aria-labelledby={titleId}
      onClick={(event) => {
        if (event.target === event.currentTarget) onCloseRef.current();
      }}
      className="
        fixed inset-x-0 bottom-0 top-auto m-0 w-full max-w-none
        max-h-[90vh] overflow-hidden rounded-t-3xl bg-bg p-0 text-ink
        hidden open:flex open:flex-col
        backdrop:bg-ink/40 backdrop:backdrop-blur-sm
        lg:hidden
      "
    >
      <div className="flex max-h-[90vh] min-h-0 w-full flex-col">
        <div className="flex items-center justify-between px-6 pb-4 pt-6">
          <h2 id={titleId} className="text-xl font-serif">Фильтры</h2>
          <button
            type="button"
            onClick={() => onCloseRef.current()}
            aria-label="Закрыть"
            className="
              rounded-md p-2 text-muted hover:text-ink cursor-pointer
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-blush-strong focus-visible:ring-offset-2
            "
          >
            <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6">
          <FiltersPanel idPrefix="filters-mobile" />
        </div>

        <div className="border-t border-border bg-bg p-4">
          <button
            type="button"
            onClick={() => onCloseRef.current()}
            className="
              w-full rounded-full bg-blush py-3 font-semibold text-ink
              transition-colors hover:bg-blush-hover cursor-pointer
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-blush-strong focus-visible:ring-offset-2
            "
          >
            Применить
          </button>
        </div>
      </div>
    </dialog>
  );
}
