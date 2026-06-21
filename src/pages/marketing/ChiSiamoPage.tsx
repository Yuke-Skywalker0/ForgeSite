import { Lock, Eye, Target } from "lucide-react";
import { Seo } from "@/components/marketing/Seo";
import { Card } from "@/components/ui/Card";

const principles = [
  {
    icon: Lock,
    title: "Nessun lock-in",
    text: "Il tuo sito vive nel tuo repository GitHub. Se un giorno smetti di usare ForgeSite, il sito resta tuo, completo e funzionante.",
  },
  {
    icon: Eye,
    title: "Trasparenza",
    text: "Ogni automazione produce una pull request leggibile. Sai sempre esattamente cosa sta per cambiare prima che cambi.",
  },
  {
    icon: Target,
    title: "Semplicità prima di tutto",
    text: "Le funzionalità avanzate esistono, ma non si impongono: l'esperienza base resta semplice per chi non ha bisogno di altro.",
  },
];

export default function ChiSiamoPage() {
  return (
    <>
      <Seo
        title="Chi siamo — ForgeSite"
        description="ForgeSite nasce per rendere la creazione di siti web professionali accessibile a chiunque, sfruttando GitHub Pages, automazione e intelligenza artificiale."
        path="/chi-siamo"
      />

      <section className="px-6 pb-16 pt-24 text-center">
        <span className="mb-5 inline-block font-mono text-xs uppercase tracking-wider text-forge-accent-soft">
          Chi siamo
        </span>
        <h1 className="mx-auto mb-5 max-w-2xl font-display text-4xl font-semibold leading-tight text-forge-text-primary">
          Crediamo che pubblicare un sito non debba richiedere{" "}
          <span className="text-forge-accent-soft">competenze tecniche</span>
        </h1>
        <p className="mx-auto max-w-xl text-forge-text-secondary">
          ForgeSite nasce dall'osservazione che GitHub Pages offre hosting gratuito, veloce e
          sicuro — ma richiede di scrivere codice e capire Git. Abbiamo costruito il livello
          che mancava.
        </p>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
          <Card>
            <h3 className="mb-2 font-display text-base font-semibold text-forge-text-primary">
              La nostra missione
            </h3>
            <p className="text-sm text-forge-text-secondary">
              Rendere accessibile a chiunque la pubblicazione di siti professionali, mantenendo
              il controllo e la trasparenza di un repository GitHub come unica fonte di
              verità — niente scatole nere.
            </p>
          </Card>
          <Card>
            <h3 className="mb-2 font-display text-base font-semibold text-forge-text-primary">
              Come lavoriamo
            </h3>
            <p className="text-sm text-forge-text-secondary">
              Ogni modifica fatta nell'editor diventa un commit verificabile. Non sostituiamo
              GitHub: lo orchestriamo, lasciando a chi lo desidera la possibilità di intervenire
              direttamente sul codice in qualsiasi momento.
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-forge-surface px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-12 max-w-lg text-center">
            <span className="mb-3 block font-mono text-xs uppercase tracking-wider text-forge-accent-soft">
              I nostri principi
            </span>
            <h2 className="font-display text-3xl font-semibold text-forge-text-primary">
              Tre idee guidano ogni decisione di prodotto
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {principles.map(({ icon: Icon, title, text }) => (
              <Card key={title} className="bg-forge-bg">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-forge-accent-dim">
                  <Icon size={18} className="text-forge-accent-soft" strokeWidth={1.75} />
                </div>
                <h3 className="mb-2 font-display text-base font-semibold text-forge-text-primary">
                  {title}
                </h3>
                <p className="text-sm text-forge-text-secondary">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
