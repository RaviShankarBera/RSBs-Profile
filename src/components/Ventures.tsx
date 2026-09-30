import { Reveal, Eyebrow } from "./Reveal";
import { ventures } from "@/content/site";

export default function Ventures() {
  return (
    <section id="ventures" aria-label="Ventures" className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
      <Reveal>
        <Eyebrow>02 — {ventures.eyebrow}</Eyebrow>
        <h2 className="headline-xl mt-4 text-4xl text-white md:text-7xl">{ventures.heading}</h2>
        <p className="mt-4 max-w-xl text-[15px] text-white/55">{ventures.description}</p>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {ventures.companies.map((c, i) => (
          <Reveal key={c.name} delay={Math.min(i * 0.07, 0.25)}>
            <article className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl p-8 transition hover:-translate-y-1 hover:border-[#2f6bff]/50 md:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#2f6bff]/15 blur-[100px] transition group-hover:bg-[#2f6bff]/30"
              />
              <div className="flex items-start justify-between">
                <p className="font-mono text-[11px] tracking-[0.32em] text-[#8fc3ff]">{c.index}</p>
                <p className="text-[11px] font-bold tracking-[0.2em] text-white/40">{c.tagline.toUpperCase()}</p>
              </div>
              <h3 className="mt-4 text-3xl font-black tracking-tight text-white md:text-4xl">{c.name}</h3>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-white/60">{c.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {c.domains.map((d) => (
                  <li
                    key={d}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.1em] text-white/65"
                  >
                    {d}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                {c.cta.href ? (
                  <a
                    href={c.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-[12px] font-extrabold tracking-[0.18em] text-black transition hover:bg-[#c3d6ff]"
                  >
                    {c.cta.label} <span aria-hidden>↗</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-3 rounded-full border border-white/12 px-7 py-3.5 text-[12px] font-extrabold tracking-[0.18em] text-white/40">
                    {c.cta.label}
                  </span>
                )}
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#2f6bff]/60 to-transparent opacity-0 transition group-hover:opacity-100" />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
