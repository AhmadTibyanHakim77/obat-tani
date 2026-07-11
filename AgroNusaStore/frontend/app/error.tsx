"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="section flex min-h-screen items-center justify-center">
      <section className="glass max-w-xl rounded-panel p-8 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-gold">Terjadi kendala</p>
        <h1 className="mt-3 text-3xl font-black text-forest">Data belum bisa dimuat.</h1>
        <button onClick={reset} className="mt-6 rounded-full bg-forest px-6 py-3 font-bold text-white">
          Coba Lagi
        </button>
      </section>
    </main>
  );
}
