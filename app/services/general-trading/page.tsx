import type { Metadata } from "next";
import DivisionTemplate from "@/components/DivisionTemplate";
import {
  StoreIcon,
  BuildingIcon,
  ShoppingBagIcon,
  TagIcon,
  RepeatIcon,
  PhoneIcon,
} from "@/components/icons/LineIcons";

export const metadata: Metadata = {
  title: "General Trading | Black Volt Investments",
  description:
    "Supply of general goods to businesses, institutions, and retail customers across Zimbabwe.",
};

export default function GeneralTradingPage() {
  return (
    <DivisionTemplate
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/#services" },
        { label: "General Trading" },
      ]}
      heroLabel="General Supply"
      heroHeading={
        <>
          GENERAL <span className="text-[var(--accent)]">TRADING</span> AND SUPPLY
        </>
      }
      wordmark="TRADING"
      heroImage={{
        // TODO: replace with client photography
        src: "https://images.unsplash.com/photo-1583686298564-46fbffda0707?fm=jpg&q=80&w=1200&auto=format&fit=crop",
        alt: "Goods in a trading warehouse",
      }}
      overviewHeading={
        <>
          SUPPLY OF GOODS TO <span className="text-[var(--accent)]">BUSINESSES</span> AND
          INSTITUTIONS
        </>
      }
      overviewParagraph="Black Volt Investments supplies general goods to businesses, institutions, and retail customers across Zimbabwe. We focus on value for money, reliable delivery, and highly competitive products — so you spend less time sourcing and more time running your operation."
      featuresHeading="WHAT OUR TRADING DIVISION SUPPLIES"
      featuresParagraph="General goods supplied to businesses, institutions, and retail customers."
      features={[
        {
          icon: <StoreIcon />,
          title: "Business Supply",
          copy: "General goods supplied to businesses of all sizes, on schedule and at competitive prices.",
        },
        {
          icon: <BuildingIcon />,
          title: "Institutional Orders",
          copy: "Supply to schools, hospitals, NGOs, and government institutions.",
        },
        {
          icon: <ShoppingBagIcon />,
          title: "Retail Customers",
          copy: "Goods available to retail buyers in flexible quantities.",
        },
        {
          icon: <TagIcon />,
          title: "Value For Money",
          copy: "Every quotation focuses on competitive pricing and end-result value.",
        },
        {
          icon: <RepeatIcon />,
          title: "Repeat Supply",
          copy: "Reliable repeat-order arrangements for businesses that need consistent stock.",
        },
        {
          icon: <PhoneIcon />,
          title: "Easy Ordering",
          copy: "Call or email J. Khumalo to place an order or request a quotation.",
        },
      ]}
      ctaHeading={
        <>
          NEED A <span className="text-[var(--accent)]">RELIABLE</span> SUPPLY PARTNER?
        </>
      }
      ctaParagraph="Whether it is a one-off order or an ongoing supply arrangement, Black Volt Investments will quote you competitively. Get in touch today."
      ctaBg={{
        // TODO: replace with client photography
        src: "https://images.unsplash.com/photo-1583686298564-46fbffda0707?fm=jpg&q=80&w=1800&auto=format&fit=crop",
        alt: "General goods in a trading warehouse",
      }}
    />
  );
}
