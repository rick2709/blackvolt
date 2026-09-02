import type { Metadata } from "next";
import DivisionTemplate from "@/components/DivisionTemplate";
import {
  GlobeIcon,
  TruckIcon,
  TagIcon,
  ClipboardIcon,
  HandshakeIcon,
  PackageIcon,
} from "@/components/icons/LineIcons";

export const metadata: Metadata = {
  title: "Import And Exports | Black Volt Investments",
  description:
    "Sourcing and moving goods across borders with reliable handling and competitive pricing.",
};

export default function ImportAndExportsPage() {
  return (
    <DivisionTemplate
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/#services" },
        { label: "Import And Exports" },
      ]}
      heroLabel="Cross-Border Trade"
      heroHeading={
        <>
          IMPORT AND <span className="text-[var(--accent)]">EXPORT</span> SOLUTIONS
        </>
      }
      wordmark="IMPORTS"
      heroImage={{
        // TODO: replace with client photography
        src: "https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?fm=jpg&q=80&w=1200&auto=format&fit=crop",
        alt: "Goods being loaded and cleared for export",
      }}
      overviewHeading={
        <>
          MOVING GOODS ACROSS <span className="text-[var(--accent)]">BORDERS</span> RELIABLY
        </>
      }
      overviewParagraph="Black Volt Investments sources and moves goods across borders with reliable handling and competitive pricing. Whether you need to import goods for your business or export produce and products, we manage the process with minimal friction and maximum value for money."
      featuresHeading="WHAT OUR IMPORT AND EXPORT SERVICE COVERS"
      featuresParagraph="End-to-end support for cross-border trade in Zimbabwe and the region."
      features={[
        {
          icon: <GlobeIcon />,
          title: "Cross-Border Sourcing",
          copy: "We source goods from regional and international suppliers on your behalf.",
        },
        {
          icon: <TruckIcon />,
          title: "Reliable Logistics",
          copy: "Goods moved with care and tracked from origin to destination.",
        },
        {
          icon: <TagIcon />,
          title: "Competitive Pricing",
          copy: "Highly competitive rates on every import and export quotation.",
        },
        {
          icon: <ClipboardIcon />,
          title: "Documentation Support",
          copy: "Assistance with the paperwork and compliance requirements for cross-border trade.",
        },
        {
          icon: <HandshakeIcon />,
          title: "Trusted Partnerships",
          copy: "Established relationships with suppliers and handlers across the region.",
        },
        {
          icon: <PackageIcon />,
          title: "Bulk and Retail Orders",
          copy: "We handle both bulk commercial orders and smaller retail supply runs.",
        },
      ]}
      ctaHeading={
        <>
          READY TO MOVE <span className="text-[var(--accent)]">GOODS</span> ACROSS BORDERS?
        </>
      }
      ctaParagraph="Tell us what you need to source or move and we will come back with a competitive quotation. Call +263 772 404 511 or email sajuniya63@gmail.com."
      ctaBg={{
        // TODO: replace with client photography
        src: "https://images.unsplash.com/photo-1494961104209-3c223057bd26?fm=jpg&q=80&w=1800&auto=format&fit=crop",
        alt: "Goods being checked and dispatched",
      }}
    />
  );
}
