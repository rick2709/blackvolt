"use client";

import { motion } from "framer-motion";
import { revealFrom, staggerContainer, staggerItem } from "@/lib/motion";
import Eyebrow from "./atoms/Eyebrow";

const headingClass =
  "font-[family-name:var(--font-heading)] font-bold tracking-[-0.028em] leading-[1.06] text-[var(--ink)]";

const testimonials = [
  {
    quote:
      "The guards arrive on shift when they should and the supervisor actually checks on them. That alone put us ahead of where we were with our last provider.",
    name: "T. Moyo",
    role: "Operations manager, Bulawayo",
    initials: "TM",
  },
  {
    quote:
      "We asked for a quotation on a Friday and had it Monday morning, with the landed cost broken down properly. No hidden extras when the goods came through.",
    name: "S. Ncube",
    role: "Purchasing, retail group",
    initials: "SN",
  },
  {
    quote:
      "Produce turns up early and in good condition, which matters more than the price by the time it reaches the shelf. Easy people to deal with.",
    name: "R. Dube",
    role: "Wholesaler, Matabeleland",
    initials: "RD",
  },
];

function StarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="var(--accent)">
      <path d="M8 0.6l2.02 4.6 5.02.5-3.79 3.4 1.1 4.9L8 11.4l-4.35 2.6 1.1-4.9-3.79-3.4 5.02-.5z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section aria-label="Testimonials" className="bg-[var(--paper)]">
      <div className="container">
        <motion.div {...revealFrom(30)} className="flex flex-wrap gap-10 justify-between items-end mb-14">
          <div>
            <Eyebrow>Testimonials</Eyebrow>
            <h2 className={`mt-4 max-w-[16ch] text-[clamp(29px,3.1vw,44px)] ${headingClass}`}>
              What clients say about us.
            </h2>
          </div>
          <p className="max-w-[340px] text-[14.5px] leading-[1.6] text-[var(--muted)]">
            Placeholder quotes for this demo — to be swapped for real client references.
          </p>
        </motion.div>

        <motion.div {...staggerContainer} className="grid grid-cols-1 min-[1081px]:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              {...staggerItem(30)}
              className={`flex flex-col bg-white border border-[var(--line)] rounded-[var(--radius-lg)] p-[30px] ${
                i === 2 ? "max-[1080px]:hidden" : ""
              }`}
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, si) => (
                  <StarIcon key={si} />
                ))}
              </div>
              <p className="flex-1 text-[15.5px] leading-[1.68] text-[var(--ink)]">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 pt-5 border-t border-[var(--line)] flex items-center gap-3">
                <span className="w-[38px] h-[38px] rounded-full bg-[var(--ink)] flex items-center justify-center flex-none">
                  <span className="text-white text-[13px] font-semibold text-center leading-none">
                    {t.initials}
                  </span>
                </span>
                <div>
                  <div className="text-[14.5px] font-semibold text-[var(--ink)]">{t.name}</div>
                  <div className="text-[12.5px] text-[var(--muted)]">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
