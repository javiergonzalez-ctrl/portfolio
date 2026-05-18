"use client";

import { useEffect, useRef } from "react";

/* MagneticButton — a wrapper that translates its child toward the cursor on hover.
   Subtle by default (max 8px). Snaps back on leave. Disabled on coarse pointers / reduced motion. */

export function MagneticButton({
  children,
  strength = 0.25,
  max = 8,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  max?: number;
  className?: string;
}) {
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const wrapper = wrapperRef.current;
    const child = childRef.current;
    if (!wrapper || !child) return;

    const onMove = (e: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      const clamp = (v: number) => Math.max(-max, Math.min(max, v));
      child.style.transform = `translate(${clamp(dx)}px, ${clamp(dy)}px)`;
    };
    const onLeave = () => {
      child.style.transform = "translate(0, 0)";
    };

    wrapper.addEventListener("mousemove", onMove);
    wrapper.addEventListener("mouseleave", onLeave);
    return () => {
      wrapper.removeEventListener("mousemove", onMove);
      wrapper.removeEventListener("mouseleave", onLeave);
    };
  }, [strength, max]);

  return (
    <span ref={wrapperRef} className={`inline-block ${className || ""}`}>
      <div
        ref={childRef}
        style={{ transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)", willChange: "transform" }}
      >
        {children}
      </div>
    </span>
  );
}
