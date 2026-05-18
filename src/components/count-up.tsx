"use client";

import { useEffect, useRef, useState } from "react";

/* CountUp — animates a numeric value from 0 to target when the element enters viewport.
   Supports decimals (commas) and trailing characters like " %" or "+".
   The non-numeric template is preserved (e.g. "10+" → animates 0 → 10, suffix "+"). */

function splitDisplay(display: string) {
  // Match: optional leading non-digits, then digits/comma/dot, then trailing chars.
  const match = display.match(/^([^\d-]*)([\d.,]+)(.*)$/);
  if (!match) return { prefix: "", number: NaN, suffix: display, decimals: 0, sep: "," };
  const [, prefix, numStr, suffix] = match;
  // ES-style: comma is decimal sep, dot is thousands sep
  const sep = numStr.includes(",") ? "," : ".";
  const numericRaw =
    sep === ","
      ? numStr.replace(/\./g, "").replace(",", ".")
      : numStr.replace(/,/g, "");
  const number = parseFloat(numericRaw);
  const dotIdx = numStr.indexOf(sep);
  const decimals = dotIdx >= 0 ? numStr.length - dotIdx - 1 : 0;
  return { prefix, number, suffix, decimals, sep };
}

function format(value: number, decimals: number, sep: string) {
  const fixed = value.toFixed(decimals);
  // For ES style (comma decimal), swap
  if (sep === ",") return fixed.replace(".", ",");
  return fixed;
}

export function CountUp({
  display,
  duration = 1400,
  className,
}: {
  display: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(display);
  const startedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(display);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const { prefix, number, suffix, decimals, sep } = splitDisplay(display);
    if (isNaN(number)) {
      setValue(display);
      return;
    }
    setValue(prefix + format(0, decimals, sep) + suffix);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const start = performance.now();
          const tick = (t: number) => {
            const elapsed = Math.min(1, (t - start) / duration);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - elapsed, 3);
            const v = number * eased;
            setValue(prefix + format(v, decimals, sep) + suffix);
            if (elapsed < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [display, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
