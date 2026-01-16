import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-background p-4">
        <h2 className="mb-6 text-lg font-semibold">Admin Panel</h2>

        <nav className="space-y-2 text-sm">
          <div className="font-medium">Dashboard</div>
          <div className="text-muted-foreground">Users</div>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
