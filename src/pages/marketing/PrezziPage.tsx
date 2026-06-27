import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Lock, Sparkles, ArrowRight } from "lucide-react";
import { Seo } from "@/components/marketing/Seo";
import { Reveal } from "@/components/ui/Reveal";
import { StarField } from "@/components/marketing/StarField";
import { plans, type Plan } from "@/data/plans";
import { cn } from "@/lib/cn";

function PlanCard({ plan, yearly }: { plan: Plan; yearly: boolean }) {
  const monthlyPrice = plan.price;
  const yearlyPrice  = plan.price > 0 ? Math.round(plan.price * (1 - plan.yearlyDiscount / 100)) : 0;
  const displayPrice = yearly ? yearlyPrice : monthlyPrice;
  const isEnterprise = plan.id === "enterprise";
  const isWhiteLabel = plan.id === "white_label";

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-xl border p-6 transition-all duration-300",
        plan.featured
          ? "border-[var(--accent)] shadow-xl shadow-[var(--accent)]/15 scale-105"
          : "border-[var(--border)] hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10"
      )}
      style={{ backgroundColor: plan.featured ? "var(--surface)" : "var(--bg)" }}
    >
      {plan.badgeLabel && (
        <span
<<<<<<< HEAD
          className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold text-white"
          style={{ backgroundColor: plan.featured ? "var(--accent)" : "var(--info)" }}
=======
<<<<<<< HEAD
          className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold"
          style={{ backgroundColor: plan.featured ? "var(--accent)" : "var(--info)", color: "var(--text-on-accent)" }}
=======
          className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold text-white"
          style={{ backgroundColor: plan.featured ? "var(--accent)" : "var(--info)" }}
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
        >
          {plan.badgeLabel}
        </span>
      )}

      <div className="mb-4">
        <h3 className="font-display text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
          {plan.name}
        </h3>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{plan.tagline}</p>
      </div>

      <div className="mb-5">
        {isEnterprise || isWhiteLabel ? (
          <p className="font-display text-2xl font-semibold" style={{ color: "var(--text-primary)" }}>
            Su richiesta
          </p>
        ) : (
          <div className="flex items-end gap-1">
            <span className="font-display text-4xl font-semibold" style={{ color: "var(--text-primary)" }}>
              €{displayPrice}
            </span>
            <span className="mb-1 text-sm" style={{ color: "var(--text-muted)" }}>/mese</span>
          </div>
        )}
        {yearly && plan.yearlyDiscount > 0 && (
          <p className="mt-1 text-xs font-medium" style={{ color: "var(--accent-soft)" }}>
            Risparmi {plan.yearlyDiscount}% con il piano annuale
          </p>
        )}
      </div>

      <ul className="mb-6 flex flex-1 flex-col gap-2">
        {plan.features.map((f) => (
          <li key={f.label} className="flex items-center gap-2 text-sm">
            {f.included ? (
              <Check size={14} className="flex-none" style={{ color: "var(--accent)" }} strokeWidth={2.5} />
            ) : f.locked ? (
              <Lock size={13} className="flex-none opacity-40" style={{ color: "var(--text-muted)" }} strokeWidth={2} />
            ) : (
              <span className="h-3.5 w-3.5 flex-none" />
            )}
            <span
              className={cn(!f.included && f.locked && "opacity-40")}
              style={{ color: f.included ? "var(--text-primary)" : "var(--text-muted)" }}
            >
              {f.label}
              {!f.included && f.locked && (
                <span className="ml-1 rounded-sm px-1 py-0.5 text-[10px] font-medium" style={{ backgroundColor: "var(--surface-raised)", color: "var(--text-muted)" }}>
                  Piano superiore
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>

      <Link
        to={isEnterprise || isWhiteLabel ? "/chi-siamo" : "/app/register"}
        className={cn(
          "flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition-all",
          plan.featured
            ? "glow-accent-sm hover:glow-accent"
            : "hover:opacity-90"
        )}
        style={{
          backgroundColor: plan.featured ? "var(--accent)" : "var(--surface-raised)",
<<<<<<< HEAD
          color: plan.featured ? "#fff" : "var(--text-primary)",
=======
<<<<<<< HEAD
          color: plan.featured ? "var(--text-on-accent)" : "var(--text-primary)",
=======
          color: plan.featured ? "#fff" : "var(--text-primary)",
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
          border: plan.featured ? "none" : `1px solid var(--border)`,
        }}
      >
        {plan.cta}
        <ArrowRight size={14} strokeWidth={2} />
      </Link>
    </div>
  );
}

export default function PrezziPage() {
  const [yearly, setYearly] = useState(false);
  const mainPlans    = plans.filter((p) => !["white_label","enterprise"].includes(p.id));
  const advancedPlans = plans.filter((p) => ["white_label","enterprise"].includes(p.id));

  return (
    <>
      <Seo
        title="Prezzi ForgeSite — Gratis per iniziare, scala quando sei pronto"
        description="7 piani ForgeSite per ogni esigenza: da gratis per provare, a Enterprise per grandi organizzazioni. Nessuna carta richiesta per iniziare."
        path="/prezzi"
      />

      <section className="relative overflow-hidden px-4 pb-16 pt-20 text-center sm:px-6">
        <StarField count={50} className="absolute inset-0 h-full w-full opacity-50" />
        <div className="relative z-10">
          <Reveal>
            <span className="mb-4 inline-block font-mono text-xs uppercase tracking-wider" style={{ color: "var(--accent-soft)" }}>
              Prezzi trasparenti
            </span>
            <h1 className="mx-auto mb-4 max-w-2xl font-display text-4xl font-semibold leading-tight" style={{ color: "var(--text-primary)" }}>
              Inizia gratis. Cresci quando sei pronto.
            </h1>
            <p className="mx-auto mb-8 max-w-xl text-lg" style={{ color: "var(--text-secondary)" }}>
              Nessuna carta di credito per il piano gratuito. Aggiorna solo quando il tuo sito ne ha davvero bisogno.
            </p>
          </Reveal>

          {/* Toggle mensile/annuale */}
          <Reveal delay={80}>
            <div
              className="inline-flex items-center gap-1 rounded-full p-1 mb-10"
              style={{ backgroundColor: "var(--surface-raised)", border: "1px solid var(--border)" }}
            >
              <button
                onClick={() => setYearly(false)}
                className={cn("rounded-full px-4 py-1.5 text-sm font-medium transition-all")}
                style={{
                  backgroundColor: !yearly ? "var(--accent)" : "transparent",
<<<<<<< HEAD
                  color: !yearly ? "#fff" : "var(--text-secondary)",
=======
<<<<<<< HEAD
                  color: !yearly ? "var(--text-on-accent)" : "var(--text-secondary)",
=======
                  color: !yearly ? "#fff" : "var(--text-secondary)",
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
                }}
              >
                Mensile
              </button>
              <button
                onClick={() => setYearly(true)}
                className="rounded-full px-4 py-1.5 text-sm font-medium transition-all flex items-center gap-1.5"
                style={{
                  backgroundColor: yearly ? "var(--accent)" : "transparent",
<<<<<<< HEAD
                  color: yearly ? "#fff" : "var(--text-secondary)",
=======
<<<<<<< HEAD
                  color: yearly ? "var(--text-on-accent)" : "var(--text-secondary)",
=======
                  color: yearly ? "#fff" : "var(--text-secondary)",
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
                }}
              >
                Annuale
                <span
                  className="rounded-full px-1.5 py-0.5 text-[10px] font-bold"
                  style={{
                    backgroundColor: yearly ? "rgba(255,255,255,0.25)" : "var(--accent-dim)",
<<<<<<< HEAD
                    color: yearly ? "#fff" : "var(--accent)",
=======
<<<<<<< HEAD
                    color: yearly ? "var(--text-on-accent)" : "var(--accent)",
=======
                    color: yearly ? "#fff" : "var(--accent)",
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
                  }}
                >
                  -30%
                </span>
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Piani principali */}
      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {mainPlans.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 60}>
                <PlanCard plan={plan} yearly={yearly} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Piani avanzati */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6" style={{ backgroundColor: "var(--surface)" }}>
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="mb-10 text-center">
              <span className="mb-3 block font-mono text-xs uppercase tracking-wider" style={{ color: "var(--accent-soft)" }}>
                Per agenzie e grandi team
              </span>
              <h2 className="font-display text-3xl font-semibold" style={{ color: "var(--text-primary)" }}>
                Scala senza limiti
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {advancedPlans.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 80}>
                <PlanCard plan={plan} yearly={yearly} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Demo gratuita */}
      <section className="relative overflow-hidden px-4 py-20 text-center sm:px-6">
        <StarField count={40} className="absolute inset-0 h-full w-full opacity-40" />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{ backgroundColor: "var(--accent)", opacity: 0.06 }}
          aria-hidden="true"
        />
        <div className="relative z-10">
          <Reveal>
            <div
              className="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
              style={{ backgroundColor: "var(--accent-dim)", color: "var(--accent)" }}
            >
              <Sparkles size={12} strokeWidth={2} />
              Demo con account
            </div>
            <h2 className="mx-auto mb-3 max-w-lg font-display text-3xl font-semibold" style={{ color: "var(--text-primary)" }}>
              Prova prima di comprare
            </h2>
            <p className="mx-auto mb-8 max-w-md text-sm" style={{ color: "var(--text-secondary)" }}>
              Crea un account gratuito e accedi alla demo completa per il tempo che ti concedo io —
              tutte le funzionalità sbloccate, nessun impegno, e alla fine passi al piano che vuoi.
            </p>
            <Link
              to="/app/register"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold glow-accent-sm hover:glow-accent transition-all"
<<<<<<< HEAD
              style={{ backgroundColor: "var(--accent)", color: "#fff" }}
=======
<<<<<<< HEAD
              style={{ backgroundColor: "var(--accent)", color: "var(--text-on-accent)" }}
=======
              style={{ backgroundColor: "var(--accent)", color: "#fff" }}
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
            >
              Accedi alla demo gratuita
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
