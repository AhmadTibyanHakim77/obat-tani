import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, CheckCircle2 } from "lucide-react";
import { consultationPrograms } from "@/services/catalog.service";

export default async function ConsultationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = consultationPrograms.find((item) => item.slug === slug);

  if (!program) {
    notFound();
  }

  return (
    <main className="section py-28">
      <Link href="/#konsultasi" className="text-sm font-black text-forest">Kembali ke konsultasi</Link>
      <section className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass rounded-panel p-8">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-gold">Konsultasi</p>
          <h1 className="mt-3 text-4xl font-black text-forest md:text-5xl">{program.title}</h1>
          <p className="mt-5 text-lg leading-8 text-forest/70">{program.subtitle}</p>
          <div className="mt-6 rounded-3xl bg-white p-5">
            <p className="font-black text-forest">Output sesi</p>
            <p className="mt-2 leading-7 text-forest/70">{program.output}</p>
          </div>
        </div>
        <div className="space-y-5">
          <section className="rounded-panel bg-white p-6 shadow-soft">
            <h2 className="flex items-center gap-2 text-2xl font-black text-forest">
              <CalendarDays className="text-leaf" /> Jadwal Layanan
            </h2>
            <div className="mt-5 space-y-3">
              {program.schedule.map((item) => (
                <div key={item} className="rounded-2xl bg-cream p-4 font-bold text-forest">{item}</div>
              ))}
            </div>
          </section>
          <section className="rounded-panel bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-black text-forest">Detail Proses</h2>
            <div className="mt-5 space-y-4">
              {program.details.map((detail) => (
                <p key={detail} className="flex gap-3 leading-7 text-forest/72">
                  <CheckCircle2 className="mt-1 shrink-0 text-leaf" size={20} />
                  {detail}
                </p>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
