import { Reveal } from "@/components/fade-in";
import { MockDashboard } from "@/components/mocks/mock-dashboard";
import { MockTerminal } from "@/components/mocks/mock-terminal";
import { MockPipeline } from "@/components/mocks/mock-pipeline";
import { MockCohort } from "@/components/mocks/mock-cohort";
import { MockGrowth } from "@/components/mocks/mock-growth";
import { MockBanking } from "@/components/mocks/mock-banking";
import { MockChat } from "@/components/mocks/mock-chat";
import { CountUp } from "@/components/count-up";
import { MagneticButton } from "@/components/magnetic-button";
import { HeroName } from "@/components/hero-name";
import { StackGrid } from "@/components/stack-grid";
import { Sigil } from "@/components/sigil";
import { LastPush } from "@/components/last-push";

/* ================================================================
   PROJECT DATA — jargon-free, universal
   ================================================================ */

type Project = {
  id: string;
  title: string;
  pitch: string;
  outcome?: string;
  stack: string[];
  year?: string;
  status?: "Producción" | "En desarrollo" | "Personal";
};

const platform: Project[] = [
  {
    id: "internal-platform",
    title: "Plataforma interna",
    pitch:
      "ERP a medida sobre el que opera una fintech europea. Diez módulos en producción — tesorería, operaciones, growth, contratos, conciliación, datos — conectados a una base de datos en vivo.",
    outcome: "Una persona, diez módulos, cero downtime en seis meses.",
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "BigQuery", "Recharts", "Vercel"],
    year: "2024 — hoy",
    status: "Producción",
  },
  {
    id: "growth-modules",
    title: "Dashboards de growth",
    pitch:
      "Cuatro dashboards dispersos del equipo unificados en uno solo. Cada métrica con su origen documentado para que nadie tenga que adivinar de dónde sale el número.",
    stack: ["Next.js", "BigQuery", "Recharts"],
    status: "Producción",
  },
  {
    id: "obligations",
    title: "Detección de obligaciones",
    pitch:
      "Detecta automáticamente qué clientes activan una obligación de pago cada mes a partir de datos externos. Reemplazó un cálculo manual semanal por una vista actualizada al minuto.",
    outcome: "De 11 casos detectados a mano a 215 al mes detectados solos.",
    stack: ["PostgreSQL", "TypeScript", "Materialized views"],
    status: "Producción",
  },
  {
    id: "default-system",
    title: "Tablero de incidencias",
    pitch:
      "Lista clientes con incidencias activas, los segmenta por antigüedad y dispara emails automáticos parametrizados por tipo de incidencia.",
    stack: ["PostgreSQL", "Gmail API", "Next.js"],
    status: "Producción",
  },
];

