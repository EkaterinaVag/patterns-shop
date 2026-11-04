'use client';
import { useState } from "react";

import { SortDropdown } from "./SortDropdown";
import { ViewToggle } from "./ViewToggle";
import { FilterButton } from "./FilterButton";
import { FilterModal } from "../filters/FilterModal";

interface CatalogToolbarProps {
    count: number;
}

const FILTER_MODAL_ID = 'catalog-filters';

export function CatalogToolbar({ count }: CatalogToolbarProps) {
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [sort, setSort] = useState('popular');

    return (
        <div className="flex lg:items-center items-start justify-between mb-6 flex-wrap gap-4 border-b border-border pb-3 flex-col-reverse lg:flex-row">
            <div className="flex flex-wrap gap-2">
                <FilterButton
                    isOpen={isFilterOpen}
                    controls={FILTER_MODAL_ID}
                    handleClick={() => { setIsFilterOpen(true) }}
                />
                <SortDropdown value={sort} onChange={setSort} />
            </div>

            <div className="flex gap-6 items-center justify-between w-full lg:w-fit">
                <p className="text-sm text-muted">
                    Найдено {count} выкроек
                </p>

                <ViewToggle />
            </div>

            {isFilterOpen && <FilterModal id={FILTER_MODAL_ID} onClose={() => { setIsFilterOpen(false) }} />}
        </div>
    );
}
