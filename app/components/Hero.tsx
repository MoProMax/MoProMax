"use client";

import Image from "next/image";
import { useLang } from "@/app/context/LanguageContext";
import BookCallButton from "./BookCallButton";

const ease = "cubic-bezier(0.21,0.47,0.32,0.98)";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-24 pb-20">
      <div className="relative z-10 max-w-5xl mx-auto">

        <div
          className="flex justify-center mb-10"
          style={{ animation: `hero-logo 0.8s ${ease} both` }}
        >
          <Image
            src="/logo-transparent.png"
            alt="Mo Pro Max"
            width={340}
            height={191}
            className="h-auto block drop-shadow-[0_0_40px_rgba(147,51,234,0.5)]"
            priority
          />
        </div>

        <h1
          className="text-5xl sm:text-6xl lg:text-[88px] font-black text-white leading-[1.06] tracking-tight mb-6"
          style={{ animation: `hero-fade-up-lg 0.7s ${ease} 0.1s both` }}
        >
          {t.hero.headline}
        </h1>

        <div
          className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mx-auto mb-8 origin-left"
          style={{ animation: `hero-scale-x 0.8s ease-out 0.4s both` }}
        />

        <p
          className="text-xl sm:text-2xl text-amber-300 max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ animation: `hero-fade-up 0.7s ease-out 0.3s both` }}
        >
          {t.hero.subline}
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-4"
          style={{ animation: `hero-fade-up 0.6s ease-out 0.45s both` }}
        >
          <BookCallButton size="lg" label={t.hero.cta} className="w-full sm:w-auto" />
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.1] hover:border-white/[0.18] text-amber-300 font-semibold text-lg px-10 py-4 rounded-2xl transition-all duration-200 backdrop-blur-sm"
          >
            {t.hero.scroll}
          </a>
        </div>

        <p
          className="text-amber-600 text-base mb-14"
          style={{ animation: `hero-fade 0.6s ease-out 0.6s both` }}
        >
          {t.hero.ctaSub}
        </p>

        <div
          className="flex flex-wrap justify-center gap-2 hidden"
          style={{ animation: `hero-fade 0.8s ease-out 0.7s both` }}
        >
          <span className="text-amber-600 text-sm font-medium self-center mr-1">Voor:</span>
          {t.hero.niches.map((niche, i) => (
            <span
              key={niche}
              className="bg-white/[0.04] border border-amber-500/[0.15] text-amber-500 text-sm font-medium px-4 py-1.5 rounded-full"
              style={{ animation: `hero-niche 0.4s ease-out ${(0.75 + i * 0.06).toFixed(2)}s both` }}
            >
              {niche}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
