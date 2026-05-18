"use client";

import { useEffect, useState } from "react";

/* SectionNav — fixed right-side vertical dot navigation.
   Shows scroll position via active dot, labels appear on hover, click smooth-scrolls. */

const sections = [
  { id: "top", label: "Inicio" },
  { id: "manifesto", label: "Manifiesto" },
  { id: "work", label: "Plataforma interna" },
  { id: "automatizacion", label: "Automatización" },
  { id: "datos", label: "Datos" },
  { id: "personal", label: "Personal" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contacto" },
];

export function SectionNav() {
  const [active, setActive] = useState("top");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(true);
    if (reduced) return;

    const update = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let current = "top";
      for (const s of sections) {
        const el = s.id === "top" ? document.body : document.getElementById(s.id);
        if (!el) continue;
        const top = s.id === "top" ? 0 : el.getBoundingClientRect().top + window.scrollY;
        if (y >= top) current = s.id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const go = (id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!enabled) return null;

  return (
    <nav
      aria-label="Navegación por secciones"
      className="hidden md:flex fixed right-6 lg:right-9 top-1/2 -translate-y-1/2 z-[80] flex-col gap-3"
    >
      {sections.map((s) => {
        const isActive = active === s.id;
        return (
          <button
            key={s.id}
            onClick={() => go(s.id)}
            aria-label={`Ir a ${s.label}`}
            className="group relative flex items-center justify-end h-5 cursor-pointer"
            data-cursor="hover"
          >
            <span
              className="absolute right-6 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-[var(--color-ink)] text-white text-[11px] font-mono tracking-[0.04em] whitespace-nowrap opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none"
              style={{ boxShadow: "0 4px 14px rgba(15, 16, 19, 0.18)" }}
            >
              {s.label}
            </span>
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: isActive ? 22 : 6,
                height: 6,
                background: isActive ? "var(--color-ink)" : "rgba(15, 16, 19, 0.25)",
              }}
            />
          </button>
        );
      })}
    </nav>
  );
}
