"use client";

import { useEffect, useState } from "react";

/* MobileDock — bottom-anchored chip nav for mobile.
   Appears after scrolling past hero, smooth scroll on tap.
   Hidden on desktop (handled by SectionNav + TopNav there). */

const items = [
  { id: "work", label: "Trabajo" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contacto" },
];

export function MobileDock() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 320);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <nav
      aria-label="Navegación móvil"
      className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-[85]"
      style={{
        transform: `translateX(-50%) translateY(${visible ? "0" : "120%"})`,
        opacity: visible ? 1 : 0,
        transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease",
      }}
    >
      <div
        className="flex items-center gap-1 px-1.5 py-1.5 rounded-full"
        style={{
          background: "rgba(15, 16, 19, 0.92)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          boxShadow:
            "0 1px 0 rgba(255,255,255,0.04) inset, 0 8px 24px rgba(15, 16, 19, 0.18), 0 24px 56px rgba(15, 16, 19, 0.14)",
        }}
      >
        {items.map((it) => (
          <button
            key={it.id}
            onClick={() => {
              const el = document.getElementById(it.id);
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="px-3 py-2 rounded-full text-[12.5px] font-medium text-white/75 hover:text-white hover:bg-white/8 active:bg-white/12 transition-colors cursor-pointer"
            data-cursor="hover"
          >
            {it.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
