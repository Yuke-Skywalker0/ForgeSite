import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";

export function ProtectedRoute() {
  const status = useAuthStore((s) => s.status);

  // "idle" significa che la sessione non è stata ancora verificata (es. al
  // primo load, prima che /auth/me risponda): non reindirizzare subito per
  // evitare un lampo di redirect su utenti già loggati con cookie valido.
  if (status === "idle") {
    return (
      <div className="flex h-screen items-center justify-center text-sm text-forge-text-muted">
        Verifica sessione…
      </div>
    );
  }

  if (status === "unauthenticated") {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
