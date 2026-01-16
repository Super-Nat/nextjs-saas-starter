"use client";

import { ReactNode, useEffect } from "react";
import { useAuth } from "@/lib/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-background p-4">
        <h2 className="mb-6 text-lg font-semibold">Admin Panel</h2>

        <nav className="space-y-2 text-sm">
          <Link href="/dashboard" className="block hover:underline">
            Dashboard
          </Link>
          <Link href="/dashboard/users" className="block hover:underline">
            Users
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
