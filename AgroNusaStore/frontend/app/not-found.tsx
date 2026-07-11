import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section flex min-h-screen items-center justify-center">
      <section className="glass max-w-xl rounded-panel p-8 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-gold">404</p>
        <h1 className="mt-3 text-3xl font-black text-forest">Halaman tidak ditemukan.</h1>
        <Link href="/" className="mt-6 inline-flex rounded-full bg-forest px-6 py-3 font-bold text-white">
          Kembali ke Beranda
        </Link>
      </section>
    </main>
  );
}
