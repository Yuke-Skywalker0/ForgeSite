import { Link } from "react-router-dom";
<<<<<<< HEAD
import { Home, Sparkles, Tag } from "lucide-react";
import { Seo } from "@/components/marketing/Seo";

const quickLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/servizi", label: "Servizi", icon: Sparkles },
  { to: "/prezzi", label: "Prezzi", icon: Tag },
=======
import { Home, Sparkles, Tag, ArrowLeft } from "lucide-react";
import { Seo } from "@/components/marketing/Seo";

const quickLinks = [
  { to: "/",         label: "Home",            icon: Home },
  { to: "/servizi",  label: "Come funziona",   icon: Sparkles },
  { to: "/prezzi",   label: "Prezzi",          icon: Tag },
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
];

export default function NotFoundPage() {
  return (
    <>
<<<<<<< HEAD
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
=======
      <Seo title="Pagina non trovata — ForgeSite" description="La pagina che cerchi non esiste." path="/404" indexable={false} />
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 text-7xl font-display font-bold opacity-10" style={{ color: "var(--text-primary)" }}>
          404
        </div>
        <span className="mb-3 font-mono text-sm font-medium" style={{ color: "var(--accent-soft)" }}>
          Pagina non trovata
        </span>
        <h1 className="mb-4 font-display text-2xl font-semibold" style={{ color: "var(--text-primary)" }}>
          Questa pagina non esiste
        </h1>
        <p className="mb-8 max-w-sm text-sm" style={{ color: "var(--text-secondary)" }}>
          Il link potrebbe essere sbagliato o la pagina è stata spostata. Prova una di queste:
        </p>
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          {quickLinks.map(({ to, label, icon: Icon }) => (
            <Link key={to} to={to}
              className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition-all hover:-translate-y-0.5"
              style={{ borderColor: "var(--border)", color: "var(--text-primary)", backgroundColor: "var(--surface)" }}>
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
              <Icon size={15} strokeWidth={1.75} />
              {label}
            </Link>
          ))}
        </div>
<<<<<<< HEAD

        <Link
          to="/"
          className="rounded-sm bg-forge-accent px-5 py-2.5 text-sm font-medium text-forge-bg hover:bg-forge-accent-soft"
        >
=======
        <Link to="/"
          className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white"
          style={{ backgroundColor: "var(--accent)" }}>
          <ArrowLeft size={15} strokeWidth={2} />
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
          Torna alla home
        </Link>
      </section>
    </>
  );
}
