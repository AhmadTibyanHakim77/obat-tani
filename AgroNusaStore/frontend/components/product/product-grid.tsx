"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/common/button";
import { formatRupiah } from "@/lib/utils";
import { useCartStore } from "@/store/cart.store";
import { useProductStore } from "@/store/product.store";
import type { ProductCategory } from "@/types";

const filters: Array<ProductCategory | "Semua"> = ["Semua", "Obat Tani", "Pupuk", "Benih", "Alat", "Aksesoris"];

export function ProductGrid() {
  const [activeFilter, setActiveFilter] = useState<ProductCategory | "Semua">("Semua");
  const products = useProductStore((state) => state.products);
  const addItem = useCartStore((state) => state.addItem);
  const total = useCartStore((state) => state.items.reduce((sum, item) => sum + item.quantity, 0));
  const filteredProducts = useMemo(
    () => (activeFilter === "Semua" ? products : products.filter((product) => product.category === activeFilter)),
    [activeFilter, products]
  );

  return (
    <section id="produk" className="section py-24">
      <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-gold">Katalog Premium</p>
          <h2 className="mt-3 text-4xl font-black text-forest md:text-5xl">Produk tani terkurasi untuk setiap musim.</h2>
        </div>
        <div className="glass rounded-full px-5 py-3 text-sm font-bold text-forest">
          <ShoppingCart className="mr-2 inline" size={17} />
          {total} item dalam keranjang
        </div>
      </div>
      <div className="mb-8 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-2 text-sm font-black transition ${
              activeFilter === filter ? "bg-forest text-white shadow-soft" : "bg-white text-forest hover:bg-cream"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <article key={product.id} className="group overflow-hidden rounded-panel bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-premium">
            <Link href={`/produk/${product.id}`} aria-label={`Lihat detail ${product.name}`}>
              <div className="relative h-56 overflow-hidden bg-cream">
                <Image src={product.image} alt={product.name} fill sizes="(min-width: 1280px) 25vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  {product.badges.map((badge) => (
                    <span key={badge} className="rounded-full bg-white/90 px-3 py-1 text-xs font-black text-forest">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
            <div className="p-5">
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="font-bold text-leaf">{product.category}</span>
                <span className="flex items-center gap-1 font-bold text-forest">
                  <Star size={15} className="fill-gold text-gold" /> {product.rating}
                </span>
              </div>
              <Link href={`/produk/${product.id}`} className="mt-3 block text-xl font-black text-forest hover:text-leaf">
                {product.name}
              </Link>
              <p className="mt-2 min-h-[72px] text-sm leading-6 text-forest/68">{product.description}</p>
              <div className="mt-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-black text-forest">{formatRupiah(product.price)}</p>
                  <p className="text-xs font-semibold text-forest/55">Stok {product.stock} unit</p>
                </div>
                <Button onClick={() => addItem(product.id)} aria-label={`Tambah ${product.name} ke keranjang`}>
                  Tambah
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 flex justify-end">
        <Link href="/checkout" className="rounded-full bg-gold px-6 py-3 text-sm font-black text-forest shadow-soft">
          Lanjut Checkout
        </Link>
      </div>
    </section>
  );
}
