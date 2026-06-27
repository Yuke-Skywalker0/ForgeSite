import { Link } from "react-router-dom";
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {
  Blocks,
  Smartphone,
  GitPullRequest,
  Sparkles,
  Search,
  Image,
  FileText,
  Puzzle,
} from "lucide-react";
import { Seo } from "@/components/marketing/Seo";
import { Card } from "@/components/ui/Card";

const services = [
  {
    icon: Blocks,
    title: "Editor visuale a blocchi",
    text: "Hero, gallerie, form, prezzi, FAQ, testimonianze e altro: componi pagine trascinando blocchi predefiniti, con anteprima live e modalità inline per modifiche rapide.",
  },
  {
    icon: Smartphone,
    title: "Responsive per design",
    text: "Ogni blocco gestisce stili separati per desktop, tablet e mobile: vedi e correggi ogni breakpoint direttamente nell'editor.",
  },
  {
    icon: GitPullRequest,
    title: "Workflow GitHub sicuro",
    text: "Nessuna modifica scrive direttamente su main: ogni publish crea un branch dedicato, una pull request, e attende la tua approvazione prima del merge.",
  },
  {
    icon: Sparkles,
    title: "Generazione AI",
    text: "Descrivi settore e tono della tua attività: l'AI genera pagine complete, testi e struttura, sempre validati prima di essere salvati.",
  },
  {
    icon: Search,
    title: "SEO completamente automatico",
    text: "Meta title, meta description, Open Graph, sitemap.xml e dati strutturati Schema.org generati per ogni pagina, senza configurazione manuale.",
  },
  {
    icon: Image,
    title: "Gestione media intelligente",
    text: "Le immagini caricate vengono compresse, convertite in WebP e rinominate in formato SEO-friendly automaticamente.",
  },
  {
    icon: FileText,
    title: "Form builder",
    text: "Crea form di contatto con campi personalizzati; le risposte arrivano via email o restano salvate nella dashboard, a tua scelta.",
  },
  {
    icon: Puzzle,
    title: "Backend opzionale per siti complessi",
    text: "Quando un progetto richiede login utenti, database o API custom, collega Supabase, Render o Cloudflare — generiamo anche il codice degli endpoint partendo da una descrizione.",
  },
=======
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
import { Blocks, Smartphone, GitPullRequest, Sparkles, Search, Image, FileText, Puzzle, ArrowRight } from "lucide-react";
import { Seo } from "@/components/marketing/Seo";
import { Reveal } from "@/components/ui/Reveal";
import { StarField } from "@/components/marketing/StarField";

const services = [
  { icon: Blocks,        title: "Trascina e pubblica",             subtitle: "Editor a blocchi",     text: "Scegli un blocco, trascinalo, modificalo cliccandoci sopra. Hero, gallerie, form, prezzi, FAQ — tutto disponibile senza scrivere una riga di codice." },
  { icon: Smartphone,    title: "Si vede bene su ogni schermo",    subtitle: "Responsive automatico", text: "Il sito si adatta automaticamente a telefono, tablet e desktop. Puoi vedere l'anteprima per ogni dimensione direttamente nell'editor." },
  { icon: GitPullRequest,title: "Pubblica in sicurezza",           subtitle: "Workflow GitHub",       text: "Ogni modifica diventa una bozza che puoi rivedere prima di pubblicare. Niente va online senza il tuo ok — sempre." },
  { icon: Sparkles,      title: "L'AI scrive la prima bozza",      subtitle: "Generazione AI",        text: "Descrivi la tua attività in poche parole. L'AI genera pagine, testi e struttura. Tu la rivedi, la personalizzi, la pubblichi." },
  { icon: Search,        title: "Google ti trova da solo",         subtitle: "SEO automatico",        text: "Titoli, descrizioni, sitemap e dati strutturati generati automaticamente per ogni pagina. Zero configurazione manuale." },
  { icon: Image,         title: "Immagini ottimizzate",            subtitle: "Gestione media",        text: "Le immagini che carichi vengono compresse e convertite automaticamente. Meno peso, più velocità, miglior posizione su Google." },
  { icon: FileText,      title: "Moduli di contatto",              subtitle: "Form builder",          text: "Aggiungi form di contatto con i campi che vuoi. Le risposte arrivano via email o restano nella dashboard — tu scegli." },
  { icon: Puzzle,        title: "Aggiungi funzionalità quando servono", subtitle: "Backend opzionale", text: "Per i progetti più complessi, collega un database, login utenti o API personalizzate — solo quando ne hai davvero bisogno." },
<<<<<<< HEAD
=======
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
];

export default function ServiziPage() {
  return (
    <>
      <Seo
<<<<<<< HEAD
=======
<<<<<<< HEAD
        title="Servizi — ForgeSite"
        description="Editor visuale a blocchi, automazione GitHub, generazione AI, SEO automatico e backend opzionale: scopri tutte le funzionalità di ForgeSite."
        path="/servizi"
      />

      <section className="px-6 pb-16 pt-24 text-center">
        <span className="mb-5 inline-block font-mono text-xs uppercase tracking-wider text-forge-accent-soft">
          Servizi
        </span>
        <h1 className="mx-auto mb-5 max-w-2xl font-display text-4xl font-semibold leading-tight text-forge-text-primary">
          Ogni funzionalità pensata per{" "}
          <span className="text-forge-accent-soft">farti pubblicare prima</span>
        </h1>
        <p className="mx-auto max-w-xl text-forge-text-secondary">
          Dall'editor alla SEO, dall'automazione GitHub al backend opzionale per i progetti
          più complessi.
        </p>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2">
          {services.map(({ icon: Icon, title, text }) => (
            <Card key={title}>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-forge-accent-dim">
                <Icon size={18} className="text-forge-accent-soft" strokeWidth={1.75} />
              </div>
              <h3 className="mb-2 font-display text-base font-semibold text-forge-text-primary">
                {title}
              </h3>
              <p className="text-sm text-forge-text-secondary">{text}</p>
            </Card>
=======
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
        title="Come funziona ForgeSite — Tutto quello che puoi fare senza programmare"
        description="Editor visuale, AI, SEO automatico, form, immagini ottimizzate e backend opzionale. Tutto quello che serve per creare un sito professionale senza scrivere codice."
        path="/servizi"
      />

      <section className="relative overflow-hidden px-4 pb-16 pt-20 text-center sm:px-6">
        <StarField count={40} className="absolute inset-0 h-full w-full opacity-30" />
        <div className="relative z-10">
          <Reveal>
            <span className="mb-4 block font-mono text-xs uppercase tracking-wider" style={{ color: "var(--accent-soft)" }}>
              Come funziona
            </span>
            <h1 className="mx-auto mb-5 max-w-2xl font-display text-4xl font-semibold leading-tight" style={{ color: "var(--text-primary)" }}>
              Tutto quello che ti serve per un sito professionale,{" "}
              <span style={{ color: "var(--accent-soft)" }}>senza imparare nulla di tecnico</span>
            </h1>
            <p className="mx-auto max-w-xl text-lg" style={{ color: "var(--text-secondary)" }}>
              Ogni funzionalità è progettata per essere usata da chiunque — dal professionista
              che vuole semplicità, al developer che vuole controllo totale.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2">
          {services.map(({ icon: Icon, title, subtitle, text }, i) => (
            <Reveal key={title} delay={i * 50}>
              <div className="group flex flex-col gap-4 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/8"
                style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                    style={{ backgroundColor: "var(--accent-dim)" }}>
                    <Icon size={20} strokeWidth={1.75} style={{ color: "var(--accent)" }} />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider mb-0.5" style={{ color: "var(--accent)" }}>{subtitle}</p>
                    <h3 className="font-display text-base font-semibold" style={{ color: "var(--text-primary)" }}>{title}</h3>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{text}</p>
              </div>
            </Reveal>
<<<<<<< HEAD
=======
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
          ))}
        </div>
      </section>

<<<<<<< HEAD
=======
<<<<<<< HEAD
      <section className="bg-forge-surface px-6 py-20 text-center">
        <h2 className="mx-auto mb-7 max-w-lg font-display text-3xl font-semibold text-forge-text-primary">
          Vuoi vedere tutto questo in azione?
        </h2>
        <Link
          to="/app/register"
          className="inline-block rounded-sm bg-forge-accent px-8 py-3.5 text-sm font-medium text-forge-bg hover:bg-forge-accent-soft"
        >
          Crea il tuo account gratuito
        </Link>
=======
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
      <section className="relative overflow-hidden px-4 py-20 text-center sm:px-6" style={{ backgroundColor: "var(--surface)" }}>
        <StarField count={35} className="absolute inset-0 h-full w-full opacity-40" />
        <div className="relative z-10">
          <Reveal>
            <h2 className="mx-auto mb-7 max-w-lg font-display text-3xl font-semibold" style={{ color: "var(--text-primary)" }}>
              Vuoi vedere come funziona davvero?
            </h2>
            <Link to="/app/register"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "var(--accent)" }}>
              Crea account gratuito
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </Reveal>
        </div>
<<<<<<< HEAD
=======
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
      </section>
    </>
  );
}
