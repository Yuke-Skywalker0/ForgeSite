import { Seo } from "@/components/marketing/Seo";

export default function PrivacyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy — ForgeSite"
        description="Informativa sulla privacy di ForgeSite: quali dati raccogliamo e come li trattiamo."
        path="/privacy"
        indexable={false}
      />

      <section className="px-6 pb-10 pt-20">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-2 font-display text-3xl font-semibold text-forge-text-primary">
            Privacy Policy
          </h1>
          <p className="mb-8 text-xs text-forge-text-muted">Ultimo aggiornamento: da definire</p>

          <div className="flex flex-col gap-5 text-sm leading-relaxed text-forge-text-secondary">
            <p>
              <strong className="text-forge-text-primary">Questo è un testo segnaposto.</strong>{" "}
              Prima della pubblicazione in produzione, sostituisci questo contenuto con una
              informativa privacy reale e conforme al GDPR, che descriva con precisione: quali
              dati personali raccogli (email, dati account, eventuali dati dei visitatori dei
              siti generati), per quali finalità, su quale base giuridica, per quanto tempo li
              conservi, quali servizi terzi li trattano per tuo conto (MongoDB Atlas, provider
              AI, GitHub, eventuali Supabase/Render/Cloudflare collegati dai clienti), e come
              l'utente può esercitare i propri diritti.
            </p>
            <p>
              Redigi questo testo con l'aiuto di un consulente legale prima di rendere il sito
              pubblico a utenti finali.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
