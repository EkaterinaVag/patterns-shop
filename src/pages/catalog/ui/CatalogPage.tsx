import Image from 'next/image';
import Link from 'next/link';
import { PatternCard } from '@/entities/pattern';
import { MOCK_PATTERNS } from '@/shared/api/mocks/patterns';
import { BreadcrumbItem, Breadcrumbs } from '@/shared/ui/Breadcrumbs';

const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Главная', href: '/' },
    { label: 'Каталог выкроек' },
];

const title = 'Каталог выкроек'

export function CatalogPage() {
    return (
        <>
            <section className="relative left-1/2 -translate-x-1/2 w-screen py-6 md:py-16 text-center bg-cream">
                <div className="mx-auto max-w-7xl px-4">
                    <h1 className="text-3xl lg:text-5xl uppercase mb-5 tracking-wide">
                        {title}
                    </h1>
                    <Breadcrumbs items={breadcrumbs} className="justify-center uppercase tracking-wider" />
                </div>
            </section>
        </>
    );
}