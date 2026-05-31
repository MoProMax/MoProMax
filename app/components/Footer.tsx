"use client";

import Image from "next/image";
import { useLang } from "@/app/context/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  const linkHrefs = ["#services", "#portfolio", "#pricing", "#about", "#contact"];

  return (
    <footer className="bg-black/30 backdrop-blur-sm border-t border-white/[0.07] py-12 px-6">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="flex flex-col gap-2">
            <Image
              src="/logo-transparent.png"
              alt="Mo Pro Max"
              width={150}
              height={84}
              className="h-auto block"
            />
            <p className="text-amber-600 text-sm">{t.footer.tagline}</p>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {t.footer.links.map((label, i) => (
              <a key={label} href={linkHrefs[i]} className="text-amber-500 hover:text-amber-300 text-base font-medium transition-colors">{label}</a>
            ))}
          </nav>
        </div>
        <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-amber-700 text-sm">
          <p>© {year} Mo Pro Max. {t.footer.legal}</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
