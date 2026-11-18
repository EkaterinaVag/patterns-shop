import { CatalogPage } from '@/pages/catalog';

export default function Page({ searchParams }: PageProps<'/patterns'>) {
  return <CatalogPage searchParams={searchParams} />;
}
