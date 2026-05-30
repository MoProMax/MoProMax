"use client";

import { useLang } from "@/app/context/LanguageContext";
import { FadeIn, StaggerChildren, StaggerItem } from "./FadeIn";
import LiquidCard from "./LiquidCard";

const accents = [
  { rgb: "248,113,113",  title: "text-red-300",    bar: "bg-red-400"     },
  { rgb: "167,139,250",  title: "text-violet-300", bar: "bg-violet-400"  },
  { rgb: "251,191,36",   title: "text-amber-300",  bar: "bg-amber-400"   },
  { rgb: "251,191,36",   title: "text-amber-300",  bar: "bg-amber-400"   },
  { rgb: "52,211,153",   title: "text-emerald-300",bar: "bg-emerald-400" },
  { rgb: "34,211,238",   title: "text-cyan-300",   bar: "bg-cyan-400"    },
];

export default function Problem() {
  const { t } = useLang();

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">{t.problem.headline}</h2>
          <p className="text-amber-400 text-xl max-w-2xl mx-auto leading-relaxed">{t.problem.subline}</p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
          {t.problem.cards.map((card, i) => {
            const a = accents[i] ?? accents[0];
            return (
              <StaggerItem key={card.title}>
                <LiquidCard accentRgb={a.rgb}>
                  <div className="p-8">
                    <div className={`w-8 h-[3px] ${a.bar} opacity-60 group-hover:opacity-90 rounded-full mb-5 transition-opacity duration-500`} />
                    <h3 className={`font-bold text-xl mb-3 ${a.title}`}>{card.title}</h3>
                    <p className="text-amber-300/90 leading-relaxed text-base">{card.body}</p>
                  </div>
                </LiquidCard>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
