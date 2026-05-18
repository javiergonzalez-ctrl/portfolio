/* StackGrid — compact chip cloud.
   Color dot encodes the group; legend at top of section explains it. */

type StackItem = {
  name: string;
  group: "frontend" | "backend" | "data" | "infra";
};

const items: StackItem[] = [
  { name: "Next.js", group: "frontend" },
  { name: "React", group: "frontend" },
  { name: "TypeScript", group: "frontend" },
  { name: "Tailwind", group: "frontend" },
  { name: "Recharts", group: "frontend" },
  { name: "shadcn/ui", group: "frontend" },
  { name: "Python", group: "backend" },
  { name: "Node.js", group: "backend" },
  { name: "Flask", group: "backend" },
  { name: "REST", group: "backend" },
  { name: "OAuth", group: "backend" },
  { name: "WebSockets", group: "backend" },
  { name: "PostgreSQL", group: "data" },
  { name: "BigQuery", group: "data" },
  { name: "pandas", group: "data" },
  { name: "openpyxl", group: "data" },
  { name: "NumPy", group: "data" },
  { name: "Vercel", group: "infra" },
  { name: "Cloud VM", group: "infra" },
  { name: "cron", group: "infra" },
  { name: "Playwright", group: "infra" },
  { name: "Telegram", group: "infra" },
  { name: "PandaDoc", group: "infra" },
  { name: "IBKR Flex", group: "infra" },
];

const groupColor: Record<StackItem["group"], string> = {
  frontend: "var(--color-teal-deep)",
  backend: "#2D4A7A",
  data: "#B68B22",
  infra: "#B84830",
};

export function StackGrid() {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((it) => (
        <span
          key={it.name}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[var(--color-border)] text-[12.5px] text-[var(--color-ink)] transition-all duration-200 hover:-translate-y-[1px] hover:border-[var(--color-gray-300)]"
        >
          <span
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ background: groupColor[it.group] }}
          />
          {it.name}
        </span>
      ))}
    </div>
  );
}
