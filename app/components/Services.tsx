"use client";

import { GlassCard, Moment, Statement } from "./cinematic";

/* ════════════ SERVICE VISUALS — interface mockups ════════════ */

/* 1 · Branding & house style */
function BrandKitVisual() {
  return (
    <GlassCard className="w-full max-w-md p-6">
      <p className="text-white/40 text-xs uppercase tracking-wider mb-4">Merkstijl</p>
      <div className="flex items-center gap-4 mb-5">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center text-white font-black text-2xl shadow-lg shrink-0">M</div>
        <div>
          <p className="text-white font-bold text-lg leading-tight">Jouw merk</p>
          <p className="text-white/40 text-sm">onmiskenbaar van jou</p>
        </div>
      </div>
      <div className="flex gap-2 mb-5">
        {["bg-fuchsia-500", "bg-purple-500", "bg-amber-400", "bg-slate-800", "bg-white/90"].map((c) => (
          <div key={c} className={`h-9 flex-1 rounded-lg ${c} border border-white/10`} />
        ))}
      </div>
      <div className="bg-white/[0.04] rounded-xl px-4 py-3 border border-white/5 flex items-baseline justify-between">
        <span className="text-white font-black text-2xl">Aa</span>
        <span className="text-white/40 text-xs">Typografie · Logo · Stijlgids</span>
      </div>
    </GlassCard>
  );
}

/* 2 · Website on a device */
function DeviceVisual() {
  return (
    <GlassCard className="w-full max-w-md p-0">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" /><span className="w-2.5 h-2.5 rounded-full bg-white/15" /><span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="ml-3 text-white/35 text-xs bg-white/[0.05] rounded-full px-3 py-0.5">jouwbedrijf.nl</span>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600" />
          <div className="flex gap-3">{[0,1,2].map(i=><div key={i} className="h-2 w-8 bg-white/10 rounded-full" />)}</div>
        </div>
        <div className="h-3 w-3/4 bg-white/15 rounded-full mb-2.5" />
        <div className="h-3 w-1/2 bg-white/15 rounded-full mb-5" />
        <div className="inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold px-4 py-2 rounded-lg">Plan een gesprek</div>
        <div className="mt-5 h-20 rounded-xl bg-white/[0.04] border border-white/5" />
      </div>
    </GlassCard>
  );
}

