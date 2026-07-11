# Panduan Instalasi

## Prasyarat

- Node.js 24 LTS
- PHP 8.3
- Composer 2
- MySQL 8
- Redis 7
- Docker Desktop untuk mode container

## Frontend

```bash
cd AgroNusaStore/frontend
npm install
npm run dev
```

## Backend

```bash
cd AgroNusaStore/backend
composer install
cp ../.env.example .env
php artisan key:generate
php artisan jwt:secret
php artisan migrate --seed
php artisan serve --host=0.0.0.0 --port=8000
```

## Docker

```bash
cd AgroNusaStore
cp .env.example .env
docker compose up --build
```
