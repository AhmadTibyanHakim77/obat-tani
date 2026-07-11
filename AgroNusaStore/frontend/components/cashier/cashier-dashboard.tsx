"use client";

import { FormEvent, useMemo, useState } from "react";
import { LogOut, Pencil, Plus, RotateCcw, Trash2 } from "lucide-react";
import { Button } from "@/components/common/button";
import { useAuthStore } from "@/store/auth.store";
import { useProductStore } from "@/store/product.store";
import type { Product, ProductCategory } from "@/types";

const categories: ProductCategory[] = ["Obat Tani", "Pupuk", "Benih", "Alat", "Aksesoris"];

const emptyProduct: Product = {
  id: "",
  name: "",
  category: "Obat Tani",
  description: "",
  activeIngredient: "",
  dosage: "",
  targetPests: [],
  price: 0,
  stock: 0,
  rating: 4.8,
  image: "/products/bioneem-shield.png",
  badges: ["Obat Tani"]
};

export function CashierDashboard() {
  const { cashier, login, logout } = useAuthStore();
  const { products, addProduct, updateProduct, deleteProduct, resetProducts } = useProductStore();
  const [error, setError] = useState("");
  const [form, setForm] = useState<Product>(emptyProduct);
  const [targets, setTargets] = useState("");
  const medicineProducts = useMemo(() => products.filter((product) => product.category === "Obat Tani"), [products]);

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const success = login(String(data.get("email")), String(data.get("password")));
    setError(success ? "" : "Email atau password kasir salah. Gunakan kasir@agronusa.id / kasir123.");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalized: Product = {
      ...form,
      id: form.id || `OBT-${Date.now()}`,
      price: Number(form.price),
      stock: Number(form.stock),
      rating: Number(form.rating),
      targetPests: targets
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      badges: form.category === "Obat Tani" ? ["Obat Tani", "Kasir"] : ["Kasir"]
    };

    if (products.some((product) => product.id === normalized.id)) {
      updateProduct(normalized);
    } else {
      addProduct(normalized);
    }

    setForm(emptyProduct);
    setTargets("");
  }

  function editProduct(product: Product) {
    setForm(product);
    setTargets(product.targetPests.join(", "));
  }

  if (!cashier) {
    return (
      <main className="section flex min-h-screen items-center justify-center py-20">
        <form onSubmit={handleLogin} className="glass w-full max-w-md rounded-panel p-8">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-gold">Login Kasir</p>
          <h1 className="mt-3 text-3xl font-black text-forest">Masuk untuk mengelola produk obat.</h1>
          <label className="mt-6 block text-sm font-bold text-forest">
            Email
            <input name="email" type="email" defaultValue="kasir@agronusa.id" className="mt-2 w-full rounded-2xl border border-forest/15 px-4 py-3" />
          </label>
          <label className="mt-4 block text-sm font-bold text-forest">
            Password
            <input name="password" type="password" defaultValue="kasir123" className="mt-2 w-full rounded-2xl border border-forest/15 px-4 py-3" />
          </label>
          {error ? <p className="mt-4 rounded-2xl bg-red-50 p-3 text-sm font-bold text-red-700">{error}</p> : null}
          <Button className="mt-6 w-full" type="submit">
            Masuk Kasir
          </Button>
        </form>
      </main>
    );
  }

  return (
    <main className="section py-28">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-gold">Database Produk Lokal</p>
          <h1 className="mt-3 text-4xl font-black text-forest md:text-5xl">Panel kasir obat tani.</h1>
          <p className="mt-3 text-forest/65">Login sebagai {cashier.name}. Data tersimpan di localStorage browser dan siap disambungkan ke API Laravel.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={resetProducts} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-forest shadow-soft">
            <RotateCcw size={17} /> Reset
          </button>
          <button onClick={logout} className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-black text-white">
            <LogOut size={17} /> Keluar
          </button>
        </div>
      </div>
      <div className="grid gap-8 lg:grid-cols-[420px_1fr]">
        <form onSubmit={handleSubmit} className="glass rounded-panel p-6">
          <h2 className="text-2xl font-black text-forest">{form.id ? "Edit Produk" : "Tambah Produk Obat"}</h2>
          <Input label="Nama produk" value={form.name} onChange={(value) => setForm({ ...form, name: value })} />
          <label className="mt-4 block text-sm font-bold text-forest">
            Kategori
            <select value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value as ProductCategory })} className="mt-2 w-full rounded-2xl border border-forest/15 px-4 py-3">
              {categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </label>
          <Input label="Harga" type="number" value={String(form.price)} onChange={(value) => setForm({ ...form, price: Number(value) })} />
          <Input label="Stok barang" type="number" value={String(form.stock)} onChange={(value) => setForm({ ...form, stock: Number(value) })} />
          <Input label="URL gambar produk obat" value={form.image} onChange={(value) => setForm({ ...form, image: value })} />
          <Input label="Bahan aktif" value={form.activeIngredient} onChange={(value) => setForm({ ...form, activeIngredient: value })} />
          <Input label="Dosis" value={form.dosage} onChange={(value) => setForm({ ...form, dosage: value })} />
          <Input label="Sasaran, pisahkan koma" value={targets} onChange={setTargets} />
          <label className="mt-4 block text-sm font-bold text-forest">
            Deskripsi
            <textarea value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} className="mt-2 min-h-24 w-full rounded-2xl border border-forest/15 px-4 py-3" />
          </label>
          <Button className="mt-5 w-full" type="submit">
            <Plus className="mr-2" size={18} /> Simpan Produk
          </Button>
        </form>
        <section className="rounded-panel bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-black text-forest">Daftar Obat Tani</h2>
          <div className="mt-5 space-y-4">
            {medicineProducts.map((product) => (
              <article key={product.id} className="grid gap-4 rounded-3xl border border-forest/10 p-4 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="font-black text-forest">{product.name}</p>
                  <p className="text-sm text-forest/65">{product.activeIngredient}</p>
                  <p className="mt-2 text-sm font-black text-leaf">Rp {product.price.toLocaleString("id-ID")} | Stok {product.stock}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => editProduct(product)} className="rounded-full bg-cream p-3 text-forest" aria-label={`Edit ${product.name}`}>
                    <Pencil size={18} />
                  </button>
                  <button onClick={() => deleteProduct(product.id)} className="rounded-full bg-red-50 p-3 text-red-700" aria-label={`Hapus ${product.name}`}>
                    <Trash2 size={18} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function Input({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (value: string) => void; type?: string }) {
  return (
    <label className="mt-4 block text-sm font-bold text-forest">
      {label}
      <input type={type} value={value} onChange={(event) => onChange(event.target.value)} className="mt-2 w-full rounded-2xl border border-forest/15 px-4 py-3" />
    </label>
  );
}
