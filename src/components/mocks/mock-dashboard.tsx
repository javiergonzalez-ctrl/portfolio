"use client";

/* MockDashboard — built with shadcn primitives (Card, Skeleton) and the
   exact patterns from bcas-platform. Shows a brief skeleton state on first
   render that resolves to live data — same as the real platform. */

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";

const kpis = [
  { label: "Posición de tesorería", value: "1.847.220", unit: "€", delta: "4,2", up: true, spark: [42, 51, 47, 58, 63, 71, 78, 85, 92] },
  { label: "Pagos D+1", value: "312.480", unit: "€", delta: "1,1", up: false, spark: [80, 72, 76, 68, 65, 62, 58, 55, 52] },
  { label: "Mora activa", value: "48.610", unit: "€", delta: "12", up: true, spark: [90, 86, 78, 72, 68, 62, 58, 53, 48] },
  { label: "Cobros del mes", value: "2.106.940", unit: "€", delta: "9,3", up: true, spark: [38, 44, 52, 58, 65, 73, 80, 86, 94] },
];

const waterfall = [
  { label: "ene", planned: 240, actual: 220 },
  { label: "feb", planned: 280, actual: 295 },
  { label: "mar", planned: 200, actual: 188 },
  { label: "abr", planned: 320, actual: 340 },
  { label: "may", planned: 260, actual: 255 },
  { label: "jun", planned: 360, actual: 388 },
  { label: "jul", planned: 240, actual: 232 },
  { label: "ago", planned: 300, actual: 290 },
  { label: "sep", planned: 270, actual: 268 },
  { label: "oct", planned: 340, actual: 360 },
  { label: "nov", planned: 220, actual: 210 },
  { label: "dic", planned: 290, actual: 300 },
];

const rows: { concept: string; amount: string; when: string; status: "scheduled" | "processing" }[] = [
  { concept: "Pagos · partner A", amount: "482.110,00", when: "Hoy", status: "scheduled" },
  { concept: "Pagos · partner B", amount: "218.450,00", when: "Hoy", status: "scheduled" },
  { concept: "Adelanto · entidad C", amount: "96.020,00", when: "D + 1", status: "processing" },
  { concept: "Cuenta operativa", amount: "314.880,00", when: "D + 2", status: "scheduled" },
];

function Sparkline({ points, up }: { points: number[]; up: boolean }) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const w = 56;
  const h = 16;
  const step = w / (points.length - 1);
  const path = points
    .map((p, i) => `${i * step},${h - ((p - min) / range) * (h - 2) - 1}`)
    .join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="inline-block align-middle">
      <polyline
        points={path}
        fill="none"
        stroke={up ? "#3D8B7A" : "#E76F51"}
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const statusStyles: Record<"scheduled" | "processing", { label: string; className: string }> = {
  scheduled: { label: "scheduled", className: "bg-[rgba(45,74,122,0.10)] text-[#2D4A7A] border-transparent" },
  processing: { label: "processing", className: "bg-[rgba(212,168,67,0.14)] text-[#8C6A1E] border-transparent" },
};

