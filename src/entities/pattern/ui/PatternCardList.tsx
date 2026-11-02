'use client';

import Image from 'next/image';
import Link from 'next/link';

import type { Pattern } from '../model/types';
import { CATEGORY_LABELS, DIFFICULTY_LABELS, DURATION_LABELS } from '../model/labels';

interface PatternCardListProps {
    pattern: Pattern;
}

export function PatternCardList({ pattern }: PatternCardListProps) {
    return (
        <article
            className="
                group flex overflow-hidden min-h-[215px]
                bg-bg rounded-lg
                border border-border
                shadow-card hover:shadow-card-hover
                transition-all duration-300 ease-out
            "
        >
            <Link
                href={`/patterns/${pattern.id}`}
                aria-label={`Открыть ${pattern.title}`}
                className="relative w-24 shrink-0 overflow-hidden bg-cream sm:w-40 lg:w-56"
            >
                <Image
                    src={pattern.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 96px, (max-width: 1024px) 160px, 224px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {pattern.badges.length > 0 && (
                    <div className="absolute left-2 top-2 z-10 hidden flex-wrap gap-1.5 sm:flex">
                        {pattern.badges.map((badge) => (
                            <span
                                key={badge}
                                className="
                                    rounded-full bg-white/90 px-2.5 py-0.5
                                    text-xs font-semibold text-muted backdrop-blur-sm
                                    shadow-[0_2px_8px_rgba(0,0,0,0.04)]
                                "
                            >
                                {badge}
                            </span>
                        ))}
                    </div>
                )}
            </Link>

            <div className="flex min-w-0 flex-1 flex-col gap-2 p-3 sm:gap-3 sm:p-5">
                <Link href={`/patterns/${pattern.id}`} className="block">
                    <h3 className="
                        line-clamp-2 text-base font-semibold leading-snug
                        transition-colors group-hover:text-blush-strong
                        sm:text-xl
                    ">
                        {pattern.title}
                    </h3>
                </Link>

                <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
                    <span>{DIFFICULTY_LABELS[pattern.difficulty]}</span>
                    <span aria-hidden="true">·</span>
                    <span>⏱ {DURATION_LABELS[pattern.duration]}</span>
                    <span aria-hidden="true" className="hidden sm:inline">·</span>
                    <span className="hidden sm:inline">{CATEGORY_LABELS[pattern.category]}</span>
                </p>

                {pattern.description && (
                    <div className="hidden sm:block">
                        <p className="text-sm leading-relaxed text-muted line-clamp-2">
                            {pattern.description}
                        </p>
                    </div>
                )}

                <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-1">
                    <p className="flex flex-col">
                        <span className="hidden text-xs text-muted sm:block">
                            Стоимость выкройки
                        </span>
                        <span className="text-lg font-bold text-ink sm:text-xl">
                            {pattern.price} ₽
                        </span>
                    </p>

                    <button
                        type="button"
                        onClick={() => {
                            // TODO: переход на оплату. вся логика должна быть в features
                        }}
                        className="
                            w-full cursor-pointer rounded-md
                            bg-blush px-6 py-2.5
                            text-sm font-semibold text-ink
                            shadow-button transition-all duration-200
                            hover:bg-blush-hover hover:shadow-button-hover
                            focus-visible:outline-none
                            focus-visible:ring-2 focus-visible:ring-blush-strong focus-visible:ring-offset-2
                            sm:w-auto
                        "
                    >
                        Купить выкройку
                    </button>
                </div>
            </div>
        </article>
    );
}
