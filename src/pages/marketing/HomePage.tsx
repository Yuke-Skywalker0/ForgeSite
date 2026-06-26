import { Link } from "react-router-dom";
import { Blocks, GitPullRequest, Sparkles, Search, ShieldCheck, Puzzle } from "lucide-react";
import { Seo } from "@/components/marketing/Seo";
import { FlowDiagram } from "@/components/marketing/FlowDiagram";
import { GalaxyCanvas } from "@/components/marketing/GalaxyCanvas";
import { StarField } from "@/components/marketing/StarField";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

const features = [
  { icon: Blocks,        title: "Editor a blocchi",          text: "Componi pagine trascinando blocchi predefiniti — hero, gallerie, form, prezzi — con modifica inline e responsive automatico su ogni dispositivo." },
  { icon: GitPullRequest,title: "Automazione GitHub",         text: "Ogni modifica diventa un commit, una pull request e una revisione prima della pubblicazione. Il tuo repo resta sempre la fonte di verità." },
  { icon: Sparkles,      title: "Generazione AI",             text: "Descrivi la tua attività e lascia che l'AI generi pagine, testi SEO e struttura del sito, pronti da personalizzare in pochi secondi." },
  { icon: Search,        title: "SEO automatico",             text: "Meta tag, sitemap, Schema.org e Open Graph generati per ogni pagina senza configurazione manuale — mai più errori di indicizzazione." },
  { icon: ShieldCheck,   title: "Pubblicazione controllata",  text: "Nessuna modifica va live senza la tua approvazione: ogni publish passa da una pull request revisionabile, così sai sempre cosa cambia." },
  { icon: Puzzle,        title: "Backend opzionale",          text: "Per i siti più complessi, collega autenticazione utenti, database e API custom — solo quando servono davvero, senza ripartire da zero." },
];

const howItWorks = [
  { num: "01", title: "Crea il progetto",  text: "Scegli un template dalla libreria o lascia che l'AI generi la struttura in base al tuo settore e tono di voce." },
  { num: "02", title: "Personalizza",       text: "Modifica testi, immagini e layout con l'editor visuale drag-and-drop, senza toccare codice." },
  { num: "03", title: "Revisiona",          text: "Ogni modifica genera una pull request: controlla le differenze prima di renderle pubbliche con un clic." },
  { num: "04", title: "Pubblica",           text: "Approva e il sito è live su GitHub Pages, con HTTPS incluso e dominio personalizzato quando vuoi." },
];

const numbers = [
  { value: "5 min",  label: "per pubblicare il primo sito" },
  { value: "100%",   label: "proprietà del codice sorgente" },
  { value: "€0",     label: "hosting su GitHub Pages" },
  { value: "24",     label: "template pronti per ogni settore" },
];

