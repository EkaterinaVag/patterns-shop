import { type NextRequest, NextResponse } from 'next/server';
import { FilterSchema } from '@/features/filter-patterns';
import { MOCK_PATTERNS, type PaginatedResponse } from '@/shared/api';
import type { Pattern } from '@/entities/pattern';

export async function GET(request: NextRequest) {
    const searchParams = Object.fromEntries(request.nextUrl.searchParams);
    const result = FilterSchema.safeParse(searchParams)

    if (!result.success) {
        return NextResponse.json({ error: 'Invalid params' }, { status: 400 });
    }

    const { category, difficulty, duration, sort, page, search } = result.data;

    const filtered = MOCK_PATTERNS.filter((pattern) => {
        if (category && pattern.category !== category) return false;
        if (difficulty && pattern.difficulty !== difficulty) return false;
        if (duration && pattern.duration !== duration) return false;
        if (search && !pattern.title.toLowerCase().includes(search.toLowerCase())) return false;
        return true;
    });

    if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    if (sort === 'new') filtered.sort((a, b) => b.createdAt - a.createdAt);
    if (sort === 'popular') filtered.sort((a, b) => b.views - a.views);

    const LIMIT = 9;
    const start = (page - 1) * LIMIT;
    const items = filtered.slice(start, start + LIMIT);

    const response: PaginatedResponse<Pattern> = {
        items,
        total: filtered.length,
        page,
        totalPages: Math.ceil(filtered.length / LIMIT),
        limit: LIMIT,
    };

    return NextResponse.json(response);
}