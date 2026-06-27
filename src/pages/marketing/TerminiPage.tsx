import { Seo } from "@/components/marketing/Seo";

const sections = [
  {
    title: "1. Accettazione dei termini",
    body: "Utilizzando ForgeSite accetti questi termini di servizio. Se non li accetti, ti chiediamo di non utilizzare la piattaforma.",
  },
  {
    title: "2. Descrizione del servizio",
    body: "ForgeSite è una piattaforma che permette di creare, modificare e pubblicare siti web statici su GitHub Pages tramite un editor visuale, automazione GitHub e generazione assistita da intelligenza artificiale. Il tuo repository GitHub resta sempre l'unica fonte di verità del tuo sito: ForgeSite orchestra le modifiche, non sostituisce GitHub.",
  },
  {
    title: "3. Account e responsabilità dell'utente",
    body: "Sei responsabile della sicurezza delle tue credenziali di accesso e di tutte le attività svolte tramite il tuo account. Sei inoltre l'unico responsabile dei contenuti che pubblichi tramite i tuoi repository GitHub: ForgeSite fornisce lo strumento, non modera né garantisce i contenuti che scegli di pubblicare.",
  },
  {
    title: "4. Limitazioni di responsabilità sui servizi terzi",
    body: "ForgeSite si appoggia a servizi terzi (GitHub Pages, provider di database cloud, provider AI, e — se li attivi — Supabase, Render o Cloudflare). Non possiamo garantire l'uptime o la disponibilità continua di questi servizi: eventuali interruzioni causate da terzi non sono sotto il nostro controllo diretto.",
  },
  {
    title: "5. Piani e fatturazione",
    body: "Il piano Free è gratuito e non richiede dati di pagamento. I piani a pagamento, quando attivati, vengono fatturati secondo la periodicità indicata al momento della sottoscrizione. Puoi annullare un piano a pagamento in qualsiasi momento dalle impostazioni del tuo account; l'accesso alle funzionalità del piano resta attivo fino alla fine del periodo già pagato.",
  },
  {
    title: "6. Recesso e cancellazione account",
    body: "Puoi cancellare il tuo account in qualsiasi momento. La cancellazione rimuove il tuo accesso a ForgeSite, ma non elimina i repository GitHub dei tuoi progetti, che restano di tua proprietà e sotto il tuo controllo, essendo ospitati sul tuo account GitHub.",
  },
  {
    title: "7. Modifiche ai termini",
    body: "Possiamo aggiornare questi termini nel tempo. In caso di modifiche sostanziali, ti informeremo tramite l'indirizzo email associato al tuo account prima che le modifiche entrino in vigore.",
  },
  {
    title: "8. Legge applicabile",
    body: "Questi termini sono regolati dalla legge italiana. Per qualsiasi controversia è competente il foro del titolare del servizio, salvo diversa disposizione di legge inderogabile a tutela del consumatore.",
  },
];

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
<<<<<<< HEAD
          <h1 className="mb-2 font-display text-3xl font-semibold text-forge-text-primary">
            Termini di servizio
          </h1>
          <p className="mb-8 text-xs text-forge-text-muted">
=======
          <h1 className="mb-2 font-display text-3xl font-semibold ">
            Termini di servizio
          </h1>
          <p className="mb-8 text-xs text-[var(--text-muted)]">
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
            Ultimo aggiornamento: documento di riferimento, da validare con un consulente legale
            prima della pubblicazione in produzione con utenti reali.
          </p>

          <div className="flex flex-col gap-8">
            {sections.map((s) => (
              <div key={s.title}>
<<<<<<< HEAD
                <h2 className="mb-2 font-display text-base font-semibold text-forge-text-primary">
                  {s.title}
                </h2>
                <p className="text-sm leading-relaxed text-forge-text-secondary">{s.body}</p>
=======
                <h2 className="mb-2 font-display text-base font-semibold ">
                  {s.title}
                </h2>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{s.body}</p>
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
