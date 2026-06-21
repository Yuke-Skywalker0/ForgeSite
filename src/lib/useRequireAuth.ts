import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, ApiError } from "@/lib/apiClient";
import { useAuthStore } from "@/store/authStore";
import type { User } from "@/types";

/**
 * Verifica la sessione esistente (cookie HttpOnly) ogni volta che una pagina
 * /app/* viene montata nel browser. Reindirizza a /app/login se non
 * autenticato. Va chiamato in cima ad ogni pagina protetta — non esiste un
 * "layout route" condiviso per /app/* in questo routing (le pagine sono
 * lazy e flat, vedi routes.tsx), quindi ogni pagina protetta verifica da sé.
 */
export function useRequireAuth() {
  const { user, status, setUser } = useAuthStore();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(status !== "idle");

  useEffect(() => {
    if (status !== "idle") {
      setChecked(true);
      return;
    }
    api
      .get<User>("/auth/me")
      .then((u) => setUser(u))
      .catch((err) => {
        if (err instanceof ApiError) setUser(null);
      })
      .finally(() => setChecked(true));
  }, [status, setUser]);

  useEffect(() => {
    if (checked && status === "unauthenticated") {
      navigate("/app/login", { replace: true });
    }
  }, [checked, status, navigate]);

  return { user, isChecking: !checked };
}
