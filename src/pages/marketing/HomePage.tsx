import { Link } from "react-router-dom";
import { Blocks, Wand2, Search, ShieldCheck, Zap, Star, ArrowRight, PlayCircle } from "lucide-react";
import { Seo } from "@/components/marketing/Seo";
import { FlowDiagram } from "@/components/marketing/FlowDiagram";
import { GalaxyCanvas } from "@/components/marketing/GalaxyCanvas";
import { StarField } from "@/components/marketing/StarField";
import { InteractiveGrid } from "@/components/marketing/InteractiveGrid";
import { Reveal } from "@/components/ui/Reveal";

const features = [
  {
    icon: Blocks,
    title: "Costruisci trascinando",
    subtitle: "Nessun codice richiesto",
    text: "Scegli un blocco dal menu e trascinalo dove vuoi. Modifica testi e immagini cliccando direttamente sulla pagina — come se stessi usando Word, ma il risultato è un vero sito web professionale.",
  },
  {
    icon: Wand2,
    title: "L'AI scrive per te",
    subtitle: "Descrivi, lei crea",
    text: "Dicci che tipo di attività hai e il tono che vuoi usare. In pochi secondi hai una bozza completa del sito, con testi, struttura e ottimizzazione SEO — tu la revisi e la personalizzi.",
  },
  {
    icon: Search,
    title: "Google ti trova subito",
    subtitle: "SEO automatico",
    text: "Ogni pagina che pubblichi viene automaticamente ottimizzata per i motori di ricerca. Sitemap, meta tag, dati strutturati — tutto generato senza che tu debba capire cosa significano.",
  },
  {
    icon: ShieldCheck,
    title: "Nessuna sorpresa",
    subtitle: "Controllo totale",
    text: "Prima che qualcosa vada online, ti mostriamo esattamente cosa cambia. Puoi approvare, modificare o annullare. Il tuo sito non si aggiorna mai senza il tuo ok.",
  },
  {
    icon: Zap,
    title: "Online in 5 minuti",
    subtitle: "Hosting gratuito incluso",
    text: "Nessun server da configurare, nessun dominio da comprare per iniziare. Il tuo sito va live su GitHub Pages — hosting professionale, gratuito, veloce in tutto il mondo.",
  },
  {
    icon: Star,
    title: "Il tuo sito è tuo",
    subtitle: "Zero lock-in",
    text: "Al contrario dei page builder tradizionali, qui il codice del sito è tuo al 100%. Se un giorno vuoi smettere di usare ForgeSite, il sito continua a esistere esattamente dove è.",
  },
];

const howItWorks = [
  { num: "01", title: "Crea un account", text: "Registrati gratis in 30 secondi. Nessuna carta di credito richiesta." },
  { num: "02", title: "Scegli come iniziare", text: "Parti da un template pronto per la tua categoria, oppure descrivi la tua attività e lascia che l'AI crei la struttura iniziale." },
  { num: "03", title: "Personalizza a modo tuo", text: "Modifica colori, testi, immagini e layout con un editor visuale semplice come trascinare e cliccare. Niente codice." },
  { num: "04", title: "Pubblica con un clic", text: "Quando sei soddisfatto, pubblichi. Il sito va live in pochi secondi, con HTTPS automatico e visibile in tutto il mondo." },
];

const numbers = [
  { value: "5 min",  label: "e il tuo sito è online" },
  { value: "€0",     label: "di hosting — per sempre" },
  { value: "24",     label: "template pronti all'uso" },
  { value: "100%",   label: "del sito è sempre tuo" },
];

const testimonials = [
  { quote: "Ho pubblicato il sito del mio studio in un pomeriggio. Non sapevo nulla di siti web.", author: "Marco R.", role: "Avvocato" },
  { quote: "L'AI ha scritto i testi meglio di quanto avrei fatto io. Ho solo modificato qualche parola.", author: "Sara T.", role: "Fotografa" },
  { quote: "Finalmente ho il sito che volevo, senza pagare un developer per ogni piccola modifica.", author: "Luca M.", role: "Consulente" },
];

