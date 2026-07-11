# Panduan Deployment

## Target

- Frontend di CDN atau container Next.js.
- Backend Laravel di PHP-FPM atau container PHP.
- MySQL managed database.
- Redis managed cache.
- Cloudflare untuk CDN, SSL, WAF, cache policy, dan rate limiting.

## Checklist Produksi

- Set `APP_ENV=production`.
- Set `APP_DEBUG=false`.
- Gunakan secret unik untuk `APP_KEY` dan `JWT_SECRET`.
- Jalankan migration dengan review.
- Aktifkan HTTPS dan HSTS.
- Aktifkan backup database harian.
- Pisahkan akses admin, distributor, dan customer dengan policy.
- Monitor log error, queue, dan response time API.
