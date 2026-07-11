import { BarChart3, Boxes, Building2, UsersRound } from "lucide-react";
import { metrics } from "@/services/catalog.service";

const icons = [BarChart3, Building2, Boxes, UsersRound];

export function EnterpriseDashboard() {
  return (
    <section id="dashboard" className="bg-forest py-24 text-white">
      <div className="section">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-gold">ERP-lite dan Analytics</p>
          <h2 className="mt-3 text-4xl font-black md:text-5xl">Operasional toko, distributor, dan gudang dalam satu layar.</h2>
          <p className="mt-5 text-lg leading-8 text-white/72">Pantau performa penjualan, stok, pelanggan, hutang piutang distributor, dan efektivitas kampanye tanpa berpindah sistem.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric, index) => {
            const Icon = icons[index];
            return (
              <article key={metric.label} className="rounded-panel border border-white/12 bg-white/8 p-6 backdrop-blur">
                <Icon className="text-gold" size={28} />
                <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-white/55">{metric.label}</p>
                <strong className="mt-2 block text-4xl font-black">{metric.value}</strong>
                <p className="mt-3 text-sm leading-6 text-white/65">{metric.detail}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
