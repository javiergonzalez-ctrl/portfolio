import { BrowserFrame } from "@/components/browser-frame";
import { Reveal } from "@/components/fade-in";

/* ================================================================
   DATA
   ================================================================ */

const projects = [
  {
    id: "erp",
    label: "Internal Platform",
    title: "Company Internal\nERP + BI",
    description:
      "Full-stack internal platform for a fintech company. Partner analytics, operational dashboards, financial calculators, and growth reporting — all connected to a live PostgreSQL database.",
    metrics: [
      { value: "10+", label: "Modules" },
      { value: "Live", label: "Postgres data" },
      { value: "6", label: "Dashboard tabs" },
      { value: "Full-stack", label: "Next.js + API" },
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "PostgreSQL", "Recharts"],
    images: [
      { src: "/projects/partners-v2.png", alt: "Activity heatmap and time analytics", url: "internal-platform/partners/time" },
      { src: "/projects/inflows-v2.png", alt: "Demographics and geographic distribution", url: "internal-platform/partners/students" },
    ],
  },
  {
    id: "contracts",
    label: "Automation",
    title: "Contract\nAutomation Engine",
    description:
      "Automated contract modification workflow for a lending operation. The user selects a loan and a modification type, the system generates the legal document with pre-filled data, and sends it for e-signature via PandaDoc.",
    metrics: [
      { value: "7", label: "Contract types" },
      { value: "<30s", label: "Per contract" },
      { value: "PandaDoc", label: "E-signature" },
      { value: "End-to-end", label: "Automated" },
    ],
    tech: ["Next.js", "PandaDoc API", "PDF Generation", "TypeScript"],
    images: [],
  },
  {
    id: "reconciliation",
    label: "Automation",
    title: "Financial\nReconciliation",
    description:
      "Automated portfolio reconciliation pipeline. Logs into an MFA-protected external portal, exports the data, cross-references it against internal records, and outputs a report with every discrepancy flagged.",
    metrics: [
      { value: "99.4%", label: "Match rate" },
      { value: "Auto", label: "MFA handling" },
      { value: "Weekly", label: "Cadence" },
      { value: "Selenium", label: "Browser automation" },
    ],
    tech: ["Python", "Selenium", "BigQuery", "PostgreSQL", "Gmail API"],
    images: [],
  },
  {
    id: "bp",
    label: "Data Engineering",
    title: "Business Plan\nEngine",
    description:
      "Automated a financial model that lived across 7 interconnected Excel workbooks. The engine generates date-parameterized projections — salary curves, guarantee calculations, cohort-level P&L — all cell-by-cell accurate.",
    metrics: [
      { value: "7", label: "Models automated" },
      { value: "100%", label: "Cell accuracy" },
      { value: "Python", label: "Engine" },
      { value: "Excel", label: "Output format" },
    ],
    tech: ["Python", "openpyxl", "pandas", "PostgreSQL", "NumPy"],
    images: [],
  },
  {
    id: "databank",
    label: "Full-Stack",
    title: "Data Bank",
    description:
      "Data generation pipeline. A Flask API on a cloud VM serves a Next.js frontend where users configure filters and generate multi-sheet Excel exports with raw data, formulas, and computed fields.",
    metrics: [
      { value: "Flask", label: "Backend API" },
      { value: "Next.js", label: "Frontend" },
      { value: "Cloud VM", label: "Infrastructure" },
      { value: "Excel", label: "Output" },
    ],
    tech: ["Flask", "Next.js", "PostgreSQL", "BigQuery", "openpyxl"],
    images: [
      { src: "/projects/databank-v2.png", alt: "Data Bank interface", url: "internal-platform/data-bank" },
    ],
  },
  {
    id: "trading",
    label: "Side Project",
    title: "Prediction Market\nTrading System",
    description:
      "Personal project. Real-time websocket ingestion from prediction market order books, automated position management, and a Telegram bot for alerts and daily P&L reports.",
    metrics: [
      { value: "24/7", label: "Monitoring" },
      { value: "Real-time", label: "WebSocket feed" },
      { value: "Telegram", label: "Alerts" },
      { value: "Cloud VM", label: "Always on" },
    ],
    tech: ["Python", "WebSockets", "Telegram API", "Cloud VM"],
    images: [],
  },
];

const techStack = [
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Recharts"] },
  { category: "Backend", items: ["Python", "Flask", "Node.js", "REST APIs", "WebSockets"] },
  { category: "Data", items: ["PostgreSQL", "BigQuery", "pandas", "openpyxl", "SQL"] },
  { category: "Cloud & Infra", items: ["Vercel", "Google Cloud", "Cron Jobs", "Supervisor"] },
  { category: "Integrations", items: ["PandaDoc", "Sheets API", "Gmail API", "Telegram", "Drive API"] },
];

