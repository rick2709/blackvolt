"use client";

import { motion } from "framer-motion";
import { revealFrom } from "@/lib/motion";

const sectors = [
  "Mining",
  "Agriculture",
  "Retail & wholesale",
  "Schools",
  "Residential estates",
  "Logistics & warehousing",
];

function Dot() {
  return <span className="w-1 h-1 rounded-full bg-[var(--accent)] flex-none" aria-hidden />;
}

export default function SectorStrip() {
  const rowClass = "text-[12.5px] font-medium uppercase tracking-[0.11em]";

  const parts: React.ReactNode[] = [
    <span key="label" className={`${rowClass} text-white`}>
      Sectors We Serve
    </span>,
    <Dot key="dot-label" />,
  ];
  sectors.forEach((sector, i) => {
    parts.push(
      <span key={sector} className={`${rowClass} text-white/70`}>
        {sector}
      </span>
    );
    if (i < sectors.length - 1) parts.push(<Dot key={`dot-${sector}`} />);
  });

  return (
    <section aria-label="Sectors we serve" className="bg-[var(--ink-2)] py-[22px]">
      <motion.div
        {...revealFrom(16)}
        className="container flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
      >
        {parts}
      </motion.div>
    </section>
  );
}
