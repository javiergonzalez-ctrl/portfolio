import Link from "next/link";

export default function NotFound() {
  return (
    <main className="hero-canvas relative flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center">
      <div className="hero-grain" />
      <div className="relative z-10 max-w-2xl">
        <div className="text-[11.5px] font-mono uppercase tracking-[0.22em] text-white/45 mb-8">
          Error · 404
        </div>
        <h1 className="text-[clamp(3rem,9vw,7rem)] font-bold leading-[0.92] tracking-[-0.045em] text-white">
          Esta página
          <br />
          <span className="font-display italic">no existe.</span>
        </h1>
        <p className="mt-10 mx-auto max-w-md text-[1.05rem] leading-[1.6] text-white/65">
          Probablemente la borré, la moví, o nunca llegó a existir. Cualquiera de las tres es bastante posible.
        </p>
        <div className="mt-12 flex items-center justify-center gap-3">
          <Link href="/" className="btn-primary on-dark">
            Volver al inicio
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M11 7H3m0 0l3.5-3.5M3 7l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <a href="mailto:javiergonzalez030897@gmail.com" className="btn-ghost on-dark">
            Avísame por mail
          </a>
        </div>
      </div>
    </main>
  );
}
