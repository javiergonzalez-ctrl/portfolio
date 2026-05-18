import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0E0F13",
          borderRadius: "16px",
        }}
      >
        <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
          <path
            d="M18 13 H32 M27 13 V31 C27 34.2 24.8 36 22 35.5 C19 35 17.5 33 17.2 30.8"
            stroke="#FAFAF7"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
