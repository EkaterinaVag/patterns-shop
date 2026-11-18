import { notFound } from 'next/navigation';

import { getPatterns } from '@/features/filter-patterns';

import { FilterSidebar } from './filters/FilterSidebar';
import { CatalogToolbar } from './toolbar/CatalogToolbar';

import { BreadcrumbItem, Breadcrumbs } from '@/shared/ui';
import { CatalogGrid } from './CatalogGrid';
import { Pagination } from './Pagination';

const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Главная', href: '/' },
    { label: 'Каталог выкроек' },
];

const title = 'Каталог выкроек';

interface CatalogPageProps {
    searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export async function CatalogPage({ searchParams }: CatalogPageProps) {
    const result = getPatterns(await searchParams);
    const data = result.ok ? result : getPatterns({});

    if (!data.ok) notFound();

    const { items, total, totalPages } = data.data;

    return (
        <>
            <section
                className="
                    w-screen
                    py-6 md:py-16
                    text-center
                    bg-cream
                    border-b border-border
                    [margin-left:calc(-50vw+49.3%)]
                    [margin-right:calc(-50vw+50%)]
                "
            >
                <div className="mx-auto max-w-7xl px-4">
                    <h1 className="text-3xl lg:text-5xl uppercase mb-5 tracking-wide">
                        {title}
                    </h1>
                    <Breadcrumbs items={breadcrumbs} className="justify-center uppercase tracking-wider" />
                </div>
            </section>

            <section className="py-12">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
                        <FilterSidebar />

                        <div>
                            <CatalogToolbar count={total} />

                            {items.length > 0 ? (
                                <CatalogGrid patterns={items} />
                            ) : (
                                <p className="py-16 text-center text-muted">
                                    По выбранным фильтрам ничего не нашлось.
                                </p>
                            )}

                            <Pagination totalPages={totalPages} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
