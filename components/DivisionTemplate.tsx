"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ease, revealFrom, staggerContainer, staggerItem } from "@/lib/motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageHero, { type Crumb } from "./PageHero";
import SectionHeader from "./atoms/SectionHeader";
import Button from "./atoms/Button";
import CtaBand from "./CtaBand";

export type FeatureItem = {
  icon: React.ReactNode;
  title: string;
  copy: string;
};

export type DivisionTemplateProps = {
  breadcrumb: Crumb[];
  heroLabel: string;
  heroHeading: React.ReactNode;
  wordmark: string;
  heroImage: { src: string; alt: string };
  overviewHeading: React.ReactNode;
  overviewParagraph: string;
  featuresHeading: React.ReactNode;
  featuresParagraph: string;
  features: FeatureItem[];
  ctaHeading: React.ReactNode;
  ctaParagraph: string;
  ctaBg: { src: string; alt: string };
};

export default function DivisionTemplate({
  breadcrumb,
  heroLabel,
  heroHeading,
  wordmark,
  heroImage,
  overviewHeading,
  overviewParagraph,
  featuresHeading,
  featuresParagraph,
  features,
  ctaHeading,
  ctaParagraph,
  ctaBg,
}: DivisionTemplateProps) {
  return (
    <>
      <Navbar />
      <main>
        <PageHero label={heroLabel} heading={heroHeading} wordmark={wordmark} breadcrumb={breadcrumb} />

        <section aria-label="Overview" className="bg-[var(--cool)] py-[clamp(48px,4vw,60px)] px-[clamp(20px,3vw,30px)]">
          <div className="max-w-[1280px] mx-auto flex flex-wrap gap-16">
            <motion.div {...revealFrom(50)} className="flex-[1_1_500px]">
              <SectionHeader
                layout="stacked"
                label="What We Do"
                heading={overviewHeading}
                paragraph={overviewParagraph}
              />
              <div className="flex flex-wrap gap-4">
                <Button href="mailto:sajuniya63@gmail.com" variant="solid-accent">
                  Request A Quote
                </Button>
                {/* outline-dark hardcodes white text/black overlay, made for dark or photo
                    backgrounds; outline-accent keeps the accent border without the muddy
                    box on this light section (same substitution the brief makes for Contact). */}
                <Button href="tel:+263772404511" variant="outline-accent" className="!text-[var(--ink)] !border-[var(--accent)]">
                  Call Us
                </Button>
              </div>
            </motion.div>

            <motion.div {...revealFrom(50)} className="flex-[0_1_520px] min-w-[280px]">
              <div className="overflow-hidden rounded-[20px] h-[480px]">
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6, ease }}
                >
                  {/* TODO: replace with licensed/client photography */}
                  <Image
                    src={heroImage.src}
                    alt={heroImage.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 520px"
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section aria-label="What's included" className="bg-[var(--cool)] py-[clamp(48px,4vw,60px)] px-[clamp(20px,3vw,30px)]">
          <div className="max-w-[1280px] mx-auto">
            <SectionHeader
              layout="split"
              label="What's Included"
              heading={featuresHeading}
              paragraph={featuresParagraph}
            />
            <motion.div
              {...staggerContainer}
              className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6"
            >
              {features.map((f) => (
                <motion.div
                  key={f.title}
                  {...staggerItem(50)}
                  className="group bg-[var(--card)] rounded-2xl p-[28px_24px]"
                >
                  {f.icon}
                  <h3 className="mt-5 mb-2.5 font-[family-name:var(--font-display)] font-normal text-[clamp(22px,2vw,28px)] leading-[1.2] text-black transition-colors duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-[var(--accent)]">
                    {f.title}
                  </h3>
                  <p className="text-base leading-[20.8px] text-[var(--ink-80)]">{f.copy}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <CtaBand heading={ctaHeading} paragraph={ctaParagraph} bgSrc={ctaBg.src} bgAlt={ctaBg.alt} />
      </main>
      <Footer />
    </>
  );
}
