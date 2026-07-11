import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, CheckCircle2 } from "lucide-react";
import { articles } from "@/services/catalog.service";

export default async function EducationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="section py-28">
      <Link href="/#edukasi" className="text-sm font-black text-forest">Kembali ke edukasi</Link>
      <article className="mt-8 rounded-panel bg-white p-8 shadow-soft">
        <span className="rounded-full bg-cream px-4 py-2 text-sm font-black text-forest">{article.category}</span>
        <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight text-forest md:text-6xl">{article.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-forest/70">{article.summary}</p>
        <p className="mt-4 inline-flex items-center gap-2 font-black text-leaf">
          <BookOpen size={19} /> {article.readingTime}
        </p>
        <div className="mt-8 grid gap-4">
          {article.details.map((detail) => (
            <section key={detail} className="rounded-3xl bg-cream p-5">
              <p className="flex gap-3 leading-8 text-forest/78">
                <CheckCircle2 className="mt-1 shrink-0 text-leaf" size={21} />
                {detail}
              </p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
