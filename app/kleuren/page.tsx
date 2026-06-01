/* TIJDELIJKE vergelijkingspagina voor tekstkleuren — te bereiken via /kleuren.
   Verwijderen zodra de kleur gekozen is. */

const SAMPLE = {
  eyebrow: "Nieuwe klanten winnen",
  body: "Een bezoeker met een vraag wordt te woord gestaan, over de streep getrokken én vastgelegd — zonder dat jij iets hoeft te doen.",
  detail: "De chatbot beantwoordt de eerste vraag, live chat vangt de twijfel op precies het beslismoment, en het boekingssysteem zet de afspraak vast. Van vreemde naar klant — dag en nacht.",
  features: ["Geautomatiseerde chatbot beantwoordt vragen 24/7", "Live chat vangt twijfelaars op het beslismoment", "Boekingssysteem zet de afspraak meteen vast"],
};

function Check({ color }: { color: string }) {
  return (
    <svg className="w-5 h-5 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function Option({
  n, name, hex, headCls, emphCls, bodyCls, detailCls, featCls, check,
}: {
  n: number; name: string; hex: string;
  headCls: string; emphCls: string; bodyCls: string; detailCls: string; featCls: string; check: string;
}) {
  return (
    <section className="border-b border-white/10 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-3 mb-8 bg-white/[0.06] border border-white/10 rounded-full px-4 py-1.5">
          <span className="text-white font-bold text-sm">Optie {n}</span>
          <span className="text-white/60 text-sm">{name}</span>
          <span className="text-white/35 text-xs font-mono">{hex}</span>
        </div>

        <p className="text-amber-400 font-semibold text-sm uppercase tracking-[0.2em] mb-4">{SAMPLE.eyebrow}</p>
        <h3 className={`text-4xl sm:text-5xl font-black leading-[1.05] tracking-tight mb-5 ${headCls}`}>
          Het wint <span className={emphCls}>klanten</span>, terwijl jij werkt.
        </h3>
        <p className={`text-lg sm:text-xl leading-relaxed mb-4 ${bodyCls}`}>{SAMPLE.body}</p>
        <p className={`text-base leading-relaxed mb-6 ${detailCls}`}>{SAMPLE.detail}</p>
        <ul className="space-y-3">
          {SAMPLE.features.map((f) => (
            <li key={f} className={`flex items-start gap-3 text-base ${featCls}`}>
              <Check color={check} /> <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function KleurenPage() {
  return (
    <main style={{ background: "#130836" }} className="min-h-screen">
      <div className="max-w-3xl mx-auto px-6 pt-16 pb-4">
        <h1 className="text-amber-400 font-black text-2xl mb-2">Tekstkleur — kies je favoriet</h1>
        <p className="text-white/50 text-sm">Zelfde voorbeeldtekst in 4 varianten, op je echte paarse achtergrond. Beoordeel de leesbaarheid en laat me het optienummer weten.</p>
      </div>

      {/* 1 · amber-300 */}
      <Option n={1} name="Helder goud" hex="#FCD34D"
        headCls="text-amber-300" emphCls="text-amber-400" bodyCls="text-amber-300/85" detailCls="text-amber-300/55" featCls="text-amber-300/90" check="#fcd34d" />

      {/* 2 · amber-200 */}
      <Option n={2} name="Zacht goud" hex="#FDE68A"
        headCls="text-amber-200" emphCls="text-amber-400" bodyCls="text-amber-200/85" detailCls="text-amber-200/55" featCls="text-amber-200/90" check="#fde68a" />

      {/* 3 · amber-100 */}
      <Option n={3} name="Crème-goud" hex="#FEF3C7"
        headCls="text-amber-100" emphCls="text-amber-300" bodyCls="text-amber-100/85" detailCls="text-amber-100/60" featCls="text-amber-100/90" check="#fef3c7" />

      {/* 4 · Hybride: gouden koppen + crème body */}
      <Option n={4} name="Hybride — gouden koppen + crème body" hex="#FBBF24 + #FEF3C7"
        headCls="text-amber-400" emphCls="text-amber-300" bodyCls="text-amber-100/90" detailCls="text-amber-100/55" featCls="text-amber-100/85" check="#34d399" />

      <div className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-white/40 text-sm">Welke optie (1, 2, 3 of 4)? Dan pas ik 'm overal toe en haal ik deze testpagina weg.</p>
      </div>
    </main>
  );
}
