import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Github, Blocks, GitPullRequest, Rocket, ArrowRight, Check } from "lucide-react";
import { Seo } from "@/components/marketing/Seo";
import { Button } from "@/components/ui/Button";
import { useRequireAuth } from "@/lib/useRequireAuth";

const steps = [
  {
    icon: Github,
    title: "Collega il tuo account GitHub",
    description:
      "ForgeSite crea e gestisce i repository dei tuoi siti direttamente sul tuo account GitHub, tramite un'app ufficiale con permessi limitati al minimo necessario. Non condividi mai la tua password.",
    action: "Collega GitHub",
  },
  {
    icon: Blocks,
    title: "Scegli un template o genera con AI",
    description:
      "Parti da un template pronto per la tua categoria di attività, oppure descrivi cosa fai e lascia che l'AI generi la struttura iniziale del sito.",
    action: "Continua",
  },
  {
    icon: GitPullRequest,
    title: "Modifica e pubblica in sicurezza",
    description:
      "Ogni modifica che fai nell'editor visuale diventa una pull request sul tuo repository. Niente va online finché non approvi tu stesso le modifiche.",
    action: "Continua",
  },
  {
    icon: Rocket,
    title: "Il tuo sito è live",
    description: "Una volta approvata la pubblicazione, il sito è online su GitHub Pages, con HTTPS incluso.",
    action: "Vai alla dashboard",
  },
];

export default function OnboardingPage() {
  const { isChecking } = useRequireAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [githubConnected, setGithubConnected] = useState(false);
  const navigate = useNavigate();

  if (isChecking) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-[var(--text-muted)]">
        Verifica sessione…
      </div>
    );
  }

  const step = steps[currentStep]!;
  const Icon = step.icon;
  const isLast = currentStep === steps.length - 1;
  const isGithubStep = currentStep === 0;

  function handlePrimaryAction() {
    if (isGithubStep && !githubConnected) {
      // In questo round (frontend-only) la connessione reale alla GitHub
      // App avviene nel backend tramite il flusso OAuth dell'installazione.
      // Qui simuliamo l'esito positivo per permettere di proseguire il
      // tutorial: il collegamento vero verrà innestato in questo stesso
      // punto quando il backend sarà collegato.
      setGithubConnected(true);
      return;
    }
    if (isLast) {
      navigate("/app/dashboard");
      return;
    }
    setCurrentStep((s) => s + 1);
  }

  return (
    <>
      <Seo title="Benvenuto su ForgeSite" description="" path="/app/onboarding" indexable={false} />
      <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--bg)] px-6 py-16">
        <div className="mb-10 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
          <span className="font-display text-lg font-semibold text-[var(--text-primary)]">ForgeSite</span>
        </div>

        <div className="mb-8 flex items-center gap-2">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 w-10 rounded-full transition-colors ${
                i <= currentStep ? "bg-[var(--accent)]" : "bg-[var(--border)]"
              }`}
            />
          ))}
        </div>

        <div className="w-full max-w-md rounded-lg border border-[var(--border)] bg-[var(--surface)] p-8 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent-dim)]">
            <Icon size={24} className="text-[var(--accent-soft)]" strokeWidth={1.75} />
          </div>

          <span className="mb-2 block font-mono text-xs text-[var(--text-muted)]">
            Passo {currentStep + 1} di {steps.length}
          </span>
          <h1 className="mb-3 font-display text-xl font-semibold text-[var(--text-primary)]">{step.title}</h1>
          <p className="mb-7 text-sm leading-relaxed text-[var(--text-secondary)]">{step.description}</p>

          {isGithubStep && githubConnected && (
            <div className="mb-5 flex items-center justify-center gap-2 rounded-sm bg-[var(--accent-dim)] px-3 py-2 text-sm text-[var(--accent-soft)]">
              <Check size={15} strokeWidth={2.5} />
              Account GitHub collegato
            </div>
          )}

          <Button onClick={handlePrimaryAction} className="w-full">
            {isGithubStep && githubConnected ? "Continua" : step.action}
            <ArrowRight size={15} strokeWidth={2} />
          </Button>
        </div>

        <Link to="/app/dashboard" className="mt-6 text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)]">
          Salta il tutorial, vai direttamente alla dashboard
        </Link>
      </div>
    </>
  );
}
