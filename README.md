# AgroNusa Store Enterprise

AgroNusa Store Enterprise adalah platform marketplace agrikultur berbahasa Indonesia untuk obat pertanian, pupuk, benih, alat pertanian, konsultasi, edukasi, distributor, inventori, CRM, ERP-lite, analytics, dan rekomendasi AI.

## Struktur

```text
AgroNusaStore/
  frontend/       Next.js, TypeScript, Tailwind CSS, Zustand-style store, service layer
  backend/        Laravel-style REST API architecture
  database/       SQL schema dan sample data lintas layanan
  docker/         Nginx dan PHP runtime config
  docs/           Panduan instalasi, deployment, testing, dan arsitektur
```

## Quick Start Frontend

```bash
cd AgroNusaStore/frontend
npm install
npm run dev
```

Frontend berjalan di `http://localhost:3000`.

## Quick Start Docker

```bash
cd AgroNusaStore
cp .env.example .env
docker compose up --build
```

## Akun Demo

- Admin: `admin@agronusa.id`
- Distributor: `distributor@agronusa.id`
- Customer: `petani@agronusa.id`
- Password demo: `password`

## Modul Utama

- Marketplace produk agrikultur
- Keranjang dan checkout quotation
- Manajemen distributor
- Inventori dan stok gudang
- CRM pelanggan
- Konsultasi agronomi
- Edukasi dan artikel
- Analytics penjualan
- API rekomendasi produk berbasis kondisi lahan

## Catatan Agent VS Code

Saya tidak bisa mengganti provider agent VS Code secara langsung dari project folder. Jika kamu memakai ekstensi Claude resmi atau Continue/Cline, pilih provider Anthropic/Claude di pengaturan ekstensi VS Code. File `.github/copilot-instructions.md` dan `docs/AGENT.md` di project ini disiapkan agar agent apa pun mengikuti standar AgroNusa.
