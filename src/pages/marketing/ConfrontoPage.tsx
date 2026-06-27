import { Link } from "react-router-dom";
import { Check, Minus, X } from "lucide-react";
import { Seo } from "@/components/marketing/Seo";
import { StarField } from "@/components/marketing/StarField";
import { Reveal } from "@/components/ui/Reveal";

type CellValue = "yes" | "no" | "partial" | string;

const comparisonRows: Array<{ feature: string; forgesite: CellValue; wix: CellValue; codeFromScratch: CellValue }> = [
  { feature: "Costo hosting", forgesite: "Gratuito (GitHub Pages)", wix: "A partire da abbonamento mensile", codeFromScratch: "Variabile, da configurare" },
  { feature: "Proprietà del codice sorgente", forgesite: "yes", wix: "no", codeFromScratch: "yes" },
  { feature: "Editor visuale senza codice", forgesite: "yes", wix: "yes", codeFromScratch: "no" },
  { feature: "Nessun lock-in di piattaforma", forgesite: "yes", wix: "no", codeFromScratch: "yes" },
  { feature: "Pubblicazione tramite pull request revisionabile", forgesite: "yes", wix: "no", codeFromScratch: "partial" },
  { feature: "SEO automatico (sitemap, Schema.org, OG)", forgesite: "yes", wix: "partial", codeFromScratch: "no" },
  { feature: "Generazione contenuti con AI", forgesite: "yes", wix: "partial", codeFromScratch: "no" },
  { feature: "Backend opzionale solo quando serve", forgesite: "yes", wix: "no", codeFromScratch: "partial" },
  { feature: "Tempo per pubblicare un sito semplice", forgesite: "Minuti", wix: "Minuti", codeFromScratch: "Giorni o settimane" },
];

function Cell({ value }: { value: CellValue }) {
  if (value === "yes") return <Check size={16} className="text-[var(--accent)]" strokeWidth={2.5} />;
  if (value === "no") return <X size={16} className="text-[var(--text-muted)]" strokeWidth={2} />;
  if (value === "partial") return <Minus size={16} className="text-[#F59E0B]" strokeWidth={2.5} />;
  return <span className="text-xs text-[var(--text-secondary)]">{value}</span>;
}

export default function ConfrontoPage() {
  return (
    <>
      <Seo
        title="Perché ForgeSite — Confronto con altre soluzioni"
        description="Un confronto onesto tra ForgeSite, i page builder tradizionali e lo sviluppo da zero: dove ForgeSite vince, e dove invece altre soluzioni possono avere senso."
        path="/confronto"
      />

      <section className="px-6 pb-16 pt-24 text-center">
        <span className="mb-5 inline-block font-mono text-xs uppercase tracking-wider text-[var(--accent-soft)]">
          Confronto
        </span>
        <h1 className="mx-auto mb-5 max-w-2xl font-display text-4xl font-semibold leading-tight ">
          Perché scegliere ForgeSite — <span className="text-[var(--accent-soft)]">e quando invece no</span>
        </h1>
        <p className="mx-auto max-w-xl text-[var(--text-secondary)]">
          Un confronto onesto. ForgeSite non è la scelta giusta per tutti: ecco dove vince
          davvero, e dove altre strade possono avere più senso per te.
        </p>
      </section>

      <section className="px-6 pb-20">
        <Reveal>
          <div className="mx-auto max-w-4xl overflow-x-auto rounded-md border border-[var(--border)]">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--border)] bg-[var(--surface)] text-xs uppercase tracking-wide text-[var(--text-muted)]">
                  <th className="px-4 py-3 font-medium">Caratteristica</th>
                  <th className="px-4 py-3 text-center font-medium text-[var(--accent-soft)]">ForgeSite</th>
                  <th className="px-4 py-3 text-center font-medium">Page builder tradizionali</th>
                  <th className="px-4 py-3 text-center font-medium">Sviluppo da zero</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-[var(--border)] last:border-0">
                    <td className="px-4 py-3 ">{row.feature}</td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex justify-center">
                        <Cell value={row.forgesite} />
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex justify-center">
                        <Cell value={row.wix} />
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex justify-center">
                        <Cell value={row.codeFromScratch} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <section className="bg-[var(--surface)] px-6 py-20">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
          <Reveal>
            <div className="rounded-md border border-[var(--border)] bg-[var(--bg)] p-6">
              <h2 className="mb-2 font-display text-base font-semibold ">
                Scegli ForgeSite se...
              </h2>
              <p className="text-sm text-[var(--text-secondary)]">
                Vuoi un sito veloce da pubblicare ma non vuoi essere bloccato dentro una
                piattaforma proprietaria, ti interessa avere il controllo reale del codice
                sorgente, e i tuoi bisogni vanno oltre il semplice sito vetrina (magari in
                futuro vorrai login utenti o un database).
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-md border border-[var(--border)] bg-[var(--bg)] p-6">
              <h2 className="mb-2 font-display text-base font-semibold ">
                Valuta altre strade se...
              </h2>
              <p className="text-sm text-[var(--text-secondary)]">
                Hai bisogno di funzionalità e-commerce molto specifiche già pronte da un
                marketplace di plugin maturo, oppure il tuo progetto richiede un'infrastruttura
                server complessa fin dal primo giorno che va oltre quello che un sito
                orchestrato su GitHub può offrire.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-20 text-center">
        <StarField count={50} className="absolute inset-0 h-full w-full opacity-40" />
        <h2 className="mx-auto mb-7 max-w-lg font-display text-3xl font-semibold ">
          Convinto? Inizia gratis, senza carta di credito.
        </h2>
        <Link
          to="/app/register"
          className="inline-block rounded-sm bg-[var(--accent)] px-8 py-3.5 text-sm font-medium text-white hover:bg-[var(--accent-soft)]"
        >
          Crea il tuo account
        </Link>
      </section>
    </>
  );
}
