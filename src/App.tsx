import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRouter } from "@/routes/AppRouter";
import { useAuthStore } from "@/store/authStore";
import { api, ApiError } from "@/lib/apiClient";
import type { User } from "@/types";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 30_000,
    },
  },
});

function SessionBootstrap({ children }: { children: React.ReactNode }) {
  const setUser = useAuthStore((s) => s.setUser);

  useEffect(() => {
    // Verifica sessione esistente via cookie HttpOnly all'avvio dell'app.
    api
      .get<User>("/auth/me")
      .then((user) => setUser(user))
      .catch((err) => {
        if (err instanceof ApiError) setUser(null);
      });
  }, [setUser]);

  return <>{children}</>;
}

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionBootstrap>
        <AppRouter />
      </SessionBootstrap>
    </QueryClientProvider>
  );
}
