import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-forge-border px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-3 flex items-center gap-2 font-display text-lg font-semibold text-forge-text-primary">
              <span className="h-2 w-2 rounded-full bg-forge-accent" aria-hidden="true" />
              ForgeSite
            </div>
            <p className="max-w-xs text-sm text-forge-text-secondary">
              Crea e gestisci siti web professionali su GitHub Pages senza scrivere codice.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm text-forge-text-primary">Prodotto</h4>
            <div className="flex flex-col gap-2.5 text-sm text-forge-text-secondary">
              <Link to="/servizi" className="hover:text-forge-text-primary">Servizi</Link>
              <Link to="/prezzi" className="hover:text-forge-text-primary">Prezzi</Link>
              <Link to="/confronto" className="hover:text-forge-text-primary">Confronto</Link>
              <Link to="/app/login" className="hover:text-forge-text-primary">Accedi</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm text-forge-text-primary">Risorse</h4>
            <div className="flex flex-col gap-2.5 text-sm text-forge-text-secondary">
              <Link to="/blog" className="hover:text-forge-text-primary">Blog</Link>
              <Link to="/chi-siamo" className="hover:text-forge-text-primary">Chi siamo</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm text-forge-text-primary">Legale</h4>
            <div className="flex flex-col gap-2.5 text-sm text-forge-text-secondary">
              <Link to="/privacy" className="hover:text-forge-text-primary">Privacy Policy</Link>
              <Link to="/termini" className="hover:text-forge-text-primary">Termini di servizio</Link>
              <Link to="/cookie" className="hover:text-forge-text-primary">Cookie Policy</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-forge-border pt-6 text-xs text-forge-text-muted">
          © {new Date().getFullYear()} ForgeSite. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}
