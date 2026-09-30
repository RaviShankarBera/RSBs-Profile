"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation, profile } from "@/content/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#060608]/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8"
      >
        <a href="#top" className="text-[13px] tracking-[0.22em] font-extrabold">
          RAVI SHANKAR <span className="text-[#6f9bff]">BERA</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navigation.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="text-[11px] font-semibold tracking-[0.2em] text-white/60 transition-colors hover:text-white"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-[11px] font-bold tracking-[0.18em] backdrop-blur transition hover:bg-white hover:text-black"
          >
            LET&apos;S CONNECT
          </a>
        </div>

        <button
          className="lg:hidden rounded-md border border-white/15 px-3 py-2 text-xs tracking-widest"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-[#08080c]/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="space-y-1 px-5 py-4">
              {navigation.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm tracking-[0.2em] text-white/80"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 text-[11px] text-white/40">
                {profile.currentRole.label} · {profile.currentRole.company}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
