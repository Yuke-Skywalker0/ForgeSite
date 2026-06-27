import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";
import { useCookieConsentStore } from "@/store/cookieConsentStore";

export function CookieConsentBanner() {
  const { choice, setChoice } = useCookieConsentStore();
  if (choice !== null) return null;

  return (
    <div role="dialog" aria-label="Consenso cookie"
      style={{
        position: "fixed", inset: "auto 0 0 0", zIndex: 60,
        borderTop: "1px solid var(--border)",
        backgroundColor: "var(--surface)",
        backdropFilter: "blur(16px)",
      }}>
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-start gap-3">
          <Cookie size={18} strokeWidth={1.75} className="mt-0.5 flex-none" style={{ color: "var(--accent)" }} />
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Usiamo cookie tecnici necessari al funzionamento e, se accetti, cookie analitici per migliorare il sito.{" "}
            <Link to="/cookie" style={{ color: "var(--accent-soft)" }} className="hover:underline">
              Cookie Policy
            </Link>
          </p>
        </div>
        <div className="flex flex-none items-center gap-2">
          <button
            onClick={() => setChoice("rejected")}
            className="flex items-center gap-1 rounded-lg border px-3 py-1.5 text-sm transition-colors"
            style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}>
            <X size={13} strokeWidth={2} />
            Rifiuta
          </button>
          <button
            onClick={() => setChoice("accepted")}
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "var(--accent)" }}>
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}