const automations: Project[] = [
  {
    id: "onboarding-pipeline",
    title: "Pipeline de onboarding contable",
    pitch:
      "Cuando entra un cliente nuevo, los pasos contables que antes se hacían a mano corren solos: clasificación interna, creación de cuentas, asientos. Sobre tres entidades distintas, con 162 tests en verde.",
    outcome: "30 segundos automáticos contra 20 minutos manuales por alta.",
    stack: ["TypeScript", "PostgreSQL", "REST APIs"],
    year: "2026",
    status: "Producción",
  },
  {
    id: "banking-sync",
    title: "Sincronización bancaria multi-entidad",
    pitch:
      "Tres cuentas bancarias en distintas entidades unificadas en una sola fuente de verdad. Saldos en vivo, comisiones calculadas por transacción, separación entre disponible y reservado.",
    stack: ["Revolut Business API", "OAuth", "PostgreSQL"],
    status: "Producción",
  },
  {
    id: "contracts-engine",
    title: "Motor de contratos automáticos",
    pitch:
      "Pre-rellena dieciséis campos contractuales con los datos del cliente y dispara la firma electrónica. Ocho tipos de contrato distintos servidos desde un solo flujo.",
    stack: ["PandaDoc API", "Next.js"],
    status: "Producción",
  },
  {
    id: "recurring-invoicing",
    title: "Facturación recurrente",
    pitch:
      "Genera la factura mensual a cuatro partners, calcula comisiones por entidad y registra la contabilidad. Si algo cambia, anula con líneas negativas y reposta. 15 tests en verde.",
    stack: ["REST APIs", "TypeScript", "Jest"],
    status: "En desarrollo",
  },
  {
    id: "transfers-module",
    title: "Excel → transferencias bancarias",
    pitch:
      "Subes un Excel con la lista de pagos. El sistema valida cuentas, resuelve referencias contra 99 partners cacheados y ejecuta las transferencias contra la API del banco.",
    outcome: "Una mañana de trabajo manual reducida a cinco minutos.",
    stack: ["Next.js", "Revolut Business API"],
    status: "En desarrollo",
  },
  {
    id: "treasury-cron",
    title: "Sincronización de tesorería diaria",
    pitch:
      "Lee saldos bancarios, calcula posiciones de tesorería y publica el resultado dos veces al día. Auto-restaura el último estado si el archivo se corrompe.",
    stack: ["Python", "cron", "Sheets API"],
    status: "Producción",
  },
  {
    id: "session-replay",
    title: "Automatización vía sesión navegador",
    pitch:
      "Cuando una herramienta no expone una API pública, importo las cookies de mi propia sesión de Chrome y replico el flujo desde el servidor. Resultado: cualquier portal web se comporta como una API personal, sin esperar a que el proveedor lo habilite.",
    outcome: "Convierto cualquier herramienta interna en algo automatizable.",
    stack: ["Python", "Playwright", "Chrome cookies", "requests"],
    status: "Producción",
  },
];

const dataPipelines: Project[] = [
  {
    id: "bp-engine",
    title: "Motor del business plan",
    pitch:
      "Siete libros de Excel interconectados reescritos como un motor en Python. Proyecciones parametrizadas por fecha — curvas salariales, garantías, P&L por cohorte. Verificado celda a celda contra el modelo original.",
    outcome: "100 % de coincidencia celda a celda contra el manual.",
    stack: ["Python", "openpyxl", "pandas", "PostgreSQL", "NumPy"],
    year: "2025",
    status: "Producción",
  },
  {
    id: "data-bank",
    title: "Generador de exports a la carta",
    pitch:
      "Frontend en Next.js, backend en Python sobre una VM cloud. El usuario configura filtros y el sistema devuelve un Excel multi-hoja con fórmulas, joins entre dos bases distintas y campos computados.",
    stack: ["Flask", "Next.js", "PostgreSQL", "BigQuery", "openpyxl"],
    status: "Producción",
  },
  {
    id: "reconciliation",
    title: "Conciliación financiera automatizada",
    pitch:
      "Loguea con doble factor en un portal externo, exporta los datos, los cruza contra los registros internos y marca cada discrepancia.",
    outcome: "Match rate del 99,4 %.",
    stack: ["Python", "Selenium", "BigQuery", "Gmail API"],
    status: "Producción",
  },
];

const personal: Project[] = [
  {
    id: "daily-monitor",
    title: "Monitor diario de cartera",
    pitch:
      "Cron que cada mañana lee mi cartera de inversión, cruza con cotizaciones en vivo, detecta triggers técnicos o de earnings y dispara alertas a Telegram. P&L histórico integrado.",
    stack: ["Python", "IBKR Flex", "yfinance", "Telegram Bot", "VM cloud"],
    status: "Personal",
  },
  {
    id: "whatsapp-extractor",
    title: "Extractor + playbook de WhatsApp",
    pitch:
      "Extraigo conversaciones de WhatsApp a granel, clasifico cada lead en caliente y genero el siguiente mensaje del playbook automáticamente. Lo uso para mi propio funnel.",
    stack: ["Python", "ADB", "Clasificación ML"],
    status: "Personal",
  },
];

