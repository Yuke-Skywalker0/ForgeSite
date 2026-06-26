import { useCookieConsentStore } from "@/store/cookieConsentStore";
import { Seo } from "@/components/marketing/Seo";
import { Button } from "@/components/ui/Button";

const cookieTable = [
  {
    name: "forgesite_cookie_consent",
    type: "Tecnico",
    duration: "Persistente (fino a revoca)",
    purpose: "Ricorda la tua scelta su questo banner, per non richiederla ad ogni visita.",
  },
  {
    name: "access_token",
    type: "Tecnico (necessario)",
    duration: "15 minuti",
    purpose: "Mantiene la sessione di accesso attiva. HttpOnly: non leggibile da JavaScript.",
  },
  {
    name: "refresh_token",
    type: "Tecnico (necessario)",
    duration: "30 giorni",
    purpose: "Permette di rinnovare la sessione senza richiedere il login ogni 15 minuti. HttpOnly.",
  },
];

export default function CookiePage() {
  const { choice, setChoice } = useCookieConsentStore();

  return (
    <>
      <Seo
        title="Cookie Policy — ForgeSite"
        description="Quali cookie usa ForgeSite, a cosa servono, e come gestire le tue preferenze."
        path="/cookie"
        indexable={false}
      />

      <section className="px-6 pb-10 pt-20">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-2 font-display text-3xl font-semibold text-forge-text-primary">
            Cookie Policy
          </h1>
          <p className="mb-8 text-xs text-forge-text-muted">
            Ultimo aggiornamento: documento di riferimento, da validare con un consulente legale
            prima della pubblicazione in produzione con utenti reali.
          </p>

          <div className="mb-10 flex flex-col gap-5 text-sm leading-relaxed text-forge-text-secondary">
            <p>
              Un cookie è un piccolo file che il sito salva nel tuo browser. ForgeSite usa solo
              cookie tecnici necessari al funzionamento del servizio (mantenere la sessione di
              accesso) e un cookie per ricordare la tua scelta sul banner di consenso. Non
              utilizziamo cookie di profilazione pubblicitaria di terze parti.
            </p>
          </div>

          <div className="mb-10 overflow-x-auto rounded-md border border-forge-border">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-forge-border bg-forge-surface text-xs uppercase tracking-wide text-forge-text-muted">
                  <th className="px-4 py-3 font-medium">Nome</th>
                  <th className="px-4 py-3 font-medium">Tipo</th>
                  <th className="px-4 py-3 font-medium">Durata</th>
                  <th className="px-4 py-3 font-medium">Scopo</th>
                </tr>
              </thead>
              <tbody>
                {cookieTable.map((c) => (
                  <tr key={c.name} className="border-b border-forge-border last:border-0">
                    <td className="px-4 py-3 font-mono text-xs text-forge-accent-soft">{c.name}</td>
                    <td className="px-4 py-3 text-forge-text-secondary">{c.type}</td>
                    <td className="px-4 py-3 text-forge-text-secondary">{c.duration}</td>
                    <td className="px-4 py-3 text-forge-text-secondary">{c.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-md border border-forge-border bg-forge-surface p-5">
            <h2 className="mb-1 font-display text-sm font-semibold text-forge-text-primary">
              Le tue preferenze
            </h2>
            <p className="mb-4 text-sm text-forge-text-secondary">
              Scelta attuale:{" "}
              <span className="text-forge-text-primary">
                {choice === "accepted" ? "Hai accettato i cookie" : choice === "rejected" ? "Hai rifiutato i cookie" : "Non ancora indicata"}
              </span>
            </p>
            <div className="flex gap-2.5">
              <Button variant="secondary" onClick={() => setChoice("rejected")}>
                Rifiuta
              </Button>
              <Button onClick={() => setChoice("accepted")}>Accetta</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
