import type { Metadata } from "next";

// Self-hosted fonts (avoids external Google Fonts fetch at build time)
import "@fontsource/fraunces/300.css";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/300-italic.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/fraunces/500-italic.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";

import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Jeswin Chacko — Full-Stack Developer",
  description:
    "Jeswin Chacko — Full-stack developer building AI/ML-powered products. FinSentinel, WhisperPen, and more.",
  metadataBase: new URL("https://jeswinchacko.dev"),
  openGraph: {
    title: "Jeswin Chacko — Full-Stack Developer",
    description: "Full-stack developer building AI/ML-powered products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
