"use client";

import { useEffect, useState } from "react";

type Item = { label: string; hint: string; href: string };

const items: Item[] = [
  { label: "Ir al inicio", hint: "Hero", href: "#" },
  { label: "Manifiesto", hint: "Filosofía", href: "#manifesto" },
  { label: "Proyectos", hint: "Trabajo seleccionado", href: "#work" },
  { label: "Stack", hint: "Herramientas", href: "#stack" },
  { label: "Contacto", hint: "Email · LinkedIn · GitHub", href: "#contact" },
  { label: "Enviar email", hint: "mailto", href: "mailto:javiergonzalez030897@gmail.com" },
  { label: "GitHub", hint: "Externo", href: "https://github.com/javiergonzalez-ctrl" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
    }
  }, [open]);

  const filtered = items.filter(
    (it) =>
      it.label.toLowerCase().includes(query.toLowerCase()) ||
      it.hint.toLowerCase().includes(query.toLowerCase())
  );

  const go = (it: Item) => {
    setOpen(false);
    if (it.href.startsWith("http") || it.href.startsWith("mailto")) {
      window.open(it.href, "_blank", "noopener,noreferrer");
    } else if (it.href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.querySelector(it.href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Paleta de comandos"
      onClick={() => setOpen(false)}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 300,
        background: "rgba(11, 18, 36, 0.55)",
        backdropFilter: "blur(8px) saturate(160%)",
        WebkitBackdropFilter: "blur(8px) saturate(160%)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "20vh",
        animation: "fadeIn 0.18s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(560px, 92vw)",
          background: "rgba(255,255,255,0.96)",
          border: "1px solid rgba(15,16,19,0.08)",
          borderRadius: 16,
          boxShadow:
            "0 1px 0 rgba(255,255,255,0.7) inset, 0 24px 60px rgba(15, 16, 19, 0.18), 0 50px 120px rgba(15, 16, 19, 0.12)",
          overflow: "hidden",
          animation: "popIn 0.22s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "14px 18px",
            borderBottom: "1px solid var(--gray-100)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--gray-400)" }}>
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            autoFocus
            type="text"
            placeholder="Saltar a sección, abrir contacto…"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActive((a) => Math.min(filtered.length - 1, a + 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActive((a) => Math.max(0, a - 1));
              } else if (e.key === "Enter" && filtered[active]) {
                e.preventDefault();
                go(filtered[active]);
              }
            }}
            style={{
              flex: 1,
              background: "transparent",
              border: 0,
              outline: 0,
              fontSize: 15,
              color: "var(--ink)",
              fontFamily: "inherit",
            }}
          />
          <kbd
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 10.5,
              padding: "3px 7px",
              borderRadius: 6,
              border: "1px solid var(--gray-200)",
              background: "var(--paper-warm)",
              color: "var(--gray-500)",
              letterSpacing: 0.04,
            }}
          >
            ESC
          </kbd>
        </div>

        <div style={{ maxHeight: 360, overflow: "auto", padding: 6 }}>
          {filtered.length === 0 ? (
            <div style={{ padding: 32, textAlign: "center", color: "var(--gray-400)", fontSize: 13.5 }}>
              Nada por aquí.
            </div>
          ) : (
            filtered.map((it, i) => (
              <button
                key={it.href}
                onClick={() => go(it)}
                onMouseEnter={() => setActive(i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  padding: "11px 14px",
                  background: active === i ? "var(--paper-warm)" : "transparent",
                  border: 0,
                  borderRadius: 10,
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background 0.12s ease",
                }}
              >
                <span style={{ fontSize: 14, color: "var(--ink)", fontWeight: 500 }}>{it.label}</span>
                <span style={{ fontSize: 11.5, fontFamily: "var(--font-mono), monospace", color: "var(--gray-400)" }}>
                  {it.hint}
                </span>
              </button>
            ))
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 16px",
            borderTop: "1px solid var(--gray-100)",
            background: "var(--paper-warm)",
            fontFamily: "var(--font-mono), monospace",
            fontSize: 10.5,
            color: "var(--gray-500)",
          }}
        >
          <span>↑ ↓ navegar · ↵ abrir</span>
          <span>⌘K</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popIn {
          from { opacity: 0; transform: translateY(-8px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
