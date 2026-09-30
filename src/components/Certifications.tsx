"use client";
import { Reveal, Eyebrow } from "./Reveal";
import { certifications } from "@/content/site";

export default function Certifications() {
  return (
    <section
      id="certifications"
      aria-label="Certifications"
      className="relative overflow-hidden border-t border-white/5 bg-[#08080d] py-24 md:py-36"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[#7c5cff]/12 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Eyebrow>04 — Certifications</Eyebrow>
          <h2 className="headline-xl mt-4 text-4xl text-white md:text-7xl">
            PROOF <span className="text-white/35">OF CRAFT.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={`${c.issuer}-${i}`} delay={Math.min(i * 0.07, 0.3)}>
              <article className="glass group relative overflow-hidden rounded-2xl p-7 transition hover:-translate-y-1 hover:border-[#5ee6eb]/40">
                <div className="flex items-start justify-between">
                  <p className="text-[12px] font-extrabold tracking-[0.24em] text-white">{c.issuer}</p>
                  <span aria-hidden className="font-mono text-[11px] text-white/30">
                    ◆
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold leading-snug text-white/90">{c.title}</h3>
                <p className="mt-2 font-mono text-[11px] tracking-[0.18em] text-white/45">{c.issued.toUpperCase()}</p>
                <div className="mt-6">
                  {c.credentialUrl ? (
                    <a
                      href={c.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold tracking-[0.2em] text-[#5ee6eb] hover:underline"
                    >
                      VIEW CREDENTIALS →
                    </a>
                  ) : (
                    <span className="cursor-help text-[11px] font-bold tracking-[0.2em] text-white/30" title="Credential link can be added in src/content/site.ts">
                      VIEW CREDENTIALS · SOON
                    </span>
                  )}
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#7c5cff]/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              </article>
            </Reveal>
          ))}

          <Reveal delay={0.3}>
            <div className="flex h-full min-h-[12rem] flex-col justify-between rounded-2xl border border-dashed border-white/15 p-7 text-white/45">
              <p className="text-[12px] font-bold tracking-[0.24em]">NEXT CREDENTIAL</p>
              <p className="text-sm leading-relaxed">
                Architecture is expandable — new certifications slot in from the content file with zero redesign.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
