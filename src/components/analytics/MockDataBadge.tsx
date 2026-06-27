import { FlaskConical } from "lucide-react";

/**
 * Etichetta esplicita su ogni widget che mostra dati simulati invece di
 * metriche reali. Sparisce automaticamente non appena il backend collega un
 * account Google reale per quella metrica (vedi GoogleToolsPanel — la
 * presenza di questo badge è condizionata da `isConnected`, passata dal
 * componente genitore in base allo stato di collegamento).
 */
export function MockDataBadge() {
  return (
<<<<<<< HEAD
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F59E0B]/10 px-2.5 py-1 text-[11px] font-medium text-[#F59E0B]">
=======
<<<<<<< HEAD
    <span className="inline-flex items-center gap-1.5 rounded-full bg-forge-warning/10 px-2.5 py-1 text-[11px] font-medium text-forge-warning">
=======
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F59E0B]/10 px-2.5 py-1 text-[11px] font-medium text-[#F59E0B]">
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
      <FlaskConical size={11} strokeWidth={2} />
      Dati di esempio
    </span>
  );
}
