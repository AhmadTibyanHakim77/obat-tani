# Panduan Testing

## Frontend

```bash
cd AgroNusaStore/frontend
npm run lint
npm run typecheck
npm run build
```

## Backend

```bash
cd AgroNusaStore/backend
php artisan test
```

## Quality Gate

- Lighthouse Performance 100.
- Accessibility 100.
- Best Practice 100.
- SEO 100.
- Semua form tervalidasi.
- Semua API sensitif memakai auth, policy, dan rate limit.
