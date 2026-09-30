"use client";
import { Reveal } from "./Reveal";
import { drives } from "@/content/site";

export default function Drives() {
  return (
    <section aria-label="What drives me" className="relative overflow-hidden border-t border-white/5 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="eyebrow">07 — Personal Brand</p>
          <h2 className="headline-xl mt-4 text-3xl text-white md:text-5xl">WHAT DRIVES ME</h2>
        </Reveal>
      </div>
      <div className="mt-10 space-y-2" aria-hidden={false}>
        <div className="marquee-track gap-8 pr-8">
          {[...drives, ...drives].map((d, i) => (
            <span key={i} className="flex items-center gap-8">
              <span
                className={`whitespace-nowrap text-5xl font-black tracking-tight md:text-8xl ${
                  i % 2 ? "text-transparent" : "text-white"
                }`}
                style={i % 2 ? { WebkitTextStroke: "1px rgba(255,255,255,0.35)" } : undefined}
              >
                {d}
              </span>
              <span className="h-2 w-2 rounded-full bg-[#7c5cff]" aria-hidden />
            </span>
          ))}
        </div>
        <p className="sr-only">{drives.join(", ")}</p>
      </div>
    </section>
  );
}
