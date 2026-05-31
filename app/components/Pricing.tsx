"use client";

import { useLang } from "@/app/context/LanguageContext";
import LiquidCard from "./LiquidCard";

const Check = () => (
  <svg className="w-6 h-6 mx-auto" viewBox="0 0 24 24" fill="none"
    stroke="#22c55e" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Dash = () => <span className="block w-4 h-px bg-white/10 mx-auto" />;

export default function Pricing() {
  const { t } = useLang();
  const { tiers, features, headline, subline, cta, ctaCustom, popular, maintenance } = t.pricing;

  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      <div className="relative max-w-[1600px] mx-auto">

        <div className="text-center mb-14">
          <p className="text-amber-400 font-semibold text-base uppercase tracking-widest mb-3">{headline}</p>
          <h2 className="text-4xl sm:text-5xl font-black text-amber-400">{subline}</h2>
        </div>

        <LiquidCard noHover className="rounded-2xl">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="bg-white/[0.02] border-b border-white/[0.06]" />
                {tiers.map((tier) => (
                  <th key={`badge-${tier.name}`} className={`border-b border-white/[0.06] pt-3 pb-0 text-center ${tier.highlight ? "bg-gradient-to-b from-amber-600/20 to-amber-600/5" : "bg-white/[0.02]"}`}>
                    {tier.highlight ? (
                      <span className="inline-block bg-amber-500 text-slate-900 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap shadow-lg shadow-amber-500/30">
                        {popular}
                      </span>
                    ) : null}
                  </th>
                ))}
              </tr>

              <tr>
                <th className="bg-white/[0.02] w-52 px-5 py-5 text-left text-amber-600 text-sm font-normal border-b border-white/[0.06]" />
                {tiers.map((tier) => (
                  <th key={`price-${tier.name}`} className={`px-4 py-5 text-center border-b border-white/[0.06] ${tier.highlight ? "bg-gradient-to-b from-amber-600/15 to-amber-600/5" : "bg-white/[0.02]"}`}>
                    <p className="font-black text-lg text-amber-400 mb-1">{tier.name}</p>
                    {tier.isCustom ? (
                      <>
                        <p className="text-xl font-bold text-amber-500 mb-1">{tier.price}</p>
                        <p className="text-sm text-amber-600 mb-4">Specifiek op jouw bedrijf afgestemd</p>
                      </>
                    ) : (
                      <p className={`text-4xl font-black mb-4 ${tier.highlight ? "text-amber-400" : "text-amber-400"}`}>
                        {tier.price}
                      </p>
                    )}
                    <a href="#contact" className={`inline-block w-full text-center text-base font-bold py-2.5 rounded-xl transition-all whitespace-nowrap ${
                      tier.isCustom
                        ? "bg-white/[0.05] text-amber-500 border border-amber-500/20 hover:bg-white/[0.09]"
                        : tier.highlight
                        ? "bg-amber-500 text-slate-900 hover:bg-amber-400 shadow-lg shadow-amber-500/25"
                        : "bg-white/[0.07] text-amber-300 border border-white/[0.1] hover:bg-white/[0.12]"
                    }`}>
                      {tier.isCustom ? ctaCustom : cta}
                    </a>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {features.map((feature, fi) => (
                <tr key={feature} className={`border-b border-white/[0.04] last:border-0 ${fi % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"}`}>
                  <td className="px-5 py-3.5 text-amber-300 text-base">{feature}</td>
                  {tiers.map((tier) => (
                    <td key={tier.name} className={`py-3.5 text-center ${tier.highlight ? "bg-amber-600/[0.05]" : ""}`}>
                      {tier.included[fi] ? <Check /> : <Dash />}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </LiquidCard>

        <p className="text-center text-amber-600 text-base mt-6">{maintenance}</p>
      </div>
    </section>
  );
}
