"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal, Eyebrow } from "./Reveal";
import { about } from "@/content/site";

export default function About() {
  const [tilt, setTilt] = useState<{ [k: number]: string }>({});

  const onMove = (i: number) => (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt((t) => ({ ...t, [i]: `perspective(900px) rotateX(${-y * 8}deg) rotateY(${x * 10}deg)` }));
  };

  return (
    <section id="about" aria-label="About" className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
      <Reveal>
        <Eyebrow>01 — About</Eyebrow>
        <h2 className="headline-xl mt-4 max-w-4xl text-4xl text-white md:text-7xl">{about.heading}</h2>
      </Reveal>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {about.paragraphs.map((p, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <p className="text-[15px] leading-relaxed text-white/60 md:text-base">{p}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {about.cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.1}>
            <motion.div
              onMouseMove={onMove(i)}
              onMouseLeave={() => setTilt((t) => ({ ...t, [i]: "perspective(900px)" }))}
              style={{ transform: tilt[i] ?? "perspective(900px)" }}
              className="glass group relative overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:border-[#7c5cff]/50"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#7c5cff]/15 blur-3xl transition group-hover:bg-[#7c5cff]/30" />
              <p className="font-mono text-xs tracking-[0.3em] text-[#5ee6eb]">{c.index}</p>
              <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-white">{c.title}</h3>
              <ul className="mt-4 space-y-1.5">
                {c.items.map((it) => (
                  <li key={it} className="text-[13px] font-semibold tracking-[0.14em] text-white/55">
                    — {it.toUpperCase()}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-white/45">{c.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
