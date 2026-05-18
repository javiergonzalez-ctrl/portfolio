/* WhatsApp-style playbook mock — phone frame on the left + classifier panel on the right.
   Conveys both the chat surface and the AI/ML system behind it. */

import { Card } from "@/components/ui/card";

type Bubble = { side: "lead" | "bot"; text: string; time: string; status?: "sent" };

const messages: Bubble[] = [
  { side: "lead", text: "Hola, vi vuestra web. Me interesa pero quería entender mejor los términos.", time: "10:14" },
  { side: "bot", text: "¡Hola! Te explico en dos líneas: solo pagas si terminas trabajando por encima de cierto umbral. Sin ese requisito, no hay devolución.", time: "10:14", status: "sent" },
  { side: "lead", text: "Vale, ¿cuánto se paga al mes?", time: "10:21" },
  { side: "bot", text: "Un porcentaje de tu salario bruto, no una cuota fija. Si subes, sube. Si bajas, baja.", time: "10:21", status: "sent" },
];

const signals = [
  { label: "Intención", value: "Alta", tone: "teal" as const },
  { label: "Objeción", value: "Coste", tone: "amber" as const },
  { label: "Fase", value: "Consideración", tone: "navy" as const },
];

export function MockChat() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
      {/* Phone frame */}
      <div className="sm:col-span-7">
        <div
          className="rounded-[28px] bg-[#0F1216] p-2.5"
          style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.08), 0 22px 40px rgba(0,0,0,0.18), 0 60px 100px rgba(0,0,0,0.10)" }}
        >
          <div className="rounded-[20px] overflow-hidden bg-[#F7F5EF] border border-black/5">
            {/* Phone topbar */}
            <div className="flex items-center gap-2.5 px-4 py-3 bg-white border-b border-[var(--border)]">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6BC0AD] to-[#3D8B7A] flex items-center justify-center text-white text-[12px] font-semibold tabular-nums">
                L
              </div>
              <div className="flex-1">
                <div className="text-[12.5px] font-medium text-[var(--ink)] leading-tight">Lead #1842</div>
                <div className="text-[10.5px] font-mono text-[var(--gray-500)]">en linea · escribiendo…</div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--gray-400)]">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>

            {/* Messages */}
            <div className="px-3 py-3.5 space-y-2 max-h-[280px] overflow-hidden">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.side === "bot" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-3 py-2 text-[12.5px] leading-[1.4] ${
                      m.side === "bot"
                        ? "bg-[#D9F3EA] text-[var(--ink)] rounded-br-md"
                        : "bg-white text-[var(--ink)] rounded-bl-md border border-[var(--border)]"
                    }`}
                  >
                    <p>{m.text}</p>
                    <div className="mt-1 flex items-center justify-end gap-1.5 text-[9.5px] font-mono text-[var(--gray-500)]">
                      <span>{m.time}</span>
                      {m.status === "sent" && (
                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
                          <path d="M1 4l2 2 5-5M5 6l4-4" stroke="#3D8B7A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input bar */}
            <div className="px-3 py-2.5 border-t border-[var(--border)] bg-white flex items-center gap-2">
              <div className="flex-1 rounded-full bg-[var(--paper-warm)] px-3.5 py-2 text-[11.5px] text-[var(--gray-500)]">
                Sugerencia generada · enviar →
              </div>
              <div className="w-8 h-8 rounded-full bg-[#3D8B7A] flex items-center justify-center text-white">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2 .01 7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Classifier panel */}
      <div className="sm:col-span-5 flex flex-col gap-3">
        <Card className="!py-0">
          <div className="px-4 py-3 border-b border-[var(--border)]">
            <div className="text-[10.5px] font-mono uppercase tracking-wider text-[var(--gray-500)]">Lead score</div>
            <div className="mt-1.5 flex items-baseline gap-2">
              <span className="text-[28px] font-bold tabular-nums tracking-tight text-[var(--ink)] leading-none">82</span>
              <span className="text-[12px] font-mono text-[var(--gray-400)]">/ 100</span>
            </div>
            <div className="mt-2.5 h-1.5 rounded-full bg-[var(--gray-100)] overflow-hidden">
              <div className="h-full rounded-full" style={{ width: "82%", background: "linear-gradient(90deg, #3D8B7A, #6BC0AD)" }} />
            </div>
          </div>
          <div className="px-4 py-3 grid grid-cols-1 gap-2.5">
            {signals.map((s) => {
              const dot =
                s.tone === "teal" ? "#3D8B7A"
                : s.tone === "amber" ? "#B68B22"
                : "#2D4A7A";
              return (
                <div key={s.label} className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-[11.5px] text-[var(--gray-500)] font-mono uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: dot }} />
                    {s.label}
                  </span>
                  <span className="text-[12.5px] font-medium text-[var(--ink)]">{s.value}</span>
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="!py-0">
          <div className="px-4 py-3.5">
            <div className="text-[10.5px] font-mono uppercase tracking-wider text-[var(--gray-500)] mb-2">Próximo paso</div>
            <div className="text-[13.5px] text-[var(--ink)] leading-snug">Agendar llamada de 15 min, mencionar el porcentaje variable.</div>
            <button className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-medium text-[#3D8B7A] hover:opacity-80 transition-opacity">
              Generar respuesta
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </Card>

        <div className="text-[10.5px] font-mono text-[var(--gray-500)] flex items-center gap-2 px-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3D8B7A] animate-pulse" />
          412 conversaciones procesadas · cada lead clasificado solo
        </div>
      </div>
    </div>
  );
}
