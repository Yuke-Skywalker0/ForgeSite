import { Link } from "react-router-dom";
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
];

export default function ServiziPage() {
  return (
    <>
      <Seo
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
          ))}
        </div>
      </section>

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
      </section>
    </>
  );
}
