import { useState, type FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useLogin } from "@/lib/queries/auth";
import { ApiError } from "@/lib/apiClient";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState<string | null>(null);
  const navigate = useNavigate();
  const login = useLogin();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormError(null);
    login.mutate(
      { email, password },
      {
        onSuccess: () => navigate("/dashboard"),
        onError: (err) => {
          setFormError(
            err instanceof ApiError
              ? err.message
              : "Accesso non riuscito. Riprova."
          );
        },
      }
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-forge-bg px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-forge-ember" aria-hidden="true" />
          <span className="font-display text-lg font-semibold">ForgeSite</span>
        </div>

        <h1 className="mb-1 font-display text-2xl font-semibold">Accedi</h1>
        <p className="mb-6 text-sm text-forge-text-secondary">
          Gestisci i tuoi siti senza scrivere codice.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />

          {formError && (
            <p role="alert" className="text-sm text-forge-danger">
              {formError}
            </p>
          )}

          <Button type="submit" disabled={login.isPending} className="mt-2 w-full">
            {login.isPending ? "Accesso in corso…" : "Accedi"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-forge-text-secondary">
          Non hai un account?{" "}
          <Link to="/register" className="text-forge-ember-soft hover:underline">
            Registrati
          </Link>
        </p>
      </div>
    </div>
  );
}
