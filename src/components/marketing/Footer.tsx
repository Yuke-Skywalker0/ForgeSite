import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";

const cols = [
  {
    title: "Prodotto",
    links: [
      { to: "/servizi",   label: "Come funziona" },
      { to: "/prezzi",    label: "Prezzi" },
      { to: "/confronto", label: "Perché ForgeSite" },
      { to: "/inizia",    label: "Landing demo" },
      { to: "/app/register", label: "Prova gratis" },
    ],
  },
  {
    title: "Risorse",
    links: [
      { to: "/blog",       label: "Blog" },
      { to: "/chi-siamo",  label: "Chi siamo" },
    ],
  },
  {
    title: "Legale",
    links: [
      { to: "/privacy",  label: "Privacy Policy" },
      { to: "/termini",  label: "Termini di servizio" },
      { to: "/cookie",   label: "Cookie Policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t px-4 py-14 sm:px-6" style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-3 flex items-center gap-2 font-display text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
              <span
                className="flex h-6 w-6 items-center justify-center rounded-md"
                style={{ backgroundColor: "var(--accent)", color: "var(--text-on-accent)" }}
              >
                <Rocket size={13} strokeWidth={2.5} />
              </span>
              ForgeSite
            </div>
            <p className="max-w-xs text-sm" style={{ color: "var(--text-secondary)" }}>
              Crea e pubblica il tuo sito web professionale senza sapere programmare.
              Hosting gratuito, AI inclusa, il sito è sempre tuo.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="mb-3 text-sm font-medium" style={{ color: "var(--text-primary)" }}>{col.title}</h4>
              <div className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-sm transition-colors hover:opacity-100"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t pt-6 text-xs"
          style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
        >
          <span>© {new Date().getFullYear()} ForgeSite. Tutti i diritti riservati.</span>
          <span>Fatto con ❤️ in Italia</span>
        </div>
      </div>
    </footer>
  );
}
