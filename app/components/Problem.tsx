"use client";

import { GlassCard, Moment } from "./cinematic";

const ROSE = "text-amber-300";

/* ════════════ PAIN VISUALS — show what "broken" looks like ════════════ */

/* 1 · Google can't find you */
function SearchVisual() {
  return (
    <GlassCard className="w-full max-w-md p-5">
      <div className="flex items-center gap-2 bg-white/[0.05] rounded-full px-4 py-2 mb-4 border border-white/5">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ffffff66" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
        <span className="text-white/55 text-sm">kapper in de buurt</span>
      </div>
      <div className="space-y-2.5">
        {["Barbershop De Buurman", "Kapsalon Modern"].map((n) => (
          <div key={n} className="bg-white/[0.04] rounded-xl px-4 py-3 border border-white/5">
            <p className="text-sky-300/80 text-sm font-medium">{n}</p>
            <p className="text-emerald-400/70 text-xs">★ 4,8 · Geopend</p>
          </div>
        ))}
        <div className="rounded-xl px-4 py-3 border border-dashed border-rose-400/30 bg-rose-500/[0.04]">
          <p className="text-rose-300/80 text-sm font-medium">Jouw bedrijf</p>
          <p className="text-rose-400/60 text-xs">Niet gevonden</p>
        </div>
      </div>
    </GlassCard>
  );
}

/* 2 · Losing customers silently */
function LostVisual() {
  return (
    <GlassCard className="w-full max-w-md p-6">
      <p className="text-white/40 text-xs uppercase tracking-wider mb-4">Vandaag</p>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-white/[0.06] flex items-center justify-center text-lg">🔍</div>
        <div className="flex-1">
          <p className="text-white/80 text-sm font-medium">7 mensen zochten jouw dienst</p>
          <p className="text-white/40 text-xs">in jouw regio</p>
        </div>
      </div>
      <div className="flex items-center gap-2 my-4 text-white/30">
        <div className="flex-1 h-px bg-white/10" /><span className="text-xs">maar</span><div className="flex-1 h-px bg-white/10" />
      </div>
      <div className="flex items-center gap-3 bg-rose-500/[0.06] rounded-2xl px-4 py-3 border border-rose-400/20">
        <div className="w-10 h-10 rounded-full bg-rose-500/15 flex items-center justify-center text-rose-300 font-black">0</div>
        <div>
          <p className="text-rose-200 text-sm font-semibold">kwamen bij jou terecht</p>
          <p className="text-rose-300/50 text-xs">je hebt het nooit geweten</p>
        </div>
      </div>
    </GlassCard>
  );
}

/* 3 · Agencies deliver a template + invoice */
function TemplateVisual() {
  return (
    <div className="w-full max-w-md space-y-3">
      <GlassCard className="p-0">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5 bg-white/[0.02]">
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" /><span className="w-2.5 h-2.5 rounded-full bg-white/15" /><span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        </div>
        <div className="p-6 text-center">
          <div className="w-10 h-10 rounded-lg bg-white/[0.06] mx-auto mb-3 flex items-center justify-center text-white/30 text-xs">LOGO</div>
          <p className="text-white/45 text-sm">Welkom op onze website</p>
          <div className="h-2 w-32 bg-white/[0.06] rounded-full mx-auto mt-3" />
          <div className="h-2 w-24 bg-white/[0.06] rounded-full mx-auto mt-2" />
        </div>
      </GlassCard>
      <div className="flex items-center justify-between bg-rose-500/[0.06] rounded-2xl px-5 py-3.5 border border-rose-400/20">
        <span className="text-rose-200/80 text-sm">Factuur</span>
        <span className="text-rose-200 font-black text-lg">€ 2.500</span>
      </div>
    </div>
  );
}

/* 4 · Months of waiting */
function WaitingVisual() {
  return (
    <GlassCard className="w-full max-w-md p-6">
      <div className="flex items-center justify-between mb-4">
        <p className="text-white/70 text-sm font-semibold">Jouw website</p>
        <span className="text-rose-300/70 text-xs">In behandeling</span>
      </div>
      <div className="h-2.5 rounded-full bg-white/[0.06] overflow-hidden mb-2">
        <div className="h-full w-[40%] rounded-full bg-gradient-to-r from-rose-500/60 to-rose-400/60" />
      </div>
      <p className="text-white/40 text-xs mb-5">Week 8 van 12</p>
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-white/35 text-xs"><span className="w-1.5 h-1.5 rounded-full bg-white/20" /> Wachten op het bureau…</div>
        <div className="flex items-center gap-2 text-white/35 text-xs"><span className="w-1.5 h-1.5 rounded-full bg-white/20" /> Geen reactie sinds dinsdag</div>
      </div>
    </GlassCard>
  );
}

