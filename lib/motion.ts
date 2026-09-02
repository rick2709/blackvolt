export const ease = [0.16, 1, 0.3, 1] as const;

export function revealFrom(y: number) {
  return {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.9, ease, delay: 0.2 },
  } as const;
}

export const staggerContainer = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.2 },
  variants: {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  },
} as const;

export function staggerItem(y: number) {
  return {
    variants: {
      hidden: { opacity: 0, y },
      show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
    },
  } as const;
}
