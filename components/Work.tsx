"use client";

import { motion } from "framer-motion";
import SplitText from "./SplitText";
import RiskPulse from "./visuals/RiskPulse";
import VoiceWave from "./visuals/VoiceWave";

const projects = [
  {
    index: "01",
    name: "FinSentinel",
    tagline: "AI-powered real-time fraud detection system.",
    description:
      "A full-stack fintech platform analyzing transactions in real time — ML-based risk scoring with XGBoost, rule-based detection, explainable AI, and live analytics dashboards.",
    tech: ["Python / Flask", "Next.js", "MongoDB", "XGBoost", "Scikit-learn"],
    github: "https://github.com/jeswin08/FinSentinel.git",
    Visual: RiskPulse,
    accent: "amber" as const,
  },
  {
    index: "02",
    name: "WhisperPen",
    tagline: "AI-powered note-taking application.",
    description:
      "A full-stack note app with REST APIs for note management, plus AI services for text-to-speech, translation, and auto-tagging — built for a fast, uninterrupted writing flow.",
    tech: ["Node.js", "Express.js", "MongoDB", "OpenAI APIs"],
    github: "https://github.com/jeswin08/WhisperPen.git",
    Visual: VoiceWave,
    accent: "teal" as const,
  },
];

export default function Work() {
  return (
    <section id="work" className="relative border-t border-line">
      <div className="px-6 pt-24 sm:px-10 sm:pt-32">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
          02 / Selected Work
        </span>
        <h2 className="mt-4 font-display text-4xl font-light leading-tight text-paper sm:text-6xl">
          <SplitText text="Two things I'd point a recruiter to first." />
        </h2>
      </div>

      {projects.map((p) => (
        <ProjectPanel key={p.name} {...p} />
      ))}
    </section>
  );
}

function ProjectPanel({
  index,
  name,
  tagline,
  description,
  tech,
  github,
  Visual,
  accent,
}: (typeof projects)[number]) {
  const accentClass = accent === "amber" ? "text-amber" : "text-teal";
  const accentBorder = accent === "amber" ? "hover:border-amber" : "hover:border-teal";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      className="grid gap-10 border-b border-line px-6 py-16 sm:grid-cols-2 sm:items-center sm:gap-16 sm:px-10 sm:py-24"
    >
      <div className="order-2 sm:order-1">
        <span className={`font-mono text-xs tracking-[0.3em] ${accentClass}`}>
          {index}
        </span>
        <h3 className="mt-3 font-display text-4xl italic font-light text-paper sm:text-5xl">
          {name}
        </h3>
        <p className="mt-4 max-w-md text-base text-paper/70 sm:text-lg">
          {tagline}
        </p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
          {description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-line px-3 py-1 font-mono text-[11px] tracking-wide text-muted"
            >
              {t}
            </li>
          ))}
        </ul>

        <a
          href={github}
          target="_blank"
          rel="noreferrer noopener"
          className={`group mt-8 inline-flex items-center gap-3 border border-line px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-paper transition-colors duration-300 ${accentBorder}`}
        >
          View on GitHub
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            ↗
          </span>
        </a>
      </div>

      <div className="order-1 aspect-[4/3] w-full rounded-sm border border-line bg-ink-raised sm:order-2">
        <Visual />
      </div>
    </motion.div>
  );
}
