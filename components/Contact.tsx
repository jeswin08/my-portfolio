"use client";

import SplitText from "./SplitText";

const links = [
  { label: "Email", value: "jeswinchacko06@gmail.com", href: "mailto:jeswinchacko06@gmail.com" },
  { label: "GitHub", value: "GitHub", href: "https://github.com/jeswin08" },
  { label: "LinkedIn", value: "LinkedIn", href: "https://linkedin.com/in/jeswinchacko/" },
  { label: "Resume", value: "Download PDF", href: "/resume.pdf" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-line px-6 py-28 sm:px-10 sm:py-40"
    >
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
        04 / Contact
      </span>

      <h2 className="mt-4 max-w-3xl font-display text-5xl font-light leading-[1.05] text-paper sm:text-8xl">
        <SplitText text="Let's build" />
        <br />
        <SplitText text="something real." delay={0.15} className="italic text-muted" />
      </h2>

      <div className="mt-16 grid gap-6 border-t border-line pt-10 sm:grid-cols-2 sm:gap-10">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={l.href.startsWith("http") ? "noreferrer noopener" : undefined}
            className="group flex items-center justify-between border-b border-line pb-4 transition-colors duration-300 hover:border-teal"
          >
            <span>
              <span className="block font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
                {l.label}
              </span>
              <span className="mt-1 block font-display text-xl font-light text-paper sm:text-2xl">
                {l.value}
              </span>
            </span>
            <span className="font-mono text-lg text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-teal">
              →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
