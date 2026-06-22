"use client";

import { useEffect, useRef } from "react";

const VBW = 1440;
const VBH = 960;
const X0 = -120;
const X1 = 1560;
const STEP = 8;          // sample spacing in viewbox px — smaller = smoother
const SPEED = 0.45;      // global motion rate (rad/s base)

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

function FlowLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let scale = 1;
    let offX = 0;
    let offY = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      // "slice" / cover mapping of the 1440×960 design space into the viewport
      scale = Math.max(width / VBW, height / VBH);
      offX = (width - VBW * scale) / 2;
      offY = (height - VBH * scale) / 2;
    };
    resize();
    window.addEventListener("resize", resize);

    let raf: number;
    let start: number | null = null;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const draw = (t: number) => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      ctx.translate(offX, offY);
      ctx.scale(scale, scale);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      const T = t * SPEED;
      for (let li = 0; li < LINES.length; li++) {
        const cfg = LINES[li];
        ctx.beginPath();
        for (let x = X0; x <= X1; x += STEP) {
          const y =
            cfg.baseY +
            Math.sin(x * cfg.freq1 + T * cfg.speed1) * cfg.amp1 +
            Math.sin(x * cfg.freq2 + T * cfg.speed2 + li * 0.7) * cfg.amp2;
          if (x === X0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(${cfg.rgb},${cfg.opacity})`;
        ctx.lineWidth = cfg.width;
        ctx.stroke();
      }
      // reset transform so clearRect next frame works in device space
      ctx.setTransform(1, 0, 0, 1, 0, 0);
    };

    const tick = (now: number) => {
      if (start === null) start = now;
      // time-based: motion stays proportional even if frames drop → no jumps
      draw((now - start) / 1000);
      raf = requestAnimationFrame(tick);
    };

    if (reduce) {
      draw(0); // static frame, respect reduced-motion
    } else {
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
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
