import { Reveal, Eyebrow } from "./Reveal";
import { ventures } from "@/content/site";

export default function Ventures() {
  return (
    <section id="ventures" aria-label="Ventures" className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
      <Reveal>
        <Eyebrow>05 — {ventures.eyebrow}</Eyebrow>
        <h2 className="headline-xl mt-4 text-4xl text-white md:text-7xl">{ventures.heading}</h2>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-12">
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#4f8cff]/15 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[#5ee6eb]/10 blur-[100px]" />
            <p className="font-mono text-[11px] tracking-[0.32em] text-[#5ee6eb]">FOUNDER-LED INITIATIVE</p>
            <h3 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
              STACKNITY
              <span className="block text-lg font-bold tracking-[0.3em] text-white/50">TECHNOLOGIES</span>
            </h3>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/60">{ventures.description}</p>
            <a
              href={ventures.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-[12px] font-extrabold tracking-[0.18em] text-black transition hover:bg-[#c9c2ff]"
            >
              {ventures.cta.label} <span aria-hidden>↗</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid h-full grid-cols-2 gap-3">
            {ventures.domains.map((d) => (
              <div
                key={d}
                className="glass-soft group flex flex-col justify-between rounded-2xl p-5 transition hover:border-[#7c5cff]/50 hover:bg-white/[0.06]"
              >
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#7c5cff] shadow-[0_0_12px_#7c5cff]" />
                <p className="mt-8 text-[13px] font-extrabold tracking-[0.12em] text-white">{d}</p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-white/35">STACKNITY / 0{i(d)}</p>
              </div>
            ))}
            <p className="col-span-2 px-1 font-mono text-[10px] leading-relaxed tracking-[0.14em] text-white/30">
              NO INVENTED METRICS · CLIENTS · REVENUE — POSITIONED HONESTLY AS AN ENTREPRENEURIAL TECHNOLOGY
              INITIATIVE.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function i(d: string) {
  const map: Record<string, string> = {
    AI: "1",
    "MACHINE LEARNING": "2",
    CYBERSECURITY: "3",
    "DATA SCIENCE": "4",
    "UX/UI": "5",
    "CLOUD COMPUTING": "6",
    "DIGITAL MARKETING": "7",
  };
  return map[d] ?? "–";
}