/* ================================================================
   PERSONALIZATION — URL param ?to=
   ================================================================ */

type Recipient = {
  name: string;
  source: string; // where the name was extracted from
  wink: string;   // playful line for the P.S.
} | null;

const RECIPIENTS: Record<string, Recipient> = {
  gerard: {
    name: "Gerard",
    source: "spicy4tuna.com",
    wink:
      "P.S.: esta página la monté en tres horas con Claude. El “Para Gerard” de arriba lo detecta la propia URL.",
  },
  euge: {
    name: "Euge",
    source: "spicy4tuna.com",
    wink:
      "P.S.: esta página la monté en tres horas con Claude. Tu nombre lo detecta la URL automáticamente.",
  },
  alvaro: {
    name: "Álvaro",
    source: "spicy4tuna.com",
    wink:
      "P.S.: esta página la monté en tres horas con Claude. Tu nombre lo detecta la URL automáticamente.",
  },
  marc: {
    name: "Marc",
    source: "spicy4tuna.com",
    wink:
      "P.S.: esta página la monté en tres horas con Claude. Tu nombre lo detecta la URL automáticamente.",
  },
  willy: {
    name: "Willy",
    source: "spicy4tuna.com",
    wink:
      "P.S.: esta página la monté en tres horas con Claude. Tu nombre lo detecta la URL automáticamente.",
  },
};

function resolveRecipient(raw?: string | string[]): Recipient {
  if (!raw) return null;
  const key = (Array.isArray(raw) ? raw[0] : raw).toLowerCase().trim();
  if (key in RECIPIENTS) return RECIPIENTS[key];
  // Generic fallback — accept any first name passed via URL
  const safe = key.replace(/[^a-záéíóúñ]/gi, "").slice(0, 24);
  if (!safe) return null;
  const display = safe.charAt(0).toUpperCase() + safe.slice(1);
  return {
    name: display,
    source: "tu propia página",
    wink:
      "P.S.: ese nombre arriba lo cogí del parámetro de la URL. Si te ha llegado este link, ya sabes quién lo personalizó.",
  };
}

/* ================================================================
   PAGE
   ================================================================ */

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ to?: string | string[] }>;
}) {
  const params = await searchParams;
  const recipient = resolveRecipient(params.to);
  return (
    <main className="overflow-x-hidden">
      <Hero recipient={recipient} />
      <Manifesto />
      <FeaturedProject />
      <ProjectCategory
        sectionId="platform"
        eyebrowNum="02"
        eyebrow="Plataforma"
        title={<>El producto interno&mdash; <span className="font-display">la pantalla que el equipo abre cada mañana</span></>}
        projects={platform.slice(1)}
        leads={[{ id: "growth-modules", visual: "growth" }]}
      />
      <ProjectCategory
        sectionId="automatizacion"
        eyebrowNum="03"
        eyebrow="Automatización"
        title={<>Procesos que <span className="font-display">corren solos</span></>}
        projects={automations}
        leads={[
          { id: "onboarding-pipeline", visual: "pipeline" },
          { id: "banking-sync", visual: "banking" },
        ]}
      />
      <ProjectCategory
        sectionId="datos"
        eyebrowNum="04"
        eyebrow="Datos &amp; pipelines"
        title={<>Datos que <span className="font-display">se sostienen sin Excel</span></>}
        projects={dataPipelines}
        leads={[{ id: "bp-engine", visual: "cohort" }]}
      />
      <ProjectCategory
        sectionId="personal"
        eyebrowNum="05"
        eyebrow="Personal"
        title={<>Lo que construyo <span className="font-display">por mi cuenta</span></>}
        projects={personal}
        leads={[
          { id: "daily-monitor", visual: "terminal" },
          { id: "whatsapp-extractor", visual: "chat" },
        ]}
      />
      <StackSection />
      <Contact recipient={recipient} />
      <Footer />
    </main>
  );
}

