import { useState } from "react";
import { useParams } from "react-router-dom";
import { Globe, CheckCircle2, ExternalLink, Search, Loader2, ShieldCheck, AlertCircle } from "lucide-react";
import { Seo } from "@/components/marketing/Seo";
import { AppShell } from "@/components/layout/AppShell";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";
import { useRequireAuth } from "@/lib/useRequireAuth";

type Tab = "buy" | "existing" | "dns" | "access";

interface DomainSearchResult {
  domain: string;
  available: boolean;
  price: string;
}

const tldExtensions = [".com", ".net", ".it", ".io"];

function generateMockResults(name: string): DomainSearchResult[] {
  return tldExtensions.map((tld, i) => ({
    domain: `${name}${tld}`,
    available: i !== 1,
    price: i === 0 ? "€9.99/anno" : i === 2 ? "€12.99/anno" : "€34.99/anno",
  }));
}

const dnsRecords = [
  { type: "CNAME", name: "www", value: "yuke-skywalker0.github.io", ttl: "Auto" },
  { type: "A", name: "@", value: "185.199.108.153", ttl: "Auto" },
  { type: "A", name: "@", value: "185.199.109.153", ttl: "Auto" },
];

const accessListItems = [
  { ip: "0.0.0.0/0", action: "ALLOW", note: "Tutto il traffico pubblico" },
];