export default function HomePage() {
  return (
    <>
      <Seo
        title="ForgeSite — Crea il tuo sito in 5 minuti, senza scrivere codice"
        description="ForgeSite ti permette di creare e pubblicare un sito web professionale in pochi minuti, senza sapere nulla di programmazione. Editor visuale, AI inclusa, hosting gratuito. Provalo gratis."
        path="/"
      />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden px-4 pb-28 pt-24 text-center sm:px-6">
        <GalaxyCanvas starCount={200} nebulaOpacity={0.16} className="absolute inset-0 h-full w-full" />
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t to-transparent"
          style={{ backgroundImage: "linear-gradient(to top, var(--bg), transparent)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-3xl">
          <Reveal>
            <span
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium backdrop-blur-sm"
              style={{ borderColor: "rgba(16,185,129,0.3)", backgroundColor: "rgba(16,185,129,0.08)", color: "var(--accent-soft)" }}
            >
              ✨ Gratis per sempre per il piano base — nessuna carta richiesta
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mb-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl" style={{ color: "var(--text-primary)" }}>
              Il tuo sito web professionale,{" "}
              <span style={{ color: "var(--accent-soft)" }}>pronto in 5 minuti</span>
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mb-4 max-w-2xl text-lg" style={{ color: "var(--text-secondary)" }}>
              Non devi sapere programmare. Non devi capire di hosting. Non devi assumere uno sviluppatore.
            </p>
            <p className="mx-auto mb-10 max-w-xl" style={{ color: "var(--text-secondary)" }}>
              Scegli un template, personalizza i contenuti con il nostro editor visuale, e pubblica con un clic.
              <strong style={{ color: "var(--text-primary)" }}> L'AI si occupa del resto.</strong>
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mb-16 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/app/register"
                className="flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold glow-accent-sm hover:glow-accent transition-all"
                style={{ backgroundColor: "var(--accent)", color: "#fff" }}
              >
                Crea il tuo sito gratis
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
              <Link
                to="/app/register?demo=1"
                className="flex items-center gap-2 rounded-lg border px-7 py-3.5 text-sm backdrop-blur-sm transition-colors"
                style={{ borderColor: "var(--border)", color: "var(--text-primary)", backgroundColor: "rgba(255,255,255,0.05)" }}
              >
                <PlayCircle size={16} strokeWidth={1.75} />
                Guarda come funziona
              </Link>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <FlowDiagram />
          </Reveal>
        </div>
      </section>

      {/* ── Numeri ── */}
      <section className="relative border-y px-4 py-14 sm:px-6" style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}>
        <StarField count={35} className="absolute inset-0 h-full w-full opacity-40" />
        <div className="relative z-10 mx-auto grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4">
          {numbers.map((n, i) => (
            <Reveal key={n.label} delay={i * 60}>
              <div className="text-center">
                <p className="mb-1 font-display text-3xl font-semibold" style={{ color: "var(--accent-soft)" }}>{n.value}</p>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>{n.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Per chi è ForgeSite ── */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="mb-10 text-center">
              <span className="mb-3 block font-mono text-xs uppercase tracking-wider" style={{ color: "var(--accent-soft)" }}>Per chi è</span>
              <h2 className="font-display text-3xl font-semibold" style={{ color: "var(--text-primary)" }}>
                Perfetto se sei un professionista, non un programmatore
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {["Avvocati","Ristoratori","Fotografi","Consulenti","Artigiani","Negozi"].map((cat, i) => (
              <Reveal key={cat} delay={i * 40}>
                <div
                  className="rounded-lg p-4 text-center text-sm font-medium transition-all hover:-translate-y-1"
                  style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
                >
                  {cat}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <p className="mt-4 text-center text-sm" style={{ color: "var(--text-muted)" }}>
              E chiunque abbia bisogno di un sito professionale senza voglia di imparare a programmare.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Features con Interactive Grid ── */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6" style={{ backgroundColor: "var(--surface)" }}>
        <InteractiveGrid className="absolute inset-0 h-full w-full opacity-60" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <Reveal>
            <div className="mx-auto mb-14 max-w-xl text-center">
              <span className="mb-3 block font-mono text-xs uppercase tracking-wider" style={{ color: "var(--accent-soft)" }}>Funzionalità</span>
              <h2 className="mb-4 font-display text-3xl font-semibold" style={{ color: "var(--text-primary)" }}>
                Tutto quello che ti serve, niente di quello che non ti serve
              </h2>
              <p style={{ color: "var(--text-secondary)" }}>
                Abbiamo eliminato la complessità tecnica e lasciato solo quello che serve per avere un sito bello e funzionante.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, subtitle, text }, i) => (
              <Reveal key={title} delay={i * 60}>
                <div
                  className="group flex flex-col gap-3 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
                  style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)" }}
                >
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                    style={{ backgroundColor: "var(--accent-dim)" }}
                  >
                    <Icon size={20} strokeWidth={1.75} style={{ color: "var(--accent-soft)" }} />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider mb-0.5" style={{ color: "var(--accent)" }}>{subtitle}</p>
                    <h3 className="font-display text-base font-semibold" style={{ color: "var(--text-primary)" }}>{title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Come funziona ── */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="mx-auto mb-14 max-w-xl text-center">
              <span className="mb-3 block font-mono text-xs uppercase tracking-wider" style={{ color: "var(--accent-soft)" }}>Come funziona</span>
              <h2 className="font-display text-3xl font-semibold" style={{ color: "var(--text-primary)" }}>
                Dal zero al sito online in quattro passi
              </h2>
            </div>
          </Reveal>
          <div className="relative">
            {/* Linea connettore */}
            <div className="absolute left-8 top-8 hidden h-[calc(100%-4rem)] w-px sm:block" style={{ backgroundColor: "var(--border)" }} aria-hidden="true" />
            <div className="flex flex-col gap-6">
              {howItWorks.map((step, i) => (
                <Reveal key={step.num} delay={i * 80}>
                  <div className="flex items-start gap-5">
                    <div
                      className="relative z-10 flex h-16 w-16 flex-none items-center justify-center rounded-2xl font-mono text-xl font-bold"
                      style={{ backgroundColor: "var(--accent-dim)", color: "var(--accent)" }}
                    >
                      {step.num}
                    </div>
                    <div
                      className="flex-1 rounded-xl p-5"
                      style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
                    >
                      <h3 className="mb-1 font-display text-base font-semibold" style={{ color: "var(--text-primary)" }}>{step.title}</h3>
                      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{step.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6" style={{ backgroundColor: "var(--surface)" }}>
        <StarField count={40} className="absolute inset-0 h-full w-full opacity-35" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <Reveal>
            <div className="mb-10 text-center">
              <span className="mb-3 block font-mono text-xs uppercase tracking-wider" style={{ color: "var(--accent-soft)" }}>Chi lo usa</span>
              <h2 className="font-display text-3xl font-semibold" style={{ color: "var(--text-primary)" }}>
                Usato da professionisti come te
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.author} delay={i * 80}>
                <div
                  className="flex flex-col gap-4 rounded-xl p-6"
                  style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)" }}
                >
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={14} style={{ color: "var(--accent)" }} fill="currentColor" />
                    ))}
                  </div>
                  <p className="flex-1 text-sm italic leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    "{t.quote}"
                  </p>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{t.author}</p>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>{t.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA finale con galassia ── */}
      <section className="relative overflow-hidden px-4 py-24 text-center sm:px-6">
        <StarField count={90} className="absolute inset-0 h-full w-full opacity-55" />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{ backgroundColor: "var(--accent)", opacity: 0.07 }}
          aria-hidden="true"
        />
        <div className="relative z-10">
          <Reveal>
            <h2 className="mx-auto mb-4 max-w-xl font-display text-3xl font-semibold" style={{ color: "var(--text-primary)" }}>
              Il tuo sito ti aspetta. Ci vogliono 5 minuti.
            </h2>
            <p className="mx-auto mb-8 max-w-sm text-sm" style={{ color: "var(--text-secondary)" }}>
              Gratis per iniziare. Nessuna carta. Il sito resta tuo per sempre.
            </p>
            <Link
              to="/app/register"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold glow-accent hover:opacity-90 transition-all"
              style={{ backgroundColor: "var(--accent)", color: "#fff" }}
            >
              Inizia gratis ora
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
