import { Dropdown } from "@/shared/ui";

const SORT_OPTIONS = [
  { value: 'popular', label: 'Сначала популярные' },
  { value: 'new', label: 'Сначала новые' },
  { value: 'price-asc', label: 'По возрастанию цены' },
  { value: 'price-desc', label: 'По убыванию цены' },
];

export function SortDropdown({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <Dropdown label="Сортировка" options={SORT_OPTIONS} value={value} onChange={onChange} />
  );
}