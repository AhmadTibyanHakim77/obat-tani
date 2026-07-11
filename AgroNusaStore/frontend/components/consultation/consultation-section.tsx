import Link from "next/link";
import { CalendarCheck, FlaskConical, MapPinned } from "lucide-react";
import { consultationPrograms } from "@/services/catalog.service";

export function ConsultationSection() {
  const icons = [CalendarCheck, FlaskConical, MapPinned];

  return (
    <section id="konsultasi" className="section py-24">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-gold">Konsultasi Agronomi</p>
          <h2 className="mt-3 text-4xl font-black text-forest md:text-5xl">Diagnosis cepat untuk masalah lahan dan tanaman.</h2>
          <p className="mt-5 text-lg leading-8 text-forest/70">Konsultan dapat membaca lokasi, komoditas, riwayat aplikasi produk, foto gejala, dan rekomendasi AI sebelum memberi keputusan final.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {consultationPrograms.map((item, index) => {
            const Icon = icons[index];
            return (
              <Link key={item.slug} href={`/konsultasi/${item.slug}`} className="glass rounded-panel p-6 transition hover:-translate-y-1 hover:shadow-premium">
                <Icon className="text-leaf" size={30} />
                <h3 className="mt-6 text-xl font-black text-forest">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-forest/66">{item.subtitle}</p>
                <span className="mt-5 inline-flex text-sm font-black text-leaf">Lihat detail jadwal</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
