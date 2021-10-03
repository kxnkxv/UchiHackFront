# [Uchi Front](https://github.com/kxnkxv/UchiHackFront)

# [Uchi Back](https://github.com/kxnkxv/UchiHackBack)

## Реализованная функциональность

- Модуль Пользователь

  - Авторизация / Регистрация
  - Intercept пользователя в запрос
  - Паспорт
  - Загрузка файлов в aws cloud

- Модуль Аутентификация

  - JWT

- Модуль Здоровья

  - Здоровье БД
  - Здоровье NUTS

- Модуль Темы

  - Пагинация
  - Создание темы

- Модуль Вопрос

  - Пагинация
  - Темы по id Вопроса
  - Создание вопроса
  - Поиск похожих вопросов по простому поиску
  - Поиск похожих вопросов с применением алгоритма Левенштейна (реализация PG)

- Модуль Ответа на вопрос

  - Пагинация
  - Ответы по id Вопроса
  - Создание ответа с привязкой пользователя

- Модуль Коментария к вопросу
  - Пагинация
  - Коментарии по id Вопроса
  - Создание коментария с привязкой пользователя

## Особенность проекта в следующем

---

- Расширяемость, CLI для создания доп. абстракций,
- DX, hot-reload при изменениях в коде,
- Готовый Docker-compose
- Автороутинг
- Автодокументация | Авто-Swagger
- Автосоздание миграций
- Локализация через переменные
- Конфигурация через переменные окружения
- Возможность покрыть тестами, принудительный статический анализ и проверка форматирования
- Тематические и личные чаты со звонками между участниками (не доделано)
- Система поощрений за ответы (Не доделано)

---

## Основной стек технологий

- React
- TypeScript
- MobX
- Ant.Design
- es7
- Nest Framework
- typeorm
- PostgreSQL
- JWT для авторизации

## Демо

[Uchi Front Landing] (https://www.silentium.design/hahathon)
[Uchi Front React] (https://uchi-hack.vercel.app/)
[Uchi Back Docs] (https://uchi.pointb.su/documentation)
[Uchi Back API] (https://uchi.pointb.su)

## НЕОБХОДИМЫЕ УСЛОВИЯ ДЛЯ РАБОТЫ ПРИЛОЖЕНИЯ

- Наличие NPM,
- Наличие [docker-ce](https://docs.docker.com/engine/install/)
  и [docker-compose](https://docs.docker.com/compose/install/)

## УСТАНОВКА, НАСТРОЙКА

```### Back
* Установите docker и docker-compose по ссылкам выше, в соотвествии с вашей ОС
* Запуск осуществляется через команду `docker-compose up -d` в директории проекта,
  Проект сразу доступен на localhost:3000,
* При необходимости добавления SSL - потребуется Nginx с certbot/zerobot-ssl

## DB
Преконфигурирована, миграция накатываются автоматически при первом старте приложения

## Ручной запуск приложения (Back)
* Установите [Nodejs](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions) в соотвествии с вашей ОС
* Установите [PostgreSQL](https://www.postgresql.org/download/)
* Заполните .env файл в соответсвии с вашими настройками, где
```

# порт приложения

PORT=3000

# порт транспорта (для докера)

TRANSPORT_PORT=8080

# jwt ключ

JWT_SECRET_KEY=rxPhglGJWPlOW596

# jwt время протухание

JWT_EXPIRATION_TIME=3600

# фоллбек язык

FALLBACK_LANGUAGE=en

# NATS

NATS_ENABLED=false

# логи

ENABLE_ORMLOGS=true

# роут документации

ENABLE_DOCUMENTATION=true

# креды БД

DB_HOST=127.0.0.1 DB_PORT=5432 DB_USERNAME=postgres DB_PASSWORD=postgres DB_DATABASE=postgres

# настройка AWS

## AWS S3

AWS_S3_ACCESS_KEY_ID= AWS_S3_SECRET_ACCESS_KEY= AWS_S3_BUCKET_REGION=eu-central-1 AWS_S3_API_VERSION=2010-12-01
AWS_S3_BUCKET_NAME=boilerplate-bucket

# Настройка NATS

NATS_HOST=localhost NATS_PORT=4222

```
* для установки, зависимостией `npm install`
* для запуска дев-а `npm run watch:dev`
* для запуска прод-а `npm run start:prod`
```

```
### Front
* Установите npm
* для установки, зависимостией `npm install`
* для запуска дев-а `npm run start`
* для запуска прод-а `npm run build`
* проект доступен на localhost:3000
```

## Разработчики

Коньков Артем Вадимович | Frontend | [почта](mailto:kxnkxv@yandex.ru) | [vk](vk.com/kxnkxv) | [tg](tg.me/kxnkxv)
Агарков Алексей Владимирович | Frontend | [почта](mailto:quality.info@ya.ru) | [vk](vk.com/meet2code)
| [tg](tg.me/meet2code)
Кукарин Максим Владимрович | fullstack | [почта](mailto:) | [vk](vk.com/) | [tg](http://tg.me/OxA115A)
Чередниченко Максим Константинович | Designer | [почта](mailto:) | [vk](vk.com/) | [tg](tg.me/)
