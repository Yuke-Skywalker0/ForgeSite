import type { ReactNode } from "react";
import { AppSidebar } from "@/components/layout/AppSidebar";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <AppSidebar />
      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  );
}
