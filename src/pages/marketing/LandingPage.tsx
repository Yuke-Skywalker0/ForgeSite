import { Link } from "react-router-dom";
import { Check, Zap, GitPullRequest, Sparkles } from "lucide-react";
import { Seo } from "@/components/marketing/Seo";
import { Reveal } from "@/components/ui/Reveal";

const bullets = [
  "Editor visuale a blocchi, zero codice richiesto",
  "Pubblicazione gratuita su GitHub Pages",
  "SEO automatico su ogni pagina",
  "Generazione contenuti con AI inclusa",
];

const trustPoints = [
  { icon: Zap, label: "Pubblica in minuti, non in giorni" },
  { icon: GitPullRequest, label: "Ogni modifica è revisionabile prima di andare live" },
  { icon: Sparkles, label: "L'AI genera la struttura, tu la rendi tua" },
];

export default function LandingPage() {
  return (
    <>
      <Seo
        title="ForgeSite — Il tuo sito, pubblicato oggi"
        description="Crea e pubblica un sito professionale su GitHub Pages in pochi minuti. Editor visuale, SEO automatico, AI inclusa. Inizia gratis, senza carta di credito."
        path="/inizia"
      />

      <section className="relative overflow-hidden px-6 pb-20 pt-24">
        <div
          className="pointer-events-none absolute right-[-120px] top-[-80px] h-[420px] w-[420px] rounded-full bg-forge-accent/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-[320px] w-[320px] rounded-full bg-forge-info/10 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-forge-accent-dim px-3.5 py-1.5 text-xs font-medium text-forge-accent-soft">
              Gratis per iniziare, nessuna carta richiesta
            </span>
            <h1 className="mb-5 font-display text-4xl font-semibold leading-tight tracking-tight text-forge-text-primary sm:text-5xl">
              Il tuo sito, <span className="text-forge-accent-soft">pubblicato oggi</span>
            </h1>
            <p className="mb-8 max-w-md text-lg text-forge-text-secondary">
              Trascina blocchi, lascia che l'AI scriva i testi, pubblica con un clic. Il tuo
              repository GitHub resta sempre tuo.
            </p>

            <ul className="mb-8 flex flex-col gap-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-sm text-forge-text-secondary">
                  <Check size={16} className="flex-none text-forge-accent" strokeWidth={2.5} />
                  {b}
                </li>
              ))}
            </ul>

            <Link
              to="/app/register"
              className="inline-block animate-soft-bounce rounded-sm bg-forge-accent px-8 py-3.5 text-sm font-semibold text-forge-bg hover:bg-forge-accent-soft"
            >
              Crea il tuo sito gratis →
            </Link>
          </div>

          <Reveal>
            <div className="rounded-lg border border-forge-border bg-forge-surface p-6 shadow-2xl shadow-black/30">
              <div className="mb-4 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-forge-danger/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-forge-warning/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-forge-accent/60" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="h-24 animate-float rounded-md bg-gradient-to-br from-forge-accent/20 to-forge-info/10" />
                <div className="h-3 w-3/4 rounded-full bg-forge-border" />
                <div className="h-3 w-1/2 rounded-full bg-forge-border" />
                <div className="mt-2 grid grid-cols-3 gap-2">
                  <div className="h-14 animate-float-delayed rounded-sm bg-forge-surface-raised" />
                  <div className="h-14 animate-float rounded-sm bg-forge-surface-raised" />
                  <div className="h-14 animate-float-delayed rounded-sm bg-forge-surface-raised" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-forge-border bg-forge-surface px-6 py-12">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12">
          {trustPoints.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 text-sm text-forge-text-secondary">
              <Icon size={16} className="text-forge-accent-soft" strokeWidth={1.75} />
              {label}
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <Reveal>
          <h2 className="mx-auto mb-3 max-w-lg font-display text-3xl font-semibold text-forge-text-primary">
            Zero rischio, inizia ora
          </h2>
          <p className="mx-auto mb-8 max-w-sm text-sm text-forge-text-secondary">
            Nessuna carta di credito. Cancella quando vuoi. Il tuo sito resta tuo per sempre,
            anche se smetti di usare ForgeSite.
          </p>
          <Link
            to="/app/register"
            className="inline-block rounded-sm bg-forge-accent px-8 py-3.5 text-sm font-semibold text-forge-bg hover:bg-forge-accent-soft"
          >
            Crea il tuo account gratuito
          </Link>
        </Reveal>
      </section>
    </>
  );
}
