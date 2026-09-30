"use client";
import { useState } from "react";
import { Reveal, Eyebrow } from "./Reveal";
import { skills } from "@/content/site";

const FILTERS = ["All", "Core", "Tools", "Leadership", "Delivery"] as const;

export default function Expertise() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const visible = filter === "All" ? skills : skills.filter((s) => s.category === filter);

  return (
    <section id="expertise" aria-label="Expertise" className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
      <Reveal>
        <Eyebrow>03 — Expertise</Eyebrow>
        <h2 className="headline-xl mt-4 text-4xl text-white md:text-7xl">
          SKILL <span className="text-white/35">ECOSYSTEM.</span>
        </h2>
        <p className="mt-4 max-w-xl text-[15px] text-white/55">
          An interactive map of quality engineering craft — no vanity percentages, just real domains of practice.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter skills">
          {FILTERS.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 text-[11px] font-bold tracking-[0.18em] transition ${
                filter === f
                  ? "bg-white text-black"
                  : "border border-white/12 bg-white/[0.03] text-white/60 hover:text-white"
              }`}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {visible.map((s, i) => (
          <Reveal key={s.label} delay={Math.min(i * 0.04, 0.3)}>
            <div className="glass-soft group relative overflow-hidden rounded-xl p-5 transition hover:border-[#5ee6eb]/40 hover:bg-white/[0.06]">
              <p className="font-mono text-[10px] tracking-[0.28em] text-[#5ee6eb]/80">{s.category.toUpperCase()}</p>
              <p className="mt-2 text-[13px] font-extrabold tracking-[0.08em] text-white">{s.label}</p>
              <span
                aria-hidden
                className="absolute -bottom-6 -right-6 h-20 w-20 rounded-full bg-[#7c5cff]/15 blur-2xl transition group-hover:bg-[#7c5cff]/35"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
