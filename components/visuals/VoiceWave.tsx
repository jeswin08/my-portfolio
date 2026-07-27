"use client";

import { motion } from "framer-motion";

const bars = [10, 22, 14, 34, 46, 28, 52, 38, 20, 44, 30, 16, 40, 24, 12];

export default function VoiceWave() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="h-full w-full"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="voiceGlow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="var(--signal-teal)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--signal-teal)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="400" height="300" fill="url(#voiceGlow)" />

      {/* transcription lines */}
      {[0, 1, 2].map((i) => (
        <motion.line
          key={i}
          x1="60"
          x2={i === 1 ? "300" : "260"}
          y1={210 + i * 16}
          y2={210 + i * 16}
          stroke="var(--color-line)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 + i * 0.15 }}
        />
      ))}

      {/* waveform bars */}
      {bars.map((h, i) => (
        <motion.rect
          key={i}
          x={40 + i * 22}
          width="6"
          rx="3"
          fill="var(--signal-teal)"
          initial={{ height: 4, y: 150 - 2 }}
          animate={{
            height: [h * 0.5, h, h * 0.4, h * 0.8, h * 0.5],
            y: [
              150 - (h * 0.5) / 2,
              150 - h / 2,
              150 - (h * 0.4) / 2,
              150 - (h * 0.8) / 2,
              150 - (h * 0.5) / 2,
            ],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            delay: i * 0.08,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}
