"use client";

import { useEffect, useRef } from "react";

function FlowLines() {
  const off1  = useRef<SVGFEOffsetElement>(null);
  const off2  = useRef<SVGFEOffsetElement>(null);
  const disp1 = useRef<SVGFEDisplacementMapElement>(null);
  const disp2 = useRef<SVGFEDisplacementMapElement>(null);

  useEffect(() => {
    let raf: number;
    let t = 0;

    const tick = () => {
      // Lissajous motion — irrational frequency ratios → never exactly repeats
      // Layer 1: slow, wide, all-directional
      const dx1 = Math.sin(t)          * 230 + Math.sin(t * 0.41) * 80;
      const dy1 = Math.cos(t * 0.63)   * 190 + Math.cos(t * 1.17) * 55;
      const s1  = 75 + Math.sin(t * 0.77) * 20;

      // Layer 2: different frequencies + phase offset
      const dx2 = Math.cos(t * 0.79)   * 165 + Math.sin(t * 1.31) * 55;
      const dy2 = Math.sin(t * 1.07)   * 140 + Math.cos(t * 0.53) * 65;
      const s2  = 55 + Math.cos(t * 0.61) * 18;

      off1.current?.setAttribute("dx",    String(dx1 | 0));
      off1.current?.setAttribute("dy",    String(dy1 | 0));
      disp1.current?.setAttribute("scale", String(s1  | 0));

      off2.current?.setAttribute("dx",    String(dx2 | 0));
      off2.current?.setAttribute("dy",    String(dy2 | 0));
      disp2.current?.setAttribute("scale", String(s2  | 0));

      t += 0.003; // very slow — one full cycle ≈ 35 minutes
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const primary   = Array.from({ length: 22 }, (_, i) => i * 46 - 20);
  const secondary = Array.from({ length: 18 }, (_, i) => i * 54 - 40);

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1440 960"
    >
      <defs>
        <filter id="warp-a" x="-60%" y="-60%" width="220%" height="220%">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.004 0.012"
            numOctaves="4"
            seed="3"
            result="noise-a"
          />
          <feOffset ref={off1} in="noise-a" dx="0" dy="0" result="shifted-a" />
          <feDisplacementMap
            ref={disp1}
            in="SourceGraphic"
            in2="shifted-a"
            scale="75"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        <filter id="warp-b" x="-60%" y="-60%" width="220%" height="220%">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.006 0.016"
            numOctaves="3"
            seed="7"
            result="noise-b"
          />
          <feOffset ref={off2} in="noise-b" dx="0" dy="0" result="shifted-b" />
          <feDisplacementMap
            ref={disp2}
            in="SourceGraphic"
            in2="shifted-b"
            scale="55"
            xChannelSelector="G"
            yChannelSelector="R"
          />
        </filter>
      </defs>

      <g filter="url(#warp-a)">
        {primary.map((y, i) => (
          <line
            key={`p${i}`}
            x1="-600" y1={y} x2="2200" y2={y}
            stroke={`rgba(220,200,255,${0.14 + (i % 4) * 0.035})`}
            strokeWidth={0.6 + (i % 3) * 0.3}
            strokeLinecap="round"
          />
        ))}
      </g>

      <g filter="url(#warp-b)">
        {secondary.map((y, i) => (
          <line
            key={`s${i}`}
            x1="-600" y1={y} x2="2200" y2={y}
            stroke={`rgba(200,175,255,${0.09 + (i % 3) * 0.025})`}
            strokeWidth={0.5 + (i % 2) * 0.25}
            strokeLinecap="round"
          />
        ))}
      </g>
    </svg>
  );
}

export default function GlobalBackground() {
  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[110vw] h-[110vw] rounded-full bg-violet-600/50 blur-[160px]" />
        <div className="absolute -bottom-[30%] -right-[15%] w-[100vw] h-[100vw] rounded-full bg-purple-700/45 blur-[180px]" />
        <div className="absolute top-[20%] left-[10%] w-[70vw] h-[70vw] rounded-full bg-indigo-600/20 blur-[140px]" />
      </div>

      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <FlowLines />
      </div>
    </>
  );
}
