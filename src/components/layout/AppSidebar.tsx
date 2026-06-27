import { NavLink, Link } from "react-router-dom";
import { LayoutDashboard, FolderGit2, Settings, LogOut, LayoutTemplate, BarChart3 } from "lucide-react";
import { cn } from "@/lib/cn";
import { useAuthStore } from "@/store/authStore";

const navItems = [
  { to: "/app/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/app/projects", label: "Progetti", icon: FolderGit2 },
  { to: "/app/templates", label: "Template", icon: LayoutTemplate },
  { to: "/app/settings", label: "Impostazioni", icon: Settings },
];

const ADMIN_ROLES = new Set(["owner", "admin"]);

export function AppSidebar() {
  const { user, logout } = useAuthStore();
  const isAdmin = user?.role ? ADMIN_ROLES.has(user.role) : false;

  return (
    <aside className="flex h-screen w-60 flex-none flex-col border-r border-[var(--border)] bg-[var(--surface)]">
      <Link to="/" className="flex items-center gap-2 px-5 py-5">
        <span className="h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
        <span className="font-display text-base font-semibold tracking-tight text-[var(--text-primary)]">
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
                  ? "bg-[var(--surface-raised)] text-[var(--text-primary)]"
                  : "text-[var(--text-secondary)] hover:bg-[var(--surface-raised)] hover:text-[var(--text-primary)]"
              )
            }
          >
            <Icon size={16} strokeWidth={1.75} />
            {label}
          </NavLink>
        ))}

        {isAdmin && (
          <>
            <div className="my-2 border-t border-[var(--border)]" />
            <span className="block px-3 pb-1 pt-1 text-[10px] font-medium uppercase tracking-wider text-[var(--text-muted)]">
              Amministrazione
            </span>
            <NavLink
              to="/app/admin/analytics"
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-2.5 rounded-sm px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-[var(--surface-raised)] text-[var(--text-primary)]"
                    : "text-[var(--text-secondary)] hover:bg-[var(--surface-raised)] hover:text-[var(--text-primary)]"
                )
              }
            >
              <BarChart3 size={16} strokeWidth={1.75} />
              Analytics piattaforma
            </NavLink>
          </>
        )}
      </nav>

      <div className="border-t border-[var(--border)] px-3 py-4">
        <div className="flex items-center justify-between px-2">
          <div className="flex flex-col overflow-hidden">
            <span className="truncate text-sm text-[var(--text-primary)]">{user?.email ?? "—"}</span>
            <span className="text-xs capitalize text-[var(--text-muted)]">{user?.role ?? ""}</span>
          </div>
          <button
            onClick={logout}
            aria-label="Esci"
            className="flex-none rounded-sm p-1.5 text-[var(--text-secondary)] hover:bg-[var(--surface-raised)] hover:text-[#EF4444]"
          >
            <LogOut size={16} strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </aside>
  );
}