/* 5 · Big bill, flat results */
function FlatlineVisual() {
  return (
    <GlassCard className="w-full max-w-md p-6">
      <div className="flex items-center justify-between mb-5">
        <p className="text-white/70 text-sm font-semibold">Bezoekers</p>
        <span className="text-rose-300/70 text-xs">Deze week</span>
      </div>
      <svg viewBox="0 0 300 80" className="w-full h-20">
        <line x1="0" y1="70" x2="300" y2="70" stroke="#ffffff14" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="0" y1="70" x2="300" y2="69" stroke="#fb7185" strokeWidth="2.5" />
      </svg>
      <div className="flex items-end justify-between mt-4">
        <div>
          <p className="text-rose-200 text-3xl font-black leading-none">0</p>
          <p className="text-white/35 text-xs mt-1">bezoekers vandaag</p>
        </div>
        <p className="text-white/30 text-xs">een dure folder</p>
      </div>
    </GlassCard>
  );
}

/* 6 · Appointment chaos */
function ChaosVisual() {
  const notes = [
    { t: "Bel Sarah terug?? 14u", c: "bg-amber-300/15 border-amber-300/25 text-amber-100/80", r: "-rotate-6" },
    { t: "Mehmet — di of wo", c: "bg-sky-300/15 border-sky-300/25 text-sky-100/80", r: "rotate-3" },
    { t: "afspraak verzet!!", c: "bg-rose-300/15 border-rose-300/25 text-rose-100/80", r: "rotate-6" },
    { t: "wie was 10:30?", c: "bg-violet-300/15 border-violet-300/25 text-violet-100/80", r: "-rotate-2" },
  ];
  return (
    <div className="relative w-full max-w-md h-80">
      {notes.map((n, i) => (
        <div key={i}
          className={`absolute w-44 h-32 rounded-2xl border ${n.c} ${n.r} flex items-center justify-center text-center text-base font-medium px-4 shadow-xl`}
          style={{ left: `${(i % 2) * 44 + 6}%`, top: `${Math.floor(i / 2) * 40 + 4}%` }}>
          {n.t}
        </div>
      ))}
    </div>
  );
}

/* ════════════════════════════ SECTION ════════════════════════════ */

export default function Problem() {
  return (
    <section className="relative overflow-hidden">

      <div className="max-w-[1600px] mx-auto w-full px-6 py-12 grid md:grid-cols-2 gap-x-12 gap-y-10 items-stretch">
        <Moment grid eyebrowClass={ROSE} glow="251,113,133"
          eyebrow="Vindbaarheid"
          title={<>Google vindt<br />je niet.</>}
          line="Elke dag zonder website is een dag dat jouw klanten bij iemand anders landen. Niet omdat die beter is — maar omdat die gevonden werd."
          visual={<SearchVisual />}
        />

        <Moment grid eyebrowClass={ROSE} glow="251,113,133"
          eyebrow="Gemiste klanten"
          title={<>Je verliest klanten<br />zonder het te weten.</>}
          line="Je krijgt nooit een telefoontje van iemand die jouw concurrent heeft gevonden. Dat is de stille prijs van niet online zijn."
          visual={<LostVisual />}
        />

        <Moment grid eyebrowClass={ROSE} glow="251,113,133"
          eyebrow="Standaard bureaus"
          title={<>Veel beloven,<br />een template leveren.</>}
          line="Logo erin. 'Welkom op onze website' in de header. Factuur buiten. Je betaalde duizenden euro's voor iets dat van iedereen had kunnen zijn."
          visual={<TemplateVisual />}
        />

        <Moment grid eyebrowClass={ROSE} glow="251,113,133"
          eyebrow="Eindeloos wachten"
          title={<>Maanden wachten op<br />iets dat nooit af voelt.</>}
          line="Webdesignbureaus doen er gemiddeld 6 tot 12 weken over — en communiceren amper. Jouw website hoort er in 48 uur te staan, niet 48 dagen."
          visual={<WaitingVisual />}
        />

        <Moment grid eyebrowClass={ROSE} glow="251,113,133"
          eyebrow="Geen resultaat"
          title={<>Hoge rekening,<br />weinig resultaat.</>}
          line="Een mooie website die niemand vindt is een dure folder. Een website hoort gevonden te worden — en bezoekers om te zetten in klanten."
          visual={<FlatlineVisual />}
        />

        <Moment grid eyebrowClass={ROSE} glow="251,113,133"
          eyebrow="Chaos"
          title={<>Afspraken bijhouden<br />is een bijbaantje.</>}
          line="Post-its, WhatsApp-berichten, notities op je telefoon. Eén centraal systeem — bereikbaar op elk apparaat — hoort dit allemaal op te lossen."
          visual={<ChaosVisual />}
        />
      </div>

    </section>
  );
}
