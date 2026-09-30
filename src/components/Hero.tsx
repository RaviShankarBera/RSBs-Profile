"use client";
import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import RotatingKeywords from "./RotatingKeywords";
import { profile } from "@/content/site";

const HeroScene = dynamic(() => import("./three/HeroScene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,92,255,0.18),transparent_65%)]" />,
});

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" aria-label="Intro" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* 3D layer */}
      <div className="absolute inset-0" role="img" aria-label={profile.avatarAlt}>
        <HeroScene />
      </div>
      {/* cinematic vignette + readability */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_50%_38%,transparent_20%,rgba(6,6,8,0.55)_70%,#060608_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#060608] to-transparent" />
      <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pb-14 pt-28 md:justify-center md:px-8 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [...ease] }}
          className="mb-5 inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur"
        >
          <span className="dot-live" aria-hidden />
          <span className="text-[11px] font-semibold tracking-[0.24em] text-white/70">
            CURRENTLY · {profile.currentRole.label} · {profile.currentRole.company}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: reduce ? 0 : 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.08, ease: [...ease] }}
          className="headline-xl text-glow text-[15vw] text-white sm:text-[11vw] lg:text-[7.5rem]"
        >
          {profile.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: reduce ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.18, ease: [...ease] }}
          className="mt-3 text-[13px] font-bold tracking-[0.42em] text-white/70 md:text-sm"
        >
          {profile.subHeadline} · <RotatingKeywords words={profile.rotatingKeywords} />
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/60 md:text-base"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.42, ease: [...ease] }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#experience"
            className="rounded-full bg-white px-7 py-3.5 text-[12px] font-extrabold tracking-[0.18em] text-black transition hover:bg-[#c9c2ff]"
          >
            VIEW MY JOURNEY
          </a>
          <a
            href="#contact"
            className="glass rounded-full px-7 py-3.5 text-[12px] font-extrabold tracking-[0.18em] text-white transition hover:border-white/30 hover:bg-white/10"
          >
            LET&apos;S CONNECT
          </a>
        </motion.div>

        <div className="mt-10 flex items-center gap-6 text-[10px] tracking-[0.28em] text-white/35">
          <span>{profile.location.toUpperCase()}</span>
          <span className="h-px w-16 bg-white/15" aria-hidden />
          <span>SCROLL TO EXPLORE</span>
        </div>
      </div>
    </section>
  );
}
