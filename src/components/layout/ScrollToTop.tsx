import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Torna sempre in cima alla pagina ad ogni cambio di route.
 * Montato una volta sola in MarketingLayout e in LazyBoundary —
 * così funziona sia per le pagine marketing che per l'app.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
