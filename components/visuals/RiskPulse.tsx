"use client";

import { motion } from "framer-motion";

export default function RiskPulse() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="h-full w-full"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="riskGlow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="var(--signal-amber)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--signal-amber)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="400" height="300" fill="url(#riskGlow)" />

      {/* concentric radar rings */}
      {[40, 80, 120].map((r, i) => (
        <motion.circle
          key={r}
          cx="200"
          cy="150"
          r={r}
          fill="none"
          stroke="var(--color-line)"
          strokeWidth="1"
          initial={{ opacity: 0.3, scale: 0.9 }}
          animate={{ opacity: [0.15, 0.45, 0.15], scale: [0.95, 1, 0.95] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "200px 150px" }}
        />
      ))}

      {/* waveform / transaction trace */}
      <motion.path
        d="M 20 150 L 90 150 L 110 100 L 140 200 L 165 60 L 190 220 L 215 150 L 260 150 L 280 130 L 310 170 L 340 150 L 380 150"
        fill="none"
        stroke="var(--signal-teal)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: [0.19, 1, 0.22, 1] }}
      />

      {/* flagged anomaly point */}
      <motion.circle
        cx="165"
        cy="60"
        r="4"
        fill="var(--signal-amber)"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.4, duration: 0.4 }}
      />
      <motion.circle
        cx="165"
        cy="60"
        r="10"
        fill="none"
        stroke="var(--signal-amber)"
        strokeWidth="1"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, delay: 1.6 }}
        style={{ transformOrigin: "165px 60px" }}
      />
    </svg>
  );
}
