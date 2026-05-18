/* Cohort table mock — Business Plan engine flavor */

const rows = [
  { cohort: "2023-Q1", n: 142, paid: "€ 218.412", late: 4, perf: 92 },
  { cohort: "2023-Q2", n: 168, paid: "€ 256.890", late: 7, perf: 88 },
  { cohort: "2023-Q3", n: 195, paid: "€ 312.044", late: 6, perf: 91 },
  { cohort: "2023-Q4", n: 224, paid: "€ 388.110", late: 9, perf: 89 },
  { cohort: "2024-Q1", n: 261, paid: "€ 446.220", late: 5, perf: 94 },
  { cohort: "2024-Q2", n: 287, paid: "€ 502.510", late: 8, perf: 92 },
];

export function MockCohort() {
  return (
    <div className="mock-surface p-5 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-[12px] font-mono text-gray-500">business_plan.engine</div>
          <div className="text-[15px] font-medium text-ink mt-0.5">Cohort P&amp;L · proyección 24m</div>
        </div>
        <span className="mock-chip">100 % cell-by-cell match</span>
      </div>

      <div className="rounded-lg border border-[var(--color-border)] overflow-hidden">
        <div className="grid grid-cols-12 gap-3 px-4 py-2.5 bg-[var(--color-paper-warm)] text-[10.5px] font-mono uppercase tracking-wider text-gray-500">
          <div className="col-span-3">cohort</div>
          <div className="col-span-2 text-right">n</div>
          <div className="col-span-3 text-right">paid</div>
          <div className="col-span-2 text-right">late</div>
          <div className="col-span-2 text-right">perf</div>
        </div>
        {rows.map((r) => (
          <div key={r.cohort} className="grid grid-cols-12 gap-3 px-4 py-2.5 border-t border-[var(--color-border)] text-[12.5px]">
            <div className="col-span-3 font-mono text-ink">{r.cohort}</div>
            <div className="col-span-2 text-right tabular text-gray-700">{r.n}</div>
            <div className="col-span-3 text-right tabular font-mono text-ink">{r.paid}</div>
            <div className="col-span-2 text-right tabular text-gray-700">{r.late}</div>
            <div className="col-span-2 text-right">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-12 h-1 rounded-full bg-[var(--color-gray-100)] overflow-hidden">
                  <span className="block h-full" style={{ width: `${r.perf}%`, background: "linear-gradient(90deg, var(--color-teal-deep), var(--color-teal))" }} />
                </span>
                <span className="text-[11px] font-mono tabular text-gray-600">{r.perf}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
