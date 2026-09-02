"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { revealFrom, staggerContainer, staggerItem } from "@/lib/motion";

const items = [
  {
    id: "why-1",
    title: "End-to-end solutions",
    copy: "Guarding, imports, general goods and farm produce handled by one team.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 34 34" fill="none">
        <circle cx="17" cy="12" r="6" stroke="var(--accent)" strokeWidth="1.8" />
        <path d="M9 31c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M25 4l2.5 2.5L25 9" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "why-2",
    title: "Competitive prices",
    copy: "Value for money on every quotation, with the rate agreed before we start.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 34 34" fill="none">
        <circle cx="13" cy="12" r="5" stroke="var(--accent)" strokeWidth="1.8" />
        <circle cx="24" cy="14" r="4" stroke="var(--accent)" strokeWidth="1.8" />
        <path d="M5 29c0-4.4 3.6-8 8-8s8 3.6 8 8M24 22c3.3 0 6 2.7 6 6" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "why-3",
    title: "Experienced security guards",
    copy: "Vetted, uniformed personnel trained for static guarding and patrols.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 34 34" fill="none">
        <path d="M18 4h11v11L15 29 4 18 18 4z" stroke="var(--accent)" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="24" cy="10" r="2.2" fill="var(--accent)" />
      </svg>
    ),
  },
  {
    id: "why-4",
    title: "Personalised service",
    copy: "Excellent support with a direct line to management, not a call centre.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 34 34" fill="none">
        <path d="M7 15a10 10 0 0 1 20 0" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M5 15h24v3H5z" stroke="var(--accent)" strokeWidth="1.8" />
        <path d="M11 22h12M13 28h8" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section data-screen-label="Why choose us" aria-label="Why Choose Us" className="bg-[var(--paper-2)]">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <motion.div
          {...revealFrom(30)}
          className="hoverzoom relative min-h-[420px] lg:min-h-[520px] rounded-[var(--radius-lg)] overflow-hidden"
        >
          <div className="photo photo-dark absolute inset-0">
            {/* TODO: replace with client photography */}
            <Image
              src="https://images.unsplash.com/photo-1734255026082-82fdc81991f0?w=1000&h=900&q=75&fm=jpg&fit=crop"
              alt="Traders at a busy produce market"
              width={1000}
              height={900}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div
            className="absolute inset-x-0 bottom-0 p-8 pt-24"
            style={{ background: "linear-gradient(to top, rgba(14,21,32,0.93) 30%, transparent)" }}
          >
            <p className="text-white text-[19px] leading-[1.45] font-medium max-w-[36ch]">
              One partner for guarding, imports, general goods and produce. Fewer suppliers to
              chase. One number to call. One invoice at month end.
            </p>
          </div>
        </motion.div>

        <motion.div
          {...staggerContainer}
          className="grid auto-rows-[1fr] gap-[2px] bg-[var(--line)] rounded-[var(--radius-lg)] overflow-hidden border border-[var(--line)]"
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              {...staggerItem(20)}
              className="grid grid-cols-[38px_1fr] gap-[18px] items-start bg-white p-[26px_28px]"
            >
              <span className="w-[38px] h-[38px] rounded-full bg-[var(--accent-soft)] flex items-center justify-center flex-none">
                {item.icon}
              </span>
              <div>
                <h3 className="text-[16.5px] font-[family-name:var(--font-heading)] font-bold tracking-[-0.028em] leading-[1.2] text-[var(--ink)]">
                  {item.title}
                </h3>
                <p className="mt-1 text-[14.5px] leading-[1.55] text-[var(--muted)]">{item.copy}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
