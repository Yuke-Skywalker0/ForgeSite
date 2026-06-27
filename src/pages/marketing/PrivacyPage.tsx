import { Seo } from "@/components/marketing/Seo";

const sections = [
  {
    title: "1. Titolare del trattamento",
    body: "ForgeSite è il titolare del trattamento dei dati personali raccolti tramite questo sito e l'applicazione. Per qualsiasi richiesta relativa alla privacy, contattaci tramite la pagina Chi siamo.",
  },
  {
    title: "2. Dati che raccogliamo",
    body: "Quando crei un account raccogliamo: indirizzo email, password (memorizzata in forma cifrata, mai in chiaro), data di creazione dell'account e data dell'ultimo accesso. Quando crei un progetto, memorizziamo il nome del progetto, la struttura delle pagine e dei blocchi che componi, e i riferimenti al repository GitHub collegato. Se attivi un backend opzionale (Supabase, Render o Cloudflare) per uno dei tuoi siti, le credenziali che ci fornisci vengono cifrate prima di essere salvate e non sono mai visibili in chiaro, nemmeno a noi.",
  },
  {
    title: "3. Finalità del trattamento",
    body: "Usiamo i tuoi dati esclusivamente per: fornire il servizio (autenticazione, salvataggio progetti, pubblicazione su GitHub Pages), comunicarti informazioni essenziali sul tuo account, e — solo se hai accettato i cookie analitici — capire in forma aggregata come viene usato il sito per migliorarlo.",
  },
  {
    title: "4. Base giuridica",
    body: "Il trattamento dei dati necessari a fornire il servizio si basa sull'esecuzione del contratto che accetti registrandoti. Il trattamento dei cookie analitici si basa sul tuo consenso esplicito, che puoi revocare in qualsiasi momento dalla Cookie Policy.",
  },
  {
    title: "5. Conservazione dei dati",
    body: "Conserviamo i dati del tuo account finché mantieni il tuo account attivo. Se richiedi la cancellazione dell'account, i dati personali vengono rimossi entro 30 giorni, salvo obblighi di legge che richiedano una conservazione più lunga. I log delle generazioni AI vengono conservati per un massimo di 90 giorni, dopodiché vengono eliminati automaticamente.",
  },
  {
    title: "6. Servizi terzi coinvolti",
    body: "Per fornire il servizio ci appoggiamo a: GitHub (per la creazione e gestione dei repository dei tuoi progetti), un provider di database cloud per la memorizzazione dei dati applicativi, e provider di intelligenza artificiale (selezionabili) per le funzionalità di generazione automatica dei contenuti. Se attivi un backend opzionale, anche Supabase, Render o Cloudflare trattano i dati relativi a quel progetto specifico, secondo le loro rispettive informative.",
  },
  {
    title: "7. I tuoi diritti",
    body: "Hai diritto di accedere ai tuoi dati, richiederne la rettifica o la cancellazione, opporti al trattamento, e richiedere la portabilità dei dati che ci hai fornito. Puoi esercitare questi diritti contattandoci in qualsiasi momento.",
  },
  {
    title: "8. Sicurezza",
    body: "Le password sono memorizzate con hashing crittografico, mai in chiaro. Le sessioni sono protette tramite cookie HttpOnly non accessibili da JavaScript. Le credenziali di servizi terzi che colleghi sono cifrate prima del salvataggio. Tutte le comunicazioni tra il tuo browser e i nostri server avvengono via HTTPS.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy — ForgeSite"
        description="Informativa sulla privacy di ForgeSite: quali dati raccogliamo, perché, e come li proteggiamo."
        path="/privacy"
        indexable={false}
      />

      <section className="px-6 pb-10 pt-20">
        <div className="mx-auto max-w-2xl">
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <h1 className="mb-2 font-display text-3xl font-semibold text-forge-text-primary">
            Privacy Policy
          </h1>
          <p className="mb-8 text-xs text-forge-text-muted">
=======
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
          <h1 className="mb-2 font-display text-3xl font-semibold ">
            Privacy Policy
          </h1>
          <p className="mb-8 text-xs text-[var(--text-muted)]">
<<<<<<< HEAD
=======
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
            Ultimo aggiornamento: documento di riferimento, da validare con un consulente legale
            prima della pubblicazione in produzione con utenti reali.
          </p>

          <div className="flex flex-col gap-8">
            {sections.map((s) => (
              <div key={s.title}>
<<<<<<< HEAD
=======
<<<<<<< HEAD
                <h2 className="mb-2 font-display text-base font-semibold text-forge-text-primary">
                  {s.title}
                </h2>
                <p className="text-sm leading-relaxed text-forge-text-secondary">{s.body}</p>
=======
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
                <h2 className="mb-2 font-display text-base font-semibold ">
                  {s.title}
                </h2>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{s.body}</p>
<<<<<<< HEAD
=======
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
