"use client";

import Image from "next/image";
import { useLang } from "@/app/context/LanguageContext";
import BookCallButton from "./BookCallButton";

const ease = "cubic-bezier(0.21,0.47,0.32,0.98)";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative md:min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden pt-16 sm:pt-24 pb-12 sm:pb-20">
      <div className="relative z-10 max-w-5xl mx-auto">

        <div
          className="flex justify-center mb-8"
          style={{ animation: `hero-logo 0.8s ${ease} both` }}
        >
          <Image
            src="/logo-transparent.png"
            alt="Mo Pro Max"
            width={340}
            height={191}
            sizes="(max-width: 640px) 180px, (max-width: 1024px) 260px, 340px"
            className="w-[180px] sm:w-[260px] md:w-[340px] h-auto block drop-shadow-[0_0_20px_rgba(147,51,234,0.35)]"
            priority
          />
        </div>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[88px] font-black text-amber-300 leading-[1.06] tracking-tight mb-5"
          style={{ animation: `hero-fade-up-lg 0.7s ${ease} 0.1s both` }}
        >
          {t.hero.headline}
        </h1>

        <div
          className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mx-auto mb-6 origin-left"
          style={{ animation: `hero-scale-x 0.8s ease-out 0.4s both` }}
        />

        <p
          className="text-base sm:text-lg md:text-xl text-amber-300 max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ animation: `hero-fade-up 0.7s ease-out 0.3s both` }}
        >
          {t.hero.subline}
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 w-full max-w-[520px] mx-auto"
          style={{ animation: `hero-fade-up 0.6s ease-out 0.45s both` }}
        >
          <BookCallButton size="lg" label={t.hero.cta} className="w-full sm:w-auto" />
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.1] text-amber-300 font-semibold px-5 py-3 rounded-2xl"
          >
            {t.hero.scroll}
          </a>
        </div>

        <p
          className="text-amber-300 text-base mb-12"
          style={{ animation: `hero-fade 0.6s ease-out 0.6s both` }}
        >
          {t.hero.ctaSub}
        </p>

      </div>
    </section>
  );
}
