import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useRegister } from "@/lib/queries/auth";
import { ApiError } from "@/lib/apiClient";

export function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const navigate = useNavigate();
  const register = useRegister();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormError(null);
    register.mutate(
      { email, password },
      {
        onSuccess: () => setDone(true),
        onError: (err) => {
          setFormError(
            err instanceof ApiError
              ? err.message
              : "Registrazione non riuscita. Riprova."
          );
        },
      }
    );
  }

  if (done) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-forge-bg px-4">
        <div className="w-full max-w-sm text-center">
          <h1 className="mb-2 font-display text-2xl font-semibold">
            Controlla la tua email
          </h1>
          <p className="mb-6 text-sm text-forge-text-secondary">
            Ti abbiamo inviato un link per verificare l'account.
          </p>
          <Button variant="secondary" onClick={() => navigate("/login")}>
            Torna al login
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-forge-bg px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-forge-ember" aria-hidden="true" />
          <span className="font-display text-lg font-semibold">ForgeSite</span>
        </div>

        <h1 className="mb-1 font-display text-2xl font-semibold">Crea account</h1>
        <p className="mb-6 text-sm text-forge-text-secondary">
          Inizia a costruire il tuo sito in pochi minuti.
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
            autoComplete="new-password"
            minLength={8}
            required
          />

          {formError && (
            <p role="alert" className="text-sm text-forge-danger">
              {formError}
            </p>
          )}

          <Button type="submit" disabled={register.isPending} className="mt-2 w-full">
            {register.isPending ? "Creazione account…" : "Crea account"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-forge-text-secondary">
          Hai già un account?{" "}
          <Link to="/login" className="text-forge-ember-soft hover:underline">
            Accedi
          </Link>
        </p>
      </div>
    </div>
  );
}
