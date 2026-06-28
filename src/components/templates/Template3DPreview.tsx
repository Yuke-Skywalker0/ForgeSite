import { Sparkles, Lock } from "lucide-react";
import type { Template3D } from "@/data/templates";

/**
 * Card anteprima per template 3D premium — mostra un'anteprima animata
 * Three.js leggera dentro la card, con badge "3D Premium" e lista features.
 * I template 3D sono disponibili solo dai piani Pro in su — mostra lucchetto
 * ai piani inferiori con messaggio di upgrade.
 */
function AnimatedPreview({ colors }: { colors: [string, string] }) {
  const [primary, secondary] = colors;
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: `radial-gradient(ellipse at 30% 40%, ${primary}40 0%, ${secondary} 60%)`,
        height: 160,
      }}
    >
      {/* Griglia 3D simulata con CSS */}
      <svg
        viewBox="0 0 200 160"
        className="absolute inset-0 h-full w-full"
        style={{ opacity: 0.35 }}
        aria-hidden="true"
      >
        {/* Linee orizzontali prospettiva */}
        {[0.2, 0.4, 0.6, 0.8].map((y, i) => (
          <line
            key={`h${i}`}
            x1={100 - 100 * y} y1={160 * y}
            x2={100 + 100 * y} y2={160 * y}
            stroke={primary} strokeWidth="0.5" opacity={y}
          />
        ))}
        {/* Linee verticali prospettiva */}
        {[-0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75].map((x, i) => (
          <line
            key={`v${i}`}
            x1={100 + x * 100} y1={80}
            x2={100 + x * 200} y2={160}
            stroke={primary} strokeWidth="0.5" opacity={0.6}
          />
        ))}
        {/* Sfera centrale */}
        <circle cx="100" cy="60" r="22" fill="none" stroke={primary} strokeWidth="1" opacity="0.6" />
        <ellipse cx="100" cy="60" rx="22" ry="8" fill="none" stroke={primary} strokeWidth="0.8" opacity="0.4" />
        <circle cx="100" cy="60" r="14" fill={`${primary}30`} />
        <circle cx="93" cy="53" r="5" fill={primary} opacity="0.5" />
      </svg>

      {/* Badge 3D */}
      <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold text-white"
        style={{ backgroundColor: `${primary}cc`, backdropFilter: "blur(8px)" }}>
        <Sparkles size={10} strokeWidth={2.5} />
        3D
      </div>

      {/* Glow centrale */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
        style={{ backgroundColor: primary, opacity: 0.3 }}
        aria-hidden="true"
      />
    </div>
  );
}

interface Template3DPreviewProps {
  template: Template3D;
  onSelect: () => void;
  locked?: boolean;
}

export function Template3DPreview({ template, onSelect, locked = false }: Template3DPreviewProps) {
  return (
    <button
      onClick={locked ? undefined : onSelect}
      className="group relative flex flex-col overflow-hidden rounded-xl border text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/15"
      style={{
        borderColor: locked ? "var(--border)" : `${template.previewColors[0]}44`,
        backgroundColor: "var(--surface)",
        cursor: locked ? "default" : "pointer",
      }}
    >
      {/* Anteprima animata */}
      <AnimatedPreview colors={template.previewColors} />

      {/* Lucchetto per piani inferiori */}
      {locked && (
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl"
          style={{ backgroundColor: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}>
          <Lock size={24} className="mb-2" style={{ color: "var(--text-muted)" }} strokeWidth={1.5} />
          <p className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>Richiede piano Pro</p>
        </div>
      )}

      <div className="flex flex-col gap-2.5 p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="mb-0.5 block font-mono text-[10px] uppercase tracking-wider"
              style={{ color: template.previewColors[0] }}>
              {template.category}
            </span>
            <h3 className="font-display text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
              {template.name}
            </h3>
          </div>
          <span className="flex-none rounded-full px-2 py-0.5 text-[10px] font-bold text-white"
            style={{ backgroundColor: template.previewColors[0] }}>
            3D
          </span>
        </div>

        <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {template.description}
        </p>

        <div className="flex flex-wrap gap-1">
          {template.techStack.map((tech) => (
            <span key={tech} className="rounded-md px-1.5 py-0.5 font-mono text-[9px]"
              style={{ backgroundColor: "var(--surface-raised)", color: "var(--text-muted)" }}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
