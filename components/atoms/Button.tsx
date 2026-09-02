"use client";

import { motion } from "framer-motion";
import { ease } from "@/lib/motion";

export type ButtonVariant = "solid-white" | "solid-accent" | "outline-accent" | "outline-dark";

const variantStyles: Record<ButtonVariant, string> = {
  "solid-white": "bg-white text-black border-transparent",
  "solid-accent": "bg-[var(--accent)] text-white border-transparent",
  "outline-accent": "bg-transparent text-white border-[var(--accent)]",
  "outline-dark": "bg-black/35 text-white border-white/35",
};

const parentVariants = { rest: { scale: 1 }, hover: { scale: 1.03 } };
const arrowVariants = { rest: { x: 0 }, hover: { x: 4 } };

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  icon?: React.ReactNode;
  showArrow?: boolean;
};

export default function Button({
  href,
  children,
  variant = "solid-accent",
  className = "",
  icon,
  showArrow = true,
}: ButtonProps) {
  return (
    <motion.a
      href={href}
      variants={parentVariants}
      initial="rest"
      whileHover="hover"
      transition={{ duration: 0.3, ease }}
      className={`h-[49px] px-5 py-[14px] rounded-[40px] border inline-flex items-center gap-2 whitespace-nowrap font-[family-name:var(--font-sans)] text-base font-medium tracking-[-0.48px] cursor-pointer ${variantStyles[variant]} ${className}`}
    >
      {icon}
      {children}
      {showArrow && (
        <motion.svg
          variants={arrowVariants}
          transition={{ duration: 0.3, ease }}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="flex-none"
        >
          <path
            d="M3 8h9M8.5 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      )}
    </motion.a>
  );
}
