"use client";

import Image from "next/image";
import { preload } from "react-dom";
import { motion } from "framer-motion";
import { revealFrom } from "@/lib/motion";
import Button from "./atoms/Button";

const WORDMARK_PHOTO =
  "https://images.unsplash.com/photo-1684695749267-233af13276d0?w=1800&h=700&q=78&fm=jpg&fit=crop";

const thumbs = [
  {
    src: "https://images.unsplash.com/photo-1581568736305-49a04e012c13?w=400&h=400&q=75&fm=jpg&fit=crop",
    alt: "Uniformed guard on static duty at a client site",
  },
  {
    src: "https://images.unsplash.com/photo-1684695749267-233af13276d0?w=400&h=400&q=75&fm=jpg&fit=crop",
    alt: "General goods stocked in a trading warehouse",
  },
  {
    src: "https://images.unsplash.com/photo-1746014929708-fcb859fd3185?w=400&h=400&q=75&fm=jpg&fit=crop",
    alt: "Fresh farm produce harvested for market",
  },
];

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-none">
      <path
        d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"
        stroke="#fff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  // The wordmark fill is the LCP element but it's a CSS background-clip:text
  // image, not a next/image <Image priority>, so it needs an explicit hint.
  preload(WORDMARK_PHOTO, { as: "image" });

  return (
    <section
      id="top"
      data-screen-label="Hero"
      aria-label="Hero"
      className="relative overflow-hidden bg-[#0a0f16] text-white pt-[clamp(100px,16vw,170px)]"
    >
      <div className="container relative z-[3]">
        <motion.div {...revealFrom(20)} className="inline-flex items-center gap-[9px] mb-[18px]">
          <span className="w-[22px] h-px bg-[var(--accent-2)] flex-none" aria-hidden />
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/[0.62]">
            Security · Trading · Farm produce
          </span>
        </motion.div>

        <motion.div
          {...revealFrom(20)}
          aria-hidden
          className="hero-wordmark-fill select-none pointer-events-none whitespace-nowrap font-[family-name:var(--font-display)] font-normal leading-[0.82] tracking-[0.09em] text-[clamp(74px,20.2vw,300px)] -mb-1.5"
          style={{
            backgroundImage: `url('${WORDMARK_PHOTO}')`,
            backgroundSize: "cover",
            backgroundPosition: "center 46%",
            filter: "saturate(.62) contrast(1.2) brightness(1.18)",
          }}
        >
          BLACKVOLT
        </motion.div>

        <div className="grid grid-cols-1 min-[981px]:grid-cols-[1.2fr_.8fr] gap-9 min-[981px]:gap-[52px] items-end pt-[34px] pb-[54px] min-[981px]:pb-[78px] mt-[26px] border-t border-white/10">
          <motion.div {...revealFrom(20)}>
            <h1 className="font-[family-name:var(--font-display)] font-normal leading-[0.98] tracking-[0.005em] text-[clamp(30px,3.3vw,46px)] max-w-[22ch] text-white">
              Professional <span className="text-[var(--accent-2)]">security</span> and trading
              solutions
            </h1>
            <p className="mt-[18px] max-w-[46ch] text-[16.5px] leading-[1.65] text-white/[0.66]">
              Uniformed guarding, import and export handling, general trading and fresh farm
              produce — one accountable partner for businesses, farms and homes across Zimbabwe.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Button href="tel:+263772404511" variant="solid-white">
                Request a quote
              </Button>
              <Button
                href="/#services"
                variant="outline-accent"
                showArrow={false}
                className="!bg-white/[0.06] !border-white/[0.3] !text-white hover:!bg-white/[0.14] hover:!border-white/[0.55]"
              >
                See our divisions
              </Button>
            </div>
          </motion.div>

          <motion.div {...revealFrom(20)} className="flex flex-col gap-5 items-start w-full">
            <div className="flex gap-[10px] w-full">
              {thumbs.map((t) => (
                <div key={t.src} className="hoverzoom photo aspect-square rounded-xl flex-1">
                  {/* TODO: replace with client photography */}
                  <Image src={t.src} alt={t.alt} width={400} height={400} sizes="(max-width: 980px) 33vw, 130px" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 w-full border border-white/[0.16] rounded-[14px] py-3.5 px-4 bg-white/[0.04]">
              <span className="w-9 h-9 rounded-[10px] bg-[var(--accent)] flex items-center justify-center flex-none">
                <PhoneIcon />
              </span>
              <div>
                <b className="block text-[14.5px] font-semibold text-white leading-tight">
                  +263 772 404 511
                </b>
                <span className="block mt-0.5 text-[12.5px] text-white/[0.55]">
                  Speak to J. Khumalo directly
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
