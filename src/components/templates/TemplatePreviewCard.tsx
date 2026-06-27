import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Template } from "@/data/templates";

/** Anteprima astratta generata via SVG dai due colori del template — niente
 *  foto stock (scelta esplicita per zero rischio copyright), ma comunque
 *  visivamente distintiva per ogni template grazie alla combinazione colore. */
function TemplatePreviewArt({ colors }: { colors: [string, string] }) {
  const [primary, secondary] = colors;
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
      <rect width="200" height="120" fill={secondary} />
      <rect x="16" y="16" width="80" height="8" rx="2" fill={primary} opacity={0.9} />
      <rect x="16" y="32" width="50" height="6" rx="2" fill={primary} opacity={0.5} />
      <rect x="16" y="56" width="168" height="36" rx="4" fill={primary} opacity={0.15} />
      <rect x="16" y="100" width="40" height="8" rx="2" fill={primary} opacity={0.7} />
      <rect x="64" y="100" width="40" height="8" rx="2" fill={primary} opacity={0.4} />
      <circle cx="178" cy="20" r="10" fill={primary} opacity={0.6} />
    </svg>
  );
}

interface TemplatePreviewCardProps {
  template: Template;
  onSelect: () => void;
}

export function TemplatePreviewCard({ template, onSelect }: TemplatePreviewCardProps) {
  return (
    <button
      onClick={onSelect}
<<<<<<< HEAD
      className="group flex flex-col overflow-hidden rounded-md border border-[var(--border)] bg-[var(--surface)] text-left transition-all hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-lg hover:shadow-black/20"
=======
<<<<<<< HEAD
      className="group flex flex-col overflow-hidden rounded-md border border-forge-border bg-forge-surface text-left transition-all hover:-translate-y-1 hover:border-forge-accent/40 hover:shadow-lg hover:shadow-black/20"
=======
      className="group flex flex-col overflow-hidden rounded-md border border-[var(--border)] bg-[var(--surface)] text-left transition-all hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-lg hover:shadow-black/20"
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
    >
      <div className="relative aspect-[5/3] overflow-hidden">
        <TemplatePreviewArt colors={template.previewColors} />
        {template.popular && (
          <span className="absolute right-2 top-2">
            <Badge variant="accent">
              <Sparkles size={10} strokeWidth={2.5} />
              Popolare
            </Badge>
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-4">
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <h3 className="font-display text-sm font-semibold text-forge-text-primary">{template.name}</h3>
        <p className="flex-1 text-xs text-forge-text-secondary">{template.description}</p>
        <div className="mt-1 flex flex-wrap gap-1">
          {template.pages.slice(0, 3).map((page) => (
            <span key={page} className="rounded-sm bg-forge-surface-raised px-1.5 py-0.5 text-[10px] text-forge-text-muted">
=======
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
        <h3 className="font-display text-sm font-semibold text-[var(--text-primary)]">{template.name}</h3>
        <p className="flex-1 text-xs text-[var(--text-secondary)]">{template.description}</p>
        <div className="mt-1 flex flex-wrap gap-1">
          {template.pages.slice(0, 3).map((page) => (
            <span key={page} className="rounded-sm bg-[var(--surface-raised)] px-1.5 py-0.5 text-[10px] text-[var(--text-muted)]">
<<<<<<< HEAD
=======
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
              {page}
            </span>
          ))}
          {template.pages.length > 3 && (
<<<<<<< HEAD
            <span className="rounded-sm bg-[var(--surface-raised)] px-1.5 py-0.5 text-[10px] text-[var(--text-muted)]">
=======
<<<<<<< HEAD
            <span className="rounded-sm bg-forge-surface-raised px-1.5 py-0.5 text-[10px] text-forge-text-muted">
=======
            <span className="rounded-sm bg-[var(--surface-raised)] px-1.5 py-0.5 text-[10px] text-[var(--text-muted)]">
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
              +{template.pages.length - 3}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}
