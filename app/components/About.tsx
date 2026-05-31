"use client";

import { useState } from "react";
import { useLang } from "@/app/context/LanguageContext";
import { FadeIn } from "./FadeIn";
import BookCallButton from "./BookCallButton";

/* Portrait — drop a real photo at /public/mo.jpg and it appears automatically.
   Until then, a tasteful branded placeholder shows. */
function Portrait() {
  const [ok, setOk] = useState(true);
  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* ambient glow */}
      <div
        className="absolute -inset-6 rounded-[2rem] pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 40%, rgba(251,191,36,0.22), rgba(251,191,36,0.05) 45%, transparent 70%)", filter: "blur(10px)" }}
      />
      <div
        className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10"
        style={{ boxShadow: "0 40px 90px -30px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)" }}
      >
        {/* branded placeholder (shown if no photo yet) */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#241a44] via-[#1c1338] to-[#150d2e]">
          <div className="text-center">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 mx-auto flex items-center justify-center text-slate-900 font-black text-5xl shadow-2xl">
              M
            </div>
          </div>
        </div>
        {/* real photo on top, hides itself if the file isn't there */}
        {ok && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/mo.jpg"
            alt="Mo — oprichter van Mo Pro Max"
            onError={() => setOk(false)}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {/* name caption */}
        <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
          <p className="text-white font-black text-lg leading-tight">Mo</p>
          <p className="text-amber-400 text-sm font-medium">Oprichter · Mo Pro Max</p>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="relative overflow-hidden py-24 md:min-h-[88vh] md:flex md:items-center">
      <div className="relative max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        <FadeIn direction="left">
          <Portrait />
        </FadeIn>

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
                    ? "text-white font-bold text-2xl sm:text-3xl leading-snug tracking-tight mb-6"
                    : "text-white/55 text-lg leading-relaxed mb-4"
                }
              >
                {paragraph}
              </p>
            ))}

            {/* personal signature */}
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
