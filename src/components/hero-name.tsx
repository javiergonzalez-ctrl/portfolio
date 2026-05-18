"use client";

import { useEffect, useState } from "react";

/* HeroName — animates the name on first load with a slight letter stagger.
   Server-renders the static name (SEO + no FOUC) and overlays the animation client-side. */

const FIRST = "Javier";
const LAST = "González Álvarez";

export function HeroName() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <h1
      data-cursor="hover"
      className="text-[clamp(2.5rem,9vw,9rem)] font-bold leading-[0.95] tracking-[-0.04em] text-white select-none"
    >
      <span className="block" style={{ overflow: "clip" }}>
        <span
          className="block pb-[0.04em]"
          style={{
            transform: mounted ? "translateY(0)" : "translateY(110%)",
            opacity: mounted ? 1 : 0.001,
            transition: "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease",
            transitionDelay: "0.1s",
          }}
        >
          {FIRST}
        </span>
      </span>
      <span className="block" style={{ overflow: "clip" }}>
        <span
          className="block font-display italic pb-[0.06em] pr-[0.08em]"
          style={{
            letterSpacing: "-0.02em",
            transform: mounted ? "translateY(0)" : "translateY(110%)",
            opacity: mounted ? 1 : 0.001,
            transition: "transform 1s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease",
            transitionDelay: "0.28s",
          }}
        >
          {LAST}
        </span>
      </span>
    </h1>
  );
}