/* 3 · Booking system */
function BookingVisual() {
  const days = ["Ma", "Di", "Wo", "Do", "Vr"];
  const slots = [{ t: "09:00", on: false }, { t: "10:30", on: true }, { t: "13:00", on: false }, { t: "15:30", on: false }];
  return (
    <GlassCard className="w-full max-w-md p-6">
      <div className="flex items-center justify-between mb-4">
        <p className="text-white font-bold">Kies een moment</p>
        <span className="text-emerald-400 text-xs font-semibold">maart</span>
      </div>
      <div className="grid grid-cols-5 gap-2 mb-5">
        {days.map((d, i) => (
          <div key={d} className={`rounded-xl py-2.5 text-center border ${i === 2 ? "bg-emerald-500/20 border-emerald-400/40" : "bg-white/[0.04] border-white/5"}`}>
            <p className="text-white/40 text-[10px]">{d}</p>
            <p className={`text-sm font-bold ${i === 2 ? "text-emerald-300" : "text-white/70"}`}>{12 + i}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {slots.map((s) => (
          <div key={s.t} className={`rounded-xl py-2.5 text-center text-sm font-semibold border ${s.on ? "bg-emerald-500/90 text-slate-900 border-emerald-400" : "bg-white/[0.04] text-white/60 border-white/5"}`}>
            {s.t}{s.on && " ✓"}
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

/* 4 · SEO ranking climb */
function RankingVisual() {
  const rows = [
    { n: "Jouw bedrijf", pos: "1", you: true },
    { n: "Concurrent A", pos: "2", you: false },
    { n: "Concurrent B", pos: "3", you: false },
  ];
  return (
    <GlassCard className="w-full max-w-md p-6">
      <div className="flex items-center gap-2 bg-white/[0.05] rounded-full px-4 py-2 mb-5 border border-white/5">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff66" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
        <span className="text-white/55 text-sm">kapper amsterdam</span>
      </div>
      <div className="space-y-2.5">
        {rows.map((r) => (
          <div key={r.n} className={`flex items-center gap-3 rounded-xl px-4 py-3 border ${r.you ? "bg-emerald-500/[0.08] border-emerald-400/30" : "bg-white/[0.04] border-white/5"}`}>
            <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-sm ${r.you ? "bg-emerald-500 text-slate-900" : "bg-white/10 text-white/50"}`}>{r.pos}</span>
            <span className={`text-sm font-medium ${r.you ? "text-emerald-200" : "text-white/60"}`}>{r.n}</span>
            {r.you && <span className="ml-auto text-emerald-400 text-xs font-bold">↑ bovenaan</span>}
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

/* ════════════════════════════ SECTION ════════════════════════════ */

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden">

      <Statement minH="min-h-[60vh]" eyebrow="Wat je krijgt"
        sub="Vier diensten. Één doel: een bedrijf dat online werkt — gebouwd rond jou.">
        Alles wat je nodig hebt.<br /><span className="text-amber-300">Niets wat je niet nodig hebt.</span>
      </Statement>

      <Moment
        eyebrow="Branding & Huisstijl"
        glow="217,70,239" eyebrowClass="text-amber-300" check="#34d399"
        title={<>Een merk dat<br />mensen onthouden.</>}
        line="Voor we ook maar iets ontwerpen, leren we wie jij bent en wie jouw klanten zijn. Het resultaat: een identiteit die onmiskenbaar van jou is."
        detail="Je merk is meer dan een logo — het is de eerste indruk, het gevoel dat blijft hangen, de reden dat iemand jóu onthoudt tussen tien anderen. Dat gevoel bouwen we op, van kleur tot toon."
        features={["Uniek logo op maat", "Kleurenpalet & typografie", "Merk stijlgids", "Social media kit (profiel, banners, post- & story-templates)", "Originele teksten — geschreven in jouw stem"]}
        visual={<BrandKitVisual />}
      />

      <Moment flip
        eyebrow="Website Ontwerp & Bouw"
        glow="251,191,36" eyebrowClass="text-amber-300"
        title={<>100% op maat.<br />Geen template.</>}
        line="Geen shortcuts. Een website die jouw verhaal vertelt, op elk apparaat werkt en bezoekers een reden geeft om contact op te nemen."
        detail="Elke pixel heeft een doel. Snel ladend, helder, en gebouwd om bezoekers van 'interessant' naar 'ik neem contact op' te brengen — op de telefoon net zo goed als op de laptop."
        features={["100% op maat ontwerp", "Mobiel-first & supersnel", "Originele websiteteksten voor jou geschreven", "Contactformulier + Google Maps", "2 maanden support inbegrepen"]}
        visual={<DeviceVisual />}
      />

      <Moment
        eyebrow="Techniek & Functionaliteit"
        glow="52,211,153" eyebrowClass="text-amber-300"
        title={<>Alle techniek die je<br />bedrijf nodig heeft.</>}
        line="Een boekingssysteem, een webshop, een klantenportaal, een chatbot — wat jouw bedrijf ook nodig heeft, wij bouwen het er naadloos in."
        detail="We leveren niet zomaar een website, maar elke technische functie die jou werk uit handen neemt en klanten oplevert. Begin met wat je nú nodig hebt en voeg later toe wat je bedrijf laat groeien. Eén systeem, helemaal van jou."
        features={[
          "Online boekingssysteem & agenda",
          "Webshop met iDEAL, creditcard & Apple Pay",
          "Klantenportaal, chatbot & live chat",
          "E-mailmarketing & automatische reviews",
          "Koppeling met je boekhouding & bestaande tools",
        ]}
        visual={<BookingVisual />}
      />

      <Moment flip
        eyebrow="SEO · Vindbaarheid"
        glow="56,189,248" eyebrowClass="text-amber-300" check="#34d399"
        title={<>Bovenaan staan<br />als het telt.</>}
        line="Wat heeft een geweldige website voor zin als niemand je vindt? We zorgen dat je zichtbaar bent als jouw klanten zoeken — op Google, op Maps, in jouw regio."
        detail="Vindbaar zijn is geen toeval. We zorgen dat je verschijnt op het moment dat iemand in jouw buurt precies zoekt naar wat jij doet — en dat je bóven de concurrent staat."
        features={["Google Business instellen & optimaliseren", "Zichtbaarheid op Google Maps", "Hogere zoekposities", "Review-strategie", "3 maanden rapportage"]}
        visual={<RankingVisual />}
      />

    </section>
  );
}
