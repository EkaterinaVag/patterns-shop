import { Dropdown } from "@/shared/ui/Dropdown";
import { ViewToggle } from "./ViewToggle";

interface CatalogToolbarProps {
    count: number;
}

const SORT_OPTIONS = [
    { value: 'popular', label: 'Сначала популярные' },
    { value: 'new', label: 'Сначала новые' },
    { value: 'price-asc', label: 'По возрастанию цены' },
    { value: 'price-desc', label: 'По убыванию цены' },
];

export function CatalogToolbar({ count }: CatalogToolbarProps) {
    return (
        <div className="flex lg:items-center items-start justify-between mb-6 flex-wrap gap-4 border-b border-border pb-3 flex-col-reverse lg:flex-row">
            <Dropdown
                options={SORT_OPTIONS}
                defaultValue="popular"
            // onChange={(value) => {
            //     // TODO: обновить URL
            //     console.log('sort:', value);
            // }}
            />

            <div className="flex gap-6 items-center justify-between w-full lg:w-fit">
                <p className="text-sm text-muted">
                    Найдено {count} выкроек
                </p>

                <ViewToggle />
            </div>
        </div>
    );
}