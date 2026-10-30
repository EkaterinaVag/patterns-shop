'use client';

import { CATEGORIES, DIFFICULTIES, DURATIONS } from "@/features/filter-patterns/model/constants";
import { FilterGroup } from "./filters/FilterGroup";
import { FilterPill } from "./filters/FilterPill";

interface FilterModalProps {
  onClose: () => void;
}

export function FilterModal({ onClose }: FilterModalProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-end lg:items-center justify-center lg:hidden">
            <div
                className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
                onClick={onClose}
                aria-hidden="true"
            />

            <div className="relative bg-bg rounded-t-3xl w-full max-h-[90vh] overflow-y-auto p-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-serif">Фильтры</h2>
                    <button
                        onClick={onClose}
                        aria-label="Закрыть"
                        className="p-2 text-muted hover:text-ink cursor-pointer"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                <FilterGroup title="Категории">
                    {CATEGORIES.map((cat) => (
                        <FilterPill key={cat.id} id={cat.id} label={cat.label} name="category" />
                    ))}
                </FilterGroup>

                <FilterGroup title="Сложность">
                    {DIFFICULTIES.map((diff) => (
                        <FilterPill key={diff.id} id={diff.id} label={diff.label} name="difficulty" />
                    ))}
                </FilterGroup>

                <FilterGroup title="Время изготовления">
                    {DURATIONS.map((dur) => (
                        <FilterPill key={dur.id} id={dur.id} label={dur.label} name="duration" />
                    ))}
                </FilterGroup>

                <button
                    onClick={onClose}
                    className="w-full mt-6 bg-blush hover:bg-blush-hover text-white font-semibold py-3 rounded-full transition-colors cursor-pointer"
                >
                    Применить
                </button>
            </div>
        </div>
    );
}