import { FilterSidebar } from './FilterSidebar';
import { CatalogToolbar } from './CatalogToolbar';

import { BreadcrumbItem, Breadcrumbs } from '@/shared/ui';
import { MOCK_PATTERNS } from '@/shared/api';
import { PatternCard } from '@/entities/pattern';

const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Главная', href: '/' },
    { label: 'Каталог выкроек' },
];

const title = 'Каталог выкроек'

export function CatalogPage() {
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
                            <CatalogToolbar count={MOCK_PATTERNS.length} />
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {MOCK_PATTERNS.map((pattern) => (
                                    <PatternCard key={pattern.id} pattern={pattern} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}