"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export const ease = "cubic-bezier(0.21,0.47,0.32,0.98)";

/* ── Scroll-triggered reveal (fade + rise), Apple-style ───────── */
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cancelled = false;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !cancelled) { setVisible(true); observer.disconnect(); } },
      { rootMargin: "-12% 0px -12% 0px" }
    );
    observer.observe(el);
    return () => { cancelled = true; observer.disconnect(); };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(40px)",
        transition: `opacity 0.9s ${ease} ${delay}s, transform 1s ${ease} ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ── Glass surface used for every interface mockup ───────────── */
export function GlassCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-3xl border border-white/10 overflow-hidden ${className}`}
      style={{
        background: "rgba(255,255,255,0.045)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: "0 30px 80px -20px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.08)",
      }}
    >
      {children}
    </div>
  );
}

/* ── One cinematic moment: headline + line on one side, interface on the other ── */
export function Moment({
  eyebrow, title, line, detail, visual, features, flip = false, compact = false, grid = false, eyebrowClass = "text-amber-300", glow = "251,191,36", check = "#34d399",
}: {
  eyebrow: string;
  title: ReactNode;
  line: string;
  detail?: string;      // desktop-only extra paragraph (more info for readers with time)
  visual: ReactNode;
  features?: string[];  // desktop-only checklist
  flip?: boolean;
  compact?: boolean;
  grid?: boolean;       // compact card variant for 2-up grid layouts (visual on top, text below)
  eyebrowClass?: string;
  glow?: string;
  check?: string;
}) {
  /* ── grid card variant: stacked vertically so two fit per row ── */
  if (grid) {
    return (
      <Reveal className="h-full">
        <div className="h-full flex flex-col gap-6 py-6">
          <div className="relative flex justify-center items-center">
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: "100%", height: "100%",
                background: `radial-gradient(circle at center, rgba(${glow},0.18) 0%, rgba(${glow},0.05) 40%, transparent 70%)`,
                filter: "blur(8px)",
              }}
            />
            <div className="relative w-full flex justify-center [&>*]:w-full [&>*]:max-w-sm">{visual}</div>
          </div>
          <div>
            <p className={`font-semibold text-xs uppercase tracking-[0.2em] mb-3 ${eyebrowClass}`}>{eyebrow}</p>
            <h3 className="text-2xl sm:text-3xl font-black text-amber-300 leading-[1.08] tracking-tight mb-3">{title}</h3>
            <p className="text-base text-amber-300/90 leading-relaxed">{line}</p>
          </div>
        </div>
      </Reveal>
    );
  }

  return (
    <div className={`${compact ? "min-h-[70vh]" : "min-h-[84vh]"} flex items-center px-6 py-12`}>
      <div className={`max-w-[1600px] mx-auto w-full grid md:grid-cols-2 gap-10 md:gap-16 items-center ${flip ? "md:[direction:rtl]" : ""}`}>
        <Reveal className="md:[direction:ltr]">
          <p className={`font-semibold text-sm uppercase tracking-[0.2em] mb-5 ${eyebrowClass}`}>{eyebrow}</p>
          <h3 className={`${compact ? "text-4xl sm:text-5xl lg:text-[56px]" : "text-4xl sm:text-5xl lg:text-6xl"} font-black text-amber-300 leading-[1.04] tracking-tight mb-6`}>
            {title}
          </h3>
          {/* core line — shown on every device */}
          <p className="text-lg sm:text-xl text-amber-300/90 leading-relaxed max-w-md">{line}</p>
          {/* extra paragraph — desktop only */}
          {detail && (
            <p className="hidden md:block mt-5 text-lg text-amber-300/90 leading-relaxed max-w-md">{detail}</p>
          )}
          {/* feature checklist — desktop only */}
          {features && features.length > 0 && (
            <ul className="hidden md:block mt-7 space-y-3 max-w-md">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-amber-300/90 text-base">
                  <svg className="w-5 h-5 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke={check} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          )}
        </Reveal>
        <Reveal delay={0.12} className="md:[direction:ltr]">
          <div className="relative flex justify-center items-center">
            {/* ambient light so the interface anchors the frame (Apple-style) */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: "115%", height: "115%",
                background: `radial-gradient(circle at center, rgba(${glow},0.20) 0%, rgba(${glow},0.06) 38%, transparent 70%)`,
                filter: "blur(8px)",
              }}
            />
            <div className="relative w-full flex justify-center [&>*]:w-full [&>*]:max-w-md">{visual}</div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

/* ── Full-screen statement moment (chapter break) ────────────── */
export function Statement({ eyebrow, children, sub, detail, cta, minH = "min-h-screen", eyebrowClass = "text-amber-300" }: {
  eyebrow?: string; children: ReactNode; sub?: string; detail?: ReactNode; cta?: ReactNode; minH?: string; eyebrowClass?: string;
}) {
  return (
    <div className={`${minH} flex items-center justify-center px-6 text-center`}>
      <Reveal>
        {eyebrow && <p className={`font-semibold text-sm uppercase tracking-[0.25em] mb-8 ${eyebrowClass}`}>{eyebrow}</p>}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-amber-300 leading-[1.05] tracking-tight max-w-4xl mx-auto">
          {children}
        </h2>
        {sub && <p className="text-amber-300/90 text-lg sm:text-xl mt-8 max-w-xl mx-auto leading-relaxed">{sub}</p>}
        {/* richer prose — desktop only, for readers who take their time */}
        {detail && <p className="hidden md:block text-amber-300/90 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">{detail}</p>}
        {cta && <div className="mt-10 flex justify-center">{cta}</div>}
      </Reveal>
    </div>
  );
}
