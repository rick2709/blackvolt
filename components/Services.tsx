"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { revealFrom, staggerContainer, staggerItem } from "@/lib/motion";
import Eyebrow from "./atoms/Eyebrow";
import Button from "./atoms/Button";

const headingClass =
  "font-[family-name:var(--font-heading)] font-bold tracking-[-0.028em] leading-[1.06] text-[var(--ink)]";

const services = [
  {
    number: "01",
    title: "Security guard services",
    copy: "Vetted, uniformed guards for static guarding, premises patrols and asset protection, with supervisor check-ins and incident reporting.",
    href: "/services/security-guard-services",
    // TODO: replace with client photography
    src: "https://images.unsplash.com/photo-1581568736305-49a04e012c13?w=700&h=525&q=75&fm=jpg&fit=crop",
    alt: "Uniformed guard on static duty at a client site",
  },
  {
    number: "02",
    title: "Import and exports",
    copy: "Sourcing and moving goods across borders — clearing, handling and delivery — with pricing quoted up front and no surprises on arrival.",
    href: "/services/import-and-exports",
    // TODO: replace with client photography
    src: "https://images.unsplash.com/photo-1645736315000-6f788915923b?w=700&h=525&q=75&fm=jpg&fit=crop",
    alt: "Goods handled for import and export",
  },
  {
    number: "03",
    title: "General trading",
    copy: "Supply of general goods to businesses, institutions and retail customers, in volumes that suit a single shop or a full tender.",
    href: "/services/general-trading",
    // TODO: replace with client photography
    src: "https://images.unsplash.com/photo-1684695749267-233af13276d0?w=700&h=525&q=75&fm=jpg&fit=crop",
    alt: "General goods stocked in a trading warehouse",
  },
  {
    number: "04",
    title: "Farm produce",
    copy: "Fresh produce supplied to markets, retailers and bulk buyers, moved quickly from farm gate to shelf so it arrives in condition.",
    href: "/services/farm-produce",
    // TODO: replace with client photography
    src: "https://images.unsplash.com/photo-1746014929708-fcb859fd3185?w=700&h=525&q=75&fm=jpg&fit=crop",
    alt: "Fresh farm produce harvested for market",
  },
];

export default function Services() {
  return (
    <section id="services" data-screen-label="Services" aria-label="Services" className="bg-[var(--paper)]">
      <div className="container">
        <motion.div {...revealFrom(30)} className="flex flex-wrap gap-10 justify-between items-end mb-14">
          <div>
            <Eyebrow>Our services</Eyebrow>
            <h2 className={`mt-4 max-w-[16ch] text-[clamp(29px,3.1vw,44px)] ${headingClass}`}>
              Four divisions, one accountable partner.
            </h2>
          </div>
          <div className="max-w-[380px]">
            <p className="mb-5 text-base leading-[1.65] text-[var(--muted)]">
              Import and exports, general trading, farm produce and security guard services —
              delivered with value for money and highly competitive pricing.
            </p>
            <Button
              href="mailto:sajuniya63@gmail.com"
              variant="outline-accent"
              className="!text-[var(--ink)] !border-[var(--line-2)] !bg-transparent hover:!border-[var(--accent)]"
            >
              Talk to us
            </Button>
          </div>
        </motion.div>

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 min-[621px]:grid-cols-2 min-[1081px]:grid-cols-4 gap-6"
        >
          {services.map((s) => (
            <motion.div key={s.number} {...staggerItem(30)} className="h-full">
              <Link
                href={s.href}
                className="hoverzoom group flex flex-col h-full bg-white border border-[var(--line)] rounded-[var(--radius-lg)] overflow-hidden transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-[3px] hover:shadow-[0_18px_40px_rgba(14,21,32,0.12)]"
              >
                <div className="photo aspect-[4/3] w-full flex-none">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={700}
                    height={525}
                    sizes="(max-width: 620px) 100vw, (max-width: 1080px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-[11px] font-semibold text-[var(--accent)] tracking-[0.14em]">
                    {s.number}
                  </span>
                  <h3 className="mt-3 mb-2 text-[19px] font-[family-name:var(--font-heading)] font-bold tracking-[-0.028em] leading-[1.15] text-[var(--ink)]">
                    {s.title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.6] text-[var(--muted)]">{s.copy}</p>
                  <div className="mt-auto pt-6 flex items-center gap-2 text-[var(--ink)]">
                    <span className="text-base font-medium">Enquire</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="flex-none transition-transform duration-300 ease-out group-hover:translate-x-1"
                    >
                      <path
                        d="M3 8h9M8.5 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
