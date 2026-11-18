import { type NextRequest, NextResponse } from 'next/server';

import { getPatterns } from '@/features/filter-patterns';

export async function GET(request: NextRequest) {
    const result = getPatterns(Object.fromEntries(request.nextUrl.searchParams));

    if (!result.ok) {
        return NextResponse.json({ error: 'Invalid params' }, { status: 400 });
    }

    return NextResponse.json(result.data);
}
