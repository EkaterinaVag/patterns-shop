'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Pattern } from '../index';

interface PatternCardProps {
    pattern: Pattern;
}

export function PatternCard({ pattern }: PatternCardProps) {
    return (
        <article
            className="
                group flex flex-col
                bg-bg rounded-lg overflow-hidden
                border border-border
                shadow-card hover:shadow-card-hover
                transition-all duration-300 ease-out
            "
        >

            <Link
                href={`/patterns/${pattern.id}`}
                className="relative block aspect-square bg-cream overflow-hidden"
                aria-label={`Открыть ${pattern.title}`}
            >
                <Image
                    src={pattern.image}
                    alt={pattern.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {pattern.badges.length > 0 && (
                    <div className="absolute top-3 left-3 flex gap-2 flex-wrap z-10">
                        {pattern.badges.map((badge) => (
                            <span
                                key={badge}
                                className="
                                    bg-white/90 backdrop-blur-sm
                                    px-3 py-1 rounded-[20px]
                                    text-xs font-semibold text-muted
                                    shadow-[0_2px_8px_rgba(0,0,0,0.04)]
                                    "
                            >
                                {badge}
                            </span>
                        ))}
                    </div>
                )}
            </Link>

            <div className="p-5 flex flex-col flex-grow">
                <Link
                    href={`/patterns/${pattern.id}`}
                    className="mb-3 block"
                >
                    <h3 className="text-xl line-clamp-2 group-hover:text-blush transition-colors">
                        {pattern.title}
                    </h3>
                </Link>

                <div className="
                    flex justify-between
                    text-xs text-muted
                    mb-2 pb-3
                    border-b border-border
                    ">
                    <span>Сложность: {pattern.difficulty}</span>
                    <span>⏱ {pattern.duration ?? 2} часа</span>
                </div>

                <div className="flex items-baseline justify-between mt-auto mb-4">
                    <span className="text-xs text-muted">Стоимость выкройки</span>
                    <span className="font-bold text-ink text-xl">
                        {pattern.price} ₽
                    </span>
                </div>

                <button
                    type="button"
                    onClick={() => {
                        // TODO: переход на оплату
                    }}
                    className="
                        w-full
                        bg-blush hover:bg-blush-hover cursor-pointer
                        text-white font-semibold text-sm
                        py-3 rounded-md
                        shadow-button hover:shadow-button-hover
                        transition-all duration-200
                    "
                >
                    Купить выкройку
                </button>
            </div>
        </article>
    );
}