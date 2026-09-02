"use client";

import { motion } from "framer-motion";
import { revealFrom } from "@/lib/motion";
import LabelPill from "./LabelPill";
import Button, { type ButtonVariant } from "./Button";

type SectionHeaderProps = {
  layout: "split" | "stacked";
  label: string;
  heading: React.ReactNode;
  paragraph?: React.ReactNode;
  button?: { href: string; label: string; variant?: ButtonVariant };
};

export default function SectionHeader({ layout, label, heading, paragraph, button }: SectionHeaderProps) {
  if (layout === "split") {
    return (
      <motion.div
        {...revealFrom(50)}
        className="flex flex-wrap gap-16 justify-between items-end mb-16"
      >
        <div>
          <LabelPill>{label}</LabelPill>
          <h2 className="mt-6 font-[family-name:var(--font-display)] font-normal text-[clamp(36px,3.4vw,48px)] leading-[clamp(36px,3.4vw,48px)] text-[var(--ink)]">
            {heading}
          </h2>
        </div>
        <div className="max-w-[390px]">
          {paragraph && (
            <p className="mb-5 text-base leading-[20.8px] tracking-[-0.48px] text-[var(--ink-80)]">
              {paragraph}
            </p>
          )}
          {button && (
            <Button href={button.href} variant={button.variant ?? "solid-accent"}>
              {button.label}
            </Button>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div {...revealFrom(50)} className="max-w-[500px]">
      <LabelPill>{label}</LabelPill>
      <h2 className="mt-6 mb-5 font-[family-name:var(--font-display)] font-normal text-[clamp(36px,3.4vw,48px)] leading-[clamp(36px,3.4vw,48px)] text-[var(--ink)]">
        {heading}
      </h2>
      {paragraph && (
        <p className="text-base leading-[20.8px] tracking-[-0.48px] text-[var(--ink-80)]">
          {paragraph}
        </p>
      )}
    </motion.div>
  );
}
