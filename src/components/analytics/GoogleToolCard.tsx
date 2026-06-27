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
              isConnected ? "bg-[var(--accent-dim)]" : "bg-[var(--surface-raised)]"
            )}
          >
            <Link2 size={16} className={isConnected ? "text-[var(--accent-soft)]" : "text-[var(--text-muted)]"} strokeWidth={1.75} />
          </div>
          <div>
            <h3 className="font-display text-sm font-medium text-[var(--text-primary)]">{tool.name}</h3>
            <p className="text-xs text-[var(--text-secondary)]">{tool.description}</p>
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
          <ChevronDown size={16} className={cn("text-[var(--text-muted)] transition-transform", expanded && "rotate-180")} />
        </div>
      </button>

      {expanded && (
        <div className="border-t border-[var(--border)] px-5 py-5">
          {isConnected ? (
            <div className="flex flex-col gap-3">
              <p className="text-sm text-[var(--text-secondary)]">
                {tool.fieldLabel}: <span className="font-mono text-[var(--text-primary)]">{connectedValue}</span>
              </p>
              <Button variant="danger" onClick={onDisconnect} className="self-start">
                Scollega
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              <div>
                <h4 className="mb-2 text-xs font-medium uppercase tracking-wide text-[var(--text-muted)]">
                  Come ottenere {tool.fieldLabel.toLowerCase()}
                </h4>
                <ol className="flex flex-col gap-1.5">
                  {tool.steps.map((step, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-[var(--text-secondary)]">
                      <span className="flex-none font-mono text-xs text-[var(--accent-soft)]">{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
                <a
                  href={tool.officialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs text-[var(--accent-soft)] hover:underline"
                >
                  Apri {tool.officialUrlLabel}
                  <ExternalLink size={11} strokeWidth={1.75} />
                </a>
              </div>

              <div className="flex flex-col gap-2 border-t border-[var(--border)] pt-4 sm:flex-row sm:items-end">
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
