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
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="max-w-[1600px] mx-auto">
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
            <p className="text-amber-300 text-sm">Geen templates, geen uitpoepen.</p>
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
    </section>
  );
}
