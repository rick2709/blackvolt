"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { revealFrom } from "@/lib/motion";
import Eyebrow from "./atoms/Eyebrow";
import Button from "./atoms/Button";

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-none">
      <path
        d="M6.5 3.5l3 3-2 2.5a12 12 0 0 0 7.5 7.5l2.5-2 3 3-2.5 3C13 22 2 11 3.5 6z"
        stroke="#FFFFFF"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type CtaBandProps = {
  heading?: React.ReactNode;
  paragraph?: React.ReactNode;
  bgSrc?: string;
  bgAlt?: string;
};

const defaultHeading = "Need reliable guards or a competitive supply partner?";

const defaultParagraph =
  "Whether it is uniformed security cover or a supply partner for imports, general goods or farm produce, Black Volt Investments is ready to quote.";

export default function CtaBand({
  heading = defaultHeading,
  paragraph = defaultParagraph,
  bgSrc = "https://images.unsplash.com/photo-1523294557-3637e1db3f33?fm=jpg&q=80&w=1800&auto=format&fit=crop",
  bgAlt = "Guarded premises at dusk with a supply vehicle",
}: CtaBandProps) {
  return (
    <section
      data-screen-label="CTA"
      aria-label="Request a quote"
      className="relative overflow-hidden min-h-[clamp(480px,60vh,640px)] py-[clamp(78px,7.6vw,116px)] flex items-center justify-center"
    >
      <div className="absolute inset-0">
        {/* TODO: replace with licensed/client photography */}
        <Image
          src={bgSrc}
          alt={bgAlt}
          fill
          sizes="100vw"
          className="object-cover"
          style={{ filter: "saturate(.45) contrast(1.05) brightness(.4)" }}
        />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(14,21,32,0.72), rgba(14,21,32,0.9))" }}
      />
      <motion.div {...revealFrom(30)} className="relative z-[2] max-w-[640px] text-center px-6">
        <Eyebrow align="center" labelClassName="text-white/70">
          Get started
        </Eyebrow>
        <h2 className="mt-5 mb-5 max-w-[19ch] mx-auto font-[family-name:var(--font-heading)] font-bold tracking-[-0.028em] text-[clamp(30px,3.6vw,52px)] leading-[1.1] text-white">
          {heading}
        </h2>
        <p className="mb-7 text-base leading-[1.6] text-white/90">{paragraph}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="tel:+263772404511" variant="solid-white">
            Request a quote
          </Button>
          <Button
            href="tel:+263772404511"
            variant="outline-accent"
            className="!bg-white/[0.06] !border-white/[0.28] !text-white"
            icon={<PhoneIcon />}
            showArrow={false}
          >
            +263 772 404 511
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