export default function ProjectDomainPage() {
  const { isChecking } = useRequireAuth();
  const { projectId } = useParams<{ projectId: string }>();
  const [tab, setTab] = useState<Tab>("buy");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<DomainSearchResult[]>([]);
  const [searching, setSearching] = useState(false);
  const [purchasedDomain, setPurchasedDomain] = useState<string | null>(null);
  const [existingDomain, setExistingDomain] = useState("");
  const [newIp, setNewIp] = useState("");
  const [newAction, setNewAction] = useState<"ALLOW" | "DENY">("DENY");
  const [accessList, setAccessList] = useState(accessListItems);

  if (isChecking) return <div className="flex min-h-screen items-center justify-center text-sm text-[var(--text-muted)]">Verifica sessione…</div>;
  if (!projectId) return null;

  async function handleSearch() {
    if (!searchQuery.trim()) return;
    setSearching(true);
    await new Promise((r) => setTimeout(r, 900));
    setSearchResults(generateMockResults(searchQuery.toLowerCase().replace(/\s+/g, "-")));
    setSearching(false);
  }

  const tabs: Array<{ id: Tab; label: string; icon: typeof Globe }> = [
    { id: "buy", label: "Acquista dominio", icon: Globe },
    { id: "existing", label: "Dominio esistente", icon: CheckCircle2 },
    { id: "dns", label: "Gestione DNS", icon: ShieldCheck },
    { id: "access", label: "Access list", icon: AlertCircle },
  ];

  return (
    <>
      <Seo title="Dominio e DNS — ForgeSite" description="" path={`/app/projects/${projectId}/domain`} indexable={false} />
      <AppShell>
        <div className="mx-auto max-w-4xl">
          <div className="mb-6">
            <h1 className="mb-1 font-display text-2xl font-semibold text-[var(--text-primary)]">Dominio e DNS</h1>
            <p className="text-sm text-[var(--text-secondary)]">
              Acquista un dominio via Cloudflare, collegalo al tuo sito GitHub Pages e gestisci DNS e access list.
            </p>
          </div>

          <div className="mb-6 flex flex-wrap gap-1 rounded-sm bg-[var(--surface-raised)] p-1">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={cn(
                  "flex items-center gap-1.5 rounded-sm px-3 py-1.5 text-xs font-medium transition-colors",
                  tab === id ? "bg-[var(--accent)] text-white" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                )}
              >
                <Icon size={13} strokeWidth={1.75} />
                {label}
              </button>
            ))}
          </div>

          {tab === "buy" && (
            <div className="flex flex-col gap-5">
              {purchasedDomain ? (
                <Card className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-[var(--accent)]" strokeWidth={2} />
                    <h2 className="font-display text-base font-semibold text-[var(--text-primary)]">
                      Dominio acquistato e configurato
                    </h2>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    <span className="font-mono text-[var(--accent-soft)]">{purchasedDomain}</span> è ora collegato
                    automaticamente al tuo repository GitHub Pages. Il propagamento DNS può richiedere fino a 48 ore.
                  </p>
                  <div className="flex gap-2">
                    <a
                      href={`https://${purchasedDomain}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[var(--accent-soft)] hover:underline"
                    >
                      Apri sito <ExternalLink size={11} />
                    </a>
                    <button className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)]" onClick={() => setPurchasedDomain(null)}>
                      Cambia dominio
                    </button>
                  </div>
                </Card>
              ) : (
                <>
                  <Card className="flex flex-col gap-2 border-[var(--info)]/30 bg-[var(--info-dim)]/20">
                    <h3 className="font-display text-sm font-medium text-[var(--text-primary)]">Come funziona</h3>
                    <ol className="flex flex-col gap-1.5 text-xs text-[var(--text-secondary)]">
                      <li>1. Cerca il dominio che vuoi</li>
                      <li>2. Acquistalo — il pagamento avviene direttamente su Cloudflare, mai attraverso ForgeSite</li>
                      <li>3. ForgeSite configura automaticamente DNS e CNAME per puntare al tuo repository GitHub Pages</li>
                      <li>4. Il tuo sito è live sul dominio personalizzato</li>
                    </ol>
                    <a
                      href="https://www.cloudflare.com/products/registrar/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[var(--info)] hover:underline"
                    >
                      Scopri Cloudflare Registrar <ExternalLink size={11} />
                    </a>
                  </Card>

                  <div className="flex gap-2">
                    <div className="flex-1">
                      <Input
                        label="Cerca un dominio"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="es. miosito o miosito.com"
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                      />
                    </div>
                    <Button onClick={handleSearch} disabled={searching || !searchQuery.trim()} className="self-end">
                      {searching ? <Loader2 size={14} className="animate-spin" /> : <Search size={14} />}
                      Cerca
                    </Button>
                  </div>

                  {searchResults.length > 0 && (
                    <div className="flex flex-col gap-2">
                      {searchResults.map((result) => (
                        <div
                          key={result.domain}
                          className="flex items-center justify-between rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-3"
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={cn(
                                "h-2 w-2 flex-none rounded-full",
                                result.available ? "bg-[var(--accent)]" : "bg-[#EF4444]"
                              )}
                            />
                            <span className="font-mono text-sm text-[var(--text-primary)]">{result.domain}</span>
                          </div>
                          {result.available ? (
                            <div className="flex items-center gap-3">
                              <span className="text-sm text-[var(--accent-soft)]">{result.price}</span>
                              <Button
                                onClick={() => setPurchasedDomain(result.domain)}
                                className="py-1.5 text-xs"
                              >
                                Acquista via Cloudflare
                              </Button>
                            </div>
                          ) : (
                            <Badge variant="danger">Non disponibile</Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          {tab === "existing" && (
            <Card className="flex flex-col gap-5">
              <div>
                <h2 className="mb-1 font-display text-base font-semibold text-[var(--text-primary)]">
                  Collega un dominio che hai già
                </h2>
                <p className="text-sm text-[var(--text-secondary)]">
                  Inserisci il dominio, poi aggiungi i record DNS mostrati di seguito nel tuo registrar attuale.
                </p>
              </div>

              <div className="flex gap-2">
                <div className="flex-1">
                  <Input
                    label="Il tuo dominio"
                    value={existingDomain}
                    onChange={(e) => setExistingDomain(e.target.value)}
                    placeholder="es. www.miosito.it"
                  />
                </div>
                <Button disabled={!existingDomain.trim()} className="self-end">
                  Collega
                </Button>
              </div>

              {existingDomain.trim() && (
                <div>
                  <h3 className="mb-2 text-xs font-medium uppercase tracking-wide text-[var(--text-muted)]">
                    Aggiungi questi record nel tuo registrar
                  </h3>
                  <div className="overflow-x-auto rounded-md border border-[var(--border)]">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-[var(--border)] bg-[var(--surface-raised)]">
                          <th className="px-3 py-2 text-[var(--text-muted)]">Tipo</th>
                          <th className="px-3 py-2 text-[var(--text-muted)]">Nome</th>
                          <th className="px-3 py-2 text-[var(--text-muted)]">Valore</th>
                          <th className="px-3 py-2 text-[var(--text-muted)]">TTL</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dnsRecords.map((r, i) => (
                          <tr key={i} className="border-b border-[var(--border)] last:border-0">
                            <td className="px-3 py-2"><Badge variant="accent">{r.type}</Badge></td>
                            <td className="px-3 py-2 font-mono text-[var(--text-primary)]">{r.name}</td>
                            <td className="px-3 py-2 font-mono text-[var(--text-secondary)]">{r.value}</td>
                            <td className="px-3 py-2 text-[var(--text-muted)]">{r.ttl}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </Card>
          )}

          {tab === "dns" && (
            <Card className="flex flex-col gap-4">
              <h2 className="font-display text-base font-semibold text-[var(--text-primary)]">Gestione DNS</h2>
              <div className="overflow-x-auto rounded-md border border-[var(--border)]">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-[var(--border)] bg-[var(--surface-raised)]">
                      <th className="px-3 py-2 text-[var(--text-muted)]">Tipo</th>
                      <th className="px-3 py-2 text-[var(--text-muted)]">Nome</th>
                      <th className="px-3 py-2 text-[var(--text-muted)]">Valore</th>
                      <th className="px-3 py-2 text-[var(--text-muted)]">TTL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dnsRecords.map((r, i) => (
                      <tr key={i} className="border-b border-[var(--border)] last:border-0">
                        <td className="px-3 py-2"><Badge variant="accent">{r.type}</Badge></td>
                        <td className="px-3 py-2 font-mono text-[var(--text-primary)]">{r.name}</td>
                        <td className="px-3 py-2 font-mono text-[var(--text-secondary)]">{r.value}</td>
                        <td className="px-3 py-2 text-[var(--text-muted)]">{r.ttl}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                La modifica diretta dei record DNS è disponibile dopo aver collegato un dominio e un account Cloudflare.
              </p>
            </Card>
          )}

          {tab === "access" && (
            <Card className="flex flex-col gap-4">
              <div>
                <h2 className="font-display text-base font-semibold text-[var(--text-primary)]">Access List</h2>
                <p className="text-sm text-[var(--text-secondary)]">
                  Controlla quali indirizzi IP possono accedere al tuo sito (richiede Cloudflare attivo).
                </p>
              </div>

              <div className="overflow-x-auto rounded-md border border-[var(--border)]">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-[var(--border)] bg-[var(--surface-raised)]">
                      <th className="px-3 py-2 text-[var(--text-muted)]">IP / CIDR</th>
                      <th className="px-3 py-2 text-[var(--text-muted)]">Azione</th>
                      <th className="px-3 py-2 text-[var(--text-muted)]">Nota</th>
                      <th className="px-3 py-2 text-[var(--text-muted)]"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {accessList.map((item, i) => (
                      <tr key={i} className="border-b border-[var(--border)] last:border-0">
                        <td className="px-3 py-2 font-mono text-[var(--text-primary)]">{item.ip}</td>
                        <td className="px-3 py-2">
                          <Badge variant={item.action === "ALLOW" ? "success" : "danger"}>{item.action}</Badge>
                        </td>
                        <td className="px-3 py-2 text-[var(--text-secondary)]">{item.note}</td>
                        <td className="px-3 py-2">
                          <button
                            onClick={() => setAccessList((l) => l.filter((_, j) => j !== i))}
                            className="text-[var(--text-muted)] hover:text-[#EF4444]"
                          >
                            ✕
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex flex-wrap gap-2 border-t border-[var(--border)] pt-4">
                <Input label="IP o CIDR" value={newIp} onChange={(e) => setNewIp(e.target.value)} placeholder="es. 192.168.1.0/24" />
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-[var(--text-secondary)]">Azione</label>
                  <select
                    value={newAction}
                    onChange={(e) => setNewAction(e.target.value as "ALLOW" | "DENY")}
                    className="rounded-sm border border-[var(--border)] bg-[var(--surface-raised)] px-3 py-2 text-sm text-[var(--text-primary)]"
                  >
                    <option value="ALLOW">ALLOW</option>
                    <option value="DENY">DENY</option>
                  </select>
                </div>
                <Button
                  className="self-end"
                  disabled={!newIp.trim()}
                  onClick={() => {
                    setAccessList((l) => [...l, { ip: newIp.trim(), action: newAction, note: "" }]);
                    setNewIp("");
                  }}
                >
                  Aggiungi regola
                </Button>
              </div>
            </Card>
          )}
        </div>
      </AppShell>
    </>
  );
}
