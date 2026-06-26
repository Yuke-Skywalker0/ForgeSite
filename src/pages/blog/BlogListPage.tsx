import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { Seo } from "@/components/marketing/Seo";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { blogPosts } from "@/data/blogPosts";

export default function BlogListPage() {
  return (
    <>
      <Seo
        title="Blog — ForgeSite"
        description="Guide, approfondimenti e riflessioni su siti statici, GitHub Pages, SEO e automazione — per chi vuole capire come funziona davvero, non solo come si clicca."
        path="/blog"
      />

      <section className="px-6 pb-16 pt-24 text-center">
        <span className="mb-5 inline-block font-mono text-xs uppercase tracking-wider text-forge-accent-soft">
          Blog
        </span>
        <h1 className="mx-auto mb-5 max-w-2xl font-display text-4xl font-semibold leading-tight text-forge-text-primary">
          Guide e approfondimenti, non solo annunci di prodotto
        </h1>
        <p className="mx-auto max-w-xl text-forge-text-secondary">
          Come funzionano davvero GitHub Pages, SEO e automazione — scritto per chi vuole capire,
          non solo per chi vuole un titolo accattivante.
        </p>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
              <Link to={`/blog/${post.slug}`} className="block h-full">
                <Card className="flex h-full flex-col gap-3 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20">
                  <span className="w-fit rounded-sm bg-forge-accent-dim px-2 py-0.5 font-mono text-[11px] text-forge-accent-soft">
                    {post.category}
                  </span>
                  <h2 className="font-display text-lg font-semibold leading-snug text-forge-text-primary">
                    {post.title}
                  </h2>
                  <p className="flex-1 text-sm text-forge-text-secondary">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-2 text-xs text-forge-text-muted">
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} strokeWidth={1.75} />
                      {post.readingTime} di lettura
                    </span>
                    <ArrowRight size={14} className="text-forge-accent-soft" strokeWidth={2} />
                  </div>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
