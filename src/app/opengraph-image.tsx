import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Javier González Álvarez · Engineer & Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(180deg, #0B1224 0%, #15203A 55%, #0B1224 100%)",
          color: "#FAFAF7",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Soft mesh accents */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(40% 30% at 22% 28%, rgba(107, 192, 173, 0.28) 0%, transparent 60%), radial-gradient(35% 28% at 80% 70%, rgba(231, 111, 81, 0.16) 0%, transparent 60%)",
            filter: "blur(20px)",
          }}
        />

        {/* Top meta strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(250, 250, 247, 0.55)",
            fontFamily: "ui-monospace, monospace",
            zIndex: 1,
          }}
        >
          <span>Madrid · España</span>
          <span>Portfolio · 2026</span>
        </div>

        {/* Center — name + tagline */}
        <div style={{ display: "flex", flexDirection: "column", zIndex: 1 }}>
          <div
            style={{
              fontSize: 124,
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: "-0.045em",
              color: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Javier</span>
            <span style={{ fontStyle: "italic", letterSpacing: "-0.03em" }}>González Álvarez</span>
          </div>

          <div
            style={{
              marginTop: 36,
              fontSize: 26,
              lineHeight: 1.4,
              color: "rgba(250, 250, 247, 0.72)",
              maxWidth: 880,
            }}
          >
            Donde antes había un Excel o un proceso manual, ahora corre un sistema.{" "}
            <span style={{ color: "#FFFFFF" }}>Catorce productos en producción en tres meses.</span>
          </div>
        </div>

        {/* Bottom strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            color: "rgba(250, 250, 247, 0.55)",
            fontFamily: "ui-monospace, monospace",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 9, height: 9, borderRadius: 999, background: "#6BC0AD" }} />
            <span>Disponible para colaboraciones</span>
          </div>
          <span>javier-portfolio</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
