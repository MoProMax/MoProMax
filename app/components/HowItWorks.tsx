"use client";

import { Reveal, GlassCard, Statement } from "./cinematic";

const STEPS = [
  {
    number: "01",
    title: "Wij stellen de vragen die anderen overslaan.",
    body: "Wie zijn jouw klanten? Wat maakt jou anders? Waarom kiezen mensen voor jou en niet voor de concurrent? Dát bouwen we.",
    detail: "Jij praat, wij luisteren. In één gesprek halen we op wat jouw bedrijf uniek maakt — de basis waarop we alles bouwen. Geen aannames, geen sjablonen.",
    guarantee: "Afspraak bevestigd binnen 2 uur",
  },
  {
    number: "02",
    title: "Wij bouwen. Jij doet gewoon zaken.",
    body: "Geen eindeloos heen-en-weer. Geen weken aan feedbackrondes. Wij leveren — jij keurt goed. Snel, soepel, klaar.",
    detail: "Terwijl jij je klanten helpt, bouwen wij jouw website, schrijven we de teksten en zetten we alles klaar. Jij hoeft alleen nog goed te keuren.",
    guarantee: "Jouw website live binnen 48 uur",
  },
  {
    number: "03",
    title: "Live. En wij blijven.",
    body: "Jouw bedrijf staat online. Wij blijven bereikbaar voor vragen, updates en een maandelijkse check-in. Je staat er nooit alleen voor.",
    detail: "De lancering is niet het einde, maar het begin. We blijven bereikbaar, denken mee en sturen elke maand een check-in. Geen verdwijntruc zodra de factuur betaald is.",
    guarantee: "Wij verdwijnen niet na de lancering",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden">

      <Statement minH="min-h-[58vh]" eyebrow="Hoe het werkt"
        sub="Drie stappen. Geen wachten. Geen gedoe.">
        Van gesprek naar live.<br /><span className="text-amber-400">In 48 uur.</span>
      </Statement>

      <div className="max-w-3xl mx-auto px-6 pb-28">
        <div className="relative">
          {/* connecting line */}
          <div className="absolute left-[27px] top-6 bottom-6 w-px bg-gradient-to-b from-amber-500/50 via-amber-400/30 to-emerald-400/40" />

          {STEPS.map((s, i) => (
            <Reveal key={s.number} delay={i * 0.1}>
              <div className="relative flex gap-5 sm:gap-7 pb-10 last:pb-0">
                {/* node */}
                <div className="relative z-10 shrink-0">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-amber-400/30 bg-[#1a1530]"
                    style={{ boxShadow: "0 8px 30px -8px rgba(251,191,36,0.4)" }}>
                    <span className="font-black text-xl bg-gradient-to-br from-amber-300 to-amber-500 bg-clip-text text-transparent">{s.number}</span>
                  </div>
                </div>

                {/* card */}
                <GlassCard className="flex-1 p-6 sm:p-7">
                  <h3 className="text-white font-black text-2xl sm:text-3xl leading-tight mb-3">{s.title}</h3>
                  <p className="text-white/60 text-base sm:text-lg leading-relaxed">{s.body}</p>
                  {/* desktop-only deepening */}
                  <p className="hidden md:block text-white/40 text-base leading-relaxed mt-4">{s.detail}</p>
                  {/* guarantee badge */}
                  <div className="mt-5 inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-400/25 rounded-full px-4 py-2">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                    <span className="text-emerald-300 text-sm font-semibold">{s.guarantee}</span>
                  </div>
                </GlassCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

    </section>
  );
}
