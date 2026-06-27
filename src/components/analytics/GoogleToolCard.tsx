import { useState } from "react";
import { ChevronDown, ExternalLink, Check, Link2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";
import type { GoogleToolDefinition } from "@/data/googleTools";

interface GoogleToolCardProps {
  tool: GoogleToolDefinition;
  connectedValue: string | null;
  onConnect: (value: string) => void;
  onDisconnect: () => void;
}

export function GoogleToolCard({ tool, connectedValue, onConnect, onDisconnect }: GoogleToolCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const isConnected = connectedValue !== null;

  return (
    <Card className="flex flex-col gap-0 overflow-hidden p-0">
      <button
        onClick={() => setExpanded((v) => !v)}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
      >
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-md",
<<<<<<< HEAD
              isConnected ? "bg-forge-accent-dim" : "bg-forge-surface-raised"
            )}
          >
            <Link2 size={16} className={isConnected ? "text-forge-accent-soft" : "text-forge-text-muted"} strokeWidth={1.75} />
          </div>
          <div>
            <h3 className="font-display text-sm font-medium text-forge-text-primary">{tool.name}</h3>
            <p className="text-xs text-forge-text-secondary">{tool.description}</p>
=======
              isConnected ? "bg-[var(--accent-dim)]" : "bg-[var(--surface-raised)]"
            )}
          >
            <Link2 size={16} className={isConnected ? "text-[var(--accent-soft)]" : "text-[var(--text-muted)]"} strokeWidth={1.75} />
          </div>
          <div>
            <h3 className="font-display text-sm font-medium text-[var(--text-primary)]">{tool.name}</h3>
            <p className="text-xs text-[var(--text-secondary)]">{tool.description}</p>
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
          </div>
        </div>
        <div className="flex flex-none items-center gap-3">
          {isConnected ? (
            <Badge variant="success">
              <Check size={11} strokeWidth={2.5} />
              Collegato
            </Badge>
          ) : (
            <Badge variant="neutral">Non collegato</Badge>
          )}
<<<<<<< HEAD
          <ChevronDown size={16} className={cn("text-forge-text-muted transition-transform", expanded && "rotate-180")} />
=======
          <ChevronDown size={16} className={cn("text-[var(--text-muted)] transition-transform", expanded && "rotate-180")} />
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
        </div>
      </button>

      {expanded && (
<<<<<<< HEAD
        <div className="border-t border-forge-border px-5 py-5">
          {isConnected ? (
            <div className="flex flex-col gap-3">
              <p className="text-sm text-forge-text-secondary">
                {tool.fieldLabel}: <span className="font-mono text-forge-text-primary">{connectedValue}</span>
=======
        <div className="border-t border-[var(--border)] px-5 py-5">
          {isConnected ? (
            <div className="flex flex-col gap-3">
              <p className="text-sm text-[var(--text-secondary)]">
                {tool.fieldLabel}: <span className="font-mono text-[var(--text-primary)]">{connectedValue}</span>
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
              </p>
              <Button variant="danger" onClick={onDisconnect} className="self-start">
                Scollega
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              <div>
<<<<<<< HEAD
                <h4 className="mb-2 text-xs font-medium uppercase tracking-wide text-forge-text-muted">
=======
                <h4 className="mb-2 text-xs font-medium uppercase tracking-wide text-[var(--text-muted)]">
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
                  Come ottenere {tool.fieldLabel.toLowerCase()}
                </h4>
                <ol className="flex flex-col gap-1.5">
                  {tool.steps.map((step, i) => (
<<<<<<< HEAD
                    <li key={i} className="flex gap-2.5 text-sm text-forge-text-secondary">
                      <span className="flex-none font-mono text-xs text-forge-accent-soft">{i + 1}.</span>
=======
                    <li key={i} className="flex gap-2.5 text-sm text-[var(--text-secondary)]">
                      <span className="flex-none font-mono text-xs text-[var(--accent-soft)]">{i + 1}.</span>
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
                      {step}
                    </li>
                  ))}
                </ol>
                <a
                  href={tool.officialUrl}
                  target="_blank"
                  rel="noreferrer"
<<<<<<< HEAD
                  className="mt-3 inline-flex items-center gap-1.5 text-xs text-forge-accent-soft hover:underline"
=======
                  className="mt-3 inline-flex items-center gap-1.5 text-xs text-[var(--accent-soft)] hover:underline"
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
                >
                  Apri {tool.officialUrlLabel}
                  <ExternalLink size={11} strokeWidth={1.75} />
                </a>
              </div>

<<<<<<< HEAD
              <div className="flex flex-col gap-2 border-t border-forge-border pt-4 sm:flex-row sm:items-end">
=======
              <div className="flex flex-col gap-2 border-t border-[var(--border)] pt-4 sm:flex-row sm:items-end">
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
                <div className="flex-1">
                  <Input
                    label={tool.fieldLabel}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={tool.fieldPlaceholder}
                  />
                </div>
                <Button
                  onClick={() => {
                    if (inputValue.trim()) onConnect(inputValue.trim());
                  }}
                  disabled={!inputValue.trim()}
                >
                  Collega
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </Card>
  );
}
