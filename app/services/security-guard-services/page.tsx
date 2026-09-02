import type { Metadata } from "next";
import DivisionTemplate from "@/components/DivisionTemplate";
import {
  ShieldIcon,
  RouteIcon,
  LockIcon,
  PersonCheckIcon,
  PhoneIcon,
  ClockIcon,
} from "@/components/icons/LineIcons";

export const metadata: Metadata = {
  title: "Security Guard Services | Black Volt Investments",
  description:
    "Trained, uniformed security guards for static guarding, premises patrols, and asset protection across Zimbabwe.",
};

export default function SecurityGuardServicesPage() {
  return (
    <DivisionTemplate
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/#services" },
        { label: "Security Guard Services" },
      ]}
      heroLabel="Professional Security"
      heroHeading={
        <>
          PROFESSIONAL <span className="text-[var(--accent)]">SECURITY</span> GUARD SERVICES
        </>
      }
      wordmark="SECURITY"
      heroImage={{
        // TODO: replace with client photography
        src: "https://images.unsplash.com/photo-1772743227731-e16af7c8d85a?fm=jpg&q=80&w=1200&auto=format&fit=crop",
        alt: "Guards on duty at a business premises",
      }}
      overviewHeading={
        <>
          TRAINED GUARDS FOR <span className="text-[var(--accent)]">STATIC</span> AND PATROL
          DUTIES
        </>
      }
      overviewParagraph="Black Volt Investments deploys trained, uniformed security guards for static guarding, premises patrols, and asset protection across business and residential sites in Zimbabwe. We back every deployment with excellent personalized service and a direct line to management."
      featuresHeading="WHAT OUR SECURITY SERVICE INCLUDES"
      featuresParagraph="Everything you need for reliable, professional guarding cover."
      features={[
        {
          icon: <ShieldIcon />,
          title: "Static Guarding",
          copy: "Uniformed guards stationed at your premises entrance, reception, or perimeter 24/7.",
        },
        {
          icon: <RouteIcon />,
          title: "Premises Patrols",
          copy: "Scheduled patrol rounds to deter intruders and respond to incidents on your site.",
        },
        {
          icon: <LockIcon />,
          title: "Asset Protection",
          copy: "Guards trained to protect high-value assets, equipment, and inventory.",
        },
        {
          icon: <PersonCheckIcon />,
          title: "Vetted Personnel",
          copy: "Every guard is vetted and trained before deployment — no shortcuts.",
        },
        {
          icon: <PhoneIcon />,
          title: "Direct Management Line",
          copy: "A direct line to management for issues, replacements, and feedback.",
        },
        {
          icon: <ClockIcon />,
          title: "24/7 Cover",
          copy: "Round-the-clock guarding cover — day shifts, night shifts, and weekends.",
        },
      ]}
      ctaHeading={
        <>
          NEED RELIABLE <span className="text-[var(--accent)]">GUARDS</span> ON SITE?
        </>
      }
      ctaParagraph="Whether you need a single static guard or a full patrol team, Black Volt Investments will quote you competitively. Call +263 772 404 511 or email us."
      ctaBg={{
        // TODO: replace with client photography
        src: "https://images.unsplash.com/photo-1523294557-3637e1db3f33?fm=jpg&q=80&w=1800&auto=format&fit=crop",
        alt: "Guarded premises with a patrol vehicle",
      }}
    />
  );
}
