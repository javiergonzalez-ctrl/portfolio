/* LastPush — server component that fetches the most recent public repo push
   from GitHub for javiergonzalez-ctrl. Cached for 1h. Fallback to a static
   "last shipped" date if the API fails or is rate-limited. */

const USERNAME = "javiergonzalez-ctrl";
const FALLBACK = "Última iteración · 18-may-2026";

type Repo = {
  name: string;
  pushed_at: string;
  private?: boolean;
};

function relativeTime(iso: string) {
  const then = new Date(iso).getTime();
  const now = Date.now();
  const diffSec = Math.max(1, Math.floor((now - then) / 1000));
  if (diffSec < 60) return `hace ${diffSec}s`;
  const m = Math.floor(diffSec / 60);
  if (m < 60) return `hace ${m} min`;
  const h = Math.floor(m / 60);
  if (h < 24) return `hace ${h} h`;
  const d = Math.floor(h / 24);
  if (d < 7) return `hace ${d} d`;
  const w = Math.floor(d / 7);
  if (w < 5) return `hace ${w} sem`;
  const mo = Math.floor(d / 30);
  if (mo < 12) return `hace ${mo} m`;
  const y = Math.floor(d / 365);
  return `hace ${y} a`;
}

async function fetchLatest(): Promise<{ when: string; relative: string } | null> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${USERNAME}/repos?sort=pushed&per_page=1`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) return null;
    const data = (await res.json()) as Repo[];
    if (!Array.isArray(data) || data.length === 0) return null;
    const last = data[0];
    return { when: last.pushed_at, relative: relativeTime(last.pushed_at) };
  } catch {
    return null;
  }
}

export async function LastPush() {
  const latest = await fetchLatest();
  if (!latest) {
    return <span>{FALLBACK}</span>;
  }
  return (
    <span>
      Último push · <span className="text-white/60">{latest.relative}</span>
    </span>
  );
}