export default function HomePage() {
  return (
    <>
      <Seo
        title="ForgeSite — Crea siti professionali su GitHub Pages, senza scrivere codice"
        description="ForgeSite genera, modifica e pubblica siti web statici professionali su GitHub Pages tramite editor visuale a blocchi, automazione GitHub e intelligenza artificiale. Gratis per iniziare."
        path="/"
      />

      {/* ── HERO con Galassia ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 pb-28 pt-28 text-center">
        {/* Galaxy canvas — assoluto, dietro tutto */}
        <GalaxyCanvas
          starCount={200}
          nebulaOpacity={0.16}
          className="absolute inset-0 h-full w-full"
        />

        {/* Gradiente di raccordo in basso per transizione morbida verso la sezione successiva */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-forge-bg to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-3xl">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-forge-accent/20 bg-forge-accent-dim/60 px-4 py-1.5 text-xs font-medium text-forge-accent-soft backdrop-blur-sm">
              ⚡ Editor visuale · AI · GitHub — tutto insieme
            </span>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="mb-5 font-display text-4xl font-semibold leading-tight tracking-tight text-forge-text-primary sm:text-5xl lg:text-6xl">
              Crea siti professionali su GitHub Pages,{" "}
              <span className="text-forge-accent-soft">senza scrivere codice</span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mx-auto mb-10 max-w-xl text-lg text-forge-text-secondary">
              ForgeSite orchestra editor a blocchi, automazione GitHub e generazione AI per
              pubblicare siti veloci, sicuri e ottimizzati SEO — gratis, sull'infrastruttura
              che già conosci.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mb-16 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/app/register"
                className="rounded-sm bg-forge-accent px-8 py-3.5 text-sm font-semibold text-forge-bg shadow-lg shadow-forge-accent/20 transition-all hover:bg-forge-accent-soft hover:shadow-forge-accent/30"
              >
                Inizia gratis — nessuna carta richiesta
              </Link>
              <Link
                to="/confronto"
                className="rounded-sm border border-forge-border bg-forge-bg/50 px-7 py-3.5 text-sm text-forge-text-primary backdrop-blur-sm transition-colors hover:border-forge-accent/40"
              >
                Confronta le opzioni
              </Link>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <FlowDiagram />
          </Reveal>
        </div>
      </section>

      {/* ── Numeri ────────────────────────────────────────────────────── */}
      <section className="relative border-y border-forge-border bg-forge-surface px-6 py-12">
        <StarField count={30} className="absolute inset-0 h-full w-full opacity-40" />
        <div className="relative z-10 mx-auto grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
          {numbers.map((n, i) => (
            <Reveal key={n.label} delay={i * 60}>
              <div className="text-center">
                <p className="mb-1 font-display text-3xl font-semibold text-forge-accent-soft">{n.value}</p>
                <p className="text-xs text-forge-text-secondary">{n.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────────────────── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mx-auto mb-14 max-w-xl text-center">
              <span className="mb-3 block font-mono text-xs uppercase tracking-wider text-forge-accent-soft">
                Cosa offriamo
              </span>
              <h2 className="mb-4 font-display text-3xl font-semibold text-forge-text-primary">
                Tutto quello che serve, in un solo posto
              </h2>
              <p className="text-forge-text-secondary">
                Dall'editor visuale al deploy automatico, dalla SEO ai widget galleggianti —
                senza mai perdere il controllo del tuo repository.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 60}>
                <Card className="group flex flex-col gap-3 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-forge-accent-dim transition-colors group-hover:bg-forge-accent/20">
                    <Icon size={18} className="text-forge-accent-soft" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-base font-semibold text-forge-text-primary">{title}</h3>
                  <p className="text-sm text-forge-text-secondary">{text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Come funziona ─────────────────────────────────────────────── */}
      <section className="bg-forge-surface px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mx-auto mb-14 max-w-xl text-center">
              <span className="mb-3 block font-mono text-xs uppercase tracking-wider text-forge-accent-soft">
                Come funziona
              </span>
              <h2 className="font-display text-3xl font-semibold text-forge-text-primary">
                Dal primo accesso al sito live, in quattro passi
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {howItWorks.map((step, i) => (
              <Reveal key={step.num} delay={i * 80}>
                <Card className="bg-forge-bg hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20">
                  <span className="mb-3 block font-mono text-xs text-forge-accent-soft">{step.num}</span>
                  <h3 className="mb-2 font-display text-base font-semibold text-forge-text-primary">{step.title}</h3>
                  <p className="text-sm text-forge-text-secondary">{step.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ───────────────────────────────────────────────── */}
      <section className="px-6 py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl rounded-lg border border-forge-border bg-gradient-to-b from-forge-accent/5 to-transparent p-8 text-center">
            <p className="mb-4 font-display text-xl font-medium text-forge-text-primary">
              "Finalmente uno strumento che mi dà il controllo vero del sito senza dovermi
              affidare a un developer per ogni piccola modifica."
            </p>
            <p className="text-sm text-forge-text-muted">— Utente beta, studio legale</p>
          </div>
        </Reveal>
      </section>

      {/* ── CTA finale con StarField ───────────────────────────────────── */}
      <section className="relative overflow-hidden bg-forge-surface px-6 py-24 text-center">
        <StarField count={80} className="absolute inset-0 h-full w-full opacity-60" />
        {/* glow verde centrale */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-forge-accent/8 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative z-10">
          <Reveal>
            <h2 className="mx-auto mb-3 max-w-lg font-display text-3xl font-semibold text-forge-text-primary">
              Pronto a costruire il tuo prossimo sito?
            </h2>
            <p className="mx-auto mb-8 max-w-sm text-sm text-forge-text-secondary">
              Nessuna carta di credito. Il tuo sito resta tuo per sempre, anche se smetti di
              usare ForgeSite.
            </p>
            <Link
              to="/app/register"
              className="inline-block rounded-sm bg-forge-accent px-8 py-3.5 text-sm font-semibold text-forge-bg shadow-lg shadow-forge-accent/20 transition-all hover:bg-forge-accent-soft hover:shadow-forge-accent/30"
            >
              Crea il tuo account gratuito →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
