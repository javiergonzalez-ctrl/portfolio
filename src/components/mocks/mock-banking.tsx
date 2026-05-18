/* Banking sync mock — 3 accounts unified view */

const accounts = [
  {
    name: "Entidad A",
    iban: "···· 7821",
    available: "€ 1.204.880",
    booked: "€ 1.247.330",
    moves: 28,
    tone: "teal" as const,
  },
  {
    name: "Entidad B",
    iban: "···· 4416",
    available: "€ 318.420",
    booked: "€ 320.110",
    moves: 14,
    tone: "navy" as const,
  },
  {
    name: "Entidad C",
    iban: "···· 9032",
    available: "€ 96.244",
    booked: "€ 102.880",
    moves: 9,
    tone: "amber" as const,
  },
];

const moves = [
  { side: "in", concept: "Cobro · partner A", value: "+ € 18.420,00", time: "13:42" },
  { side: "out", concept: "Comisión transacción", value: "− € 0,20", time: "13:42" },
  { side: "out", concept: "Transferencia · proveedor B", value: "− € 4.106,80", time: "11:18" },
  { side: "in", concept: "Reembolso · servicio C", value: "+ € 220,00", time: "10:04" },
];

export function MockBanking() {
  return (
    <div className="mock-surface p-5 sm:p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span className="text-[12px] font-mono text-gray-500">banking</span>
          <span className="text-[12px] text-gray-400">/</span>
          <span className="text-[12px] font-mono text-gray-700">sync</span>
        </div>
        <span className="mock-chip">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-teal-deep)" }} />
          OAuth · 3 entidades
        </span>
      </div>

      {/* Accounts row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
        {accounts.map((a) => {
          const accent =
            a.tone === "teal" ? "var(--color-teal-deep)"
            : a.tone === "amber" ? "#B68B22"
            : "var(--color-navy)";
          return (
            <div key={a.name} className="rounded-lg border border-[var(--color-border)] p-4 bg-white relative overflow-hidden">
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
              />
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-mono uppercase tracking-wider text-gray-500">{a.name}</div>
                <div className="text-[10.5px] font-mono text-gray-400">{a.iban}</div>
              </div>
              <div className="mt-2.5 text-[19px] font-semibold tabular text-ink">{a.available}</div>
              <div className="mt-0.5 text-[11px] font-mono text-gray-500">
                disponible · <span className="text-gray-700">{a.booked}</span> booked
              </div>
              <div className="mt-3 flex items-center justify-between text-[10.5px] font-mono">
                <span className="text-gray-500">hoy</span>
                <span className="text-ink tabular">{a.moves} movimientos</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Movements */}
      <div className="rounded-lg border border-[var(--color-border)] bg-white">
        <div className="px-4 py-2.5 border-b border-[var(--color-border)] flex items-center justify-between">
          <div className="text-[12px] font-medium text-ink">Últimos movimientos</div>
          <span className="text-[10.5px] font-mono text-gray-500">live · OAuth</span>
        </div>
        {moves.map((m, i) => (
          <div key={i} className="mock-row">
            <div className="flex items-center gap-3 flex-1">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: m.side === "in" ? "var(--color-teal-deep)" : "var(--color-gray-300)" }}
              />
              <span className="text-[12.5px] text-ink">{m.concept}</span>
            </div>
            <span className={`text-[12.5px] tabular font-mono ${m.side === "in" ? "text-[var(--color-teal-deep)]" : "text-gray-700"}`}>
              {m.value}
            </span>
            <span className="text-[10.5px] font-mono text-gray-400 ml-3">{m.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
