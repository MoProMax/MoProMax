"use client";

import { GlassCard, Moment, Statement } from "./cinematic";
import BookCallButton from "./BookCallButton";

/* ════════════ COMPOSITE VISUALS — meerdere functies, één doel ════════════ */

/* 1 · Wint klanten: chatbot → live chat → boeking, in één flow */
function ConvertVisual() {
  return (
    <GlassCard className="w-full max-w-md p-5">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-white/70 text-sm font-semibold">Chat</span>
        <span className="ml-auto text-white/30 text-xs">automatisch</span>
      </div>
      <div className="space-y-2.5">
        <div className="ml-auto w-fit max-w-[80%] bg-amber-500/90 text-slate-900 text-sm font-medium rounded-2xl rounded-br-md px-4 py-2.5">
          Hebben jullie zaterdag nog plek?
        </div>
        <div className="w-fit max-w-[85%] bg-white/[0.06] text-white/80 text-sm rounded-2xl rounded-bl-md px-4 py-2.5 border border-white/5">
          Ja! Zaterdag 14:30 is vrij. Zal ik 'm voor je vastzetten? 😊
        </div>
        <div className="ml-auto w-fit bg-amber-500/90 text-slate-900 text-sm font-medium rounded-2xl rounded-br-md px-4 py-2.5">
          Graag!
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2.5 bg-emerald-500/[0.12] border border-emerald-400/30 rounded-2xl px-4 py-3">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        <span className="text-emerald-200 text-sm font-semibold">Afspraak bevestigd · za 14:30</span>
      </div>
    </GlassCard>
  );
}

/* 2 · Verkoopt: webshop-item + betaling geslaagd */
function CommerceVisual() {
  return (
    <GlassCard className="w-full max-w-md p-5">
      <div className="flex items-center gap-3 bg-white/[0.04] rounded-2xl p-3 border border-white/5 mb-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/30 to-amber-600/20 border border-amber-400/30 flex items-center justify-center text-2xl shrink-0">🎁</div>
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm font-semibold">Cadeaubon</p>
          <p className="text-white/40 text-xs">Digitaal · direct geleverd</p>
        </div>
        <span className="text-white font-bold text-sm">€ 50,00</span>
      </div>
      <div className="flex items-center gap-3 bg-emerald-500/[0.1] border border-emerald-400/30 rounded-2xl p-4">
        <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        </div>
        <div className="flex-1">
          <p className="text-emerald-200 text-sm font-bold">Betaald · iDEAL</p>
          <p className="text-white/40 text-xs">03:27 — terwijl jij sliep</p>
        </div>
      </div>
      <div className="mt-3 flex gap-2">
        {["iDEAL", "Creditcard", "Apple Pay"].map((m) => (
          <span key={m} className="flex-1 text-center bg-white/[0.04] border border-white/5 rounded-lg py-1.5 text-white/50 text-[11px] font-medium">{m}</span>
        ))}
      </div>
    </GlassCard>
  );
}

/* 3 · Vaste klanten: portaal + e-mail + reviews samen */
function LoyaltyVisual() {
  return (
    <GlassCard className="w-full max-w-md p-5 space-y-3">
      <div className="bg-white/[0.04] rounded-2xl p-4 border border-white/5">
        <p className="text-white/40 text-xs mb-0.5">Mijn omgeving</p>
        <p className="text-white font-bold">Welkom terug, Daan</p>
        <p className="text-white/40 text-xs mt-0.5">Volgende afspraak · vr 14 mrt</p>
      </div>
      <div className="flex items-center gap-3 bg-white/[0.04] rounded-2xl p-4 border border-white/5">
        <span className="text-2xl">📩</span>
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm font-semibold truncate">"We hebben je gemist"</p>
          <p className="text-white/40 text-xs">verstuurd · 23 klanten terug geboekt</p>
        </div>
      </div>
      <div className="flex items-center gap-3 bg-amber-500/[0.08] rounded-2xl p-4 border border-amber-400/20">
        <span className="text-amber-300 text-base">★★★★★</span>
        <span className="text-white/70 text-sm"><span className="text-amber-300 font-bold">4,9</span> · 50+ reviews</span>
        <span className="ml-auto text-white/30 text-xs">Google</span>
      </div>
    </GlassCard>
  );
}

/* 4 · Eén geheel: integratie + boekhouding + app, alles verbonden */
function SystemVisual() {
  const mods = [
    { l: "Agenda", i: "📅" },
    { l: "Boekhouding", i: "🧾" },
    { l: "Klanten", i: "👥" },
    { l: "Verkoop", i: "💳" },
  ];
  return (
    <GlassCard className="w-full max-w-md p-6">
      <div className="flex items-center justify-between mb-5">
        <p className="text-white font-bold">Eén systeem</p>
        <span className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold"><span className="w-2 h-2 rounded-full bg-emerald-400" /> Verbonden</span>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {mods.map((m) => (
          <div key={m.l} className="flex items-center gap-2.5 bg-white/[0.04] rounded-2xl px-4 py-3 border border-white/5">
            <span className="text-lg">{m.i}</span>
            <span className="text-white/80 text-sm font-medium flex-1">{m.l}</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 text-white/40 text-xs">
        <span>📱</span><span>💻</span><span>🖥️</span><span className="ml-1">op al je apparaten</span>
      </div>
    </GlassCard>
  );
}

