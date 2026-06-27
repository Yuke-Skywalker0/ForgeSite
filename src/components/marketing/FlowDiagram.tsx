// Elemento signature della homepage: non un'illustrazione astratta, ma il
// meccanismo reale e distintivo del prodotto reso visivamente — ogni
// modifica diventa un branch, poi una pull request, poi (dopo approvazione)
// viene pubblicata. È letteralmente "GitHub Safety Model" della spec, non
// decorazione. I nodi si illuminano in sequenza per suggerire il flusso.

const steps = [
  { label: "Modifica" },
  { label: "Branch" },
  { label: "Pull Request" },
  { label: "Pubblicato" },
];

export function FlowDiagram() {
  return (
    <div
      className="mx-auto flex max-w-2xl items-center justify-between gap-1 px-2"
      role="img"
      aria-label="Flusso di pubblicazione: Modifica, poi Branch, poi Pull Request, poi Pubblicato"
    >
      {steps.map((step, i) => (
        <div key={step.label} className="flex flex-1 items-center">
          <div className="flex flex-col items-center gap-2">
            <div
              className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] animate-node-pulse"
              style={{ animationDelay: `${i * 0.5}s` }}
              aria-hidden="true"
            />
            <span className="whitespace-nowrap font-mono text-[11px] text-[var(--text-secondary)]">
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <svg
              className="mx-1 h-3 flex-1 text-[var(--border)]"
              viewBox="0 0 100 2"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <line
                x1="0"
                y1="1"
                x2="100"
                y2="1"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="animate-flow-dash"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}
