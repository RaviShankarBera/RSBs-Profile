import { Reveal } from "./Reveal";
import { contact, socialLinks } from "@/content/site";

export default function Contact() {
  const emailHref = socialLinks.email ? `mailto:${socialLinks.email}` : undefined;

  return (
    <section id="contact" aria-label="Contact" className="relative overflow-hidden border-t border-white/5 py-28 md:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c5cff]/14 blur-[140px]" />
      <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
        <Reveal>
          <p className="eyebrow">08 — Contact</p>
          <h2 className="headline-xl text-glow mt-6 text-5xl text-white md:text-8xl">{contact.heading}</h2>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/60">{contact.supporting}</p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-7 py-3.5 text-[12px] font-extrabold tracking-[0.18em] text-black transition hover:bg-[#c9c2ff]"
            >
              LINKEDIN ↗
            </a>
            {emailHref ? (
              <a
                href={emailHref}
                className="glass rounded-full px-7 py-3.5 text-[12px] font-extrabold tracking-[0.18em] text-white transition hover:bg-white/10"
              >
                EMAIL
              </a>
            ) : (
              <span
                title="Add your email in src/content/site.ts → socialLinks.email"
                className="glass cursor-help rounded-full px-7 py-3.5 text-[12px] font-extrabold tracking-[0.18em] text-white/40"
              >
                EMAIL · SOON
              </span>
            )}
            {socialLinks.resumeUrl ? (
              <a
                href={socialLinks.resumeUrl}
                className="glass rounded-full px-7 py-3.5 text-[12px] font-extrabold tracking-[0.18em] text-white transition hover:bg-white/10"
              >
                RESUME
              </a>
            ) : (
              <span
                title="Add resume PDF to public/ and set socialLinks.resumeUrl"
                className="glass cursor-help rounded-full px-7 py-3.5 text-[12px] font-extrabold tracking-[0.18em] text-white/40"
              >
                RESUME · SOON
              </span>
            )}
            <a
              href={socialLinks.stacknity}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full px-7 py-3.5 text-[12px] font-extrabold tracking-[0.18em] text-white transition hover:bg-white/10"
            >
              STACKNITY ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
