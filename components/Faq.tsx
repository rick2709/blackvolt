"use client";

import { motion } from "framer-motion";
import { revealFrom, staggerContainer, staggerItem } from "@/lib/motion";
import Eyebrow from "./atoms/Eyebrow";
import Button from "./atoms/Button";

const headingClass =
  "font-[family-name:var(--font-heading)] font-bold tracking-[-0.028em] leading-[1.06] text-[var(--ink)]";

const faqs = [
  {
    q: "What services do you offer?",
    a: "Four divisions: security guard services, import and export handling, general trading, and farm produce supply. Clients can use one division or all four.",
  },
  {
    q: "Do you supply uniformed security guards?",
    a: "Yes. Vetted, uniformed guards for static guarding, premises patrols and asset protection, with supervisor visits and written incident reporting.",
  },
  {
    q: "Which areas do you cover?",
    a: "Head office is in Bulawayo and we cover Matabeleland and surrounding provinces. For larger contracts we deploy nationally.",
  },
  {
    q: "Are your guards experienced?",
    a: "Guards are vetted before deployment and trained for static guarding and patrol duties. Supervisors check posts through the shift, day and night.",
  },
  {
    q: "How are your prices set?",
    a: "Every job is quoted up front against the scope you give us. The rate on the quotation is the rate you pay.",
  },
  {
    q: "How do I get a quotation?",
    a: "Call +263 772 404 511, email us, or send your requirement through the form. Most quotations go out within one working day.",
  },
];

export default function Faq() {
  return (
    <section id="faq" data-screen-label="FAQ" aria-label="Frequently Asked Questions" className="bg-[var(--paper-2)]">
      <div className="container flex flex-wrap gap-16">
        <motion.div {...revealFrom(30)} className="flex-[1_1_380px] max-w-[420px]">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className={`mt-4 mb-5 max-w-[16ch] text-[clamp(29px,3.1vw,44px)] ${headingClass}`}>
            Answers to your common questions.
          </h2>
          <p className="mb-7 text-base leading-[1.65] text-[var(--muted)]">
            Quick answers on our guarding, trading, import and farm produce services. For anything
            else, call or email us directly.
          </p>
          <Button
            href="mailto:sajuniya63@gmail.com"
            variant="outline-accent"
            className="!text-[var(--ink)] !border-[var(--line-2)] !bg-transparent hover:!border-[var(--accent)]"
          >
            Ask a question
          </Button>
        </motion.div>

        <motion.div {...staggerContainer} className="flex-[1_1_480px] min-w-[280px] faq-list">
          {faqs.map((item, i) => (
            <motion.details key={item.q} {...staggerItem(20)} className="faq-item" open={i === 0}>
              <summary>
                {item.q}
                <span className="faq-toggle" aria-hidden />
              </summary>
              <p className="faq-answer">{item.a}</p>
            </motion.details>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
