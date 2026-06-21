import { Seo } from "@/components/marketing/Seo";

export default function TerminiPage() {
  return (
    <>
      <Seo
        title="Termini di servizio — ForgeSite"
        description="Termini e condizioni di utilizzo della piattaforma ForgeSite."
        path="/termini"
        indexable={false}
      />

      <section className="px-6 pb-10 pt-20">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-2 font-display text-3xl font-semibold text-forge-text-primary">
            Termini di servizio
          </h1>
          <p className="mb-8 text-xs text-forge-text-muted">Ultimo aggiornamento: da definire</p>

          <div className="flex flex-col gap-5 text-sm leading-relaxed text-forge-text-secondary">
            <p>
              <strong className="text-forge-text-primary">Questo è un testo segnaposto.</strong>{" "}
              Prima della pubblicazione, sostituisci questo contenuto con termini di servizio
              reali che coprano almeno: descrizione del servizio, responsabilità dell'utente
              sui contenuti pubblicati tramite i propri repository GitHub, limitazioni di
              responsabilità su uptime di servizi terzi, condizioni di recesso e cancellazione
              account, gestione di eventuali piani a pagamento, e foro competente.
            </p>
            <p>
              Valuta una revisione legale prima di rendere il servizio disponibile a utenti
              reali.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
