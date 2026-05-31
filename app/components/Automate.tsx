"use client";

import { useLang } from "@/app/context/LanguageContext";
import { FadeIn } from "./FadeIn";

export default function Automate() {
  const { t } = useLang();

  const paragraphs = t.automate.body.split("\n\n");

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-3xl mx-auto">

        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-16 leading-tight">
            {t.automate.headline}
          </h2>
        </FadeIn>

        <div className="space-y-8">
          {paragraphs.map((paragraph, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <p className={`leading-relaxed text-lg ${
                i === 0
                  ? "text-white font-medium"
                  : i === paragraphs.length - 1
                  ? "text-white font-semibold text-xl"
                  : "text-white/70"
              }`}>
                {paragraph}
              </p>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
