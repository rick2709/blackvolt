import type { Metadata } from "next";
import DivisionTemplate from "@/components/DivisionTemplate";
import {
  LeafIcon,
  TruckIcon,
  StoreIcon,
  ShoppingBagIcon,
  PackageIcon,
  TagIcon,
} from "@/components/icons/LineIcons";

export const metadata: Metadata = {
  title: "Farm Produce | Black Volt Investments",
  description:
    "Fresh farm produce supplied to markets, retailers, and bulk buyers across Zimbabwe.",
};

export default function FarmProducePage() {
  return (
    <DivisionTemplate
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/#services" },
        { label: "Farm Produce" },
      ]}
      heroLabel="Fresh Produce"
      heroHeading={
        <>
          FRESH <span className="text-[var(--accent)]">FARM</span> PRODUCE SUPPLY
        </>
      }
      wordmark="PRODUCE"
      heroImage={{
        // TODO: replace with client photography (reused from homepage svc-produce slot)
        src: "https://images.unsplash.com/photo-1702506183879-398318b92f6d?fm=jpg&q=80&w=1200&auto=format&fit=crop",
        alt: "Fresh farm produce ready for market",
      }}
      overviewHeading={
        <>
          FRESH PRODUCE SUPPLIED TO <span className="text-[var(--accent)]">MARKETS</span> AND
          BUYERS
        </>
      }
      overviewParagraph="Black Volt Investments supplies fresh farm produce to markets, retailers, and bulk buyers across Zimbabwe. We connect farms to buyers with reliable logistics, consistent quality, and competitive pricing — ensuring produce reaches you fresh and on time."
      featuresHeading="WHAT OUR PRODUCE DIVISION OFFERS"
      featuresParagraph="Fresh farm produce delivered reliably to markets, retailers, and bulk buyers."
      features={[
        {
          icon: <LeafIcon />,
          title: "Fresh Produce",
          copy: "Seasonal and staple farm produce sourced and supplied fresh.",
        },
        {
          icon: <TruckIcon />,
          title: "Reliable Delivery",
          copy: "Produce moved promptly to keep it fresh from farm to buyer.",
        },
        {
          icon: <StoreIcon />,
          title: "Market Supply",
          copy: "Direct supply to market traders and market operators.",
        },
        {
          icon: <ShoppingBagIcon />,
          title: "Retail Supply",
          copy: "Produce supplied to supermarkets, grocery stores, and retail outlets.",
        },
        {
          icon: <PackageIcon />,
          title: "Bulk Buyers",
          copy: "Bulk supply arrangements for large buyers, processors, and distributors.",
        },
        {
          icon: <TagIcon />,
          title: "Competitive Pricing",
          copy: "Value-for-money pricing on every produce quotation.",
        },
      ]}
      ctaHeading={
        <>
          NEED FRESH <span className="text-[var(--accent)]">PRODUCE</span> SUPPLIED RELIABLY?
        </>
      }
      ctaParagraph="Whether you are a market trader, retailer, or bulk buyer, Black Volt Investments can supply you. Call +263 772 404 511 or email us for a quotation."
      ctaBg={{
        // TODO: replace with client photography
        src: "https://images.unsplash.com/photo-1605732562742-3023a888e56e?fm=jpg&q=80&w=1800&auto=format&fit=crop",
        alt: "Farm produce ready for supply",
      }}
    />
  );
}
