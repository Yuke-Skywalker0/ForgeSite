import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Template } from "@/data/templates";
import { templateCategories } from "@/data/templates";

interface TemplateDetailModalProps {
  template: Template;
  onClose: () => void;
  onUse: () => void;
}

export function TemplateDetailModal({ template, onClose, onUse }: TemplateDetailModalProps) {
  const categoryLabel = templateCategories.find((c) => c.id === template.category)?.label ?? template.category;
  const [primary, secondary] = template.previewColors;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Dettaglio template ${template.name}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-lg border border-forge-border bg-forge-surface"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-forge-border px-5 py-3.5">
          <h2 className="font-display text-sm font-medium text-forge-text-primary">{template.name}</h2>
          <button onClick={onClose} aria-label="Chiudi" className="text-forge-text-secondary hover:text-forge-text-primary">
            <X size={18} strokeWidth={1.75} />
          </button>
        </div>

        <div className="overflow-y-auto p-6">
          <div
            className="mb-5 flex aspect-[16/7] items-center justify-center rounded-md"
            style={{ background: `linear-gradient(135deg, ${secondary}, ${primary}22)` }}
          >
            <svg viewBox="0 0 400 175" className="h-3/4 w-3/4" aria-hidden="true">
              <rect x="0" y="0" width="400" height="175" rx="8" fill={secondary} />
              <rect x="24" y="24" width="160" height="14" rx="3" fill={primary} opacity={0.9} />
              <rect x="24" y="48" width="100" height="8" rx="2" fill={primary} opacity={0.5} />
              <rect x="24" y="80" width="352" height="60" rx="6" fill={primary} opacity={0.15} />
              <rect x="24" y="150" width="80" height="12" rx="3" fill={primary} opacity={0.7} />
            </svg>
          </div>

          <span className="mb-2 inline-block font-mono text-xs uppercase tracking-wide text-forge-accent-soft">
            {categoryLabel}
          </span>
          <p className="mb-5 text-sm text-forge-text-secondary">{template.description}</p>

          <h3 className="mb-2 text-xs font-medium uppercase tracking-wide text-forge-text-muted">Pagine incluse</h3>
          <ul className="mb-2 flex flex-col gap-1.5">
            {template.pages.map((page) => (
              <li key={page} className="flex items-center gap-2 text-sm text-forge-text-secondary">
                <Check size={13} className="text-forge-accent" strokeWidth={2.5} />
                {page}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end gap-2.5 border-t border-forge-border px-5 py-4">
          <Button variant="ghost" onClick={onClose}>
            Annulla
          </Button>
          <Button onClick={onUse}>Usa questo template</Button>
        </div>
      </div>
    </div>
  );
}