export function MockDashboard() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Show skeletons for ~1.4s on first reveal — same UX as the real platform
    const onIntersect = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setLoaded(true), 1400);
          onIntersect.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    const el = document.getElementById("mock-dashboard");
    if (el) onIntersect.observe(el);
    return () => onIntersect.disconnect();
  }, []);

  return (
    <div id="mock-dashboard" className="space-y-4">
      {/* Top utility bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[12.5px]">
          <span className="font-mono text-[var(--gray-400)]">tesorería</span>
          <span className="text-[var(--gray-200)]">/</span>
          <span className="font-medium text-[var(--ink)]">Overview</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-[var(--border)] text-[11px] font-mono text-[var(--gray-500)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3D8B7A] animate-pulse" />
            live
          </span>
          <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-white border border-[var(--border)] text-[11px] font-mono text-[var(--gray-500)] tabular-nums">
            18-may-2026
          </span>
        </div>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {kpis.map((k, i) => (
          <Card
            key={k.label}
            className="!py-0 hover:-translate-y-[2px] hover:[box-shadow:var(--card-shadow-hover)] animate-in fade-in slide-in-from-bottom-2 duration-500"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <CardContent className="!px-4 py-4">
              <div className="text-[11px] font-medium text-[var(--gray-500)] uppercase tracking-wider">
                {k.label}
              </div>
              {loaded ? (
                <>
                  <div className="flex items-baseline gap-1.5 mt-2 animate-in fade-in duration-300">
                    <span className="text-[22px] font-bold tabular-nums tracking-tight text-[var(--ink)] leading-none">
                      {k.value}
                    </span>
                    <span className="text-[13px] font-normal text-[var(--gray-400)]">{k.unit}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5">
                    <Sparkline points={k.spark} up={k.up} />
                    <span
                      className="text-[11px] font-medium tabular-nums"
                      style={{ color: k.up ? "#3D8B7A" : "#E76F51" }}
                    >
                      {k.up ? "▲" : "▼"} {k.delta} %
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <Skeleton className="h-7 w-28 mt-2" />
                  <div className="mt-2 flex items-center gap-1.5">
                    <Skeleton className="h-3 w-14" />
                    <Skeleton className="h-3 w-10" />
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart */}
      <Card className="!py-0 overflow-hidden">
        <div className="flex items-center justify-between px-5 pt-4 pb-2.5">
          <div>
            <div className="text-[13px] font-medium text-[var(--ink)] leading-none">Cobros mensuales</div>
            <div className="mt-1 text-[11px] text-[var(--gray-500)]">previsto vs. real · últimos 12 meses</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-3 text-[11px] font-mono text-[var(--gray-500)]">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#CBD5E1]" />
                previsto
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#3D8B7A]" />
                real
              </span>
            </div>
            <button
              aria-label="Descargar CSV"
              className="w-7 h-7 inline-flex items-center justify-center rounded-md text-[var(--gray-400)] hover:text-[var(--ink)] hover:bg-[var(--paper-warm)] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
        <div className="px-5 pb-4">
          {loaded ? (
            <Chart />
          ) : (
            <div className="flex items-end gap-2 h-[180px] py-4">
              {waterfall.map((_, i) => (
                <div key={i} className="flex-1 flex gap-1">
                  <Skeleton className="flex-1" style={{ height: `${30 + ((i * 13) % 60)}%` }} />
                  <Skeleton className="flex-1" style={{ height: `${40 + ((i * 11) % 50)}%` }} />
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>

      {/* Table */}
      <Card className="!py-0 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[var(--border)]">
          <div className="text-[13px] font-medium text-[var(--ink)]">Próximos pagos</div>
          <div className="flex items-center gap-3 text-[11px] font-mono text-[var(--gray-500)]">
            <span>4 filas</span>
            <button
              aria-label="Descargar CSV"
              className="w-7 h-7 inline-flex items-center justify-center rounded-md text-[var(--gray-400)] hover:text-[var(--ink)] hover:bg-[var(--paper-warm)] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-3 px-5 py-2 bg-[var(--paper-warm)] text-[10.5px] font-mono uppercase tracking-wider text-[var(--gray-500)]">
          <div className="col-span-6">concepto</div>
          <div className="col-span-3 text-right">importe</div>
          <div className="col-span-1 text-right">cuando</div>
          <div className="col-span-2 text-right">estado</div>
        </div>
        {loaded
          ? rows.map((r, i) => {
              const s = statusStyles[r.status];
              return (
                <div
                  key={i}
                  className="grid grid-cols-12 gap-3 px-5 py-3 border-t border-[var(--border)] text-[12.5px] hover:bg-[rgba(107,192,173,0.04)] transition-colors animate-in fade-in slide-in-from-bottom-1 duration-300"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="col-span-6 text-[var(--ink)]">{r.concept}</div>
                  <div className="col-span-3 text-right font-mono tabular-nums text-[var(--ink)]">{r.amount} €</div>
                  <div className="col-span-1 text-right font-mono tabular-nums text-[var(--gray-600)]">{r.when}</div>
                  <div className="col-span-2 text-right">
                    <Badge variant="outline" className={`uppercase tracking-wider text-[10px] ${s.className}`}>
                      {s.label}
                    </Badge>
                  </div>
                </div>
              );
            })
          : Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="grid grid-cols-12 gap-3 px-5 py-3 border-t border-[var(--border)]">
                <Skeleton className="col-span-6 h-4" />
                <Skeleton className="col-span-3 h-4" />
                <Skeleton className="col-span-1 h-4" />
                <Skeleton className="col-span-2 h-4" />
              </div>
            ))}
      </Card>
    </div>
  );
}

function Chart() {
  const W = 560;
  const H = 200;
  const padL = 36;
  const padR = 12;
  const padT = 16;
  const padB = 28;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const maxVal = 400;
  const bw = innerW / waterfall.length;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" preserveAspectRatio="none">
      {[0, 0.25, 0.5, 0.75, 1].map((g) => {
        const y = padT + innerH * (1 - g);
        return (
          <g key={g}>
            <line x1={padL} x2={W - padR} y1={y} y2={y} stroke="#E9E7E0" strokeDasharray="3 3" />
            <text
              x={padL - 8}
              y={y + 3}
              fontSize={9.5}
              fontFamily="JetBrains Mono, monospace"
              fill="#8C887D"
              textAnchor="end"
            >
              {Math.round(maxVal * g)}K
            </text>
          </g>
        );
      })}
      {waterfall.map((d, i) => {
        const x = padL + bw * i + bw * 0.18;
        const groupW = bw * 0.64;
        const plannedH = (d.planned / maxVal) * innerH;
        const actualH = (d.actual / maxVal) * innerH;
        const halfW = groupW / 2 - 1.5;
        return (
          <g key={d.label}>
            <rect
              x={x}
              y={padT + innerH - plannedH}
              width={halfW}
              height={plannedH}
              rx={1.5}
              fill="#CBD5E1"
              className="animate-in fade-in duration-700"
              style={{ animationDelay: `${i * 40}ms` }}
            />
            <rect
              x={x + halfW + 3}
              y={padT + innerH - actualH}
              width={halfW}
              height={actualH}
              rx={1.5}
              fill="#3D8B7A"
              className="animate-in fade-in duration-700"
              style={{ animationDelay: `${i * 40 + 100}ms` }}
            />
            <text
              x={x + groupW / 2}
              y={H - 8}
              fontSize={9.5}
              fontFamily="JetBrains Mono, monospace"
              fill="#8C887D"
              textAnchor="middle"
            >
              {d.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
