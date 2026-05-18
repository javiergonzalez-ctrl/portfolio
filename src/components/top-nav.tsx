"use client";

import { useEffect, useState } from "react";

export function TopNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 280);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <nav className={`nav-floating${visible ? " is-visible" : ""}`} aria-label="Navegación principal">
      <a href="#work" className="nav-link">Proyectos</a>
      <a href="#stack" className="nav-link">Stack</a>
      <a href="#contact" className="nav-cta">Contacto</a>
    </nav>
  );
}
