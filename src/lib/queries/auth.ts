import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/apiClient";
import { useAuthStore } from "@/store/authStore";
import type { User } from "@/types";

interface LoginInput {
  email: string;
  password: string;
}

export function useLogin() {
  const setUser = useAuthStore((s) => s.setUser);
  return useMutation({
    mutationFn: (input: LoginInput) => api.post<User>("/auth/login", input),
    onSuccess: (user) => setUser(user),
  });
}

interface RegisterInput {
  email: string;
  password: string;
}

export function useRegister() {
  return useMutation({
    mutationFn: (input: RegisterInput) =>
      api.post<{ message: string }>("/auth/register", input),
  });
}
