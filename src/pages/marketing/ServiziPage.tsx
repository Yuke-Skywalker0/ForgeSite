import { Link } from "react-router-dom";
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
];

export default function ServiziPage() {
  return (
    <>
      <Seo
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
          ))}
        </div>
      </section>

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
      </section>
    </>
  );
}
