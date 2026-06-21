import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Seo } from "@/components/marketing/Seo";
import { cn } from "@/lib/cn";

const plans = [
  {
    name: "Free",
    price: "€0",
    period: "/mese",
    features: [
      "1 progetto attivo",
      "Editor visuale completo",
      "Pubblicazione su GitHub Pages",
      "SEO automatico di base",
      "Generazione AI limitata",
    ],
    cta: "Inizia gratis",
    featured: false,
  },
  {
    name: "Pro",
    price: "€19",
    period: "/mese",
    features: [
      "Progetti illimitati",
      "Generazione AI estesa",
      "Backend opzionale (Supabase/Render/Cloudflare)",
      "Form builder avanzato",
      "Supporto prioritario",
    ],
    cta: "Inizia con Pro",
    featured: true,
  },
  {
    name: "Agenzia",
    price: "Su misura",
    period: "",
    features: [
      "Multi-tenant per i tuoi clienti",
      "White-label",
      "Onboarding dedicato",
      "SLA personalizzato",
    ],
    cta: "Contattaci",
    featured: false,
  },
];

export default function PrezziPage() {
  return (
    <>
      <Seo
        title="Prezzi — ForgeSite"
        description="Piani ForgeSite trasparenti, pensati per chi inizia e per chi gestisce più progetti. Inizia gratis, fai crescere il tuo sito quando ne hai bisogno."
        path="/prezzi"
      />

      <section className="px-6 pb-16 pt-24 text-center">
        <span className="mb-5 inline-block font-mono text-xs uppercase tracking-wider text-forge-accent-soft">
          Prezzi
        </span>
        <h1 className="mx-auto mb-5 max-w-2xl font-display text-4xl font-semibold leading-tight text-forge-text-primary">
          Inizia gratis, <span className="text-forge-accent-soft">cresci quando ne hai bisogno</span>
        </h1>
        <p className="mx-auto max-w-xl text-forge-text-secondary">
          Nessuna carta di credito richiesta per iniziare. Aggiorna il piano solo quando il
          tuo progetto lo richiede davvero.
        </p>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "flex flex-col gap-5 rounded-md border p-7",
                plan.featured
                  ? "border-forge-accent bg-gradient-to-b from-forge-accent/[0.06] to-transparent"
                  : "border-forge-border bg-forge-surface"
              )}
            >
              <span className="font-display text-lg font-semibold text-forge-text-primary">
                {plan.name}
              </span>
              <div className="font-display text-3xl font-semibold text-forge-text-primary">
                {plan.price}
                <span className="font-body text-base font-normal text-forge-text-secondary">
                  {plan.period}
                </span>
              </div>
              <ul className="flex flex-1 flex-col gap-2.5 text-sm text-forge-text-secondary">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check size={15} className="mt-0.5 flex-none text-forge-accent" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to={plan.featured ? "/app/register" : plan.name === "Agenzia" ? "/chi-siamo" : "/app/register"}
                className={cn(
                  "rounded-sm px-4 py-2.5 text-center text-sm font-medium",
                  plan.featured
                    ? "bg-forge-accent text-forge-bg hover:bg-forge-accent-soft"
                    : "border border-forge-border text-forge-text-primary hover:border-forge-accent/40"
                )}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
