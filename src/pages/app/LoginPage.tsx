import { useState, type FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Github, ArrowRight, type LucideProps } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Seo } from "@/components/marketing/Seo";
import { useLogin } from "@/lib/queries/auth";
import { ApiError } from "@/lib/apiClient";

const BACKEND = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:4000/api/v1";

function OAuthButton({ provider, label, icon: Icon, color }: {
  provider: string; label: string;
  icon: React.ComponentType<LucideProps>;
  color?: string;
}) {
  return (
    <a
      href={`${BACKEND}/auth/oauth/${provider}`}
      className="flex w-full items-center justify-center gap-2.5 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all hover:opacity-80"
      style={{ borderColor: "var(--border)", backgroundColor: color ?? "var(--surface-raised)", color: "var(--text-primary)" }}
    >
      <Icon size={18} strokeWidth={1.75} />
      {label}
    </a>
  );
}

export default function LoginPage() {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd]   = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const navigate = useNavigate();
  const login    = useLogin();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormError(null);
    login.mutate(
      { email, password },
      {
        onSuccess: () => navigate("/app/dashboard"),
        onError: (err) => setFormError(err instanceof ApiError ? err.message : "Accesso non riuscito. Riprova."),
      }
    );
  }

  return (
    <>
      <Seo title="Accedi — ForgeSite" description="Accedi al tuo account ForgeSite." path="/app/login" indexable={false} />
      <div className="flex min-h-screen items-center justify-center px-4 py-12" style={{ backgroundColor: "var(--bg)" }}>
        <div className="w-full max-w-sm">
          {/* Logo */}
          <Link to="/" className="mb-8 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg" style={{ backgroundColor: "var(--accent)" }}>
              <span className="text-white text-xs font-bold">F</span>
            </span>
            <span className="font-display text-lg font-semibold" style={{ color: "var(--text-primary)" }}>ForgeSite</span>
          </Link>

          <h1 className="mb-1 font-display text-2xl font-semibold" style={{ color: "var(--text-primary)" }}>Bentornato</h1>
          <p className="mb-6 text-sm" style={{ color: "var(--text-secondary)" }}>Accedi per gestire i tuoi siti.</p>

          {/* OAuth buttons */}
          <div className="mb-5 flex flex-col gap-2.5">
            <OAuthButton provider="google" label="Continua con Google" icon={({ size }) => (
              <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            )} color="#4285F4" />
            <OAuthButton provider="github" label="Continua con GitHub" icon={Github} color="#24292e" />
          </div>

          <div className="relative mb-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t" style={{ borderColor: "var(--border)" }} />
            </div>
            <div className="relative flex justify-center text-xs" style={{ color: "var(--text-muted)" }}>
              <span className="px-2" style={{ backgroundColor: "var(--bg)" }}>oppure con email</span>
            </div>
          </div>

          {/* Form email/password */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input label="Email" type="email" value={email}
              onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />

            <div className="relative">
              <Input label="Password" type={showPwd ? "text" : "password"} value={password}
                onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" required />
              <button type="button" onClick={() => setShowPwd((v) => !v)}
                className="absolute right-3 top-8"
                style={{ color: "var(--text-muted)" }}
                aria-label={showPwd ? "Nascondi password" : "Mostra password"}>
                {showPwd ? <EyeOff size={16} strokeWidth={1.75} /> : <Eye size={16} strokeWidth={1.75} />}
              </button>
            </div>

            <div className="flex justify-end">
              <Link to="/app/reset-password" className="text-xs hover:underline" style={{ color: "var(--accent-soft)" }}>
                Password dimenticata?
              </Link>
            </div>

            {formError && (
              <p role="alert" className="rounded-lg px-3 py-2 text-sm" style={{ backgroundColor: "rgba(239,68,68,0.1)", color: "#EF4444" }}>
                {formError}
              </p>
            )}

            <Button type="submit" disabled={login.isPending} className="mt-1 w-full">
              {login.isPending ? <Loader2 size={16} className="animate-spin" /> : <ArrowRight size={16} strokeWidth={2} />}
              {login.isPending ? "Accesso in corso…" : "Accedi"}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm" style={{ color: "var(--text-secondary)" }}>
            Non hai un account?{" "}
            <Link to="/app/register" className="font-medium hover:underline" style={{ color: "var(--accent-soft)" }}>
              Registrati gratis
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
