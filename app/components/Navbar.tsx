"use client";

import { useState } from "react";
import { useLang } from "@/app/context/LanguageContext";
import BookCallButton from "./BookCallButton";

export default function Navbar() {
  const { t, toggle } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.portfolio, href: "#portfolio" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.about, href: "#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0a1e]/55 backdrop-blur-lg border-b border-white/[0.06]">
      <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-amber-300 hover:text-amber-200 text-base font-medium transition-all border border-amber-500/60 hover:border-amber-300 px-4 py-1.5 rounded-full bg-amber-500/10 hover:bg-amber-500/20 backdrop-blur-sm">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button onClick={toggle} className="text-amber-300 hover:text-amber-300 text-sm font-bold transition-colors px-3 py-1.5 rounded-lg border border-amber-500/20 hover:border-amber-400/30 bg-white/[0.04]">
            {t.nav.lang}
          </button>
          <BookCallButton size="sm" className="hidden sm:inline-flex" />
          <button onClick={() => setMenuOpen((o) => !o)} className="md:hidden text-amber-300 hover:text-amber-200 p-1 transition-colors" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#080412]/90 backdrop-blur-2xl border-t border-white/[0.08] px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} className="text-amber-300 hover:text-amber-100 text-lg font-medium transition-colors">
              {l.label}
            </a>
          ))}
          <BookCallButton size="md" className="w-full mt-1" label="Plan een gesprek" />
        </div>
      )}
    </nav>
  );
}
