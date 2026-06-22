"use client";

import { useEffect, useRef } from "react";

const LINES = [
  // primary — purple-white
  ...Array.from({ length: 22 }, (_, i) => ({
    baseY:   i * 46 - 20,
    amp1:    25 + (i % 4) * 7,
    amp2:    12 + (i % 3) * 5,
    freq1:   0.0016 + i * 0.00018,
    freq2:   0.0032 + i * 0.00012,
    speed1:  0.28 + i * 0.03,
    speed2:  0.52 + i * 0.02,
    opacity: 0.13 + (i % 4) * 0.032,
    width:   0.6  + (i % 3) * 0.3,
    rgb:     "220,200,255",
  })),
  // secondary — softer violet
  ...Array.from({ length: 18 }, (_, i) => ({
    baseY:   i * 54 - 40,
    amp1:    18 + (i % 3) * 8,
    amp2:    9  + (i % 4) * 4,
    freq1:   0.002  + i * 0.00015,
    freq2:   0.0038 + i * 0.00014,
    speed1:  0.42 + i * 0.025,
    speed2:  0.7  + i * 0.018,
    opacity: 0.08 + (i % 3) * 0.022,
    width:   0.5  + (i % 2) * 0.25,
    rgb:     "200,175,255",
  })),
];

const PTS = 48;   // control-point density — higher = smoother curves
const X0  = -120;
const X1  = 1560; // wider than viewBox to avoid edge clipping

function smoothPath(pts: [number, number][]): string {
  let d = `M${pts[0][0].toFixed(2)},${pts[0][1].toFixed(2)}`;
  for (let i = 1; i < pts.length; i++) {
    const p0 = pts[Math.max(0, i - 2)];
    const p1 = pts[i - 1];
    const p2 = pts[i];
    const p3 = pts[Math.min(pts.length - 1, i + 1)];
    // Catmull-Rom → cubic Bezier
    const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
    const cp1y = p1[1] + (p2[1] - p0[1]) / 6;
    const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
    const cp2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += `C${cp1x.toFixed(2)},${cp1y.toFixed(2)},${cp2x.toFixed(2)},${cp2y.toFixed(2)},${p2[0].toFixed(2)},${p2[1].toFixed(2)}`;
  }
  return d;
}

function FlowLines() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const pathEls = LINES.map((cfg) => {
      const el = document.createElementNS("http://www.w3.org/2000/svg", "path");
      el.setAttribute("fill", "none");
      el.setAttribute("stroke", `rgba(${cfg.rgb},${cfg.opacity})`);
      el.setAttribute("stroke-width", String(cfg.width));
      el.setAttribute("stroke-linecap", "round");
      svg.appendChild(el);
      return el;
    });

    const step = (X1 - X0) / (PTS - 1);
    let t = 0;
    let raf: number;

    const tick = () => {
      LINES.forEach((cfg, li) => {
        const pts: [number, number][] = [];
        for (let p = 0; p < PTS; p++) {
          const x = X0 + p * step;
          const y =
            cfg.baseY +
            Math.sin(x * cfg.freq1 + t * cfg.speed1) * cfg.amp1 +
            Math.sin(x * cfg.freq2 + t * cfg.speed2 + li * 0.7) * cfg.amp2;
          pts.push([x, y]);
        }
        pathEls[li].setAttribute("d", smoothPath(pts));
      });
      t += 0.007;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      pathEls.forEach((el) => el.remove());
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1440 960"
    />
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