/* ================================================================
   PAGE
   ================================================================ */

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* ---------- HERO ---------- */}
      <section className="hero-bg flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center">
        <div className="relative z-10 max-w-3xl">
          <p
            className="mb-8 text-[13px] font-semibold uppercase tracking-[0.25em]"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Industrial Engineer &middot; Software &middot; Finance
          </p>
          <h1 className="text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-white">
            Javier Gonz&aacute;lez
            <br />
            <span className="text-accent">Alvarez</span>
          </h1>
          <p
            className="mx-auto mt-10 max-w-md text-[clamp(1rem,2vw,1.2rem)] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Industrial engineer working in fintech.
            <br />
            I build the tools my team actually needs.
          </p>
        </div>
        <div className="float-anim absolute bottom-10">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4v12m0 0l-4-4m4 4l4-4" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ---------- PROJECTS ---------- */}
      <section className="px-6 pt-40 pb-16" id="work">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-[13px] font-semibold uppercase tracking-[0.25em] text-secondary">
              Selected Work
            </p>
            <h2 className="mt-4 text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em]">
              What I&apos;ve built
            </h2>
          </Reveal>
        </div>
      </section>

      {projects.map((p) => (
        <ProjectBlock key={p.id} project={p} />
      ))}

      {/* ---------- TECH STACK ---------- */}
      <section className="px-6 py-40" id="stack">
        <div className="mx-auto max-w-5xl">
          <div className="section-divider mb-40" />
          <Reveal>
            <p className="text-[13px] font-semibold uppercase tracking-[0.25em] text-secondary">
              Tech Stack
            </p>
            <h2 className="mt-4 text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em]">
              Tools I use
            </h2>
          </Reveal>

          <div className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map((group, gi) => (
              <Reveal key={group.category} delay={Math.min(gi + 1, 3)}>
                <h3 className="mb-5 text-[13px] font-semibold uppercase tracking-[0.2em] text-secondary">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="pill">{item}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ABOUT ---------- */}
      <section className="px-6 py-40" id="about">
        <div className="mx-auto max-w-5xl">
          <div className="section-divider mb-40" />
          <Reveal>
            <div className="grid grid-cols-1 gap-20 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <p className="text-[13px] font-semibold uppercase tracking-[0.25em] text-secondary">
                  About
                </p>
                <h2 className="mt-4 text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em]">
                  Background
                </h2>
              </div>
              <div className="flex flex-col justify-center lg:col-span-3">
                <p className="text-[1.125rem] leading-[1.7] text-secondary">
                  Industrial engineer working at a European fintech. I design
                  and build the internal platform the company runs on —
                  dashboards, automations, data pipelines, and operational tools.
                </p>
                <p className="mt-6 text-[1.125rem] leading-[1.7] text-secondary">
                  I like solving real problems with code. Most of what I build
                  replaces manual processes or gives the team visibility they
                  didn&apos;t have before.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section className="hero-bg px-6 py-40 text-center">
        <Reveal>
          <div className="relative z-10">
            <p className="text-[13px] font-semibold uppercase tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.4)" }}>
              Contact
            </p>
            <h2 className="mt-4 text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white">
              Let&apos;s talk
            </h2>
            <p className="mx-auto mt-6 max-w-md text-[1rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              Happy to chat about fintech, internal tooling, or anything interesting.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://www.linkedin.com/in/javiergonzalezalvarez/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-[14px] font-semibold text-[#0c1222] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)]"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
              <a
                href="https://github.com/javiergonzalez-ctrl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/15 px-8 py-3.5 text-[14px] font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/5"
              >
                <GitHubIcon />
                GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-border px-6 py-8 text-center text-[13px] text-secondary">
        &copy; {new Date().getFullYear()} Javier Gonz&aacute;lez Alvarez
      </footer>
    </main>
  );
}

/* ================================================================
   PROJECT BLOCK
   ================================================================ */

function ProjectBlock({ project }: { project: (typeof projects)[number] }) {
  const hasImages = project.images.length > 0;

  return (
    <section className="px-6 pb-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-[13px] font-semibold uppercase tracking-[0.25em] text-accent">
            {project.label}
          </p>
          <h3 className="mt-3 whitespace-pre-line text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.03em]">
            {project.title}
          </h3>
          <p className="mt-6 max-w-2xl text-[1.05rem] leading-[1.7] text-secondary">
            {project.description}
          </p>
        </Reveal>

        {/* Metrics */}
        <div className="mt-12 grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-4">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <p className="metric-num text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
                {m.value}
              </p>
              <p className="mt-1 text-[13px] text-secondary">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Tech pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>

        {/* Screenshots */}
        {hasImages && (
          <div className={`mt-14 grid gap-6 ${project.images.length > 1 ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1 max-w-4xl"}`}>
            {project.images.map((img) => (
              <BrowserFrame key={img.src} src={img.src} alt={img.alt} url={img.url} />
            ))}
          </div>
        )}

        {!hasImages && <div className="mt-14 section-divider" />}
      </div>
    </section>
  );
}

/* ================================================================
   ICONS
   ================================================================ */

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
