"use client";

import { useLang } from "@/app/context/LanguageContext";
import { FadeIn, StaggerChildren, StaggerItem } from "./FadeIn";
import LiquidCard from "./LiquidCard";

const gradients = [
  { rgb: "192,38,211",  icon: "from-pink-500/20 to-purple-600/10",   border: "border-pink-500/15"    },
  { rgb: "251,191,36",  icon: "from-amber-500/20 to-amber-300/10",   border: "border-amber-500/15"   },
  { rgb: "52,211,153",  icon: "from-emerald-500/15 to-teal-600/10",  border: "border-emerald-500/15" },
  { rgb: "245,158,11",  icon: "from-amber-500/15 to-orange-500/10",  border: "border-amber-500/15"   },
];

const serviceIcons = [
  <svg key="branding" className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
  </svg>,
  <svg key="website" className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
  </svg>,
  <svg key="booking" className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
  </svg>,
  <svg key="seo" className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>,
];

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <FadeIn className="mb-14">
          <p className="text-amber-400 font-semibold text-base uppercase tracking-widest mb-3">{t.services.headline}</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white max-w-xl leading-tight">{t.services.subline}</h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
          {t.services.items.map((item, i) => (
            <StaggerItem key={item.title}>
              <LiquidCard accentRgb={gradients[i].rgb}>
                <div className="p-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradients[i].icon} border ${gradients[i].border} flex items-center justify-center mb-6`}>
                    {serviceIcons[i]}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">{item.title}</h3>
                  <p className="text-amber-300 leading-relaxed text-base mb-7">{item.body}</p>
                  <ul className="space-y-2.5">
                    {item.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 mt-[9px]" />
                        <span className="text-base text-amber-300">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </LiquidCard>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
