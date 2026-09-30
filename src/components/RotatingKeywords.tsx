"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function RotatingKeywords({ words }: { words: readonly string[] | string[] }) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2200);
    return () => clearInterval(id);
  }, [words.length, reduce]);

  return (
    <span className="relative inline-flex min-h-[1.2em] items-center overflow-hidden align-bottom" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: reduce ? 0 : 28, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: reduce ? 0 : -28, opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="bg-gradient-to-r from-[#a78bff] via-[#6ea8ff] to-[#5ee6eb] bg-clip-text font-extrabold text-transparent"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
