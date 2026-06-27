import { Link, useParams, Navigate } from "react-router-dom";
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { ArrowLeft, Clock } from "lucide-react";
import { Seo } from "@/components/marketing/Seo";
import { getBlogPostBySlug, blogPosts } from "@/data/blogPosts";

=======
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
import { ArrowLeft, Clock, BookOpen, Lightbulb, Quote } from "lucide-react";
import { Seo } from "@/components/marketing/Seo";
import { Reveal } from "@/components/ui/Reveal";
import { getBlogPostBySlug, blogPosts } from "@/data/blogPosts";

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" });
}

function ContentBlock({ type, text }: { type: string; text: string }) {
  switch (type) {
    case "heading":
      return (
        <h2 className="mb-3 mt-8 font-display text-xl font-semibold first:mt-0"
          style={{ color: "var(--text-primary)" }}>
          {text}
        </h2>
      );
    case "tip":
      return (
        <div className="my-5 flex gap-3 rounded-xl p-4"
          style={{ backgroundColor: "var(--accent-dim)", border: "1px solid var(--accent)" }}>
          <Lightbulb size={18} className="mt-0.5 flex-none" style={{ color: "var(--accent)" }} strokeWidth={2} />
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-primary)" }}>{text}</p>
        </div>
      );
    case "quote":
      return (
        <blockquote className="my-6 rounded-xl p-5"
          style={{ backgroundColor: "var(--surface-raised)", borderLeft: "4px solid var(--accent)" }}>
          <Quote size={20} className="mb-2 opacity-40" style={{ color: "var(--accent)" }} />
          <p className="font-display text-base italic leading-relaxed" style={{ color: "var(--text-primary)" }}>
            {text}
          </p>
        </blockquote>
      );
    default:
      return (
        <p className="mb-4 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {text}
        </p>
      );
  }
}

<<<<<<< HEAD
=======
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

<<<<<<< HEAD
=======
<<<<<<< HEAD
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <Seo title={`${post.title} — ForgeSite Blog`} description={post.excerpt} path={`/blog/${post.slug}`} />

      <article className="px-6 pb-20 pt-20">
        <div className="mx-auto max-w-2xl">
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-forge-text-secondary hover:text-forge-text-primary"
          >
            <ArrowLeft size={14} strokeWidth={1.75} />
            Torna al blog
          </Link>

          <span className="mb-4 inline-block w-fit rounded-sm bg-forge-accent-dim px-2 py-0.5 font-mono text-[11px] text-forge-accent-soft">
            {post.category}
          </span>

          <h1 className="mb-4 font-display text-3xl font-semibold leading-tight text-forge-text-primary">
            {post.title}
          </h1>

          <div className="mb-10 flex items-center gap-4 text-xs text-forge-text-muted">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("it-IT", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span className="flex items-center gap-1.5">
              <Clock size={12} strokeWidth={1.75} />
              {post.readingTime} di lettura
            </span>
          </div>

          <div className="flex flex-col gap-5 text-[15px] leading-relaxed text-forge-text-secondary">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
=======
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter(
    (p) => p.slug !== post.slug && post.relatedSlugs?.includes(p.slug)
  );

  return (
    <>
      <Seo title={`${post.title} — Blog ForgeSite`} description={post.excerpt} path={`/blog/${post.slug}`} />

      <article>
        {/* Header */}
        <header className="relative overflow-hidden px-4 pb-10 pt-16 sm:px-6"
          style={{ background: `linear-gradient(135deg, ${post.categoryColor}12, var(--bg))` }}>
          <div className="mx-auto max-w-2xl">
            <Link to="/blog"
              className="mb-8 inline-flex items-center gap-1.5 text-sm transition-colors hover:opacity-80"
              style={{ color: "var(--text-muted)" }}>
              <ArrowLeft size={15} strokeWidth={1.75} />
              Torna al blog
            </Link>

            <Reveal>
              <span className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold text-white"
                style={{ backgroundColor: post.categoryColor }}>
                {post.category}
              </span>
              <h1 className="mb-4 font-display text-3xl font-semibold leading-tight sm:text-4xl"
                style={{ color: "var(--text-primary)" }}>
                {post.title}
              </h1>
              <p className="mb-6 text-lg" style={{ color: "var(--text-secondary)" }}>
                {post.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-5 text-sm" style={{ color: "var(--text-muted)" }}>
                <span className="flex items-center gap-1.5">
                  <BookOpen size={14} strokeWidth={1.75} />
                  {post.author} · {post.authorRole}
                </span>
                <span>{formatDate(post.publishedAt)}</span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} strokeWidth={1.75} />
                  {post.readingTime} di lettura
                </span>
              </div>
            </Reveal>
          </div>
        </header>

        {/* Contenuto */}
        <div className="px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-2xl">
            {post.content.map((block, i) => (
              <ContentBlock key={i} type={block.type} text={block.text} />
<<<<<<< HEAD
=======
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
            ))}
          </div>
        </div>
      </article>

<<<<<<< HEAD
=======
<<<<<<< HEAD
      {otherPosts.length > 0 && (
        <section className="border-t border-forge-border bg-forge-surface px-6 py-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-5 font-display text-sm font-medium text-forge-text-secondary">
              Continua a leggere
            </h2>
            <div className="flex flex-col gap-4">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="rounded-md border border-forge-border bg-forge-bg p-4 transition-colors hover:border-forge-accent/30"
                >
                  <h3 className="mb-1 font-display text-sm font-semibold text-forge-text-primary">
                    {p.title}
                  </h3>
                  <p className="text-xs text-forge-text-secondary">{p.excerpt}</p>
=======
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
      {/* Articoli correlati */}
      {related.length > 0 && (
        <section className="px-4 py-14 sm:px-6"
          style={{ backgroundColor: "var(--surface)", borderTop: "1px solid var(--border)" }}>
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-5 font-display text-lg font-semibold"
              style={{ color: "var(--text-primary)" }}>
              Leggi anche
            </h2>
            <div className="flex flex-col gap-3">
              {related.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`}
                  className="group flex items-center gap-4 rounded-xl p-4 transition-all hover:-translate-y-0.5"
                  style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)" }}>
                  <div className="h-10 w-1.5 flex-none rounded-full"
                    style={{ backgroundColor: p.categoryColor }} />
                  <div className="flex-1 min-w-0">
                    <p className="font-display text-sm font-semibold"
                      style={{ color: "var(--text-primary)" }}>
                      {p.title}
                    </p>
                    <p className="truncate text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                      {p.readingTime} di lettura · {p.category}
                    </p>
                  </div>
                  <ArrowLeft size={15} strokeWidth={2}
                    className="flex-none rotate-180 transition-transform group-hover:translate-x-1"
                    style={{ color: "var(--accent)" }} />
<<<<<<< HEAD
=======
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb

      {/* CTA finale */}
      <section className="px-4 py-16 text-center sm:px-6">
        <div className="mx-auto max-w-xl rounded-2xl p-8"
          style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}>
          <h3 className="mb-2 font-display text-xl font-semibold"
            style={{ color: "var(--text-primary)" }}>
            Pronto a creare il tuo sito?
          </h3>
          <p className="mb-5 text-sm" style={{ color: "var(--text-secondary)" }}>
            ForgeSite è gratis per iniziare. Nessuna carta, nessun codice.
          </p>
          <Link to="/app/register"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "var(--accent)" }}>
            Inizia gratis
          </Link>
        </div>
      </section>
<<<<<<< HEAD
=======
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
    </>
  );
}