/* ════════════════════════════ SECTION ════════════════════════════ */

export default function Automate() {
  return (
    <section className="relative overflow-hidden">

      {/* DOEL 1 · nieuwe klanten winnen — chatbot + live chat + boeking */}
      <Moment
        eyebrow="Nieuwe klanten winnen"
        glow="251,191,36" eyebrowClass="text-amber-300"
        title={<>Het wint klanten,<br />terwijl jij werkt.</>}
        line="Een bezoeker met een vraag wordt te woord gestaan, over de streep getrokken én vastgelegd — zonder dat jij iets hoeft te doen."
        detail="De chatbot beantwoordt de eerste vraag, live chat vangt de twijfel op precies het beslismoment, en het boekingssysteem zet de afspraak vast. Van vreemde naar klant — dag en nacht, terwijl jij met iets anders bezig bent."
        features={[
          "Geautomatiseerde chatbot beantwoordt vragen 24/7",
          "Live chat vangt twijfelaars op het beslismoment",
          "Boekingssysteem zet de afspraak meteen vast",
          "Werkt 's nachts, in het weekend, altijd door",
        ]}
        visual={<ConvertVisual />}
      />

      {/* DOEL 2 · omzet — webshop + betalingen */}
      <Moment flip
        eyebrow="Verkopen & afrekenen"
        glow="52,211,153" eyebrowClass="text-amber-300"
        title={<>Het verkoopt,<br />ook als je dicht bent.</>}
        line="Producten, diensten, abonnementen of cadeaubonnen — je website verkoopt en incasseert, de klok rond."
        detail="Afgerekend met iDEAL, creditcard of Apple Pay, precies zoals je klant gewend is. Terwijl jij bij een andere klant zit of slaapt, komt de omzet binnen. Geen kassa, geen gedoe — gewoon verkopen, dag en nacht."
        features={[
          "Webshop voor producten, diensten & abonnementen",
          "Betalen met iDEAL, creditcard & Apple Pay",
          "Cadeaubonnen die nieuwe klanten binnenhalen",
          "De kassa draait 24/7, ook als jij weg bent",
        ]}
        visual={<CommerceVisual />}
      />

      {/* DOEL 3 · klanten behouden — portaal + e-mail + reviews */}
      <Moment
        eyebrow="Klanten behouden"
        glow="167,139,250" eyebrowClass="text-amber-300" check="#34d399"
        title={<>Het maakt van bezoekers<br />vaste klanten.</>}
        line="Een eigen plek die ze bindt, een mailtje dat ze terughaalt, en reviews die nieuwe klanten overtuigen."
        detail="In hun eigen vertrouwde omgeving regelen klanten alles zelf — dat bindt. Een goed getimede mail haalt stille klanten terug. En tevreden klanten laten reviews achter die jou hoger in Google zetten. Zo levert elke klant er weer een nieuwe op."
        features={[
          "Klantenportaal: een vertrouwde plek die bindt",
          "E-mailmarketing haalt klanten automatisch terug",
          "Reviews op Google, Facebook & Trustpilot",
          "Beter gevonden → meer klanten → meer reviews",
        ]}
        visual={<LoyaltyVisual />}
      />

      {/* DOEL 4 · rust & overzicht — integratie + boekhouding + app */}
      <Moment flip
        eyebrow="Alles in één"
        glow="56,189,248" eyebrowClass="text-amber-300" check="#34d399"
        title={<>En alles werkt<br />als één geheel.</>}
        line="Je boekhouding, je agenda, je klanten en je verkopen — verbonden in één systeem, op elk apparaat."
        detail="Geen losse tools waar je steeds hetzelfde in tikt. Je boekhouding ziet je facturen, je agenda synchroniseert zodat niemand dubbel boekt, en alles staat als app op je telefoon. Eén overzicht, samengesteld met de functies die jóuw bedrijf nodig heeft."
        features={[
          "Koppeling met je boekhouding & bestaande tools",
          "Agenda synchroniseert — nooit meer dubbel geboekt",
          "Als app op telefoon, tablet én computer",
          "Eén systeem, samengesteld rond jouw bedrijf",
        ]}
        visual={<SystemVisual />}
      />

      <Statement minH="min-h-[82vh]" sub="Terwijl jij doet waar je goed in bent."
        detail="Eén website die nieuwe klanten wint, verkoopt, je klanten vasthoudt en je papierwerk overneemt — samengesteld met precies de functies die jóuw bedrijf nodig heeft. Vandaag, en wat je morgen ook nodig hebt."
        cta={<BookCallButton size="lg" label="Plan een gratis gesprek" />}>
        Niet mooi en leeg.<br />
        <span className="text-amber-300">Mooi, en werkend.</span>
      </Statement>

    </section>
  );
}
