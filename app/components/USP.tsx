"use client";

import { GlassCard, Moment, Statement } from "./cinematic";

/* ════════════ USP VISUALS — interface mockups ════════════ */

/* 1 · We get to know you first (intake) */
function IntakeVisual() {
  const qs = ["Wie zijn jouw klanten?", "Wat maakt jou anders?", "Waarom kiezen mensen voor jou?"];
  return (
    <GlassCard className="w-full max-w-md p-6">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-900 font-black text-sm">M</div>
        <div>
          <p className="text-white text-sm font-semibold leading-tight">Kennismaking</p>
          <p className="text-white/35 text-xs">Eerst begrijpen, dan bouwen</p>
        </div>
      </div>
      <div className="space-y-2.5">
        {qs.map((q) => (
          <div key={q} className="flex items-start gap-2.5 bg-white/[0.04] rounded-2xl px-4 py-3 border border-white/5">
            <span className="text-amber-300 text-sm mt-0.5">?</span>
            <span className="text-white/80 text-sm">{q}</span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

/* 2 · 48h money-back guarantee */
function GuaranteeVisual() {
  return (
    <GlassCard className="w-full max-w-md p-7 text-center">
      <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Tot livegang</p>
      <p className="text-white font-black text-5xl tabular-nums tracking-tight mb-1">47<span className="text-white/30">:</span>32<span className="text-white/30">:</span>10</p>
      <p className="text-white/35 text-xs mb-6">uur · minuten · seconden</p>
      <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-400/30 rounded-full px-4 py-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5"><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="9"/></svg>
        <span className="text-emerald-300 text-sm font-bold">Geld-terug-garantie</span>
      </div>
    </GlassCard>
  );
}

/* 3 · Direct contact, no queue */
function DirectContactVisual() {
  return (
    <GlassCard className="w-full max-w-md p-6">
      <div className="flex items-center gap-3 mb-5">
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-white font-black text-lg">M</div>
          <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#1a1530]" />
        </div>
        <div>
          <p className="text-white font-semibold">Mo</p>
          <p className="text-emerald-400 text-xs font-medium">Direct verbonden</p>
        </div>
        <svg className="ml-auto" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-white/35 text-sm line-through"><span>✕</span> Ticketsysteem</div>
        <div className="flex items-center gap-2 text-white/35 text-sm line-through"><span>✕</span> Wachtrij & callcenter</div>
        <div className="flex items-center gap-2 text-emerald-300 text-sm font-medium"><span>✓</span> Gewoon direct contact</div>
      </div>
    </GlassCard>
  );
}

/* 4 · Still here 6 months later (check-ins) */
function CheckinVisual() {
  const months = [
    { m: "Maand 1", t: "Check-in & finetunen" },
    { m: "Maand 3", t: "Hoe loopt het?" },
    { m: "Maand 6", t: "Nog steeds hier" },
  ];
  return (
    <GlassCard className="w-full max-w-md p-6">
      <p className="text-white/40 text-xs uppercase tracking-wider mb-4">Na de lancering</p>
      <div className="space-y-3">
        {months.map((x, i) => (
          <div key={x.m} className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${i === 2 ? "bg-amber-500 text-slate-900" : "bg-emerald-500/20 text-emerald-300 border border-emerald-400/30"}`}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <div className="flex-1 bg-white/[0.04] rounded-xl px-4 py-2.5 border border-white/5">
              <p className="text-white text-sm font-semibold">{x.m}</p>
              <p className="text-white/40 text-xs">{x.t}</p>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

/* ════════════════════════════ SECTION ════════════════════════════ */

export default function USP() {
  return (
    <section className="relative overflow-hidden">

      <Statement minH="min-h-[58vh]" eyebrow="Waarom Mo Pro Max"
        sub="Vier beloftes die de meeste bureaus niet durven te doen.">
        Wat ons écht<br /><span className="text-amber-300">anders maakt.</span>
      </Statement>

      <div className="max-w-[1600px] mx-auto w-full px-6 py-12 grid md:grid-cols-2 gap-x-12 gap-y-10 items-stretch">
        <Moment grid
          eyebrow="De aanpak"
          glow="251,191,36" eyebrowClass="text-amber-300"
          title={<>Wij leren je kennen<br />vóór de eerste pixel.</>}
          line="De meeste bureaus plakken een template en noemen het maatwerk. Wij beginnen met een gesprek — en bouwen pas als we écht begrijpen wie jij bent en wat jouw klanten zoeken."
          detail="Wie zijn jouw klanten? Wat maakt jou anders dan de zaak verderop? Waarom zouden mensen voor jóu kiezen? Dat zijn de vragen die wij stellen vóór we ontwerpen — want een website die jouw verhaal niet kent, kan het ook niet vertellen."
          features={[
            "Persoonlijk kennismakingsgesprek vooraf",
            "Wij verdiepen ons eerst in jouw klanten",
            "Geen template — gebouwd rond jouw verhaal",
            "Originele teksten in jouw eigen stem",
          ]}
          visual={<IntakeVisual />}
        />

        <Moment grid
          eyebrow="De garantie"
          glow="52,211,153" eyebrowClass="text-amber-300"
          title={<>48 uur.<br />Of je geld terug.</>}
          line="Geen streefdoel. Een garantie. Als jouw site er niet binnen 48 uur staat, krijg je je geld terug. Zonder uitzondering, zonder kleine lettertjes."
          detail="Andere bureaus doen er 6 tot 12 weken over. Wij leveren binnen twee dagen na het gesprek — en we durven er onze vergoeding op te zetten. Staat je site er niet op tijd? Dan krijg je je geld terug."
          features={[
            "Live binnen 48 uur na het gesprek",
            "Geld terug als we het niet halen",
            "Geen kleine lettertjes, geen uitzonderingen",
            "Geen weken- of maandenlang wachten",
          ]}
          visual={<GuaranteeVisual />}
        />

        <Moment grid
          eyebrow="Het contact"
          glow="56,189,248" eyebrowClass="text-amber-300" check="#34d399"
          title={<>Jij belt.<br />Wij nemen op.</>}
          line="Geen ticketsysteem. Geen wachtrij. Direct contact met degene die jouw site gebouwd heeft — en jouw bedrijf bij naam kent."
          detail="Geen callcenter, geen anonieme helpdesk, geen 'uw bericht is belangrijk voor ons'. Je spreekt direct met de persoon die jouw website bouwde en jouw bedrijf kent. Eén aanspreekpunt, altijd."
          features={[
            "Direct contact, geen tussenlagen",
            "Eén vast aanspreekpunt",
            "Reactie binnen 2 uur",
            "Iemand die jouw bedrijf bij naam kent",
          ]}
          visual={<DirectContactVisual />}
        />

        <Moment grid
          eyebrow="De nazorg"
          glow="251,191,36" eyebrowClass="text-amber-300"
          title={<>Wij zijn er nog<br />zes maanden later.</>}
          line="Maandelijkse check-in. Altijd bereikbaar. We behandelen jouw bedrijf alsof het ons eigen is — want jouw succes is de enige recensie die telt."
          detail="De grootste klacht over bureaus? Ze verdwijnen zodra de factuur betaald is. Wij niet. We sturen elke maand een check-in, denken mee over verbeteringen en zijn er als je iets nodig hebt. Jouw succes is onze beste reclame."
          features={[
            "Maandelijkse check-in",
            "Altijd bereikbaar na de lancering",
            "We denken mee over jouw groei",
            "We verdwijnen niet na de factuur",
          ]}
          visual={<CheckinVisual />}
        />
      </div>

    </section>
  );
}
