'use client';

import { useEffect, useEffectEvent } from 'react';

import { Dialog } from '@/shared/ui';
import { FiltersPanel } from './FiltersPanel';

interface FilterModalProps {
  id: string;
  onClose: () => void;
}

export function FilterModal({ id, onClose }: FilterModalProps) {
  const closeModal = useEffectEvent(onClose);

  // на десктопе шторка не нужна: если окно расширили при открытых фильтрах — закрываем
  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)');
    const handleChange = () => {
      if (media.matches) closeModal();
    };

    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  return (
    <Dialog
      id={id}
      title="Фильтры"
      placement="sheet"
      onClose={onClose}
      className="lg:hidden"
      footer={
        <button
          type="button"
          onClick={() => onClose()}
          className="
            w-full rounded-full bg-blush py-3 font-semibold text-ink
            transition-colors hover:bg-blush-hover cursor-pointer
            focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-blush-strong focus-visible:ring-offset-2
          "
        >
          Применить
        </button>
      }
    >
      <FiltersPanel idPrefix="filters-mobile" />
    </Dialog>
  );
}
