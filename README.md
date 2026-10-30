# Patterns Shop

Каталог выкроек для шитья из фетра. Портфолио-проект на современном фронтенд-стеке.

## Стек

| Категория | Технология |
|-----------|------------|
| Фреймворк | Next.js 16 (App Router) + React 19 |
| Язык | TypeScript (strict) |
| Состояние | Zustand |
| Стили | Tailwind CSS 4 |
| Валидация | Zod |
| Линтинг | ESLint (`eslint-config-next`) |
| Сборщик | Webpack (Turbopack заблокирован корпоративной политикой) |

Тесты (Vitest, Playwright) в проекте пока не подключены.

## Требования к окружению

- **Node.js**: минимум 20.9
- **npm**: 10+
- **ОС**: Windows, macOS, Linux (включая WSL)

### Установка Node.js

Для Windows рекомендую использовать **nvm-windows**:
https://github.com/coreybutler/nvm-windows

После установки:

```bash
nvm install 20.9
nvm use 20.9
```

## Установка проекта

```bash
git clone <url-репозитория>
cd patterns-shop
npm install
```

## Команды проекта

| Команда | Назначение | Режим |
|---------|------------|-------|
| `npm run dev` | Запуск development-сервера | Development |
| `npm run build` | Сборка проекта | Production |
| `npm run start` | Запуск продакшен-сборки | Production |
| `npm run lint` | Проверка кода на соответствие стандартам | Любой |

## Маршруты

| Путь | Назначение | Файл |
|------|------------|------|
| `/` | Главная страница | `app/page.tsx` |
| `/patterns` | Каталог выкроек | `app/patterns/page.tsx` |
| `/api/patterns` | Фильтрация, сортировка и пагинация (мок-данные) | `app/api/patterns/route.ts` |

Роутинг построен на App Router: маршрут — это папка внутри `app/`, страница — файл `page.tsx` в ней.

## Структура проекта

```text
app/                 маршруты App Router, layout, глобальные стили
src/
  entities/          бизнес-сущности (pattern: типы, подписи, карточка)
  features/          пользовательские сценарии (фильтры, переключение вида)
  widgets/           самостоятельные блоки интерфейса (header, footer)
  pages/             композиция страниц (FSD-слой, не путать с Pages Router)
  shared/            переиспользуемое: api, ui, config
public/              статика
```

## Про корневую папку `pages/`

Она пустая и в маршрутизации не участвует. Next.js при старте ищет Pages Router сначала в `pages/` в корне, и только потом в `src/pages/`; эта папка-заглушка не даёт ему принять FSD-слой `src/pages` за Pages Router и упасть с ошибкой «`pages` and `app` directories should be under the same folder».

Удалять её можно только вместе с переименованием `src/pages` (например, в `src/views`) — иначе сборка сломается.
