import { Reveal, Eyebrow } from "./Reveal";
import { articles } from "@/content/site";

export default function Insights() {
  return (
    <section
      id="insights"
      aria-label="Insights"
      className="relative border-t border-white/5 bg-[#08080d] py-24 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Eyebrow>06 — Insights</Eyebrow>
          <h2 className="headline-xl mt-4 max-w-4xl text-4xl text-white md:text-6xl">
            THOUGHTS, IDEAS &amp; EXPLORATIONS.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {articles.map((a) => (
            <Reveal key={a.id}>
              <article className="glass group flex h-full flex-col overflow-hidden rounded-2xl">
                <div className="flex items-center justify-between border-b border-white/8 px-7 py-4">
                  <span className="font-mono text-[11px] tracking-[0.24em] text-[#8fc3ff]">
                    {a.index} / {a.category}
                  </span>
                  <span className="text-[11px] tracking-[0.14em] text-white/35">{a.date}</span>
                </div>
                <div className="flex flex-1 flex-col p-7 md:p-9">
                  <h3 className="text-xl font-extrabold leading-snug tracking-tight text-white md:text-2xl">
                    {a.title}
                  </h3>
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-white/55">{a.excerpt}</p>
                  <div className="mt-7">
                    {a.href ? (
                      <a
                        href={a.href}
                        className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-white transition group-hover:gap-3"
                      >
                        READ ARTICLE <span aria-hidden>→</span>
                      </a>
                    ) : (
                      <span className="text-[11px] font-bold tracking-[0.22em] text-white/35">
                        READ ARTICLE · COMING SOON
                      </span>
                    )}
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-white via-[#4f8cff] to-[#2f6bff] opacity-0 transition group-hover:opacity-100" />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 font-mono text-[11px] tracking-[0.18em] text-white/30">
            + EXPANDABLE ARCHITECTURE — NEW ARTICLES SLOT IN FROM src/content/site.ts
          </p>
        </Reveal>
      </div>
    </section>
  );
}
