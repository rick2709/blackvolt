"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { revealFrom, staggerContainer, staggerItem } from "@/lib/motion";
import Eyebrow from "./atoms/Eyebrow";

const headingClass =
  "font-[family-name:var(--font-heading)] font-bold tracking-[-0.028em] leading-[1.06] text-[var(--ink)]";

const images = [
  {
    // anchor — 2x2
    // TODO: replace with client photography
    src: "https://images.unsplash.com/photo-1672552226380-486fe900b322?w=1100&h=740&q=75&fm=jpg&fit=crop",
    alt: "Warehouse operations",
    width: 1100,
    height: 740,
  },
  {
    // TODO: replace with client photography
    src: "https://images.unsplash.com/photo-1626237063335-3ea220b5ec45?w=700&h=470&q=75&fm=jpg&fit=crop",
    alt: "Guard in uniform on duty",
    width: 700,
    height: 470,
  },
  {
    // TODO: replace with client photography
    src: "https://images.unsplash.com/photo-1710149468014-3d0eb40caaeb?w=700&h=470&q=75&fm=jpg&fit=crop",
    alt: "Grain handled for supply",
    width: 700,
    height: 470,
  },
  {
    // TODO: replace with client photography
    src: "https://images.unsplash.com/photo-1741874299706-2b8e16839aaa?w=700&h=470&q=75&fm=jpg&fit=crop",
    alt: "Farm produce in the field",
    width: 700,
    height: 470,
  },
  {
    // TODO: replace with client photography
    src: "https://images.unsplash.com/photo-1687422809617-a7d97879b3b0?w=700&h=470&q=75&fm=jpg&fit=crop",
    alt: "Trader at a produce stand",
    width: 700,
    height: 470,
  },
  {
    // full-width band
    // TODO: replace with client photography
    src: "https://images.unsplash.com/photo-1746171013914-41f9fe4fbbca?w=1500&h=400&q=75&fm=jpg&fit=crop",
    alt: "Goods moving through town",
    width: 1500,
    height: 400,
  },
];

export default function Gallery() {
  return (
    <section id="work" data-screen-label="Gallery" aria-label="Gallery" className="bg-[var(--paper)]">
      <div className="container">
        <motion.div {...revealFrom(30)} className="flex flex-wrap gap-10 justify-between items-end mb-14">
          <div>
            <Eyebrow>Our work</Eyebrow>
            <h2 className={`mt-4 max-w-[16ch] text-[clamp(29px,3.1vw,44px)] ${headingClass}`}>
              Our operations in pictures.
            </h2>
          </div>
          <p className="max-w-[380px] text-[14.5px] leading-[1.6] text-[var(--muted)]">
            Uniformed guards on duty, trading operations and farm produce moving to market. Demo
            imagery — to be replaced with Black Volt&apos;s own photographs.
          </p>
        </motion.div>

        <motion.div {...staggerContainer} className="gallery">
          {images.map((img) => (
            <motion.div key={img.src} {...staggerItem(20)} className="hoverzoom w-full h-full">
              <div className="photo w-full h-full">
                <Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes="(max-width: 899px) 50vw, 25vw" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
