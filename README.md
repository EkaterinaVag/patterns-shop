# Patterns Shop

Каталог выкроек для шитья. Портфолио-проект на современном фронтенд-стеке.

## Стек

| Категория | Технология |
|-----------|------------|
| Фреймворк | Next.js 16 (App Router) + TypeScript (strict) |
| Состояние | Redux Toolkit + RTK Query |
| Стили | Tailwind CSS + shadcn/ui |
| Валидация | Zod |
| Тесты | Vitest + React Testing Library + MSW + Playwright |
| Сборщик | Webpack (Turbopack заблокирован корпоративной политикой) |

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

### 2. Установка проекта

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
| `npm run start` | Запуск продакшен сборки | Production |
| `npm run lint` | Проверка кода на соответствие стандартам | Любой |
