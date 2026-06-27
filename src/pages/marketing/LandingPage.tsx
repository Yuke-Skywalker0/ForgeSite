import { Link } from "react-router-dom";
import { Check, Zap, GitPullRequest, Sparkles } from "lucide-react";
import { Seo } from "@/components/marketing/Seo";
import { GalaxyCanvas } from "@/components/marketing/GalaxyCanvas";
import { StarField } from "@/components/marketing/StarField";
import { Reveal } from "@/components/ui/Reveal";

const bullets = [
  "Editor visuale a blocchi, zero codice richiesto",
  "Pubblicazione gratuita su GitHub Pages",
  "SEO automatico su ogni pagina",
  "Generazione contenuti con AI inclusa",
];

const trustPoints = [
  { icon: Zap,            label: "Pubblica in minuti, non in giorni" },
  { icon: GitPullRequest, label: "Ogni modifica è revisionabile prima di andare live" },
  { icon: Sparkles,       label: "L'AI genera la struttura, tu la rendi tua" },
];

export default function LandingPage() {
  return (
    <>
      <Seo
        title="ForgeSite — Il tuo sito, pubblicato oggi"
        description="Crea e pubblica un sito professionale su GitHub Pages in pochi minuti. Editor visuale, SEO automatico, AI inclusa. Inizia gratis, senza carta di credito."
        path="/inizia"
      />

      {/* Hero con galassia full */}
      <section className="relative overflow-hidden px-6 pb-20 pt-24">
        <GalaxyCanvas starCount={220} nebulaOpacity={0.18} className="absolute inset-0 h-full w-full" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-forge-bg to-transparent" aria-hidden="true" />

        <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
<<<<<<< HEAD
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/20 bg-[var(--accent-dim)]/60 px-3.5 py-1.5 text-xs font-medium text-[var(--accent-soft)] backdrop-blur-sm">
=======
<<<<<<< HEAD
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-forge-accent/20 bg-forge-accent-dim/60 px-3.5 py-1.5 text-xs font-medium text-forge-accent-soft backdrop-blur-sm">
=======
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/20 bg-[var(--accent-dim)]/60 px-3.5 py-1.5 text-xs font-medium text-[var(--accent-soft)] backdrop-blur-sm">
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
                Gratis per iniziare, nessuna carta richiesta
              </span>
            </Reveal>
            <Reveal delay={60}>
<<<<<<< HEAD
=======
<<<<<<< HEAD
              <h1 className="mb-5 font-display text-4xl font-semibold leading-tight tracking-tight text-forge-text-primary sm:text-5xl">
                Il tuo sito, <span className="text-forge-accent-soft">pubblicato oggi</span>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mb-8 max-w-md text-lg text-forge-text-secondary">
=======
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
              <h1 className="mb-5 font-display text-4xl font-semibold leading-tight tracking-tight  sm:text-5xl">
                Il tuo sito, <span className="text-[var(--accent-soft)]">pubblicato oggi</span>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mb-8 max-w-md text-lg text-[var(--text-secondary)]">
<<<<<<< HEAD
=======
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
                Trascina blocchi, lascia che l'AI scriva i testi, pubblica con un clic. Il tuo
                repository GitHub resta sempre tuo.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <ul className="mb-8 flex flex-col gap-3">
                {bullets.map((b) => (
<<<<<<< HEAD
                  <li key={b} className="flex items-center gap-2.5 text-sm text-[var(--text-secondary)]">
                    <Check size={16} className="flex-none text-[var(--accent)]" strokeWidth={2.5} />
=======
<<<<<<< HEAD
                  <li key={b} className="flex items-center gap-2.5 text-sm text-forge-text-secondary">
                    <Check size={16} className="flex-none text-forge-accent" strokeWidth={2.5} />
=======
                  <li key={b} className="flex items-center gap-2.5 text-sm text-[var(--text-secondary)]">
                    <Check size={16} className="flex-none text-[var(--accent)]" strokeWidth={2.5} />
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={200}>
              <Link
                to="/app/register"
<<<<<<< HEAD
                className="inline-block rounded-sm bg-[var(--accent)] px-8 py-3.5 text-sm font-semibold text-white shadow-lg  transition-all hover:bg-[var(--accent-soft)] hover:"
=======
<<<<<<< HEAD
                className="inline-block rounded-sm bg-forge-accent px-8 py-3.5 text-sm font-semibold text-forge-bg shadow-lg shadow-forge-accent/25 transition-all hover:bg-forge-accent-soft hover:shadow-forge-accent/40"
=======
                className="inline-block rounded-sm bg-[var(--accent)] px-8 py-3.5 text-sm font-semibold text-white shadow-lg  transition-all hover:bg-[var(--accent-soft)] hover:"
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
              >
                Crea il tuo sito gratis →
              </Link>
            </Reveal>
          </div>

          {/* Mock UI card con stelle animate interne */}
          <Reveal delay={100}>
<<<<<<< HEAD
=======
<<<<<<< HEAD
            <div className="relative overflow-hidden rounded-lg border border-forge-border bg-forge-surface/80 p-6 shadow-2xl shadow-black/40 backdrop-blur-sm">
              <StarField count={25} className="absolute inset-0 h-full w-full opacity-50" />
              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-forge-danger/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-forge-warning/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-forge-accent/60" />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="h-24 animate-float rounded-md bg-gradient-to-br from-forge-accent/25 via-forge-info/10 to-transparent" />
                  <div className="h-3 w-3/4 rounded-full bg-forge-border" />
                  <div className="h-3 w-1/2 rounded-full bg-forge-border" />
=======
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
            <div className="relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)]/80 p-6 shadow-2xl shadow-black/40 backdrop-blur-sm">
              <StarField count={25} className="absolute inset-0 h-full w-full opacity-50" />
              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]/60" />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="h-24 animate-float rounded-md bg-gradient-to-br from-forge-accent/25 via-forge-info/10 to-transparent" />
                  <div className="h-3 w-3/4 rounded-full bg-[var(--border)]" />
                  <div className="h-3 w-1/2 rounded-full bg-[var(--border)]" />
<<<<<<< HEAD
=======
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
<<<<<<< HEAD
                        className="h-14 rounded-sm bg-[var(--surface-raised)]"
=======
<<<<<<< HEAD
                        className="h-14 rounded-sm bg-forge-surface-raised"
=======
                        className="h-14 rounded-sm bg-[var(--surface-raised)]"
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
                        style={{ animation: `float ${4 + i}s ease-in-out ${i * 0.5}s infinite` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust strip */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <section className="border-y border-forge-border bg-forge-surface px-6 py-12">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12">
          {trustPoints.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 text-sm text-forge-text-secondary">
              <Icon size={16} className="text-forge-accent-soft" strokeWidth={1.75} />
=======
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
      <section className="border-y border-[var(--border)] bg-[var(--surface)] px-6 py-12">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12">
          {trustPoints.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 text-sm text-[var(--text-secondary)]">
              <Icon size={16} className="text-[var(--accent-soft)]" strokeWidth={1.75} />
<<<<<<< HEAD
=======
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* CTA finale con galassia leggera */}
      <section className="relative overflow-hidden px-6 py-24 text-center">
        <StarField count={70} className="absolute inset-0 h-full w-full opacity-50" />
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-forge-accent/6 blur-3xl" aria-hidden="true" />
        <div className="relative z-10">
          <Reveal>
            <h2 className="mx-auto mb-3 max-w-lg font-display text-3xl font-semibold text-forge-text-primary">
              Zero rischio, inizia ora
            </h2>
            <p className="mx-auto mb-8 max-w-sm text-sm text-forge-text-secondary">
=======
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/6 blur-3xl" aria-hidden="true" />
        <div className="relative z-10">
          <Reveal>
            <h2 className="mx-auto mb-3 max-w-lg font-display text-3xl font-semibold ">
              Zero rischio, inizia ora
            </h2>
            <p className="mx-auto mb-8 max-w-sm text-sm text-[var(--text-secondary)]">
<<<<<<< HEAD
=======
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
              Nessuna carta di credito. Cancella quando vuoi. Il tuo sito resta tuo per sempre,
              anche se smetti di usare ForgeSite.
            </p>
            <Link
              to="/app/register"
<<<<<<< HEAD
              className="inline-block rounded-sm bg-[var(--accent)] px-8 py-3.5 text-sm font-semibold text-white shadow-lg  transition-all hover:bg-[var(--accent-soft)] hover:"
=======
<<<<<<< HEAD
              className="inline-block rounded-sm bg-forge-accent px-8 py-3.5 text-sm font-semibold text-forge-bg shadow-lg shadow-forge-accent/20 transition-all hover:bg-forge-accent-soft hover:shadow-forge-accent/30"
=======
              className="inline-block rounded-sm bg-[var(--accent)] px-8 py-3.5 text-sm font-semibold text-white shadow-lg  transition-all hover:bg-[var(--accent-soft)] hover:"
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
            >
              Crea il tuo account gratuito
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
