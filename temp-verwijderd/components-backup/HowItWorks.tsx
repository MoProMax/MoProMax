"use client";

import { useLang } from "@/app/context/LanguageContext";
import { FadeIn, StaggerChildren, StaggerItem } from "./FadeIn";
import LiquidCard from "./LiquidCard";

export default function HowItWorks() {
  const { t } = useLang();

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <FadeIn className="text-center mb-20">
          <p className="text-amber-400 font-semibold text-base uppercase tracking-widest mb-3">{t.howItWorks.headline}</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">{t.howItWorks.subline}</h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 relative py-6">
          <div className="hidden md:block absolute top-[calc(6rem+24px)] left-[calc(33%+2rem)] right-[calc(33%+2rem)] h-px bg-gradient-to-r from-amber-600/40 via-amber-400/40 to-amber-600/40" />

          {t.howItWorks.steps.map((step) => (
            <StaggerItem key={step.number}>
              <LiquidCard accentRgb="251,191,36">
                <div className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-28 h-28 mb-8 relative">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-300/15 border border-amber-500/25 group-hover:border-amber-500/50 transition-colors duration-300" />
                    <span className="relative font-black text-4xl bg-gradient-to-br from-amber-400 to-amber-300 bg-clip-text text-transparent">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-white font-black text-2xl mb-3">{step.title}</h3>
                  <p className="text-amber-300 leading-relaxed text-base max-w-xs mx-auto mb-5">{step.body}</p>
                  <span className="inline-block bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold px-4 py-2 rounded-full">
                    {step.guarantee}
                  </span>
                </div>
              </LiquidCard>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
