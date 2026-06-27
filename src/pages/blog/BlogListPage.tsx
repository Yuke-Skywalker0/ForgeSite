import { Link } from "react-router-dom";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { Seo } from "@/components/marketing/Seo";
import { Reveal } from "@/components/ui/Reveal";
import { StarField } from "@/components/marketing/StarField";
import { blogPosts } from "@/data/blogPosts";

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogListPage() {
  const [featured, ...rest] = blogPosts;
  if (!featured) return null;

  return (
    <>
      <Seo
        title="Blog ForgeSite — Guide pratiche per creare il tuo sito"
        description="Guide pratiche su come creare un sito web senza programmare, SEO per chi non è tecnico, e tutto quello che serve per avere un sito professionale online. In italiano, senza tecnicismi."
        path="/blog"
      />

      {/* Hero blog */}
      <section className="relative overflow-hidden px-4 pb-16 pt-20 sm:px-6">
        <StarField count={40} className="absolute inset-0 h-full w-full opacity-35" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
              style={{ backgroundColor: "var(--accent-dim)", color: "var(--accent)" }}>
              <BookOpen size={12} strokeWidth={2} />
              Blog
            </div>
            <h1 className="mb-4 font-display text-4xl font-semibold leading-tight"
              style={{ color: "var(--text-primary)" }}>
              Guide pratiche per chi vuole un sito,<br />
              <span style={{ color: "var(--accent-soft)" }}>senza imparare a programmare</span>
            </h1>
            <p className="mx-auto max-w-xl text-lg" style={{ color: "var(--text-secondary)" }}>
              Articoli scritti in italiano semplice, per chi vuole capire — non solo seguire istruzioni alla cieca.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-5xl">

          {/* Articolo in evidenza */}
          <Reveal>
            <Link to={`/blog/${featured.slug}`} className="group mb-10 block">
              <div className="overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}>
                {/* Header colorato */}
                <div className="relative overflow-hidden px-8 py-10"
                  style={{ background: `linear-gradient(135deg, ${featured.categoryColor}18, ${featured.categoryColor}06)` }}>
                  <div className="absolute right-6 top-6 opacity-10">
                    <BookOpen size={80} />
                  </div>
                  <span className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold text-white"
                    style={{ backgroundColor: featured.categoryColor }}>
                    ✦ In evidenza — {featured.category}
                  </span>
                  <h2 className="mb-3 font-display text-2xl font-semibold leading-snug sm:text-3xl"
                    style={{ color: "var(--text-primary)" }}>
                    {featured.title}
                  </h2>
                  <p className="max-w-2xl text-base" style={{ color: "var(--text-secondary)" }}>
                    {featured.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between px-8 py-4"
                  style={{ borderTop: "1px solid var(--border)" }}>
                  <div className="flex items-center gap-4 text-sm" style={{ color: "var(--text-muted)" }}>
                    <span>{formatDate(featured.publishedAt)}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} strokeWidth={1.75} />
                      {featured.readingTime} di lettura
                    </span>
                  </div>
                  <span className="flex items-center gap-1.5 text-sm font-medium transition-all group-hover:gap-2.5"
                    style={{ color: "var(--accent)" }}>
                    Leggi articolo
                    <ArrowRight size={15} strokeWidth={2} />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Griglia altri articoli */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 80}>
                <Link to={`/blog/${post.slug}`} className="group block h-full">
                  <div className="flex h-full flex-col overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
                    style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}>

                    {/* Striscia categoria colorata */}
                    <div className="h-1.5 w-full" style={{ backgroundColor: post.categoryColor }} />

                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <span className="w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
                        style={{ backgroundColor: post.categoryColor }}>
                        {post.category}
                      </span>
                      <h2 className="font-display text-lg font-semibold leading-snug"
                        style={{ color: "var(--text-primary)" }}>
                        {post.title}
                      </h2>
                      <p className="flex-1 text-sm leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}>
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-3"
                        style={{ borderTop: "1px solid var(--border)" }}>
                        <span className="flex items-center gap-1.5 text-xs"
                          style={{ color: "var(--text-muted)" }}>
                          <Clock size={12} strokeWidth={1.75} />
                          {post.readingTime}
                        </span>
                        <span className="flex items-center gap-1 text-xs font-medium transition-all group-hover:gap-2"
                          style={{ color: "var(--accent)" }}>
                          Leggi
                          <ArrowRight size={13} strokeWidth={2} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* CTA iscriviti */}
          <Reveal delay={120}>
            <div className="mt-14 rounded-2xl p-8 text-center"
              style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}>
              <h3 className="mb-2 font-display text-xl font-semibold"
                style={{ color: "var(--text-primary)" }}>
                Vuoi ricevere nuovi articoli?
              </h3>
              <p className="mb-5 text-sm" style={{ color: "var(--text-secondary)" }}>
                Nuovi contenuti ogni settimana. Niente spam, solo guide pratiche utili.
              </p>
              <Link to="/app/register"
                className="inline-flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "var(--accent)" }}>
                Crea account gratuito
                <ArrowRight size={15} strokeWidth={2} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
