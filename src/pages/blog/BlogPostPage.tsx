import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import { Seo } from "@/components/marketing/Seo";
import { getBlogPostBySlug, blogPosts } from "@/data/blogPosts";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

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
            ))}
          </div>
        </div>
      </article>

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
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
