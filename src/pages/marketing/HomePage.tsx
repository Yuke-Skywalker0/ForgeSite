import { Link } from "react-router-dom";
import { Blocks, GitPullRequest, Sparkles, Search, ShieldCheck, Puzzle } from "lucide-react";
import { Seo } from "@/components/marketing/Seo";
import { FlowDiagram } from "@/components/marketing/FlowDiagram";
import { Card } from "@/components/ui/Card";

const features = [
  {
    icon: Blocks,
    title: "Editor a blocchi",
    text: "Componi pagine trascinando blocchi predefiniti — hero, gallerie, form, prezzi — con modifica inline e responsive automatico.",
  },
  {
    icon: GitPullRequest,
    title: "Automazione GitHub",
    text: "Ogni modifica diventa un commit, una pull request e una revisione prima della pubblicazione. Il tuo repo resta la fonte di verità.",
  },
  {
    icon: Sparkles,
    title: "Generazione AI",
    text: "Descrivi la tua attività e lascia che l'AI generi pagine, testi SEO e struttura del sito, pronta da personalizzare.",
  },
  {
    icon: Search,
    title: "SEO automatico",
    text: "Meta tag, sitemap, dati strutturati Schema.org generati per ogni pagina senza configurazione manuale.",
  },
  {
    icon: ShieldCheck,
    title: "Pubblicazione controllata",
    text: "Nessuna modifica va live senza la tua approvazione: ogni publish passa da una pull request revisionabile.",
  },
  {
    icon: Puzzle,
    title: "Backend opzionale",
    text: "Per i siti più complessi, collega autenticazione utenti, database e API custom quando ti servono davvero.",
  },
];

const howItWorks = [
  { title: "Crea il progetto", text: "Scegli un template o lascia che l'AI generi la struttura in base alla tua attività." },
  { title: "Personalizza", text: "Modifica testi, immagini e layout con l'editor visuale, senza toccare codice." },
  { title: "Revisiona", text: "Ogni modifica genera una pull request: controlla le differenze prima di renderle pubbliche." },
  { title: "Pubblica", text: "Approva e il sito va live su GitHub Pages, con HTTPS e dominio personalizzato se vuoi." },
];

export default function HomePage() {
  return (
    <>
      <Seo
        title="ForgeSite — Crea siti professionali su GitHub Pages, senza scrivere codice"
        description="ForgeSite genera, modifica e pubblica siti web statici professionali su GitHub Pages tramite editor visuale a blocchi, automazione GitHub e intelligenza artificiale."
        path="/"
      />

      <section className="relative overflow-hidden px-6 pb-24 pt-28 text-center">
        <div
          className="pointer-events-none absolute left-1/2 top-[-180px] h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-forge-accent/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-forge-accent-dim px-3.5 py-1.5 text-xs font-medium text-forge-accent-soft">
            Editor visuale + AI + GitHub, tutto insieme
          </span>
          <h1 className="mb-5 font-display text-4xl font-semibold leading-tight tracking-tight text-forge-text-primary sm:text-5xl">
            Crea siti professionali su GitHub Pages,{" "}
            <span className="text-forge-accent-soft">senza scrivere una riga di codice</span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg text-forge-text-secondary">
            ForgeSite orchestra editor a blocchi, automazione GitHub e generazione AI per
            pubblicare siti veloci, sicuri e ottimizzati SEO — gratis, su infrastruttura che
            già conosci.
          </p>
          <div className="mb-16 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/app/register"
              className="rounded-sm bg-forge-accent px-7 py-3.5 text-sm font-medium text-forge-bg hover:bg-forge-accent-soft"
            >
              Inizia gratis
            </Link>
            <Link
              to="/servizi"
              className="rounded-sm border border-forge-border px-7 py-3.5 text-sm text-forge-text-primary hover:border-forge-accent/40"
            >
              Scopri come funziona
            </Link>
          </div>

          <FlowDiagram />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-xl text-center">
            <span className="mb-3 block font-mono text-xs uppercase tracking-wider text-forge-accent-soft">
              Cosa offriamo
            </span>
            <h2 className="mb-4 font-display text-3xl font-semibold text-forge-text-primary">
              Tutto quello che serve per pubblicare un sito, in un solo posto
            </h2>
            <p className="text-forge-text-secondary">
              Dall'editor visuale al deploy automatico, ForgeSite copre ogni passo senza che
              tu debba toccare GitHub direttamente.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, text }) => (
              <Card key={title}>
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

      <section className="bg-forge-surface px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-xl text-center">
            <span className="mb-3 block font-mono text-xs uppercase tracking-wider text-forge-accent-soft">
              Come funziona
            </span>
            <h2 className="font-display text-3xl font-semibold text-forge-text-primary">
              Dal primo accesso al sito pubblicato, in quattro passaggi
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {howItWorks.map((step, i) => (
              <Card key={step.title} className="bg-forge-bg">
                <span className="mb-2 block font-mono text-xs text-forge-accent-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 font-display text-base font-semibold text-forge-text-primary">
                  {step.title}
                </h3>
                <p className="text-sm text-forge-text-secondary">{step.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <h2 className="mx-auto mb-7 max-w-lg font-display text-3xl font-semibold text-forge-text-primary">
          Pronto a costruire il tuo prossimo sito?
        </h2>
        <Link
          to="/app/register"
          className="inline-block rounded-sm bg-forge-accent px-8 py-3.5 text-sm font-medium text-forge-bg hover:bg-forge-accent-soft"
        >
          Crea il tuo account gratuito
        </Link>
      </section>
    </>
  );
}
