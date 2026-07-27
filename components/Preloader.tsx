"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setDone(true);
      const t = setTimeout(onComplete, 200);
      return () => clearTimeout(t);
    }

    let raf: number;
    const start = performance.now();
    const duration = 1600;

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out-ish curve so it settles rather than ticking linearly
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * 100));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDone(true);
        setTimeout(onComplete, 750);
      }
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
    >
      <div className="relative flex flex-col items-center gap-6 px-6 text-center">
        <span className="font-mono text-[11px] tracking-[0.3em] text-muted uppercase">
          Analyzing profile
        </span>

        <div className="font-display text-[18vw] leading-none sm:text-[9rem] font-light tabular-nums">
          <AnimatePresence mode="wait">
            {!done ? (
              <motion.span
                key="count"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-paper"
              >
                {count}
                <span className="text-amber">%</span>
              </motion.span>
            ) : (
              <motion.span
                key="verified"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                className="text-teal italic"
              >
                verified
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <div className="h-px w-[60vw] max-w-xs overflow-hidden bg-line sm:w-64">
          <motion.div
            className="h-full bg-gradient-to-r from-amber to-teal"
            initial={{ width: "0%" }}
            animate={{ width: `${count}%` }}
            transition={{ ease: "linear", duration: 0.1 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
