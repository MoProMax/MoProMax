"use client";

import { ReactNode } from "react";

const restShadow = [
  "0 2px 8px rgba(0,0,0,0.15)",
  "0 12px 36px rgba(0,0,0,0.32)",
].join(", ");

const hoverShadow = (rgb: string) =>
  [
    `0 0 48px -6px rgba(${rgb},0.55)`,
    "0 28px 64px rgba(0,0,0,0.55)",
  ].join(", ");

export default function LiquidCard({
  children,
  accentRgb = "255,255,255",
  className = "",
  noHover = false,
}: {
  children: ReactNode;
  accentRgb?: string;
  className?: string;
  noHover?: boolean;
}) {
  return (
    <div
      className={`group relative rounded-3xl overflow-hidden h-full cursor-default ${className}`}
      style={{
        background: "rgba(255,255,255,0.07)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: restShadow,
        transform: "translateY(0) scale(1)",
        transition: "transform 0.45s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.45s ease",
        willChange: "transform",
      }}
      onMouseEnter={noHover ? undefined : (e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(-10px) scale(1.045)";
        el.style.boxShadow = hoverShadow(accentRgb);
        el.style.background = "rgba(255,255,255,0.10)";
      }}
      onMouseLeave={noHover ? undefined : (e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(0) scale(1)";
        el.style.boxShadow = restShadow;
        el.style.background = "rgba(255,255,255,0.07)";
      }}
    >
      <div className="relative h-full">{children}</div>
      <div
        className="absolute inset-x-0 top-0 pointer-events-none z-10"
        style={{
          height: "60%",
          background: "radial-gradient(ellipse 75% 45% at 50% -2%, rgba(255,255,255,0.20) 0%, transparent 72%)",
        }}
      />
    </div>
  );
}
