/* Pipeline diagram mock — accounting altas multi-org */

const stages = [
  { label: "Cliente nuevo", sub: "trigger Postgres", tone: "navy" as const },
  { label: "Clasificación interna", sub: "3 entidades", tone: "teal" as const },
  { label: "Código contable", sub: "siguiente disponible", tone: "teal" as const },
  { label: "Cuenta contable", sub: "POST /accounts", tone: "amber" as const },
  { label: "Asiento", sub: "POST /entries", tone: "teal" as const },
  { label: "Conciliación", sub: "ledger externo", tone: "navy" as const },
];

export function MockPipeline() {
  return (
    <div className="mock-surface p-6 sm:p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="text-[12px] font-mono text-gray-500">pipeline</span>
          <span className="text-[12px] text-gray-400">/</span>
          <span className="text-[12px] font-mono text-gray-700">alta-contable</span>
        </div>
        <span className="mock-chip">producción · 626 altas procesadas</span>
      </div>

      <div className="grid gap-3 sm:gap-2">
        {stages.map((s, i) => {
          const bg =
            s.tone === "teal" ? "rgba(107, 192, 173, 0.10)"
            : s.tone === "amber" ? "rgba(212, 168, 67, 0.10)"
            : "rgba(27, 45, 79, 0.08)";
          const dot =
            s.tone === "teal" ? "var(--color-teal-deep)"
            : s.tone === "amber" ? "#B68B22"
            : "var(--color-navy)";
          return (
            <div key={i} className="flex items-center gap-4">
              <div className="relative flex flex-col items-center">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: dot }} />
                {i < stages.length - 1 && (
                  <div className="w-px h-6 sm:h-5 mt-0.5" style={{ background: "var(--color-border)" }} />
                )}
              </div>
              <div
                className="flex-1 flex items-center justify-between rounded-lg px-4 py-2.5 sm:py-2"
                style={{ background: bg, border: "1px solid var(--color-border)" }}
              >
                <div>
                  <div className="text-[13.5px] font-medium text-ink">{s.label}</div>
                  <div className="text-[11px] font-mono text-gray-500 mt-0.5">{s.sub}</div>
                </div>
                <div className="text-[10.5px] font-mono text-gray-400">stage {String(i + 1).padStart(2, "0")}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2 pt-5 border-t border-[var(--color-border)]">
        <span className="mock-chip"><span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-teal-deep)" }} /> tests 162 / 162</span>
        <span className="mock-chip amber">~ 30 s end-to-end</span>
        <span className="mock-chip gray">multi-entidad · api externa</span>
      </div>
    </div>
  );
}
