"use client";

import { useLang } from "@/app/context/LanguageContext";
import { FadeIn, StaggerChildren, StaggerItem } from "./FadeIn";
import LiquidCard from "./LiquidCard";

const portfolioAccents = [
  "245,158,11",  // amber  — Kapper Youssef
  "236,72,153",  // pink   — Nail Studio Rosa
  "251,191,36",  // amber  — Amir Coaching
];

export default function Portfolio() {
  const { t } = useLang();

  return (
    <section id="portfolio" className="py-24 px-6 relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-amber-400 font-semibold text-base uppercase tracking-widest mb-3">{t.portfolio.headline}</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">{t.portfolio.subline}</h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 py-6">
          {t.portfolio.items.map((item, i) => (
            <StaggerItem key={item.name}>
              <LiquidCard accentRgb={portfolioAccents[i] ?? "251,191,36"}>
                <div className={`h-56 bg-gradient-to-br ${item.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
                  <div className="absolute top-0 left-0 right-0 h-8 bg-black/40 backdrop-blur-sm flex items-center px-3 gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-400/70" />
                    <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
                    <span className="w-2 h-2 rounded-full bg-green-400/70" />
                    <div className="ml-3 flex-1 h-3.5 bg-white/10 rounded-sm" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mx-auto mb-3 text-3xl font-black text-white border border-white/20">
                        {item.name.charAt(0)}
                      </div>
                      <p className="text-white/60 text-xs font-medium">{item.name}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-2">{item.category}</p>
                  <h3 className="text-white font-black text-xl mb-3">{item.name}</h3>
                  <div className="flex items-start gap-2">
                    <span className="block w-1 h-1 rounded-full bg-amber-400 flex-shrink-0 mt-2.5" />
                    <p className="text-amber-300 text-base leading-relaxed">{item.result}</p>
                  </div>
                </div>
              </LiquidCard>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn className="text-center">
          <a href="#contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-black text-lg px-8 py-4 rounded-2xl transition-all hover:-translate-y-0.5 shadow-xl shadow-amber-500/20">
            {t.portfolio.cta} →
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
