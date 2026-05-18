/* Growth dashboard mock — activity heatmap + KPIs + line chart */

const months = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
const weeks = 6;

function heatColor(value: number) {
  if (value === 0) return "rgba(15, 16, 19, 0.05)";
  if (value < 25) return "rgba(107, 192, 173, 0.18)";
  if (value < 50) return "rgba(107, 192, 173, 0.36)";
  if (value < 75) return "rgba(107, 192, 173, 0.62)";
  return "rgba(61, 139, 122, 0.95)";
}

// Pseudo-stable pattern, no randomness so the mock stays SSR-friendly
const heatmap: number[][] = months.map((_, m) => {
  return Array.from({ length: weeks }, (_, w) => {
    const base = (m * 13 + w * 7) % 100;
    return m >= 8 ? Math.min(95, base + 25) : base;
  });
});

const line = [22, 28, 34, 31, 42, 48, 55, 63, 71, 78, 84, 92];

export function MockGrowth() {
  return (
    <div className="mock-surface p-5 sm:p-6">
      {/* topbar */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span className="text-[12px] font-mono text-gray-500">growth</span>
          <span className="text-[12px] text-gray-400">/</span>
          <span className="text-[12px] font-mono text-gray-700">activity</span>
        </div>
        <span className="mock-chip">last 12 months</span>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          { label: "Active partners", val: "104", delta: "+8" },
          { label: "Weekly logins", val: "1.482", delta: "+12 %" },
          { label: "NPS", val: "67", delta: "+4 pts" },
        ].map((k) => (
          <div key={k.label} className="rounded-lg border border-[var(--color-border)] p-3 bg-white">
            <div className="text-[10.5px] font-mono uppercase tracking-wider text-gray-500">{k.label}</div>
            <div className="mt-1.5 text-[19px] font-semibold tabular text-ink">{k.val}</div>
            <div className="mt-1 text-[11px] font-mono tabular text-[var(--color-teal-deep)]">{k.delta}</div>
          </div>
        ))}
      </div>

      {/* Heatmap */}
      <div className="rounded-lg border border-[var(--color-border)] p-4 bg-white mb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="text-[12px] font-medium text-ink">Activity heatmap</div>
          <span className="text-[10.5px] font-mono text-gray-500">5 buckets</span>
        </div>
        <div className="flex gap-[6px]">
          {heatmap.map((column, m) => (
            <div key={m} className="flex-1 flex flex-col gap-[3px]">
              {column.map((v, w) => (
                <div
                  key={w}
                  className="aspect-square rounded-[3px]"
                  style={{ background: heatColor(v) }}
                />
              ))}
              <div className="mt-1 text-[9.5px] font-mono text-gray-400 text-center">
                {months[m]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sparkline */}
      <div className="rounded-lg border border-[var(--color-border)] p-4 bg-white">
        <div className="flex items-center justify-between mb-3">
          <div className="text-[12px] font-medium text-ink">New partner sign-ups</div>
          <span className="mock-chip gray">cumulative</span>
        </div>
        <svg viewBox="0 0 300 80" className="w-full h-[80px]" preserveAspectRatio="none">
          <defs>
            <linearGradient id="g-growth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(107,192,173,0.28)" />
              <stop offset="100%" stopColor="rgba(107,192,173,0)" />
            </linearGradient>
          </defs>
          <polyline
            fill="url(#g-growth)"
            stroke="none"
            points={
              line
                .map((v, i) => `${(i / (line.length - 1)) * 300},${80 - (v / 100) * 80}`)
                .join(" ") + ` 300,80 0,80`
            }
          />
          <polyline
            fill="none"
            stroke="var(--color-teal-deep)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={line.map((v, i) => `${(i / (line.length - 1)) * 300},${80 - (v / 100) * 80}`).join(" ")}
          />
          {line.map((v, i) => (
            <circle
              key={i}
              cx={(i / (line.length - 1)) * 300}
              cy={80 - (v / 100) * 80}
              r={i === line.length - 1 ? 3.5 : 0}
              fill="var(--color-teal-deep)"
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
