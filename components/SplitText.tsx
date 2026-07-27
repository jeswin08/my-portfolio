"use client";

import { motion } from "framer-motion";

export default function SplitText({
  text,
  className = "",
  delay = 0,
  stagger = 0.06,
  as: Tag = "span",
  immediate = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: React.ElementType;
  /** If true, animates on mount instead of waiting for scroll-into-view.
   *  Use this for anything above the fold (e.g. the Hero name). */
  immediate?: boolean;
}) {
  const words = text.split(" ");

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-top pr-[0.28em] last:pr-0"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            {...(immediate
              ? { animate: { y: "0%" } }
              : { whileInView: { y: "0%" }, viewport: { once: true } })}
            transition={{
              duration: 0.85,
              delay: delay + i * stagger,
              ease: [0.19, 1, 0.22, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}