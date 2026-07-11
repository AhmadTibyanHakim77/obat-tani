"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import { ArrowLeft, Minus, Plus, ShieldCheck, ShoppingCart } from "lucide-react";
import { Button } from "@/components/common/button";
import { formatRupiah } from "@/lib/utils";
import { useCartStore } from "@/store/cart.store";
import { useProductStore } from "@/store/product.store";

export function ProductDetailView() {
  const params = useParams<{ id: string }>();
  const product = useProductStore((state) => state.products.find((item) => item.id === params.id));
  const addItem = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);
  const subtotal = useMemo(() => (product ? product.price * quantity : 0), [product, quantity]);

  if (!product) {
    return (
      <main className="section flex min-h-screen items-center justify-center">
        <section className="glass rounded-panel p-8 text-center">
          <h1 className="text-3xl font-black text-forest">Produk tidak ditemukan.</h1>
          <Link href="/" className="mt-5 inline-flex rounded-full bg-forest px-5 py-3 font-bold text-white">
            Kembali
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="section py-28">
      <Link href="/#produk" className="mb-8 inline-flex items-center gap-2 text-sm font-black text-forest">
        <ArrowLeft size={18} /> Kembali ke katalog
      </Link>
      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-[520px] overflow-hidden rounded-panel bg-cream shadow-soft">
          <Image src={product.image} alt={product.name} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="glass rounded-panel p-8">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-gold">{product.category}</p>
          <h1 className="mt-3 text-4xl font-black leading-tight text-forest md:text-5xl">{product.name}</h1>
          <p className="mt-5 text-lg leading-8 text-forest/70">{product.description}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Info label="Bahan aktif / spesifikasi" value={product.activeIngredient} />
            <Info label="Dosis pemakaian" value={product.dosage} />
            <Info label="Stok tersedia" value={`${product.stock} unit`} />
            <Info label="Rating pelanggan" value={`${product.rating} / 5`} />
          </div>
          <div className="mt-6">
            <p className="mb-3 text-sm font-black text-forest">Sasaran / manfaat</p>
            <div className="flex flex-wrap gap-2">
              {product.targetPests.map((target) => (
                <span key={target} className="rounded-full bg-cream px-3 py-2 text-sm font-bold text-forest">
                  {target}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8 rounded-3xl bg-white p-5">
            <div className="flex flex-wrap items-center justify-between gap-5">
              <div>
                <p className="text-sm font-bold text-forest/60">Harga</p>
                <p className="text-3xl font-black text-forest">{formatRupiah(product.price)}</p>
              </div>
              <div className="flex items-center rounded-full border border-forest/15 bg-cream p-1">
                <button className="grid h-10 w-10 place-items-center rounded-full bg-white text-forest" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>
                  <Minus size={17} />
                </button>
                <span className="w-14 text-center font-black text-forest">{quantity}</span>
                <button className="grid h-10 w-10 place-items-center rounded-full bg-white text-forest" onClick={() => setQuantity((value) => Math.min(product.stock, value + 1))}>
                  <Plus size={17} />
                </button>
              </div>
            </div>
            <p className="mt-4 text-sm font-bold text-forest/65">Subtotal: {formatRupiah(subtotal)}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button onClick={() => addItem(product.id, quantity)}>
                <ShoppingCart className="mr-2" size={18} /> Masukkan Keranjang
              </Button>
              <Link href="/checkout" className="inline-flex items-center rounded-full bg-gold px-5 py-3 text-sm font-black text-forest">
                Checkout Sekarang
              </Link>
            </div>
          </div>
          <div className="mt-5 flex gap-3 rounded-3xl bg-leaf/10 p-4 text-sm font-semibold leading-6 text-forest">
            <ShieldCheck className="mt-1 shrink-0 text-leaf" size={20} />
            Produk obat wajib digunakan sesuai label dan rekomendasi agronomis. Hindari overdosis dan gunakan APD saat aplikasi.
          </div>
        </div>
      </section>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl bg-white p-4">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-forest/45">{label}</p>
      <p className="mt-2 text-sm font-bold leading-6 text-forest">{value}</p>
    </div>
  );
}
