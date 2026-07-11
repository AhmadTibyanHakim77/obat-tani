import Link from "next/link";
import { articles } from "@/services/catalog.service";

export function EducationSection() {
  return (
    <section id="edukasi" className="section pb-24">
      <div className="mb-10">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-gold">AgroNusa Academy</p>
        <h2 className="mt-3 text-4xl font-black text-forest md:text-5xl">Edukasi yang langsung bisa dipakai di lapangan.</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {articles.map((article) => (
          <Link key={article.title} href={`/edukasi/${article.slug}`} className="rounded-panel bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-premium">
            <span className="rounded-full bg-cream px-3 py-1 text-xs font-black text-forest">{article.category}</span>
            <h3 className="mt-5 text-2xl font-black leading-snug text-forest">{article.title}</h3>
            <p className="mt-3 text-sm leading-6 text-forest/68">{article.summary}</p>
            <p className="mt-6 text-sm font-bold text-leaf">{article.readingTime}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
