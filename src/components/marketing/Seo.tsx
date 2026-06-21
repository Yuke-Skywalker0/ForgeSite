import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  /** Path assoluto SENZA base path, es. "/chi-siamo" — il base path
   *  (es. "/ForgeSite") viene aggiunto qui in un solo punto. */
  path: string;
  /** false per pagine che non devono mai essere indicizzate (dashboard, editor). */
  indexable?: boolean;
}

const SITE_DOMAIN = "https://yuke-skywalker0.github.io";
// Derivato da import.meta.env.BASE_URL, impostato automaticamente da Vite
// al valore di "base" in vite.config.ts — in dev è "/", in build è
// "/ForgeSite/". Stesso meccanismo usato dal router (routes.tsx): un solo
// punto di verità per il base path, mai più hardcoded qui separatamente
// (era la causa di URL canonical/OG sbagliati in sviluppo locale).
const REPO_BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

// Nessuna libreria esterna (niente react-helmet-async / vite-react-ssg Head):
// per una SPA pura su GitHub Pages senza pre-rendering, gestire title e meta
// tag direttamente via useEffect è sufficiente, zero dipendenze instabili,
// e ha lo stesso identico effetto pratico — i meta tag vengono impostati al
// montaggio del componente pagina, prima che Googlebot (che esegue JS in un
// secondo passaggio di rendering) li legga.
function setMetaTag(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLinkTag(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function Seo({ title, description, path, indexable = true }: SeoProps) {
  useEffect(() => {
    const fullUrl = `${SITE_DOMAIN}${REPO_BASE}${path}`;
    const imageUrl = `${SITE_DOMAIN}${REPO_BASE}/og-cover.png`;

    document.title = title;
    setMetaTag("name", "description", description);
    setLinkTag("canonical", fullUrl);

    if (!indexable) {
      setMetaTag("name", "robots", "noindex, nofollow");
    }

    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", fullUrl);
    setMetaTag("property", "og:image", imageUrl);

    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", imageUrl);
  }, [title, description, path, indexable]);

  return null;
}
