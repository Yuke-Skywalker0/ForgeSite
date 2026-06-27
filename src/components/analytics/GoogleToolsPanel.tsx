import { useState } from "react";
import { Info } from "lucide-react";
import { googleTools, type GoogleToolId } from "@/data/googleTools";
import { GoogleToolCard } from "@/components/analytics/GoogleToolCard";

export type GoogleConnections = Partial<Record<GoogleToolId, string>>;

interface GoogleToolsPanelProps {
  connections: GoogleConnections;
  onChange: (connections: GoogleConnections) => void;
}

export function GoogleToolsPanel({ connections, onChange }: GoogleToolsPanelProps) {
  return (
    <div className="flex flex-col gap-4">
<<<<<<< HEAD
      <div className="flex items-start gap-2.5 rounded-md border border-[var(--border)] bg-[var(--surface)] p-4 text-sm text-[var(--text-secondary)]">
        <Info size={16} className="mt-0.5 flex-none text-[var(--info)]" strokeWidth={1.75} />
=======
<<<<<<< HEAD
      <div className="flex items-start gap-2.5 rounded-md border border-forge-border bg-forge-surface p-4 text-sm text-forge-text-secondary">
        <Info size={16} className="mt-0.5 flex-none text-forge-info" strokeWidth={1.75} />
=======
      <div className="flex items-start gap-2.5 rounded-md border border-[var(--border)] bg-[var(--surface)] p-4 text-sm text-[var(--text-secondary)]">
        <Info size={16} className="mt-0.5 flex-none text-[var(--info)]" strokeWidth={1.75} />
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
        <p>
          Finché uno strumento non è collegato, i widget Analytics della tua dashboard mostrano
          dati di esempio per farti capire come appariranno. Non appena colleghi le tue chiavi
          reali qui sotto, i dati di esempio vengono sostituiti automaticamente da quelli veri.
        </p>
      </div>

      {googleTools.map((tool) => (
        <GoogleToolCard
          key={tool.id}
          tool={tool}
          connectedValue={connections[tool.id] ?? null}
          onConnect={(value) => onChange({ ...connections, [tool.id]: value })}
          onDisconnect={() => {
            const next = { ...connections };
            delete next[tool.id];
            onChange(next);
          }}
        />
      ))}
    </div>
  );
}

// Stato locale di comodo per le pagine che usano questo pannello — in
// questo round (frontend-only) il collegamento vive solo nella sessione del
// browser; nel round backend questi valori verranno letti/scritti tramite
// API verso il backend invece che da useState locale.
export function useGoogleConnectionsMock() {
  return useState<GoogleConnections>({});
}
