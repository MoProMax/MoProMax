"use client";

import { useEffect, useState } from "react";
import { getPricingConfig, savePricingConfig, PricingConfig } from "@/app/lib/firestore";
import { translations } from "@/app/lib/translations";

// Default = current Dutch pricing, used until something is saved in Firestore
const DEFAULT: PricingConfig = JSON.parse(JSON.stringify(translations.nl.pricing));

const input =
  "w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-violet-500";

export default function PricingAdminPage() {
  const [config,  setConfig]  = useState<PricingConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving,  setSaving]  = useState(false);
  const [saved,   setSaved]   = useState(false);

  useEffect(() => {
    getPricingConfig()
      .then(c => setConfig(c ?? JSON.parse(JSON.stringify(DEFAULT))))
      .catch(() => setConfig(JSON.parse(JSON.stringify(DEFAULT))))
      .finally(() => setLoading(false));
  }, []);

  if (loading || !config) return <p className="text-white/40 text-sm">Laden…</p>;

  // ── immutable update helpers ──
  const update = (patch: Partial<PricingConfig>) => setConfig(c => ({ ...c!, ...patch }));

  const setFeature = (i: number, value: string) =>
    update({ features: config.features.map((f, idx) => (idx === i ? value : f)) });

  const addFeature = () =>
    update({
      features: [...config.features, "Nieuwe functie"],
      tiers: config.tiers.map(t => ({ ...t, included: [...t.included, false] })),
    });

  const removeFeature = (i: number) =>
    update({
      features: config.features.filter((_, idx) => idx !== i),
      tiers: config.tiers.map(t => ({ ...t, included: t.included.filter((_, idx) => idx !== i) })),
    });

  const setTier = (i: number, patch: Partial<PricingConfig["tiers"][number]>) =>
    update({ tiers: config.tiers.map((t, idx) => (idx === i ? { ...t, ...patch } : t)) });

  const toggleHighlight = (i: number) =>
    update({
      tiers: config.tiers.map((t, idx) => ({ ...t, highlight: idx === i ? !t.highlight : false })),
    });

  const toggleIncluded = (tierIdx: number, featureIdx: number) =>
    update({
      tiers: config.tiers.map((t, idx) =>
        idx === tierIdx
          ? { ...t, included: t.included.map((v, fi) => (fi === featureIdx ? !v : v)) }
          : t
      ),
    });

  const addTier = () =>
    update({
      tiers: [
        ...config.tiers,
        { name: "Nieuw pakket", price: "€0", highlight: false, isCustom: false, included: config.features.map(() => false) },
      ],
    });

  const removeTier = (i: number) =>
    update({ tiers: config.tiers.filter((_, idx) => idx !== i) });

  const save = async () => {
    setSaving(true);
    setSaved(false);
    try {
      await savePricingConfig(config);
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } finally {
      setSaving(false);
    }
  };

  const resetDefault = () => {
    if (!confirm("Terugzetten naar de standaardprijzen? Niet-opgeslagen wijzigingen gaan verloren.")) return;
    setConfig(JSON.parse(JSON.stringify(DEFAULT)));
  };

  const SaveButton = () => (
    <button onClick={save} disabled={saving}
      className="px-5 py-2.5 rounded-xl font-bold text-white text-sm disabled:opacity-50"
      style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)" }}>
      {saving ? "Opslaan…" : saved ? "Opgeslagen ✓" : "Wijzigingen opslaan"}
    </button>
  );

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between mb-6 gap-4">
        <h1 className="text-2xl font-black">Prijzen</h1>
        <div className="flex items-center gap-3">
          <button onClick={resetDefault}
            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white/60 hover:text-white text-xs font-semibold transition-colors">
            Standaard herstellen
          </button>
          <SaveButton />
        </div>
      </div>

      {/* ── General texts ── */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6 space-y-4">
        <h2 className="font-bold text-white">Algemene teksten</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-white/50 mb-1">Kop (klein, boven)</label>
            <input className={input} value={config.headline} onChange={e => update({ headline: e.target.value })} />
          </div>
          <div>
            <label className="block text-xs text-white/50 mb-1">Subkop (groot)</label>
            <input className={input} value={config.subline} onChange={e => update({ subline: e.target.value })} />
          </div>
          <div>
            <label className="block text-xs text-white/50 mb-1">Knoptekst (normale pakketten)</label>
            <input className={input} value={config.cta} onChange={e => update({ cta: e.target.value })} />
          </div>
          <div>
            <label className="block text-xs text-white/50 mb-1">Knoptekst (custom pakket)</label>
            <input className={input} value={config.ctaCustom} onChange={e => update({ ctaCustom: e.target.value })} />
          </div>
          <div>
            <label className="block text-xs text-white/50 mb-1">Badge-tekst ("meest gekozen")</label>
            <input className={input} value={config.popular} onChange={e => update({ popular: e.target.value })} />
          </div>
          <div>
            <label className="block text-xs text-white/50 mb-1">Onderhoudsregel (onder de tabel)</label>
            <input className={input} value={config.maintenance} onChange={e => update({ maintenance: e.target.value })} />
          </div>
        </div>
      </section>

      {/* ── Tiers ── */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-white">Pakketten</h2>
          <button onClick={addTier}
            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white/70 hover:text-white text-xs font-semibold transition-colors">
            + Pakket toevoegen
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {config.tiers.map((tier, i) => (
            <div key={i} className="bg-white/[0.03] border border-white/10 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/40">Pakket {i + 1}</span>
                <button onClick={() => removeTier(i)}
                  className="text-red-400/70 hover:text-red-400 text-xs font-semibold">Verwijder</button>
              </div>
              <div>
                <label className="block text-xs text-white/50 mb-1">Pakketnaam</label>
                <input className={input} value={tier.name} onChange={e => setTier(i, { name: e.target.value })} />
              </div>
              <div>
                <label className="block text-xs text-white/50 mb-1">Prijs</label>
                <input className={input} value={tier.price} onChange={e => setTier(i, { price: e.target.value })} />
              </div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={tier.highlight} onChange={() => toggleHighlight(i)}
                  className="w-4 h-4 rounded accent-amber-500" />
                <span className="text-sm text-white/70">Markeer als &quot;meest gekozen&quot;</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={tier.isCustom} onChange={e => setTier(i, { isCustom: e.target.checked })}
                  className="w-4 h-4 rounded accent-violet-600" />
                <span className="text-sm text-white/70">Custom pakket (offerte)</span>
              </label>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features × tiers matrix ── */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-white">Functies &amp; inclusie</h2>
          <button onClick={addFeature}
            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white/70 hover:text-white text-xs font-semibold transition-colors">
            + Functie toevoegen
          </button>
        </div>
        <p className="text-white/40 text-xs mb-4">Vink aan welke functie in welk pakket zit.</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left text-xs text-white/50 font-medium pb-3 pr-3">Functie</th>
                {config.tiers.map((tier, i) => (
                  <th key={i} className="text-center text-xs text-white/70 font-semibold pb-3 px-2 whitespace-nowrap">
                    {tier.name || `Pakket ${i + 1}`}
                  </th>
                ))}
                <th className="w-8" />
              </tr>
            </thead>
            <tbody>
              {config.features.map((feature, fi) => (
                <tr key={fi} className="border-t border-white/[0.06]">
                  <td className="py-2 pr-3">
                    <input className={input} value={feature} onChange={e => setFeature(fi, e.target.value)} />
                  </td>
                  {config.tiers.map((tier, ti) => (
                    <td key={ti} className="text-center px-2">
                      <input type="checkbox"
                        checked={tier.included[fi] ?? false}
                        onChange={() => toggleIncluded(ti, fi)}
                        className="w-4 h-4 rounded accent-green-500" />
                    </td>
                  ))}
                  <td className="text-center">
                    <button onClick={() => removeFeature(fi)}
                      className="text-red-400/60 hover:text-red-400 text-sm">✕</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="flex justify-end">
        <SaveButton />
      </div>
    </div>
  );
}
