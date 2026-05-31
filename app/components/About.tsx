"use client";

import { useLang } from "@/app/context/LanguageContext";
import { FadeIn } from "./FadeIn";
import LiquidCard from "./LiquidCard";
import BookCallButton from "./BookCallButton";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="relative overflow-hidden py-24 md:min-h-[88vh] md:flex md:items-center">
      <div className="relative max-w-[1600px] mx-auto px-6 w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT — avatar card + floating stat badges (zoals voorheen) */}
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
                  <p className="text-amber-400 font-bold text-xl">Mo</p>
                  <p className="text-amber-500 text-base">Mo Pro Max</p>
                </div>
              </div>
            </LiquidCard>

            <div className="absolute -bottom-4 -right-4 bg-amber-500 text-slate-900 rounded-2xl px-5 py-4 shadow-xl shadow-amber-500/30">
              <p className="text-2xl font-black">100%</p>
              <p className="text-slate-900/70 text-xs font-semibold">Tevreden klanten</p>
            </div>

            <div
              className="absolute -top-4 -left-4 rounded-2xl px-5 py-4 shadow-xl shadow-black/25 overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.09)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,0,0.30)",
              }}
            >
              <p className="text-2xl font-black text-amber-400">48u</p>
              <p className="text-amber-500 text-sm font-medium">Live</p>
            </div>
          </div>
        </FadeIn>

        {/* RIGHT — het nieuwe persoonlijke verhaal */}
        <FadeIn direction="right" delay={0.12}>
          <div>
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-[0.2em] mb-6">
              {t.about.headline}
            </p>

            {t.about.story.map((paragraph, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-amber-400 font-bold text-2xl sm:text-3xl leading-snug tracking-tight mb-6"
                    : "text-amber-400/55 text-lg leading-relaxed mb-4"
                }
              >
                {paragraph}
              </p>
            ))}

            <p className="text-amber-300/80 text-xl mt-6 mb-9" style={{ fontStyle: "italic" }}>
              — Mo
            </p>

            <BookCallButton size="md" label={t.about.cta} />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
