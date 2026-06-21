import { Link } from "react-router-dom";
import { Home, Sparkles, Tag } from "lucide-react";
import { Seo } from "@/components/marketing/Seo";

const quickLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/servizi", label: "Servizi", icon: Sparkles },
  { to: "/prezzi", label: "Prezzi", icon: Tag },
];

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="Pagina non trovata — ForgeSite"
        description="La pagina che cerchi non esiste."
        path="/404"
        indexable={false}
      />
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 font-mono text-sm text-forge-accent-soft">404</span>
        <h1 className="mb-4 font-display text-2xl font-semibold text-forge-text-primary">
          Questa pagina non esiste
        </h1>
        <p className="mb-8 max-w-sm text-sm text-forge-text-secondary">
          Il link potrebbe essere sbagliato o la pagina è stata spostata. Prova una di queste:
        </p>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          {quickLinks.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className="flex items-center gap-2 rounded-sm border border-forge-border px-4 py-2 text-sm text-forge-text-primary hover:border-forge-accent/40"
            >
              <Icon size={15} strokeWidth={1.75} />
              {label}
            </Link>
          ))}
        </div>

        <Link
          to="/"
          className="rounded-sm bg-forge-accent px-5 py-2.5 text-sm font-medium text-forge-bg hover:bg-forge-accent-soft"
        >
          Torna alla home
        </Link>
      </section>
    </>
  );
}
