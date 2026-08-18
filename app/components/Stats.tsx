"use client";

import { useEffect, useRef, useState } from "react";
import { FadeIn } from "./FadeIn";

function useIntersect(rootMargin = "-80px") {
  const ref = useRef<HTMLElement | null>(null);
  const [hit, setHit] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cancelled = false;
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !cancelled) { setHit(true); observer.disconnect(); } },
      { rootMargin }
    );
    observer.observe(el);
    return () => { cancelled = true; observer.disconnect(); };
  }, [rootMargin]);
  return { ref, hit };
}

function Ticker({ from, to, unit, finalValue, stepSize = 1, msPerStep = 80, delay = 0 }: {
  from: number; to: number; unit: string; finalValue?: string;
  stepSize?: number; msPerStep?: number; delay?: number;
}) {
  const [value, setValue] = useState(from);
  const [landed, setLanded] = useState(false);
  const { ref, hit } = useIntersect("-80px");

  useEffect(() => {
    if (!hit) return;
    let timer: ReturnType<typeof setInterval>;
    let landTimeout: ReturnType<typeof setTimeout>;
    const start = setTimeout(() => {
      const countingDown = from > to;
      let current = from;
      timer = setInterval(() => {
        current = countingDown ? current - stepSize : current + stepSize;
        const done = countingDown ? current <= to : current >= to;
        if (done) {
          setValue(to);
          clearInterval(timer);
          if (finalValue) landTimeout = setTimeout(() => setLanded(true), 120);
        } else {
          setValue(current);
        }
      }, msPerStep);
    }, delay);
    return () => {
      clearTimeout(start);
      clearInterval(timer);
      clearTimeout(landTimeout);
    };
  }, [hit, from, to, stepSize, msPerStep, delay, finalValue]);

  if (landed && finalValue) return <span ref={ref as React.RefObject<HTMLSpanElement>}>{finalValue}</span>;
  const display = unit === "€" ? `€${value}` : unit === "%" ? `${value}%` : `${value} ${unit}`;
  return <span ref={ref as React.RefObject<HTMLSpanElement>}>{display}</span>;
}

export default function Stats() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-16 px-6 py-20 relative overflow-hidden text-center">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          <FadeIn delay={0}><div className="text-center">
            <p className="text-4xl sm:text-5xl font-black bg-gradient-to-br from-white to-amber-300 bg-clip-text text-transparent mb-2 leading-none tabular-nums">
              <Ticker from={30} to={1} unit="d" finalValue="48u" stepSize={1} msPerStep={210} delay={0} />
            </p>
            <p className="text-amber-300 font-semibold text-base mb-1">Online na eerste gesprek</p>
            <p className="text-amber-300 text-sm">Niet weken. Niet maanden.</p>
          </div></FadeIn>
          <FadeIn delay={0.1}><div className="text-center">
            <p className="text-4xl sm:text-5xl font-black bg-gradient-to-br from-white to-amber-300 bg-clip-text text-transparent mb-2 leading-none tabular-nums">
              <Ticker from={2500} to={199} unit="€" stepSize={25} msPerStep={100} delay={100} />
            </p>
            <p className="text-amber-300 font-semibold text-base mb-1">Alles inbegrepen vanaf</p>
            <p className="text-amber-300 text-sm">Logo, website, contactformulier.</p>
          </div></FadeIn>
          <FadeIn delay={0.2}><div className="text-center">
            <p className="text-4xl sm:text-5xl font-black bg-gradient-to-br from-white to-amber-300 bg-clip-text text-transparent mb-2 leading-none tabular-nums">
              <Ticker from={0} to={100} unit="%" stepSize={1} msPerStep={40} delay={200} />
            </p>
            <p className="text-amber-300 font-semibold text-base mb-1">Persoonlijke aanpak</p>
            <p className="text-amber-300 text-sm">Geen templates, maar orginaliteit.</p>
          </div></FadeIn>
          <FadeIn delay={0.3}><div className="text-center">
            <p className="text-4xl sm:text-5xl font-black bg-gradient-to-br from-white to-amber-300 bg-clip-text text-transparent mb-2 leading-none tabular-nums">
              <Ticker from={7} to={1} unit="d" finalValue="2u" stepSize={1} msPerStep={585} delay={200} />
            </p>
            <p className="text-amber-300 font-semibold text-base mb-1">Reactietijd</p>
            <p className="text-amber-300 text-sm">Direct contact, geen callcenter.</p>
          </div></FadeIn>
        </div>
      </div>

      <FadeIn delay={0.2}>
        <div className="max-w-4xl mx-auto">
          <p className="font-semibold text-sm uppercase tracking-[0.25em] mb-8 text-amber-300">Herken je dit?</p>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-amber-300 leading-[1.05] tracking-tight">
            Je bent goed in je vak.<br /><span className="text-amber-300">Alleen weet niemand het.</span>
          </h2>
          <p className="text-amber-300/90 text-lg sm:text-xl mt-8 max-w-xl mx-auto leading-relaxed">
            Je doet het goed. Maar online is dat nog niet te zien — en dat kost je elke dag klanten.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
