"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { revealFrom } from "@/lib/motion";
import { divisions } from "@/lib/divisions";

function WrenchIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="flex-none">
      <path
        d="M14.5 3.2a4.6 4.6 0 0 0 5.6 6.4L21 8.7l-8.4 8.4-1.4 4.4-3-3 4.4-1.4L21 8.7"
        stroke="#2F6FED"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="6.6" cy="6.6" r="3.4" stroke="#2F6FED" strokeWidth="1.7" />
    </svg>
  );
}

const pages = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Our work" },
  { href: "/#faq", label: "FAQ" },
];

const colHeadingClass =
  "mb-5 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-white/[0.42]";
const linkClass = "text-[15px] font-medium text-white/[0.62] transition-colors duration-[250ms] ease-out hover:text-white";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[var(--ink-2)] pt-20 pb-8">
      <div className="container">
        <motion.div
          {...revealFrom(30)}
          className="grid grid-cols-1 min-[621px]:grid-cols-2 min-[901px]:grid-cols-[1.5fr_1fr_1fr_1fr] gap-x-11 gap-y-10"
        >
          <div className="max-w-[360px]">
            <Link href="/" className="flex items-center gap-[10px]">
              <span className="w-9 h-9 rounded-full bg-[var(--accent-soft)] flex items-center justify-center flex-none">
                <WrenchIcon />
              </span>
              <span className="font-[family-name:var(--font-display)] text-2xl tracking-[0.5px] text-white">
                BLACK VOLT
              </span>
            </Link>
            <p className="mt-5 text-[15px] leading-[1.65] text-white/[0.62]">
              Security guarding, import and export, general trading and farm produce — delivered
              with value for money and highly competitive products.
            </p>
          </div>

          <div>
            <h4 className={colHeadingClass}>Contact</h4>
            <div className="flex flex-col gap-4">
              <span className={linkClass}>J. Khumalo</span>
              <span className={linkClass}>No 22 Cecil Road, Bulawayo</span>
              <a href="tel:+263772404511" className={linkClass}>
                +263 772 404 511
              </a>
              <a href="mailto:sajuniya63@gmail.com" className={linkClass}>
                sajuniya63@gmail.com
              </a>
              <span className={linkClass}>www.blackvolt.co.zw</span>
            </div>
          </div>

          <div>
            <h4 className={colHeadingClass}>Pages</h4>
            <div className="flex flex-col gap-4">
              {pages.map((p) => (
                <Link key={p.label} href={p.href} className={linkClass}>
                  {p.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className={colHeadingClass}>Divisions</h4>
            <div className="flex flex-col gap-4">
              {divisions.map((d) => (
                <Link key={d.slug} href={d.href} className={linkClass}>
                  {d.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          {...revealFrom(16)}
          className="mt-16 pt-5 border-t border-white/10 flex flex-wrap gap-4 justify-between"
        >
          <span className="text-[13.5px] text-white/[0.62]">
            © 2026 Black Volt Investments (Pvt) Ltd. All rights reserved.
          </span>
          <span className="text-[13.5px] text-white/[0.62]">Bulawayo, Zimbabwe</span>
        </motion.div>
      </div>
    </footer>
  );
}
