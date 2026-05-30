import Image from "next/image";

const variants = [
  { bg: "#160d2e", label: "01 — Nacht",          sub: "Website · dark mode"        },
  { bg: "#2e0a52", label: "02 — Diep paars",     sub: "Social media · banners"     },
  { bg: "#4c1d95", label: "03 — Rijk paars",     sub: "Cards · presentaties"       },
  { bg: "#6d28d9", label: "04 — Levendig paars", sub: "Accenten · prints"          },
];

export default function Logos() {
  return (
    <div style={{ background: "#08030f", minHeight: "100vh", padding: "48px 24px", fontFamily: "system-ui" }}>

      <p style={{ color: "#fbbf24", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 4, textAlign: "center" }}>
        Mo Pro Max
      </p>
      <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 12, textAlign: "center", marginBottom: 48 }}>
        Officieel logo · goud &amp; paars
      </p>

      {/* Groot centraal logo */}
      <div style={{ maxWidth: 700, margin: "0 auto 48px", display: "flex", justifyContent: "center" }}>
        <div style={{ borderRadius: 24, padding: "48px 56px", background: "#160d2e", border: "1px solid rgba(147,51,234,0.25)", boxShadow: "0 0 60px rgba(147,51,234,0.15)" }}>
          <Image
            src="/logo-transparent.png"
            alt="Mo Pro Max logo"
            width={520}
            height={292}
            style={{ display: "block", maxWidth: "100%", height: "auto" }}
            priority
          />
        </div>
      </div>

      {/* Vier kleurvarianten (logo op gekleurde achtergrond) */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, maxWidth: 880, margin: "0 auto" }}>
        {variants.map(({ bg, label, sub }, i) => (
          <div
            key={i}
            style={{
              borderRadius: 20,
              padding: "32px 28px",
              background: "#0e0720",
              border: "1px solid rgba(139,92,246,0.14)",
            }}
          >
            <div style={{ borderRadius: 16, background: bg, padding: "28px 24px", display: "flex", justifyContent: "center" }}>
              <Image
                src="/logo-transparent.png"
                alt="Mo Pro Max logo"
                width={260}
                height={146}
                style={{ display: "block", maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div style={{ marginTop: 16 }}>
              <p style={{ color: "#fff", fontWeight: 800, fontSize: 13, margin: 0 }}>{label}</p>
              <p style={{ color: "#a78bfa", fontSize: 11, margin: "3px 0 0", opacity: 0.7 }}>{sub}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
