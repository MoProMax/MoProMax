"use client";

import { useLang } from "@/app/context/LanguageContext";
import LiquidCard from "./LiquidCard";

export default function USP() {
  const { t } = useLang();

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <p className="text-center text-amber-600 font-semibold text-sm uppercase tracking-widest mb-10">
          {t.usp.headline}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-6">
          {t.usp.items.map((item) => (
            <LiquidCard key={item.title} accentRgb="251,191,36">
              <div className="p-6">
                <div className="w-8 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mb-5" />
                <h3 className="font-bold text-white text-lg mb-2 leading-snug">{item.title}</h3>
                <p className="text-amber-300 text-base leading-relaxed">{item.body}</p>
              </div>
            </LiquidCard>
          ))}
        </div>
      </div>
    </section>
  );
}
