"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/app/lib/firebase";
import Link from "next/link";

const NAV = [
  { href: "/admin/dashboard",    label: "Dashboard",       icon: "📊" },
  { href: "/admin/messages",     label: "Berichten",       icon: "✉️" },
  { href: "/admin/bookings",     label: "Afspraken",       icon: "📅" },
  { href: "/admin/portfolio",    label: "Portfolio",       icon: "🖼️" },
  { href: "/admin/pricing",      label: "Prijzen",         icon: "💶" },
  { href: "/admin/availability", label: "Beschikbaarheid", icon: "🕐" },
];

export default function AdminClientLayout({ children }: { children: React.ReactNode }) {
  const router   = useRouter();
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      if (!user && pathname !== "/admin") {
        router.replace("/admin");
      } else {
        setReady(true);
      }
    });
    return unsub;
  }, [pathname, router]);

  if (pathname === "/admin") return <>{children}</>;
  if (!ready) return (
    <div className="min-h-screen bg-[#0f0a1e] flex items-center justify-center text-white">
      Laden…
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0f0a1e] flex">
      <aside className="w-60 bg-[#1a0f3a] border-r border-white/10 flex flex-col">
        <div className="px-6 py-5 border-b border-white/10">
          <p className="text-white font-black text-lg">Mo Pro Max</p>
          <p className="text-purple-400 text-xs">Admin panel</p>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {NAV.map(n => (
            <Link key={n.href} href={n.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                pathname === n.href
                  ? "bg-violet-600 text-white"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>{n.icon}</span>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="px-3 py-4 border-t border-white/10">
          <button
            onClick={() => signOut(auth).then(() => router.replace("/admin"))}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-colors"
          >
            <span>🚪</span> Uitloggen
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-auto p-8 text-white">
        {children}
      </main>
    </div>
  );
}
