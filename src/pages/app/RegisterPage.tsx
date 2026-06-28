import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Loader2, Github, Check, ArrowRight, type LucideProps } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Seo } from "@/components/marketing/Seo";
import { useRegister } from "@/lib/queries/auth";
import { ApiError } from "@/lib/apiClient";

const BACKEND = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:4000/api/v1";

function OAuthButton({ provider, label, icon: Icon }: {
  provider: string; label: string;
  icon: React.ComponentType<LucideProps>;
}) {
  return (
    <a
      href={`${BACKEND}/auth/oauth/${provider}`}
      className="flex w-full items-center justify-center gap-2.5 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all hover:opacity-80"
      style={{ borderColor: "var(--border)", backgroundColor: "var(--surface-raised)", color: "var(--text-primary)" }}
    >
      <Icon size={18} strokeWidth={1.75} />
      {label}
    </a>
  );
}

function PasswordStrength({ password }: { password: string }) {
  const checks = [
    { label: "Almeno 8 caratteri", ok: password.length >= 8 },
    { label: "Lettera maiuscola",  ok: /[A-Z]/.test(password) },
    { label: "Numero o simbolo",   ok: /[\d!@#$%^&*]/.test(password) },
  ];
  const score = checks.filter((c) => c.ok).length;
  const colors = ["#EF4444", "#F59E0B", "#10B981"];
  const labels = ["Debole", "Media", "Forte"];

  if (!password) return null;

  return (
    <div className="flex flex-col gap-1.5 mt-1">
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-1 flex-1 rounded-full transition-all" style={{
            backgroundColor: i < score ? colors[score - 1] ?? "#EF4444" : "var(--border)"
          }} />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>
          {labels[score - 1] ?? ""}
        </span>
        <div className="flex gap-3">
          {checks.map((c) => (
            <span key={c.label} className="flex items-center gap-1 text-[10px]"
              style={{ color: c.ok ? "var(--accent)" : "var(--text-muted)" }}>
              <Check size={10} strokeWidth={3} />
              {c.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd]   = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [done, setDone]         = useState(false);
  const navigate                = useNavigate();
  const register                = useRegister();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormError(null);
    if (password.length < 8) {
      setFormError("La password deve avere almeno 8 caratteri.");
      return;
    }
    register.mutate(
      { email, password },
      {
        onSuccess: () => setDone(true),
        onError: (err) => setFormError(err instanceof ApiError ? err.message : "Registrazione non riuscita. Riprova."),
      }
    );
  }

  return (
    <>
      <Seo title="Crea account — ForgeSite" description="Crea il tuo account ForgeSite gratuito." path="/app/register" indexable={false} />
      <div className="flex min-h-screen items-center justify-center px-4 py-12" style={{ backgroundColor: "var(--bg)" }}>
        <div className="w-full max-w-sm">

          <Link to="/" className="mb-8 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg" style={{ backgroundColor: "var(--accent)" }}>
              <span className="text-white text-xs font-bold">F</span>
            </span>
            <span className="font-display text-lg font-semibold" style={{ color: "var(--text-primary)" }}>ForgeSite</span>
          </Link>

          {done ? (
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                style={{ backgroundColor: "var(--accent-dim)" }}>
                <Check size={28} style={{ color: "var(--accent)" }} strokeWidth={2.5} />
              </div>
              <h1 className="mb-2 font-display text-2xl font-semibold" style={{ color: "var(--text-primary)" }}>
                Controlla la tua email
              </h1>
              <p className="mb-6 text-sm" style={{ color: "var(--text-secondary)" }}>
                Ti abbiamo inviato un link per verificare l'account. Clicca il link e sarai dentro.
              </p>
              <Button variant="secondary" onClick={() => navigate("/app/login")}>
                Vai al login
              </Button>
            </div>
          ) : (
            <>
              <h1 className="mb-1 font-display text-2xl font-semibold" style={{ color: "var(--text-primary)" }}>
                Crea il tuo account
              </h1>
              <p className="mb-6 text-sm" style={{ color: "var(--text-secondary)" }}>
                Gratis per sempre nel piano base. Nessuna carta richiesta.
              </p>

              {/* OAuth */}
              <div className="mb-5 flex flex-col gap-2.5">
                <OAuthButton provider="google" label="Registrati con Google" icon={({ size }) => (
                  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                )} />
                <OAuthButton provider="github" label="Registrati con GitHub" icon={Github} />
              </div>

              <div className="relative mb-5">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t" style={{ borderColor: "var(--border)" }} />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2" style={{ backgroundColor: "var(--bg)", color: "var(--text-muted)" }}>
                    oppure con email
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Input label="Email" type="email" value={email}
                  onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />

                <div>
                  <div className="relative">
                    <Input label="Password" type={showPwd ? "text" : "password"} value={password}
                      onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" required />
                    <button type="button" onClick={() => setShowPwd((v) => !v)}
                      className="absolute right-3 top-8" style={{ color: "var(--text-muted)" }}
                      aria-label={showPwd ? "Nascondi password" : "Mostra password"}>
                      {showPwd ? <EyeOff size={16} strokeWidth={1.75} /> : <Eye size={16} strokeWidth={1.75} />}
                    </button>
                  </div>
                  <PasswordStrength password={password} />
                </div>

                {formError && (
                  <p role="alert" className="rounded-lg px-3 py-2 text-sm"
                    style={{ backgroundColor: "rgba(239,68,68,0.1)", color: "#EF4444" }}>
                    {formError}
                  </p>
                )}

                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  Registrandoti accetti i{" "}
                  <Link to="/termini" className="hover:underline" style={{ color: "var(--accent-soft)" }}>Termini di servizio</Link>
                  {" "}e la{" "}
                  <Link to="/privacy" className="hover:underline" style={{ color: "var(--accent-soft)" }}>Privacy Policy</Link>.
                </p>

                <Button type="submit" disabled={register.isPending} className="w-full">
                  {register.isPending ? <Loader2 size={16} className="animate-spin" /> : <ArrowRight size={16} strokeWidth={2} />}
                  {register.isPending ? "Creazione account…" : "Crea account gratuito"}
                </Button>
              </form>

              <p className="mt-6 text-center text-sm" style={{ color: "var(--text-secondary)" }}>
                Hai già un account?{" "}
                <Link to="/app/login" className="font-medium hover:underline" style={{ color: "var(--accent-soft)" }}>
                  Accedi
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
