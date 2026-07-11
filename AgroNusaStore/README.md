# AgroNusa Store Enterprise

Platform marketplace agrikultur enterprise berbahasa Indonesia untuk obat tani, pupuk, benih, alat pertanian, konsultasi, edukasi, distributor, inventori, CRM, ERP-lite, analytics, dan rekomendasi AI.

## Modul yang Tersedia

- Frontend Next.js premium landing marketplace.
- Katalog produk dengan state keranjang.
- Dashboard metric enterprise.
- Konsultasi agronomi.
- Edukasi AgroNusa Academy.
- Backend Laravel-style REST API untuk produk dan analytics.
- Migration, seeder, SQL schema, Docker Compose, Nginx, dan dokumentasi.

## Menjalankan Frontend

```bash
cd frontend
npm install
npm run dev
```

## Menjalankan Full Stack

```bash
cp .env.example .env
docker compose up --build
```

## Catatan

Project ini disiapkan sebagai fondasi deployable dan maintainable. Untuk produksi penuh Laravel, jalankan `composer create-project laravel/laravel backend-runtime` lalu pindahkan folder `app`, `routes`, dan `database` dari backend ini ke runtime Laravel tersebut.
