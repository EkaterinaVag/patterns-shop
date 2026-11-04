'use client';

import { useEffect, useEffectEvent, useId, useRef } from 'react';
import type { ReactNode } from 'react';

import { useBodyScrollLock } from '@/shared/lib';

type DialogPlacement = 'sheet' | 'center';

interface DialogProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
  placement?: DialogPlacement;
  id?: string;
  className?: string;
}

const placementClasses: Record<DialogPlacement, string> = {
  sheet: 'inset-x-0 bottom-0 top-auto m-0 w-full max-w-none rounded-t-3xl',
  center: 'inset-0 m-auto w-[min(560px,calc(100vw-2rem))] max-w-none rounded-2xl',
};

/**
 * Модальное окно на нативном <dialog>: showModal даёт фокус-трап,
 * инертный фон, Escape и возврат фокуса, а блокировку скролла — useBodyScrollLock.
 * Монтируется по требованию: родитель решает, когда его рендерить.
 */
export function Dialog({
  title,
  onClose,
  children,
  footer,
  placement = 'center',
  id,
  className,
}: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  // Effect Event видит свежий onClose, но не перезапускает эффект
  const closeDialog = useEffectEvent(onClose);

  useBodyScrollLock(true);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!dialog.open) dialog.showModal();

    const handleCancel = (event: Event) => {
      event.preventDefault();
      closeDialog();
    };

    dialog.addEventListener('cancel', handleCancel);

    return () => {
      dialog.removeEventListener('cancel', handleCancel);
      if (dialog.open) dialog.close();
    };
  }, []);

  return (
    <dialog
      id={id}
      ref={dialogRef}
      aria-labelledby={titleId}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className={`
        fixed max-h-[90vh] overflow-hidden bg-bg p-0 text-ink
        hidden open:flex open:flex-col
        backdrop:bg-ink/40 backdrop:backdrop-blur-sm
        ${placementClasses[placement]}
        ${className ?? ''}
      `}
    >
      <div className="flex max-h-[90vh] min-h-0 w-full flex-col">
        <div className="flex items-center justify-between px-6 pb-4 pt-6">
          <h2 id={titleId} className="text-xl font-serif">
            {title}
          </h2>

          <button
            type="button"
            onClick={() => onClose()}
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
          {children}
        </div>

        {footer && (
          <div className="border-t border-border bg-bg p-4">{footer}</div>
        )}
      </div>
    </dialog>
  );
}
