"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { divisions } from "@/lib/divisions";
import { ChevronDownIcon } from "./icons/LineIcons";
import Button from "./atoms/Button";

const navLinkClass =
  "text-lg leading-[23.4px] font-medium tracking-[-0.54px] text-white transition-opacity duration-[250ms] ease-out hover:opacity-70";

function ActiveDot({ active }: { active: boolean }) {
  if (!active) return null;
  return <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)] mr-2 align-middle flex-none" aria-hidden />;
}

function WrenchIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="flex-none">
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

type MobileEntry =
  | { type: "link"; href: string; label: string }
  | { type: "services" };

const mobileEntries: MobileEntry[] = [
  { type: "link", href: "/", label: "Home" },
  { type: "link", href: "/#about", label: "About" },
  { type: "services" },
  { type: "link", href: "/contact", label: "Contact" },
  { type: "link", href: "/#faq", label: "FAQ" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [narrow, setNarrow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const isServicesActive = pathname.startsWith("/services");
  const isContactActive = pathname === "/contact";

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const onChange = () => {
      setNarrow(mq.matches);
      setMenuOpen(false);
    };
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Navbar isn't hoisted into a shared layout — each page renders its own
  // instance, so it fully remounts (fresh state) on every top-level route
  // change. No effect is needed to reset dropdown/menu state on navigation;
  // closing them directly at each interaction site (below) covers same-mount
  // cases like closing the mobile overlay.
  function closeMobileMenu() {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  }

  // Focus trap: keep Tab cycling inside the overlay and Escape closes it.
  useEffect(() => {
    if (!menuOpen) return;
    const container = menuRef.current;
    if (!container) return;
    const focusable = Array.from(
      container.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")
    );
    focusable[0]?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeMobileMenu();
        return;
      }
      if (e.key !== "Tab" || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  if (narrow) {
    return (
      <>
        <div className="fixed top-0 left-0 w-full h-16 bg-[var(--ink)] border-b border-[var(--accent)]/40 z-[60] flex items-center justify-between px-5">
          <Link href="/" className="flex items-center gap-2">
            <WrenchIcon size={22} />
            <span className="font-[family-name:var(--font-display)] text-2xl tracking-[0.5px] text-white">
              BLACK VOLT
            </span>
          </Link>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => (menuOpen ? closeMobileMenu() : setMenuOpen(true))}
            className="w-11 h-11 rounded-[10px] bg-[var(--accent)] inline-flex items-center justify-center cursor-pointer"
          >
            {menuOpen ? (
              <span className="text-white text-[22px] leading-none">✕</span>
            ) : (
              <span className="flex flex-col gap-1">
                <span className="block w-[18px] h-0.5 bg-white" />
                <span className="block w-[18px] h-0.5 bg-white" />
                <span className="block w-[18px] h-0.5 bg-white" />
              </span>
            )}
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              ref={menuRef}
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="fixed inset-0 bg-[var(--ink-deep)] z-[55] pt-[104px] px-6 pb-6 flex flex-col overflow-y-auto"
            >
              {mobileEntries.map((entry, i) => {
                if (entry.type === "services") {
                  return (
                    <motion.div
                      key="services"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      <button
                        type="button"
                        aria-expanded={mobileServicesOpen}
                        aria-controls="mobile-services-sublist"
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        className="w-full h-[54px] flex items-center justify-between text-lg font-medium tracking-[-0.54px] cursor-pointer bg-transparent border-none p-0 font-[family-name:var(--font-sans)] text-white"
                      >
                        <span className="inline-flex items-center">
                          <ActiveDot active={isServicesActive} />
                          Services
                        </span>
                        <ChevronDownIcon
                          size={14}
                          className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileServicesOpen && (
                          <motion.div
                            id="mobile-services-sublist"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col pb-2">
                              {divisions.map((d, di) => (
                                <motion.a
                                  key={d.slug}
                                  href={d.href}
                                  onClick={closeMobileMenu}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: di * 0.05 }}
                                  className="h-[46px] pl-5 flex items-center text-base font-normal tracking-[-0.4px] text-white"
                                >
                                  <ActiveDot active={pathname === d.href} />
                                  {d.label}
                                </motion.a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                const isActive = pathname === entry.href;
                return (
                  <motion.a
                    key={entry.href}
                    href={entry.href}
                    onClick={closeMobileMenu}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="h-[54px] flex items-center text-lg font-medium tracking-[-0.54px] text-white"
                  >
                    <ActiveDot active={isActive} />
                    {entry.label}
                  </motion.a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  return (
    <nav className="absolute top-6 left-1/2 -translate-x-1/2 w-full max-w-[1280px] z-10 flex items-center justify-between px-[30px]">
      <Link href="/" className="flex items-center gap-[10px]">
        <WrenchIcon />
        <span className="font-[family-name:var(--font-display)] text-[28px] tracking-[0.5px] text-white">
          BLACK VOLT
        </span>
      </Link>
      <div className="flex items-center gap-7">
        <Link href="/" className={navLinkClass}>
          Home
        </Link>
        <Link href="/#about" className={navLinkClass}>
          About
        </Link>

        <div
          className="relative"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
          onFocus={() => setServicesOpen(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setServicesOpen(false);
          }}
        >
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded={servicesOpen}
            onClick={() => setServicesOpen((v) => !v)}
            className={`${navLinkClass} inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0 font-[family-name:var(--font-sans)]`}
          >
            <ActiveDot active={isServicesActive} />
            Services
            <ChevronDownIcon
              className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
            />
          </button>
          <AnimatePresence>
            {servicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="absolute top-full left-0 mt-2 min-w-[260px] bg-[var(--ink)] border border-[var(--accent)]/20 rounded-2xl p-3 z-50"
              >
                {divisions.map((d) => (
                  <Link
                    key={d.slug}
                    href={d.href}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-[10px] transition-colors duration-200 ease-out text-white hover:bg-[var(--accent)]/10 ${
                      pathname === d.href ? "bg-[var(--accent)]/10" : ""
                    }`}
                  >
                    <d.icon size={20} className="flex-none" />
                    <span className="text-base font-medium">{d.label}</span>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link href="/contact" className={`${navLinkClass} inline-flex items-center`}>
          <ActiveDot active={isContactActive} />
          Contact
        </Link>
        <Link href="/#faq" className={navLinkClass}>
          FAQ
        </Link>
      </div>
      <Button href="/contact" variant="solid-white" className="w-[150px] justify-center">
        Get A Quote
      </Button>
    </nav>
  );
}
