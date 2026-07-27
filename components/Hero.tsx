"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SplitText from "./SplitText";

const stack = [
  "Python",
  "Java",
  "Next.js",
  "Node.js",
  "Express.js",
  "Flask",
  "MongoDB",
  "REST APIs",
  "XGBoost",
  "Scikit-learn",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden px-6 pb-10 pt-28 sm:px-10 sm:pb-14 sm:pt-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative z-10 flex items-center gap-3">
        <motion.span
          className="h-1.5 w-1.5 rounded-full bg-teal"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
          Available for opportunities
        </span>
      </div>

      {/* Intro + Photo — grouped together as one paired block, scaling up to fill larger screens */}
      <div className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-[minmax(0,480px)_280px] sm:gap-8 lg:grid-cols-[minmax(0,620px)_380px] lg:gap-14 xl:grid-cols-[minmax(0,720px)_440px] xl:gap-20">
        <div>
          <h1 className="font-display text-[15vw] font-light leading-[0.92] tracking-tight text-paper sm:text-[6rem] lg:text-[7.5rem] xl:text-[8.5rem]">
            <SplitText text="Jeswin" immediate />
            <br />
            <SplitText
              text="Chacko"
              delay={0.12}
              immediate
              className="italic text-muted"
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="mt-6 max-w-md font-body text-lg text-paper/80 sm:text-xl lg:mt-8 lg:max-w-lg lg:text-2xl"
          >
            Software developer building full-stack products —{" "}
            <span className="text-teal">end to end</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.19, 1, 0.22, 1] }}
            className="mt-8 border border-line px-6 py-6 font-mono text-sm lg:mt-10 lg:max-w-lg lg:px-8 lg:py-8 lg:text-base"
          >
            <div className="flex items-center justify-between text-muted">
              <span className="text-xs uppercase tracking-[0.2em] lg:text-sm">
                Status
              </span>
              <span className="flex items-center gap-2 text-teal text-xs lg:text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
                Online
              </span>
            </div>
            <div className="mt-4 space-y-2.5 text-paper/85 lg:mt-6 lg:space-y-3.5">
              <p>Role → Software Developer</p>
              <p>Focus → Full-stack development</p>
              <p>Open to → Internships &amp; full-time roles</p>
              <p>Based in → Mumbai, India</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          className="relative aspect-[3/4] w-full max-w-[280px] self-start overflow-hidden border border-line justify-self-start sm:justify-self-end lg:max-w-none"
        >
          <Image
            src="/photo.jpg"
            alt="Jeswin Chacko"
            fill
            priority
            sizes="(min-width: 1280px) 440px, (min-width: 1024px) 380px, 280px"
            className="object-cover grayscale contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60" />
          <div className="absolute inset-0 bg-teal/10 mix-blend-color" />
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-col gap-8">
        <div className="overflow-hidden border-y border-line py-3">
          <motion.div
            className="flex gap-10 whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-muted"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            {[...stack, ...stack].map((t, i) => (
              <span key={i} className="flex items-center gap-10">
                {t}
                <span className="text-teal">•</span>
              </span>
            ))}
          </motion.div>
        </div>

        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-1 font-mono text-xs uppercase tracking-[0.2em] text-muted sm:flex-row sm:gap-6">
            <span>Computer Engineering Student — 2027</span>
            <span className="hidden sm:inline">/</span>
            <span>Mumbai, India</span>
          </div>

          <motion.a
            href="#work"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="group inline-flex w-fit items-center gap-3 border border-line px-6 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-paper transition-colors duration-300 hover:border-teal"
          >
            View Projects
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}