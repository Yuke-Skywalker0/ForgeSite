import { NavLink, Link } from "react-router-dom";
import { LayoutDashboard, FolderGit2, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/cn";
import { useAuthStore } from "@/store/authStore";

const navItems = [
  { to: "/app/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/app/projects", label: "Progetti", icon: FolderGit2 },
  { to: "/app/settings", label: "Impostazioni", icon: Settings },
];

export function AppSidebar() {
  const { user, logout } = useAuthStore();

  return (
    <aside className="flex h-screen w-60 flex-none flex-col border-r border-forge-border bg-forge-surface">
      <Link to="/" className="flex items-center gap-2 px-5 py-5">
        <span className="h-2 w-2 rounded-full bg-forge-accent" aria-hidden="true" />
        <span className="font-display text-base font-semibold tracking-tight text-forge-text-primary">
          ForgeSite
        </span>
      </Link>

      <nav className="flex-1 space-y-1 px-3">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-2.5 rounded-sm px-3 py-2 text-sm transition-colors",
                isActive
                  ? "bg-forge-surface-raised text-forge-text-primary"
                  : "text-forge-text-secondary hover:bg-forge-surface-raised hover:text-forge-text-primary"
              )
            }
          >
            <Icon size={16} strokeWidth={1.75} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-forge-border px-3 py-4">
        <div className="flex items-center justify-between px-2">
          <div className="flex flex-col overflow-hidden">
            <span className="truncate text-sm text-forge-text-primary">{user?.email ?? "—"}</span>
            <span className="text-xs capitalize text-forge-text-muted">{user?.role ?? ""}</span>
          </div>
          <button
            onClick={logout}
            aria-label="Esci"
            className="flex-none rounded-sm p-1.5 text-forge-text-secondary hover:bg-forge-surface-raised hover:text-forge-danger"
          >
            <LogOut size={16} strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </aside>
  );
}
