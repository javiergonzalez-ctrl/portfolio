"use client";

import { useEffect, useRef, useState } from "react";

/* Refined cursor — single soft accent ring that trails behind the native pointer.
   Keeps the native cursor visible (no cursor: none) so the page never feels broken.
   The ring grows subtly when hovering interactive elements. */

export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduced) return;
    setEnabled(true);

    let mouseX = -200;
    let mouseY = -200;
    let ringX = -200;
    let ringY = -200;
    let raf = 0;
    let started = false;

    const tick = () => {
      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!started) {
        started = true;
        ringX = mouseX;
        ringY = mouseY;
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = !!t.closest("a, button, [role='button'], input, textarea, select, [data-cursor='hover']");
      setHovering(interactive);
    };

    const onLeave = () => {
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  if (!enabled) return null;

  const size = hovering ? 36 : 18;
  const half = size / 2;

  return (
    <div
      ref={ringRef}
      aria-hidden
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: size,
        height: size,
        marginLeft: -half,
        marginTop: -half,
        borderRadius: "50%",
        border: hovering ? "1px solid rgba(61, 139, 122, 0.7)" : "1px solid rgba(15, 16, 19, 0.22)",
        background: hovering ? "rgba(107, 192, 173, 0.08)" : "transparent",
        pointerEvents: "none",
        zIndex: 199,
        mixBlendMode: hovering ? "normal" : "multiply",
        opacity: 0,
        transition:
          "width 0.25s cubic-bezier(0.22, 1, 0.36, 1), height 0.25s cubic-bezier(0.22, 1, 0.36, 1), margin 0.25s cubic-bezier(0.22, 1, 0.36, 1), background 0.2s ease, border-color 0.2s ease, opacity 0.25s ease",
        willChange: "transform",
      }}
    />
  );
}
