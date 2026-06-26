import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";
import { useCookieConsentStore } from "@/store/cookieConsentStore";
import { Button } from "@/components/ui/Button";

export function CookieConsentBanner() {
  const { choice, setChoice } = useCookieConsentStore();

  if (choice !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Consenso cookie"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-forge-border bg-forge-surface/95 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <Cookie size={18} className="mt-0.5 flex-none text-forge-accent-soft" strokeWidth={1.75} />
          <p className="text-sm text-forge-text-secondary">
            Usiamo cookie tecnici necessari al funzionamento del sito e, se accetti, cookie
            analitici per capire come viene usato. Leggi la{" "}
            <Link to="/cookie" className="text-forge-accent-soft hover:underline">
              Cookie Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-none gap-2.5">
          <Button variant="ghost" onClick={() => setChoice("rejected")}>
            Rifiuta
          </Button>
          <Button onClick={() => setChoice("accepted")}>Accetta</Button>
        </div>
      </div>
    </div>
  );
}
