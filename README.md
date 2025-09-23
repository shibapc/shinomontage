# 🚗 Эвакуатор в Ростове-на-Дону - Круглосуточная служба эвакуации

Современный рекламный сайт службы эвакуации с интеграцией Telegram бота для приема заказов.

## 🎯 Особенности

- **Локальный SEO** - оптимизирован для Ростова-на-Дону
- **Адаптивный дизайн** - работает на всех устройствах  
- **Telegram интеграция** - заказы сразу приходят в Telegram
- **Feature-Sliced Design** - чистая архитектура кода
- **Современные технологии** - React 18 + TypeScript + Tailwind CSS

## 🚀 Быстрый старт

### 1. Установка зависимостей
```bash
npm install
```

### 2. Настройка Telegram бота
```bash
# Скопируйте файл с примером
cp .env.example .env

# Заполните настройки бота в .env файле
VITE_TELEGRAM_BOT_TOKEN=ваш_токен_бота
VITE_TELEGRAM_CHAT_ID=ваш_chat_id
```

### 3. Запуск в режиме разработки
```bash
npm run dev
```

### 4. Сборка для продакшена
```bash
npm run build
```

## 🏗 Архитектура (FSD)

```
src/
├── App.tsx              # Корневой компонент
├── main.tsx            # Точка входа
├── index.css           # Глобальные стили
├── pages/              # Страницы
│   └── home/
│       └── HomePage.tsx
├── widgets/            # Крупные блоки интерфейса
│   ├── header/        # Шапка сайта
│   ├── hero/          # Главный слайдер  
│   ├── services/      # Секция услуг
│   ├── pricing/       # Таблица цен
│   └── order-form/    # Форма заказа
└── shared/            # Общие ресурсы
    ├── assets/        # Изображения
    └── api/           # API слой (Telegram)
```

## 🛠 Технологии

- **Frontend:** React 18 + TypeScript
- **Стили:** Tailwind CSS v4
- **Сборка:** Vite
- **Формы:** React Hook Form + Yup
- **Архитектура:** Feature-Sliced Design
- **Уведомления:** Telegram Bot API

## 📱 SEO и производительность

- ✅ Локальный SEO для Ростова-на-Дону
- ✅ Структурированные данные (Schema.org)
- ✅ Оптимизация изображений (WebP)
- ✅ Минификация кода
- ✅ Ленивая загрузка изображений

## 🔧 Разработка

### Добавление новых виджетов
```bash
# Создайте папку в widgets/
mkdir src/widgets/new-widget

# Добавьте компонент и модель
src/widgets/new-widget/
├── NewWidget.tsx
├── constants.ts
└── types.ts
```

### Работа с изображениями
```typescript
// Добавьте изображения в shared/assets/images/
import newImage from '../../shared/assets/images/new-image.webp'
```

## 📞 Настройка Telegram

1. Создайте бота через @BotFather
2. Получите токен бота
3. Узнайте Chat ID (можно через @userinfobot)
4. Заполните `.env` файл

## 🌐 Деплой

Сайт готов к деплою на любой статический хостинг:
- Vercel
- Netlify  
- GitHub Pages
- Любой VPS с nginx

```bash
npm run build
# Папка dist/ готова к загрузке на сервер
```