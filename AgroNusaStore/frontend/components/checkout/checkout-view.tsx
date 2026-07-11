"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { CheckCircle2, Trash2 } from "lucide-react";
import { banks } from "@/services/catalog.service";
import { formatRupiah } from "@/lib/utils";
import { useCartStore } from "@/store/cart.store";
import { useProductStore } from "@/store/product.store";

export function CheckoutView() {
  const [selectedBank, setSelectedBank] = useState(banks[0]);
  const cart = useCartStore();
  const products = useProductStore((state) => state.products);
  const rows = cart.items
    .map((item) => ({ item, product: products.find((product) => product.id === item.productId) }))
    .filter((row): row is { item: { productId: string; quantity: number }; product: NonNullable<typeof row.product> } => Boolean(row.product));
  const total = useMemo(() => rows.reduce((sum, row) => sum + row.product.price * row.item.quantity, 0), [rows]);

  return (
    <main className="section py-28">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-gold">Checkout</p>
          <h1 className="mt-3 text-4xl font-black text-forest md:text-5xl">Selesaikan pembayaran pesanan.</h1>
        </div>
        <Link href="/#produk" className="rounded-full bg-white px-5 py-3 text-sm font-black text-forest shadow-soft">
          Tambah Produk Lagi
        </Link>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
        <section className="rounded-panel bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-black text-forest">Keranjang</h2>
          {rows.length === 0 ? (
            <p className="mt-4 text-forest/65">Keranjang masih kosong.</p>
          ) : (
            <div className="mt-5 space-y-4">
              {rows.map(({ item, product }) => (
                <div key={product.id} className="grid gap-4 rounded-3xl border border-forest/10 p-4 sm:grid-cols-[96px_1fr_auto] sm:items-center">
                  <div className="relative h-24 overflow-hidden rounded-2xl bg-cream">
                    <Image src={product.image} alt={product.name} fill sizes="96px" className="object-cover" />
                  </div>
                  <div>
                    <p className="font-black text-forest">{product.name}</p>
                    <p className="text-sm font-semibold text-forest/60">{formatRupiah(product.price)}</p>
                    <div className="mt-3 flex items-center gap-3">
                      <input
                        type="number"
                        min={1}
                        max={product.stock}
                        value={item.quantity}
                        onChange={(event) => cart.updateQuantity(product.id, Number(event.target.value))}
                        className="w-24 rounded-full border border-forest/15 px-4 py-2 font-bold text-forest"
                      />
                      <button onClick={() => cart.removeItem(product.id)} className="inline-flex items-center gap-1 text-sm font-bold text-red-600">
                        <Trash2 size={16} /> Hapus
                      </button>
                    </div>
                  </div>
                  <p className="text-lg font-black text-forest">{formatRupiah(product.price * item.quantity)}</p>
                </div>
              ))}
            </div>
          )}
        </section>
        <aside className="glass rounded-panel p-6">
          <h2 className="text-2xl font-black text-forest">Metode Pembayaran</h2>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {banks.map((bank) => (
              <button
                key={bank.id}
                onClick={() => setSelectedBank(bank)}
                className={`rounded-3xl border p-4 text-left transition ${selectedBank.id === bank.id ? "border-forest bg-cream" : "border-white/70 bg-white/70"}`}
              >
                <span className="grid h-11 w-16 place-items-center rounded-xl text-sm font-black text-white" style={{ background: bank.color }}>
                  {bank.logo}
                </span>
                <span className="mt-3 block font-black text-forest">{bank.name}</span>
              </button>
            ))}
          </div>
          <div className="mt-6 rounded-3xl bg-white p-5">
            <p className="text-sm font-bold text-forest/60">Total Bayar</p>
            <p className="text-3xl font-black text-forest">{formatRupiah(total)}</p>
            <div className="mt-5 rounded-2xl bg-cream p-4">
              <p className="text-sm font-black text-forest">{selectedBank.name}</p>
              <p className="mt-2 text-xl font-black tracking-wide text-forest">{selectedBank.accountNumber}</p>
              <p className="text-sm font-semibold text-forest/60">a.n. {selectedBank.accountName}</p>
            </div>
            <div className="mx-auto mt-5 grid h-44 w-44 grid-cols-7 gap-1 rounded-2xl bg-white p-3 shadow-inner">
              {Array.from({ length: 49 }).map((_, index) => (
                <span key={index} className={`${(index * 7 + selectedBank.id.length) % 3 === 0 || index < 7 || index % 7 === 0 ? "bg-forest" : "bg-cream"} rounded-sm`} />
              ))}
            </div>
            <p className="mt-3 text-center text-xs font-bold text-forest/55">QRIS / barcode pembayaran otomatis untuk transaksi ini.</p>
            <Link href="/" onClick={() => cart.clear()} className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-forest px-5 py-3 font-black text-white">
              <CheckCircle2 className="mr-2" size={19} /> Selesai
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
