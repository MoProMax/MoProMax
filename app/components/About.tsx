"use client";

import { useLang } from "@/app/context/LanguageContext";
import { FadeIn } from "./FadeIn";
import LiquidCard from "./LiquidCard";
import BookCallButton from "./BookCallButton";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <FadeIn direction="left">
            <div className="relative">
              <LiquidCard noHover accentRgb="251,191,36" className="aspect-square max-w-sm mx-auto">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center px-8">
                    <div className="relative w-32 h-32 mx-auto mb-5">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500 to-amber-300 opacity-25 blur-[18px]" />
                      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-amber-500/30 to-amber-300/20 border-2 border-amber-500/40 flex items-center justify-center text-5xl font-black text-amber-300">
                        M
                      </div>
                    </div>
                    <p className="text-white font-bold text-xl">Mo</p>
                    <p className="text-amber-500 text-base">Mo Pro Max</p>
                  </div>
                </div>
              </LiquidCard>

              <div className="absolute -bottom-4 -right-4 bg-amber-500 text-slate-900 rounded-2xl px-5 py-4 shadow-xl shadow-amber-500/30">
                <p className="text-2xl font-black">100%</p>
                <p className="text-slate-900/70 text-xs font-semibold">Tevreden klanten</p>
              </div>

              <div className="absolute -top-4 -left-4 rounded-2xl px-5 py-4 shadow-xl shadow-black/25 overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.09)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,0,0.30)",
                }}
              >
                <p className="text-2xl font-black text-amber-400">24h</p>
                <p className="text-amber-500 text-sm font-medium">Reactietijd</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            <div>
              <p className="text-amber-400 font-semibold text-base uppercase tracking-widest mb-4">{t.about.headline}</p>
              <div className="space-y-5">
                {t.about.story.map((paragraph, i) => (
                  <p key={i} className={`leading-relaxed ${i === 0 ? "text-white font-semibold text-xl" : "text-amber-300 text-lg"}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-10">
                <BookCallButton size="md" label={t.about.cta} />
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
