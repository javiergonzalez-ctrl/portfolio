/* Sigil — single italic-serif J inside a soft disc.
   Scales cleanly from 24px (favicon) to 200px (OG image). */

export function Sigil({
  size = 32,
  variant = "ink",
}: {
  size?: number;
  variant?: "ink" | "paper" | "teal";
}) {
  const fg =
    variant === "paper" ? "#FAFAF7"
    : variant === "teal" ? "#3D8B7A"
    : "#0E0F13";
  const bg =
    variant === "paper" ? "rgba(255,255,255,0.06)"
    : variant === "teal" ? "rgba(61,139,122,0.10)"
    : "rgba(15,16,19,0.04)";
  const stroke =
    variant === "paper" ? "rgba(255,255,255,0.22)"
    : variant === "teal" ? "rgba(61,139,122,0.30)"
    : "rgba(15,16,19,0.10)";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Javier González Álvarez"
      role="img"
    >
      <circle cx="24" cy="24" r="22.5" fill={bg} stroke={stroke} strokeWidth="1" />
      {/* Serif J — top bar + descender + curl */}
      <path
        d="M18 13 H32 M27 13 V31 C27 34.2 24.8 36 22 35.5 C19 35 17.5 33 17.2 30.8"
        stroke={fg}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
