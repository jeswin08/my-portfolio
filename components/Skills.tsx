"use client";

import { motion } from "framer-motion";
import SplitText from "./SplitText";

const groups = [
  { label: "Languages", items: ["Python", "Java", "C", "SQL"] },
  {
    label: "Frameworks",
    items: ["Node.js", "Express.js", "Flask", "Next.js"],
  },
  { label: "Databases", items: ["MongoDB", "REST APIs"] },
  {
    label: "AI / ML",
    items: ["XGBoost", "Scikit-learn", "OpenAI APIs"],
  },
  {
    label: "Tools",
    items: ["Android Studio", "VS Code", "Linux", "Windows", "macOS"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative border-t border-line px-6 py-24 sm:px-10 sm:py-32"
    >
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
        03 / Skills
      </span>
      <h2 className="mt-4 max-w-2xl font-display text-4xl font-light leading-tight text-paper sm:text-6xl">
        <SplitText text="The stack behind the score." />
      </h2>

      <div className="mt-16 divide-y divide-line border-t border-line">
        {groups.map((g, gi) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, delay: gi * 0.05 }}
            className="grid gap-3 py-6 sm:grid-cols-[1fr_3fr] sm:items-baseline sm:gap-8 sm:py-7"
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal">
              {g.label}
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="font-display text-lg font-light text-paper/90 sm:text-xl"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
