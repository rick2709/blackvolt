"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { revealFrom } from "@/lib/motion";
import { wordmarkClipStyle } from "@/lib/tokens";
import LabelPill from "./atoms/LabelPill";

export type Crumb = { label: string; href?: string };

type PageHeroProps = {
  label: string;
  heading: React.ReactNode;
  wordmark: string;
  breadcrumb: Crumb[];
};

export default function PageHero({ label, heading, wordmark, breadcrumb }: PageHeroProps) {
  return (
    <section
      aria-label="Page header"
      className="relative overflow-hidden bg-[var(--ink)] min-h-[clamp(400px,50vh,560px)] flex items-end px-[clamp(20px,3vw,30px)]"
    >
      <div
        aria-hidden
        className="absolute -top-24 -right-24 w-[474px] h-[474px] rounded-full bg-[var(--accent)] blur-[100px] opacity-40 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 bottom-0 opacity-[0.15] pointer-events-none select-none w-max"
      >
        <span
          className="font-[family-name:var(--font-display)]"
          style={{ fontSize: "min(20vw,380px)", lineHeight: 0.8, ...wordmarkClipStyle }}
        >
          {wordmark}
        </span>
      </div>

      <motion.div
        {...revealFrom(30)}
        className="relative z-[2] max-w-[1280px] w-full mx-auto pb-[clamp(48px,4vw,60px)]"
      >
        <LabelPill variant="dark">{label}</LabelPill>
        <h1 className="my-6 font-[family-name:var(--font-display)] font-normal text-[clamp(48px,6vw,80px)] leading-[clamp(48px,6vw,80px)] text-white">
          {heading}
        </h1>
        <nav aria-label="Breadcrumb" className="text-sm text-white/50">
          {breadcrumb.map((crumb, i) => (
            <span key={crumb.label}>
              {i > 0 && <span className="mx-2">→</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-white transition-colors duration-[250ms] ease-out">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      </motion.div>
    </section>
  );
}
