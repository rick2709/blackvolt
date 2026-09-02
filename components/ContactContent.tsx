"use client";

import { motion } from "framer-motion";
import { revealFrom, staggerContainer, staggerItem } from "@/lib/motion";
import { divisions } from "@/lib/divisions";
import SectionHeader from "./atoms/SectionHeader";
import Button from "./atoms/Button";
import { PhoneIcon, MailIcon, MapPinIcon, GlobeIcon } from "./icons/LineIcons";

const contactDetails = [
  {
    icon: PhoneIcon,
    label: "Phone",
    value: "+263 772 404 511",
    href: "tel:+263772404511",
  },
  {
    icon: MailIcon,
    label: "Email",
    value: "sajuniya63@gmail.com",
    href: "mailto:sajuniya63@gmail.com",
  },
  {
    icon: MailIcon,
    label: "Alternative Email",
    value: "jkhumalo94@gmail.com",
    href: "mailto:jkhumalo94@gmail.com",
  },
  {
    icon: MapPinIcon,
    label: "Address",
    value: "No 22 Cecil Road, Bulawayo, Zimbabwe",
    href: undefined,
  },
  {
    icon: GlobeIcon,
    label: "Website",
    value: "www.blackvolt.co.zw",
    href: "https://www.blackvolt.co.zw",
  },
];

function ContactDetailCard({
  icon: Icon,
  label,
  value,
  href,
}: (typeof contactDetails)[number]) {
  const content = (
    <>
      <Icon size={34} className="flex-none" />
      <div>
        <div className="text-sm font-medium text-[rgba(14,21,32,0.5)] uppercase tracking-wide">
          {label}
        </div>
        <div className="mt-0.5 text-base font-medium text-[var(--ink)]">{value}</div>
      </div>
    </>
  );

  const className =
    "bg-[var(--card)] rounded-2xl px-6 py-5 flex items-center gap-4 transition-colors duration-[250ms] ease-out";

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        className={`${className} hover:bg-white`}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

const mapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY;

export default function ContactContent() {
  return (
    <>
      <section aria-label="Contact details" className="bg-[var(--cool)] py-[clamp(48px,4vw,60px)] px-[clamp(20px,3vw,30px)]">
        <div className="max-w-[1280px] mx-auto flex flex-wrap items-start gap-16">
          <motion.div {...revealFrom(50)} className="flex-[1_1_480px]">
            <SectionHeader
              layout="stacked"
              label="Reach Us"
              heading={
                <>
                  GET IN TOUCH WITH
                  <br />
                  OUR <span className="text-[var(--accent)]">TEAM</span>
                </>
              }
              paragraph="We handle all enquiries by phone and email. Call or email J. Khumalo directly and we will come back to you with a quotation or answer."
            />

            <div className="flex flex-col gap-4 mb-6">
              {contactDetails.map((detail) => (
                <ContactDetailCard key={detail.label} {...detail} />
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="tel:+263772404511" variant="solid-accent">
                Call Now
              </Button>
              {/* outline-accent hardcodes white text, made for dark/photo backgrounds;
                  overridden to ink text so it reads on this light section. */}
              <Button
                href="mailto:sajuniya63@gmail.com"
                variant="outline-accent"
                className="!text-[var(--ink)] !border-[var(--accent)]"
              >
                Send Email
              </Button>
            </div>
          </motion.div>

          <motion.div {...revealFrom(50)} className="flex-[1_1_480px] min-w-[280px]">
            <div className="overflow-hidden rounded-[20px] h-[520px] bg-[var(--card)]">
              {mapsApiKey ? (
                // TODO: replace YOUR_API_KEY with the project's Google Maps Embed API key
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=${mapsApiKey}&q=No+22+Cecil+Road,Bulawayo,Zimbabwe`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Black Volt Investments location"
                />
              ) : (
                <a
                  href="https://maps.google.com/?q=No+22+Cecil+Road,Bulawayo,Zimbabwe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex flex-col items-center justify-center gap-4 text-center p-8 transition-colors duration-[250ms] ease-out hover:bg-white"
                >
                  <MapPinIcon size={48} />
                  <span className="text-lg font-medium text-black">
                    No 22 Cecil Road, Bulawayo, Zimbabwe
                  </span>
                  <span className="text-sm text-[var(--ink-80)]">Open in Google Maps ↗</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section aria-label="Our divisions" className="bg-[var(--cool)] py-[clamp(48px,4vw,60px)] px-[clamp(20px,3vw,30px)]">
        <div className="max-w-[1280px] mx-auto">
          <motion.h2
            {...revealFrom(50)}
            className="text-center font-[family-name:var(--font-display)] font-normal text-[clamp(36px,3.4vw,48px)] leading-[clamp(36px,3.4vw,48px)] text-[var(--ink)]"
          >
            OUR FOUR DIVISIONS
          </motion.h2>
          <motion.div
            {...staggerContainer}
            className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 mt-12"
          >
            {divisions.map((division) => (
              <motion.div
                key={division.slug}
                {...staggerItem(50)}
                className="bg-[var(--card)] rounded-2xl p-[28px_24px] flex flex-col gap-3"
              >
                <division.icon />
                <h3 className="font-[family-name:var(--font-display)] font-normal text-[clamp(22px,2vw,28px)] leading-[1.2] text-black">
                  {division.label}
                </h3>
                <p className="text-base leading-[20.8px] text-[var(--ink-80)]">
                  {division.shortBlurb}
                </p>
                <div className="mt-2">
                  <Button href={division.href} variant="solid-accent">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
