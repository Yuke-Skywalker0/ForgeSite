import { Lock, Eye, Target, Heart } from "lucide-react";
import { Seo } from "@/components/marketing/Seo";
import { Reveal } from "@/components/ui/Reveal";
import { InteractiveGrid } from "@/components/marketing/InteractiveGrid";

const principles = [
  { icon: Lock,   title: "Il tuo sito è davvero tuo",          text: "Il codice del sito vive nel tuo repository GitHub. Se un giorno smetti di usare ForgeSite, il sito resta lì, funzionante, per sempre." },
  { icon: Eye,    title: "Nessuna sorpresa",                    text: "Ogni modifica diventa una pull request che puoi leggere e approvare. Sai sempre esattamente cosa sta cambiando prima che cambi." },
  { icon: Target, title: "Semplice per tutti, potente per chi vuole di più", text: "Le funzionalità avanzate esistono ma non si impongono. Puoi usare ForgeSite per pubblicare un sito in 5 minuti o per costruire un'applicazione web completa." },
  { icon: Heart,  title: "Fatti in Italia",                    text: "Siamo un team italiano. Supporto in italiano, interfaccia in italiano, GDPR nativo. Non devi leggere le condizioni in inglese." },
];

export default function ChiSiamoPage() {
  return (
    <>
      <Seo
        title="Chi siamo — ForgeSite, il modo più semplice per creare siti web"
        description="ForgeSite nasce per rendere la creazione di siti web professionali accessibile a chiunque, sfruttando GitHub Pages, automazione e intelligenza artificiale. Siamo un team italiano."
        path="/chi-siamo"
      />

      <section className="relative overflow-hidden px-4 pb-16 pt-24 sm:px-6">
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: "var(--accent)" }} aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="mb-4 block font-mono text-xs uppercase tracking-wider" style={{ color: "var(--accent-soft)" }}>
              Chi siamo
            </span>
            <h1 className="mb-5 font-display text-4xl font-semibold leading-tight" style={{ color: "var(--text-primary)" }}>
              Crediamo che avere un sito professionale<br />
              <span style={{ color: "var(--accent-soft)" }}>non dovrebbe richiedere un tecnico</span>
            </h1>
            <p style={{ color: "var(--text-secondary)" }} className="text-lg">
              ForgeSite nasce da una constatazione semplice: GitHub Pages offre hosting gratuito, veloce e sicuro —
              ma richiede di sapere cosa sono Git, branch e pull request. Abbiamo costruito il livello che mancava.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
          {[
            { title: "La nostra missione", text: "Rendere accessibile a chiunque la pubblicazione di siti professionali, mantenendo il controllo totale tramite il repository GitHub come unica fonte di verità — niente scatole nere, niente lock-in." },
            { title: "Come lavoriamo", text: "Ogni modifica fatta nell'editor diventa un commit verificabile. Non sostituiamo GitHub: lo orchestriamo. Chi vuole può intervenire direttamente sul codice in qualsiasi momento — la porta è sempre aperta." },
          ].map((item) => (
            <Reveal key={item.title}>
              <div className="rounded-xl p-6 h-full"
                style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}>
                <h3 className="mb-3 font-display text-base font-semibold" style={{ color: "var(--text-primary)" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 sm:px-6"
        style={{ backgroundColor: "var(--surface)" }}>
        <InteractiveGrid className="absolute inset-0 h-full w-full opacity-50" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <Reveal>
            <div className="mb-12 text-center">
              <span className="mb-3 block font-mono text-xs uppercase tracking-wider" style={{ color: "var(--accent-soft)" }}>
                I nostri principi
              </span>
              <h2 className="font-display text-3xl font-semibold" style={{ color: "var(--text-primary)" }}>
                Quattro idee che guidano ogni decisione
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {principles.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 70}>
                <div className="flex gap-4 rounded-xl p-5 h-full"
                  style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)" }}>
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl"
                    style={{ backgroundColor: "var(--accent-dim)" }}>
                    <Icon size={18} strokeWidth={1.75} style={{ color: "var(--accent)" }} />
                  </div>
                  <div>
                    <h3 className="mb-1.5 font-display text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
