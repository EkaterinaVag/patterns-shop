import { PatternCard } from '@/entities/pattern';
import { Pattern } from '@/entities/pattern/model/types';

import Image from 'next/image';
import Link from 'next/link';

const MOCK_PATTERNS: Pattern[] = [
  { id: '1', title: 'Платье для куклы', image: '/picture.jpg', price: 250, difficulty: 'Легкая', duration: 2, badges: ['Хит'] },
  { id: '2', title: 'Комбинезон детский', image: '/picture.jpg', price: 350, difficulty: 'Средняя', duration: 2, badges: [] },
  { id: '3', title: 'Пальто зимнее', image: '/picture.jpg', price: 550, difficulty: 'Высокая', duration: 2, badges: [] },
  { id: '4', title: 'Ещё один макет', image: '/picture.jpg', price: 350, difficulty: 'Средняя', duration: 5, badges: ['Новинка'] },
];

export function MainPage() {
  return (
    <>
      <section className="relative py-4 lg:py-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="relative z-10">
            <h1 className="text-4xl lg:text-5xl xl:text-[52px] leading-[1.15] mb-4 md:mb-6">
              Создавайте уют<br />своими руками
            </h1>

            <p className="text-base lg:text-[17px] text-muted mb-4 md:mb-10 max-w-md">
              Более 100 готовых выкроек для вашего творчества. Простые и сложные модели для любого уровня мастерства.
            </p>

            <Link
              href="/patterns"
              className="
              inline-block w-full md:w-auto
              bg-blush hover:bg-blush-hover
              text-white font-bold text-center
              px-8 py-4 rounded-full
              shadow-button hover:shadow-button-hover
              transition-all duration-300
              hover:-translate-y-0.5
            "
            >
              Смотреть все выкройки
            </Link>
          </div>

          <div className="relative hidden md:flex justify-center items-center h-[300px] lg:h-[450px] z-1">
            <div
              className="
              absolute -right-12 top-[5%]
              w-[550px] h-[550px]
              bg-blush opacity-35
              rounded-full
              blur-[100px]
              z-0
              pointer-events-none
            "
              aria-hidden="true"
            />

            <Image
              src="/main-hero.png"
              alt="Иллюстрация: ножницы и ткань"
              width={400}
              height={400}
              priority
              className="
              relative z-10
              h-4/5 w-auto max-w-full
              object-contain
              rounded-3xl
              drop-shadow-[5px_5px_10px_rgba(0,0,0,0.15)]
            "
            />
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl">Популярные шаблоны</h2>
          <Link
            href="/patterns?sort=popular"
            className="text-blush hover:text-blush-hover transition-colors text-sm font-medium whitespace-nowrap"
          >
            Посмотреть всё →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_PATTERNS.map((pattern) => (
            <PatternCard key={pattern.id} pattern={pattern} />
          ))}
        </div>
      </section>

      <section className="py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl">Новые выкройки</h2>
          <Link
            href="/patterns?sort=new"
            className="text-blush hover:text-blush-hover transition-colors text-sm font-medium whitespace-nowrap"
          >
            Посмотреть всё →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_PATTERNS.map((pattern) => (
            <PatternCard key={pattern.id} pattern={pattern} />
          ))}
        </div>
      </section>
    </>
  );
}