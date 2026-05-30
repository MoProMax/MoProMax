"use client";

interface Props {
  label?: string;
  href?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { pad: "px-5 py-2.5",  text: "text-base", icon: "w-4 h-4", dot: "w-1.5 h-1.5" },
  md: { pad: "px-7 py-3.5",  text: "text-lg",   icon: "w-5 h-5", dot: "w-2 h-2"   },
  lg: { pad: "px-10 py-4.5", text: "text-xl",   icon: "w-6 h-6", dot: "w-2.5 h-2.5" },
};

export default function BookCallButton({
  label = "Plan een gesprek",
  href = "/boeken",
  className = "",
  size = "md",
}: Props) {
  const s = sizes[size];

  return (
    <div className={`relative inline-flex ${className}`}>
      <span
        className="pointer-events-none absolute rounded-2xl bg-green-500/20"
        style={{ inset: "-10px", animation: "book-ping 2.6s cubic-bezier(0,0,0.2,1) infinite" }}
      />
      <span
        className="pointer-events-none absolute rounded-2xl bg-green-400/15"
        style={{ inset: "-6px", animation: "book-ping 2.6s cubic-bezier(0,0,0.2,1) infinite", animationDelay: "0.9s" }}
      />
      <a
        href={href}
        className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl font-black text-white ${s.pad}`}
        style={{
          background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
          boxShadow: "0 6px 24px -4px rgba(34,197,94,0.45), 0 2px 8px rgba(0,0,0,0.18)",
          transition: "transform 0.42s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.42s ease",
          willChange: "transform",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.transform = "translateY(-6px) scale(1.07)";
          el.style.boxShadow = "0 0 52px -4px rgba(34,197,94,0.70), 0 28px 52px rgba(0,0,0,0.38)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.transform = "translateY(0) scale(1)";
          el.style.boxShadow = "0 6px 24px -4px rgba(34,197,94,0.45), 0 2px 8px rgba(0,0,0,0.18)";
        }}
      >
        <span
          className="pointer-events-none absolute inset-0"
          style={{
            background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.30) 50%, transparent 70%)",
            animation: "btn-shimmer 3.8s ease infinite",
            animationDelay: "0.6s",
          }}
        />
        <span
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.50) 40%, rgba(255,255,255,0.50) 60%, transparent)",
          }}
        />
        <svg className={`${s.icon} flex-shrink-0 relative`} fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
        <span className={`relative ${s.text}`}>{label}</span>
        <span className="relative flex-shrink-0 flex items-center justify-center">
          <span className={`absolute ${s.dot} rounded-full bg-white/70`} style={{ animation: "book-ping 1.8s cubic-bezier(0,0,0.2,1) infinite" }} />
          <span className={`relative block ${s.dot} rounded-full bg-white`} />
        </span>
      </a>
    </div>
  );
}
