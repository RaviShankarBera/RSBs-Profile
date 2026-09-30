"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, Eyebrow } from "./Reveal";
import { journeyStages, experience } from "@/content/site";

const CHAPTER_COPY: Record<string, React.ReactNode> = {
  tcs: (
    <>
      <p>
        System Engineer → QA → leadership responsibilities across SAP and enterprise
        quality programs. Focus on Tosca-based automation coverage, functional depth
        and process discipline.
      </p>
      <p className="mt-2 text-white/35">
        Exact dates, teams and programs available on request — content stays factual
        by design.
      </p>
    </>
  ),
  hexaware: (
    <p>
      Manager — Quality Assurance Team at Hexaware Technologies, Bengaluru.
      Automation-first quality engineering, delivery governance and mentoring the
      next line of QA talent — the foundation behind a founder&apos;s mindset.
    </p>
  ),
  founder: (
    <p>
      Founder & CEO of Stacknity Technologies, My Minute Travel, RSB & Co and
      Stacknity-ai — building across technology services, travel, legal services
      and artificial intelligence.
    </p>
  ),
};

export default function Journey() {
  const [openId, setOpenId] = useState<string | null>("founder");

  return (
    <section id="experience" aria-label="Career journey" className="relative border-t border-white/5 bg-black py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Eyebrow>03 — Journey</Eyebrow>
          <h2 className="headline-xl mt-4 text-4xl text-white md:text-7xl">
            FROM ENGINEER
            <br />
            <span className="text-white/35">TO FOUNDER.</span>
          </h2>
        </Reveal>

        {/* horizontal stage rail */}
        <Reveal delay={0.1}>
          <ol className="mt-12 flex gap-3 overflow-x-auto pb-4" aria-label="Career stages">
            {journeyStages.map((s, i) => {
              const last = i === journeyStages.length - 1;
              return (
                <li
                  key={s}
                  className={`flex shrink-0 items-center gap-3 rounded-full border px-5 py-2.5 text-[11px] font-bold tracking-[0.18em] ${
                    last
                      ? "border-[#2f6bff]/60 bg-[#2f6bff]/15 text-white shadow-[0_0_30px_rgba(47,107,255,0.35)]"
                      : "border-white/10 bg-white/[0.03] text-white/55"
                  }`}
                >
                  <span className={`font-mono ${last ? "text-[#8fc3ff]" : "text-white/30"}`}>
                    0{i + 1}
                  </span>
                  {s}
                  {!last && <span aria-hidden className="text-white/20">→</span>}
                </li>
              );
            })}
          </ol>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {experience.map((e, idx) => {
            const open = openId === e.id;
            return (
              <Reveal key={e.id} delay={idx * 0.08}>
                <article
                  className={`glass relative h-full overflow-hidden rounded-2xl p-7 md:p-8 ${
                    e.current ? "border-[#2f6bff]/50 shadow-[0_0_60px_rgba(47,107,255,0.2)]" : ""
                  }`}
                >
                  {e.current && (
                    <span className="absolute right-6 top-6 inline-flex items-center gap-2 rounded-full bg-[#2f6bff]/15 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-[#8fc3ff]">
                      <span className="dot-live" /> CURRENT CHAPTER
                    </span>
                  )}
                  <p className="font-mono text-[11px] tracking-[0.3em] text-[#8fc3ff]">{e.phase.toUpperCase()}</p>
                  <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-white">{e.company}</h3>
                  {"role" in e && e.role && (
                    <p className="mt-1 text-sm font-semibold tracking-[0.12em] text-white/70">{e.role}</p>
                  )}
                  <p className="mt-4 text-[15px] leading-relaxed text-white/60">{e.summary}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {e.highlights.map((h) => (
                      <li
                        key={h}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.1em] text-white/65"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setOpenId(open ? null : e.id)}
                    aria-expanded={open}
                    className="mt-6 text-[11px] font-bold tracking-[0.22em] text-white/70 underline-offset-4 hover:text-white hover:underline"
                  >
                    {open ? "— COLLAPSE" : "+ EXPAND CHAPTER"}
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 rounded-xl border border-white/10 bg-black/30 p-5 text-sm leading-relaxed text-white/55">
                          {CHAPTER_COPY[e.id]}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
