/* Server component — no JS needed; all animations are pure CSS */

function FlowLines() {
  const primary   = Array.from({ length: 22 }, (_, i) => i * 46 - 20);
  const secondary = Array.from({ length: 14 }, (_, i) => i * 62 - 250);

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1440 960"
    >
      <defs>
        {/* Static turbulence warp — no <animate>, zero GPU cost */}
        <filter id="warp-a" x="-40%" y="-40%" width="180%" height="180%">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.0042 0.0058"
            numOctaves="4"
            seed="3"
            result="t1"
          />
          <feDisplacementMap in="SourceGraphic" in2="t1" scale="88" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="warp-b" x="-40%" y="-40%" width="180%" height="180%">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.0055 0.0038"
            numOctaves="3"
            seed="9"
            result="t2"
          />
          <feDisplacementMap in="SourceGraphic" in2="t2" scale="65" xChannelSelector="G" yChannelSelector="R" />
        </filter>
      </defs>

      <g filter="url(#warp-a)">
        {primary.map((y, i) => (
          <line
            key={`p${i}`}
            x1="-300" y1={y} x2="1800" y2={y}
            stroke={`rgba(225,205,255,${0.18 + (i % 4) * 0.04})`}
            strokeWidth={0.7 + (i % 3) * 0.25}
            strokeLinecap="round"
          />
        ))}
      </g>

      <g filter="url(#warp-b)" transform="rotate(-28 720 480)">
        {secondary.map((y, i) => (
          <line
            key={`s${i}`}
            x1="-500" y1={y} x2="2000" y2={y}
            stroke={`rgba(195,165,255,${0.11 + (i % 3) * 0.03})`}
            strokeWidth={0.6 + (i % 2) * 0.2}
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
      {/* Colour blobs — pure CSS animations, no framer-motion */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute -top-[10%] left-[8%] w-[80vw] h-[80vw] rounded-full bg-violet-500/55 blur-[130px]"
          style={{ animation: "blob1 52s ease-in-out infinite alternate", willChange: "transform" }}
        />
        <div
          className="absolute -bottom-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-purple-600/45 blur-[150px]"
          style={{ animation: "blob2 46s ease-in-out infinite alternate", animationDelay: "9s", willChange: "transform" }}
        />
        <div
          className="absolute top-[30%] -left-[5%] w-[45vw] h-[45vw] rounded-full bg-indigo-500/28 blur-[120px]"
          style={{ animation: "blob3 38s ease-in-out infinite alternate", animationDelay: "16s", willChange: "transform" }}
        />
        <div
          className="absolute top-[45%] right-[12%] w-[35vw] h-[35vw] rounded-full bg-fuchsia-600/18 blur-[110px]"
          style={{ animation: "blob4 42s ease-in-out infinite alternate", animationDelay: "5s", willChange: "transform" }}
        />
      </div>

      {/* Flow lines — slow CSS drift, no JS */}
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none z-0"
        style={{ animation: "flow-drift 90s linear infinite", willChange: "transform" }}
      >
        <FlowLines />
      </div>
    </>
  );
}
