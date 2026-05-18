/* Synthetic cron log mock — Investment Daily Monitor flavor */

const lines: { kind: "prompt" | "out" | "warn" | "comment"; text: string }[] = [
  { kind: "comment", text: "# cron · L-V 08:00 UTC · vm.us-central1-a" },
  { kind: "prompt", text: "$ python daily_monitor.py --portfolio ibkr --quotes yfinance" },
  { kind: "out", text: "  → pulled 14 positions from IBKR Flex (ts=2026-05-18T08:00:11Z)" },
  { kind: "out", text: "  → fetched quotes via curl_cffi + yfinance (impersonate=chrome)" },
  { kind: "out", text: "  → 4 EPS revisions (90d) detected · 2 Form-4 insider buys" },
  { kind: "warn", text: "  ⚠ MU − touched 200-DMA from below · trigger fired" },
  { kind: "out", text: "  → telegram.send_message(chat=ME, text=\"MU trigger · see daily\")" },
  { kind: "out", text: "  → P&L lifetime updated: +$1,750 · MTD +$214" },
  { kind: "out", text: "  ✓ done in 9.8s — exit 0" },
];

export function MockTerminal() {
  return (
    <div className="mock-terminal">
      <div className="topbar">
        <span className="dot" style={{ background: "#ff5f57" }} />
        <span className="dot" style={{ background: "#febc2e" }} />
        <span className="dot" style={{ background: "#28c840" }} />
        <span className="ml-3 text-[11px] font-mono text-white/40">vm — daily_monitor.py</span>
      </div>
      <div className="body">
        {lines.map((l, i) => (
          <div
            key={i}
            className={
              l.kind === "prompt" ? "ln-prompt"
              : l.kind === "warn" ? "ln-warn"
              : l.kind === "comment" ? "ln-comment"
              : ""
            }
          >
            {l.text}
          </div>
        ))}
      </div>
    </div>
  );
}
