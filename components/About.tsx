"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative border-t border-line px-6 py-28 sm:px-10 sm:py-40">
      <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-[1fr_2.4fr] sm:gap-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-muted"
        >
          01 / About
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="font-display text-2xl font-light leading-[1.35] text-paper sm:text-4xl"
        >
          I'm a Computer Engineering student by day, relentless tool-experimenter by night.{" "}
          <span className="text-muted">
            I’m constantly experimenting with new tools, breaking things, and figuring out how to make software look and feel great. Whether I’m locked in solo focus mode or bouncing ideas around with a team, I’m all about creating clever, clean digital experiences.
          </span>{" "}
          Off-screen? I'm probably competitive gaming or testing out the latest dev tools.
        </motion.p>
      </div>
    </section>
  );
}