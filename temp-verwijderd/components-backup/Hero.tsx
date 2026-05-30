"use client";

import Image from "next/image";
import { useLang } from "@/app/context/LanguageContext";
import { motion } from "framer-motion";
import BookCallButton from "./BookCallButton";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-24 pb-20">
      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex justify-center mb-10"
        >
          <Image
            src="/logo-transparent.png"
            alt="Mo Pro Max"
            width={340}
            height={191}
            className="h-auto block drop-shadow-[0_0_40px_rgba(147,51,234,0.5)]"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 bg-amber-500/10 border border-amber-500/25 text-amber-400 text-base font-semibold px-5 py-2.5 rounded-full mb-10 backdrop-blur-sm"
        >
          <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
          {t.hero.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-5xl sm:text-6xl lg:text-[88px] font-black text-white leading-[1.06] tracking-tight mb-6"
        >
          {t.hero.headline}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mx-auto mb-8 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xl sm:text-2xl text-amber-300 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t.hero.subline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-4"
        >
          {/* Primary CTA — green book-call */}
          <BookCallButton size="lg" label={t.hero.cta} className="w-full sm:w-auto" />

          {/* Secondary — glass */}
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.1] hover:border-white/[0.18] text-amber-300 font-semibold text-lg px-10 py-4 rounded-2xl transition-all duration-200 backdrop-blur-sm"
          >
            {t.hero.scroll}
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-amber-600 text-base mb-14"
        >
          {t.hero.ctaSub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-2"
        >
          <span className="text-amber-600 text-sm font-medium self-center mr-1">Voor:</span>
          {t.hero.niches.map((niche, i) => (
            <motion.span
              key={niche}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.75 + i * 0.06 }}
              className="bg-white/[0.04] border border-amber-500/[0.15] text-amber-500 text-sm font-medium px-4 py-1.5 rounded-full"
            >
              {niche}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
