"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const links = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 mix-blend-difference sm:px-10 sm:py-7">
        <a
          href="#top"
          className="font-mono text-xs tracking-[0.2em] text-paper uppercase"
        >
          JC / 06
        </a>
        <nav className="hidden gap-8 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs tracking-[0.2em] text-paper uppercase transition-opacity hover:opacity-60"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="/resume.pdf"
          className="font-mono text-xs tracking-[0.2em] text-paper uppercase transition-opacity hover:opacity-60"
        >
          Resume
        </a>
      </header>
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-amber to-teal"
        style={{ scaleX: progress }}
      />
    </>
  );
}