/* ================================================================
   PERSONAL NOTE — appears between hero and timeline when recipient set
   ================================================================ */

function PersonalNote({ recipient }: { recipient: NonNullable<Recipient> }) {
  return (
    <section className="px-6 py-12 sm:py-16 bg-[var(--color-paper)] border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-start gap-4">
          <div className="shrink-0 mt-1">
            <Sigil size={36} variant="ink" />
          </div>
          <div>
            <div className="text-[10.5px] font-mono uppercase tracking-[0.18em] text-[var(--color-gray-500)] mb-2">
              Para {recipient.name}
            </div>
            <p className="text-[clamp(1.1rem,1.65vw,1.4rem)] leading-[1.45] text-[var(--color-ink)]">
              Catorce productos en producción en <span className="font-display">tres meses</span>. Esta página, en <span className="font-display">tres horas</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   HERO — magazine cover treatment
   ================================================================ */

function Hero({ recipient }: { recipient: Recipient }) {
  return (
    <section className="hero-canvas relative flex min-h-[100dvh] flex-col px-6 sm:px-10">
      <div className="hero-grain" />

      {/* Top meta line */}
      <div className="relative z-10 pt-8 sm:pt-10 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.22em] text-white/45">
        <div className="flex items-center gap-3">
          <Sigil size={28} variant="paper" />
          <span>Madrid · España</span>
        </div>
        <span className="hidden sm:inline">
          {recipient ? (
            <>
              <span className="text-white/70">Para {recipient.name}</span>
              <span className="mx-2 text-white/30">·</span>
              <span>en concreto</span>
            </>
          ) : (
            <>Portfolio · 2026</>
          )}
        </span>
      </div>

      {/* Center — name + tagline */}
      <div className="relative z-10 flex-1 flex flex-col justify-center mx-auto w-full max-w-6xl py-16">
        <HeroName />

        <p
          className="mt-12 max-w-2xl text-[clamp(1.15rem,1.65vw,1.45rem)] leading-[1.5] text-white/70 animate-hero-fade"
          style={{ animationDelay: "0.55s" }}
        >
          Diseño y construyo el software interno de una fintech europea.{" "}
          <span className="text-white">Catorce productos en producción. Tres meses. Una persona.</span>
        </p>

        <div
          className="mt-12 flex flex-wrap items-center gap-3 animate-hero-fade"
          style={{ animationDelay: "0.75s" }}
        >
          <MagneticButton>
            <a href="#work" className="btn-primary on-dark">
              Ver proyectos
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 3v8m0 0L3.5 7.5M7 11l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </MagneticButton>
          <MagneticButton>
            <a href="#contact" className="btn-ghost on-dark">
              Contacto
            </a>
          </MagneticButton>
        </div>
      </div>

      {/* Bottom meta strip */}
      <div className="relative z-10 pb-8 sm:pb-10 flex items-end justify-between text-[11px] font-mono uppercase tracking-[0.18em] text-white/40">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6BC0AD] animate-pulse" />
          <span>Disponible para colaboraciones</span>
        </div>
        <div className="hidden md:flex items-center gap-3 text-white/35">
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <LastPush />
        </div>
        <span className="hidden sm:inline">↓ scroll</span>
      </div>
    </section>
  );
}

/* ================================================================
   MANIFESTO — pull quote moment
   ================================================================ */

/* ================================================================
   TIMELINE — narrative arc Marzo → Hoy
   ================================================================ */

function Timeline() {
  const milestones = [
    {
      when: "Marzo 2026",
      what: "Primera línea",
      detail:
        "Cero código en GitHub. Industrial engineer trabajando con Excel y procesos manuales en una fintech europea.",
      tone: "navy" as const,
    },
    {
      when: "Abril 2026",
      what: "El equipo entra",
      detail:
        "Primera versión del dashboard interno desplegado. La empresa empieza a abrirlo cada mañana.",
      tone: "amber" as const,
    },
    {
      when: "Mayo 2026",
      what: "Sale solo",
      detail:
        "Catorce productos en producción. Pipeline contable automático. Agentes que postean asientos por la noche.",
      tone: "teal" as const,
    },
    {
      when: "Hoy",
      what: "Disponible",
      detail:
        "Abierto a conversaciones sobre construir algo parecido para otra empresa.",
      tone: "coral" as const,
    },
  ];

  return (
    <section className="px-6 py-24 sm:py-32 border-b border-[var(--color-border)]" aria-label="Historia">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-center gap-3 mb-10">
            <span className="section-num">00</span>
            <span className="eyebrow">Historia corta</span>
            <span className="flex-1 h-px bg-[var(--color-border)]" />
          </div>
          <h2 className="max-w-4xl text-[clamp(1.85rem,3.8vw,2.85rem)] font-bold leading-[1.1] tracking-[-0.03em] text-[var(--color-ink)] mb-14 sm:mb-20">
            De <span className="font-display">cero líneas</span> a catorce productos en producción, en setenta y cinco días.
          </h2>
        </Reveal>

        <Reveal delay={1}>
          <ol className="relative grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-y-0 md:gap-x-6">
            <div className="hidden md:block absolute top-[18px] left-0 right-0 h-px bg-[var(--color-border)]" />
            {milestones.map((m, i) => {
              const color =
                m.tone === "teal" ? "var(--color-teal-deep)"
                : m.tone === "amber" ? "#B68B22"
                : m.tone === "coral" ? "#B84830"
                : "var(--color-navy)";
              return (
                <li key={m.when} className="relative pt-10">
                  <span
                    className="absolute top-3 left-0 w-3 h-3 rounded-full ring-4"
                    style={{ background: color, boxShadow: `0 0 0 4px var(--color-paper)`, ["--tw-ring-color" as string]: "var(--color-paper)" }}
                  />
                  <div className="text-[10.5px] font-mono uppercase tracking-[0.14em] text-[var(--color-gray-500)]">
                    {String(i + 1).padStart(2, "0")} · {m.when}
                  </div>
                  <div className="mt-2 text-[20px] font-semibold leading-tight tracking-[-0.02em] text-[var(--color-ink)]">
                    {m.what}
                  </div>
                  <p className="mt-3 text-[14px] leading-[1.6] text-[var(--color-gray-600)] max-w-xs">
                    {m.detail}
                  </p>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section id="manifesto" className="px-6 py-28 sm:py-40 bg-[var(--color-paper)]">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="flex items-center gap-3 mb-12">
            <span className="section-num">·</span>
            <span className="eyebrow">Manifiesto</span>
            <span className="flex-1 h-px bg-[var(--color-border)]" />
          </div>
          <p className="text-[clamp(1.8rem,4.5vw,3.6rem)] leading-[1.15] tracking-[-0.025em] text-[var(--color-ink)]">
            Hay un proceso que tu equipo repite cada semana <span className="font-display">sin pensarlo.</span>
            Mi trabajo es identificarlo y construir el sistema que lo reemplaza.
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 pt-12 border-t border-[var(--color-border)]">
            <StatBlock num="3" label="Meses programando" />
            <StatBlock num="14" label="Productos en producción" />
            <StatBlock num="100 %" label="Exactitud contra Excel" />
            <StatBlock num="10+" label="Servicios integrados" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StatBlock({ num, label }: { num: string; label: string }) {
  return (
    <div>
      <div className="metric-num display text-[clamp(2.75rem,5.5vw,4.5rem)] text-[var(--color-ink)]">
        <CountUp display={num} />
      </div>
      <div className="mt-2 text-[11.5px] font-mono uppercase tracking-[0.14em] text-[var(--color-gray-500)] leading-[1.4]">
        {label}
      </div>
    </div>
  );
}

/* ================================================================
   FEATURED PROJECT
   ================================================================ */

function FeaturedProject() {
  const p = platform[0];
  return (
    <section id="work" className="px-6 pt-24 sm:pt-32 pb-24 sm:pb-32 border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-center gap-3 mb-10">
            <span className="section-num">01</span>
            <span className="eyebrow">Proyecto destacado</span>
            <span className="flex-1 h-px bg-[var(--color-border)]" />
            <span className="text-[11.5px] font-mono uppercase tracking-[0.14em] text-[var(--color-gray-500)]">{p.year}</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-14 lg:gap-x-14 items-start">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.04] tracking-[-0.035em] text-ink">
              {p.title}
            </h2>
            <p className="mt-6 text-[1.05rem] leading-[1.7] text-[var(--color-gray-600)]">
              {p.pitch}
            </p>
            {p.outcome && (
              <p className="quote-rule mt-7 text-[1.05rem] leading-[1.55] text-ink font-medium">
                {p.outcome}
              </p>
            )}
            <div className="mt-7 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="pill">{s}</span>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3 text-[11.5px] font-mono uppercase tracking-[0.14em] text-[var(--color-gray-500)]">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-teal-deep)]" />
                {p.status}
              </span>
              <span>·</span>
              <span>Construido en solitario</span>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={1}>
            <MockDashboard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   CATEGORY
   ================================================================ */

type VisualKey = "pipeline" | "cohort" | "terminal" | "growth" | "banking" | "chat";

function VisualByKey({ visual }: { visual: VisualKey }) {
  if (visual === "pipeline") return <MockPipeline />;
  if (visual === "cohort") return <MockCohort />;
  if (visual === "terminal") return <MockTerminal />;
  if (visual === "growth") return <MockGrowth />;
  if (visual === "banking") return <MockBanking />;
  if (visual === "chat") return <MockChat />;
  return null;
}

function ProjectCategory({
  sectionId,
  eyebrowNum,
  eyebrow,
  title,
  projects,
  leads = [],
}: {
  sectionId?: string;
  eyebrowNum: string;
  eyebrow: string;
  title: React.ReactNode;
  projects: Project[];
  leads?: { id: string; visual: VisualKey }[];
}) {
  const leadIds = new Set(leads.map((l) => l.id));
  const rest = projects.filter((p) => !leadIds.has(p.id));

  return (
    <section id={sectionId} className="px-6 pt-24 sm:pt-32 pb-16 sm:pb-24 border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-center gap-3 mb-10">
            <span className="section-num">{eyebrowNum}</span>
            <span className="eyebrow">{eyebrow}</span>
            <span className="flex-1 h-px bg-[var(--color-border)]" />
          </div>
          <h2 className="max-w-3xl text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em] text-[var(--color-ink)] mb-12 sm:mb-16">
            {title}
          </h2>
        </Reveal>

        {leads.map((lead, idx) => {
          const project = projects.find((p) => p.id === lead.id);
          if (!project) return null;
          const flipped = idx % 2 === 1;
          return (
            <div
              key={lead.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-14 items-start mb-16 sm:mb-20 ${flipped ? "lg:[direction:rtl]" : ""}`}
            >
              <Reveal className={`lg:col-span-5 ${flipped ? "lg:[direction:ltr]" : ""}`}>
                <ProjectInline project={project} />
              </Reveal>
              <Reveal className={`lg:col-span-7 ${flipped ? "lg:[direction:ltr]" : ""}`} delay={1}>
                <VisualByKey visual={lead.visual} />
              </Reveal>
            </div>
          );
        })}

        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {rest.map((p, i) => (
              <Reveal key={p.id} delay={((i % 2) + 1) as 1 | 2}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectInline({ project }: { project: Project }) {
  return (
    <div>
      <h3 className="text-[clamp(1.5rem,2.5vw,2rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-ink">
        {project.title}
      </h3>
      <p className="mt-4 text-[1rem] leading-[1.7] text-[var(--color-gray-600)]">
        {project.pitch}
      </p>
      {project.outcome && (
        <p className="quote-rule mt-5 text-[0.98rem] leading-[1.55] text-ink font-medium">
          {project.outcome}
        </p>
      )}
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span key={s} className="pill">{s}</span>
        ))}
      </div>
      {project.status && (
        <div className="mt-5 flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.14em] text-[var(--color-gray-500)]">
          <span className="w-1.5 h-1.5 rounded-full" style={{
            background: project.status === "Personal" ? "var(--color-amber)"
              : project.status === "En desarrollo" ? "var(--color-coral)"
              : "var(--color-teal-deep)",
          }} />
          {project.status}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-paper p-6 sm:p-7 h-full flex flex-col">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-[1.25rem] font-semibold leading-[1.2] tracking-[-0.02em] text-ink">
          {project.title}
        </h3>
        {project.status && (
          <span className="shrink-0 text-[10.5px] font-mono uppercase tracking-[0.12em] text-[var(--color-gray-500)] inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full" style={{
              background: project.status === "Personal" ? "var(--color-amber)"
                : project.status === "En desarrollo" ? "var(--color-coral)"
                : "var(--color-teal-deep)",
            }} />
            {project.status}
          </span>
        )}
      </div>
      <p className="mt-3 text-[0.95rem] leading-[1.65] text-[var(--color-gray-600)] flex-1">
        {project.pitch}
      </p>
      {project.outcome && (
        <p className="quote-rule mt-4 text-[0.95rem] leading-[1.55] text-ink font-medium">
          {project.outcome}
        </p>
      )}
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span key={s} className="pill">{s}</span>
        ))}
      </div>
    </article>
  );
}

/* ================================================================
   STACK
   ================================================================ */

function StackSection() {
  const legend = [
    { label: "Frontend", color: "var(--color-teal-deep)" },
    { label: "Backend", color: "#2D4A7A" },
    { label: "Data", color: "#B68B22" },
    { label: "Infra & APIs", color: "#B84830" },
  ];

  return (
    <section id="stack" className="px-6 pt-24 sm:pt-32 pb-24 sm:pb-32 border-t border-[var(--color-border)] bg-[var(--color-paper-warm)]">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-center gap-3 mb-10">
            <span className="section-num">06</span>
            <span className="eyebrow">Stack</span>
            <span className="flex-1 h-px bg-[var(--color-border)]" />
          </div>
          <h2 className="max-w-3xl text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em] text-[var(--color-ink)] mb-8">
            Herramientas con las que <span className="font-display">trabajo a diario</span>
          </h2>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-12 sm:mb-14">
            {legend.map((l) => (
              <div key={l.label} className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.14em] text-[var(--color-gray-500)]">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: l.color }} />
                {l.label}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={1}>
          <StackGrid />
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================
   CONTACT — minimal, no pitch
   ================================================================ */

function Contact({ recipient }: { recipient: Recipient }) {
  return (
    <section id="contact" className="px-6 py-28 sm:py-36 border-t border-[var(--color-border)] bg-[var(--color-paper)]">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="flex items-center gap-3 mb-12">
            <span className="section-num">07</span>
            <span className="eyebrow">Contacto</span>
            <span className="flex-1 h-px bg-[var(--color-border)]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <p className="text-[clamp(1.65rem,3.5vw,2.6rem)] leading-[1.2] tracking-[-0.025em] text-[var(--color-ink)]">
                Si tienes un Excel que abres <span className="font-display">cada semana</span>, probablemente se puede automatizar.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="space-y-4">
                <ContactRow label="Email" value="javiergonzalez030897@gmail.com" href="mailto:javiergonzalez030897@gmail.com" />
                <ContactRow label="GitHub" value="javiergonzalez-ctrl" href="https://github.com/javiergonzalez-ctrl" />
              </div>
            </div>
          </div>

          {recipient && (
            <div className="mt-16 pt-10 border-t border-[var(--color-border)] grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 flex items-start gap-4">
                <span className="font-display italic text-[28px] text-[var(--color-teal-deep)] leading-none mt-1">P.S.</span>
                <p className="text-[15px] leading-[1.65] text-[var(--color-gray-600)]">
                  {recipient.wink}
                </p>
              </div>
              <div className="lg:col-span-5 lg:text-right">
                <div className="text-[10.5px] font-mono uppercase tracking-[0.16em] text-[var(--color-gray-500)] mb-2">
                  Fuente del nombre
                </div>
                <div className="text-[13.5px] font-mono text-[var(--color-ink)]">
                  {recipient.source}
                </div>
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between py-3.5 border-b border-[var(--color-border)] hover:border-[var(--color-ink)] transition-colors"
    >
      <span className="text-[11.5px] font-mono uppercase tracking-[0.16em] text-[var(--color-gray-500)] group-hover:text-ink transition-colors">
        {label}
      </span>
      <span className="text-[15px] text-ink flex items-center gap-2">
        <span>{value}</span>
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="opacity-30 group-hover:opacity-90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
          <path d="M4 9L9 4M9 4H5M9 4v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </a>
  );
}

/* ================================================================
   FOOTER
   ================================================================ */

function Footer() {
  return (
    <footer className="bg-[#080C18] text-white/60">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        {/* Top: name + meta */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-5">
            <div className="text-[28px] font-bold leading-[1.05] tracking-[-0.025em] text-white">
              Javier González
              <br />
              <span className="font-display italic">Álvarez</span>
            </div>
            <p className="mt-5 text-[13.5px] leading-[1.6] text-white/55 max-w-sm">
              Ingeniero industrial trabajando en una fintech europea. Disponible para colaboraciones puntuales.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10.5px] font-mono uppercase tracking-[0.16em] text-white/35 mb-4">
              Navegación
            </div>
            <ul className="space-y-2.5 text-[13.5px] text-white/65">
              <li><a href="#manifesto" className="hover:text-white transition-colors">Manifiesto</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Proyecto destacado</a></li>
              <li><a href="#automatizacion" className="hover:text-white transition-colors">Automatización</a></li>
              <li><a href="#datos" className="hover:text-white transition-colors">Datos & pipelines</a></li>
              <li><a href="#stack" className="hover:text-white transition-colors">Stack</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10.5px] font-mono uppercase tracking-[0.16em] text-white/35 mb-4">
              Contacto directo
            </div>
            <ul className="space-y-2.5 text-[13.5px]">
              <li>
                <a href="mailto:javiergonzalez030897@gmail.com" className="text-white/65 hover:text-white transition-colors inline-flex items-center gap-1.5 group">
                  <span>javiergonzalez030897@gmail.com</span>
                  <svg width="11" height="11" viewBox="0 0 13 13" fill="none" className="opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all">
                    <path d="M4 9L9 4M9 4H5M9 4v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://github.com/javiergonzalez-ctrl" target="_blank" rel="noopener noreferrer" className="text-white/65 hover:text-white transition-colors inline-flex items-center gap-1.5 group">
                  <span>GitHub</span>
                  <svg width="11" height="11" viewBox="0 0 13 13" fill="none" className="opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all">
                    <path d="M4 9L9 4M9 4H5M9 4v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="pt-6 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11.5px] font-mono text-white/40">
          <div className="flex items-center gap-3 flex-wrap">
            <span>© {new Date().getFullYear()} Javier González Álvarez</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6BC0AD] animate-pulse" />
              Madrid · España
            </span>
          </div>
          <div className="flex items-center gap-3 flex-wrap text-white/35">
            <span>Built with Next.js + Vercel</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>v6 · 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
