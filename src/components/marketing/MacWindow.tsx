import { X } from "lucide-react";
import type { ReactNode } from "react";
import { GalaxyCanvas } from "@/components/marketing/GalaxyCanvas";
import { useThemeStore } from "@/store/themeStore";

interface MacWindowProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
}

/**
 * Modale stile finestra macOS con:
 * - Sfondo "esterno" con nebulosa galassia (tema-adattivo)
 * - Chrome macOS (semafori rosso/giallo/verde, barra titolo)
 * - Contenuto scrollabile dentro la "finestra"
 * - Tasto chiudi + tasto torna alla Home
 */
export function MacWindow({ title, onClose, children }: MacWindowProps) {
  const { theme } = useThemeStore();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Sfondo nebulosa */}
      <div className="absolute inset-0">
        <GalaxyCanvas
          starCount={180}
          nebulaOpacity={0.28}
          className="absolute inset-0 h-full w-full"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: theme === "dark"
              ? "rgba(10,14,11,0.75)"
              : "rgba(230,245,236,0.75)",
            backdropFilter: "blur(8px)",
          }}
        />
      </div>

      {/* Finestra Mac */}
      <div
        className="relative z-10 flex h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl shadow-2xl"
        style={{
          border: theme === "dark"
            ? "1px solid rgba(52,211,153,0.2)"
            : "1px solid rgba(16,185,129,0.25)",
          boxShadow: theme === "dark"
            ? "0 40px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(52,211,153,0.1)"
            : "0 40px 80px rgba(0,0,0,0.2), 0 0 0 1px rgba(16,185,129,0.15)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Barra titolo Mac */}
        <div
          className="flex flex-none items-center gap-2 px-4 py-3"
          style={{
            backgroundColor: theme === "dark" ? "#1a1f1c" : "#e8f4ed",
            borderBottom: `1px solid ${theme === "dark" ? "rgba(52,211,153,0.15)" : "rgba(16,185,129,0.2)"}`,
          }}
        >
          {/* Semafori */}
          <button
            onClick={onClose}
            className="h-3.5 w-3.5 rounded-full flex items-center justify-center group"
            style={{ backgroundColor: "#FF5F57" }}
            aria-label="Chiudi"
          >
            <X size={8} strokeWidth={2.5} className="opacity-0 group-hover:opacity-100 text-red-900" />
          </button>
          <div className="h-3.5 w-3.5 rounded-full" style={{ backgroundColor: "#FFBD2E" }} />
          <div className="h-3.5 w-3.5 rounded-full" style={{ backgroundColor: "#28C840" }} />

          {/* Titolo */}
          <span
            className="ml-4 flex-1 text-center text-xs font-medium"
            style={{ color: theme === "dark" ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.5)" }}
          >
            {title}
          </span>

          {/* Bottone torna alla home */}
          <button
            onClick={onClose}
            className="rounded-md px-2.5 py-1 text-xs font-medium transition-all hover:opacity-80"
            style={{
              backgroundColor: "var(--accent)",
              color: "#fff",
            }}
          >
            ← Home
          </button>
        </div>

        {/* Barra URL fittizia */}
        <div
          className="flex items-center gap-2 px-4 py-2"
          style={{
            backgroundColor: theme === "dark" ? "#141a16" : "#f0f9f4",
            borderBottom: `1px solid ${theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.08)"}`,
          }}
        >
          <div
            className="flex flex-1 items-center gap-2 rounded-lg px-3 py-1.5"
            style={{
              backgroundColor: theme === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
            }}
          >
            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "#28C840" }} />
            <span
              className="font-mono text-xs"
              style={{ color: theme === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)" }}
            >
              https://{title.toLowerCase().replace(/\s+/g, "-")}.github.io
            </span>
          </div>
        </div>

        {/* Contenuto sito simulato — scrollabile */}
        <div className="flex-1 overflow-y-auto bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}
