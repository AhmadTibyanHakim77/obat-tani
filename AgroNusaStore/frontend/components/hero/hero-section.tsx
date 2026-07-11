import Image from "next/image";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/common/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28">
      <Image src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=90" alt="Hamparan sawah hijau pada pagi hari" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-br from-forest/92 via-forest/52 to-cream/18" />
      <div className="section relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl text-white">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-2 text-sm font-bold backdrop-blur">
            <Sparkles size={16} />
            Platform agrikultur enterprise untuk Indonesia
          </div>
          <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Belanja, kelola, dan tumbuhkan bisnis tani dalam satu ekosistem.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/86">
            AgroNusa menggabungkan marketplace, inventori, distributor management, CRM, konsultasi agronomi,
            edukasi, dan analytics agar petani dan toko pertanian mengambil keputusan lebih cepat.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#produk">
              <Button className="bg-white text-forest hover:bg-cream">
                Mulai Belanja <ArrowRight className="ml-2" size={18} />
              </Button>
            </a>
            <a href="#dashboard">
              <Button variant="secondary" className="border-white/35 bg-white/12 text-white hover:bg-white/20">
                Lihat Dashboard
              </Button>
            </a>
          </div>
        </div>
        <aside className="glass rounded-panel p-6">
          <div className="relative h-[460px] overflow-hidden rounded-[22px]">
            <Image src="https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=1200&q=88" alt="Petani profesional memeriksa tanaman padi" fill sizes="(min-width: 1024px) 500px, 100vw" className="object-cover" />
            <div className="absolute inset-x-4 bottom-4 rounded-3xl bg-white/88 p-5 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-leaf text-white">
                  <ShieldCheck size={22} />
                </span>
                <div>
                  <p className="font-black text-forest">Rekomendasi AI Siap Panen</p>
                  <p className="text-sm text-forest/70">Produk, dosis, dan jadwal aplikasi sesuai kondisi lahan.</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
