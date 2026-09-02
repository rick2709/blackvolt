"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { revealFrom } from "@/lib/motion";
import Eyebrow from "./atoms/Eyebrow";

const headingClass =
  "font-[family-name:var(--font-heading)] font-bold tracking-[-0.028em] leading-[1.06] text-[var(--ink)]";

function CountUpDivisions() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || reduced) return;
    const target = 4;
    const duration = 1200;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced]);

  const display = reduced ? 4 : count;

  return (
    <div
      ref={ref}
      className="font-[family-name:var(--font-heading)] font-bold text-[clamp(26px,2.6vw,34px)] leading-[1.1] text-[var(--ink)]"
    >
      {display}
    </div>
  );
}

const stats = [
  { value: null, label: "Divisions" },
  { value: "24/7", label: "Cover" },
  { value: "100%", label: "Vetted guards" },
  { value: "1", label: "Point of contact" },
];

export default function About() {
  return (
    <section id="about" data-screen-label="About" aria-label="About Black Volt Investments" className="bg-[var(--paper)]">
      <div className="container flex flex-wrap gap-16">
        <motion.div {...revealFrom(30)} className="flex-[1_1_560px]">
          <Eyebrow>About us</Eyebrow>
          <h2 className={`mt-4 mb-6 max-w-[16ch] text-[clamp(29px,3.1vw,44px)] ${headingClass}`}>
            A single partner across four working divisions.
          </h2>
          <div className="max-w-[560px] flex flex-col gap-4">
            <p className="text-base leading-[1.65] text-[var(--muted)]">
              Black Volt Investments is a Bulawayo-based company operating across{" "}
              <strong className="font-semibold text-[var(--ink)]">security guarding</strong>,{" "}
              <strong className="font-semibold text-[var(--ink)]">import and export</strong>,{" "}
              <strong className="font-semibold text-[var(--ink)]">general trading</strong> and{" "}
              <strong className="font-semibold text-[var(--ink)]">farm produce</strong>. We are new
              to the market and we compete on the things that matter to a client: people who turn
              up, prices that hold, and someone who answers the phone.
            </p>
            <p className="text-base leading-[1.65] text-[var(--muted)]">
              Because the four divisions sit under one roof, a client can secure a site, move
              goods across the border, stock a shop and take delivery of produce without managing
              four separate suppliers — and without four separate invoices.
            </p>
          </div>

          <div className="mt-10 pt-6 border-t border-[var(--line)]">
            <div className="grid grid-cols-2 min-[900px]:grid-cols-4 divide-x divide-[var(--line)]">
              {stats.map((stat, i) => (
                <div key={stat.label} className={`px-5 first:pl-0 ${i >= 2 ? "max-[899px]:pt-6" : ""}`}>
                  {stat.value === null ? (
                    <CountUpDivisions />
                  ) : (
                    <div className="font-[family-name:var(--font-heading)] font-bold text-[clamp(26px,2.6vw,34px)] leading-[1.1] text-[var(--ink)]">
                      {stat.value}
                    </div>
                  )}
                  <div className="mt-1.5 text-[12.5px] uppercase tracking-[0.06em] text-[var(--muted)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div {...revealFrom(30)} className="hoverzoom flex-[0_1_480px] min-w-[280px]">
          <div className="photo rounded-[var(--radius-lg)] aspect-[4/5] w-full">
            {/* TODO: replace with client photography */}
            <Image
              src="https://images.unsplash.com/photo-1517913451214-e22ce660e086?fm=jpg&q=70&w=900&auto=format&fit=crop"
              alt="Guards briefed before deployment"
              width={900}
              height={1125}
              sizes="(max-width: 768px) 100vw, 480px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
