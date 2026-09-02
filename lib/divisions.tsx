import { ShieldIcon, GlobeIcon, StoreIcon, LeafIcon } from "@/components/icons/LineIcons";

export type Division = {
  slug: string;
  href: string;
  label: string;
  shortBlurb: string;
  icon: (props: { size?: number; className?: string }) => React.ReactElement;
};

export const divisions: Division[] = [
  {
    slug: "security-guard-services",
    href: "/services/security-guard-services",
    label: "Security Guard Services",
    shortBlurb: "Trained uniformed guards for static and patrol duties.",
    icon: ShieldIcon,
  },
  {
    slug: "import-and-exports",
    href: "/services/import-and-exports",
    label: "Import And Exports",
    shortBlurb: "Sourcing and moving goods across borders.",
    icon: GlobeIcon,
  },
  {
    slug: "general-trading",
    href: "/services/general-trading",
    label: "General Trading",
    shortBlurb: "Supply of goods to businesses, institutions, and retail.",
    icon: StoreIcon,
  },
  {
    slug: "farm-produce",
    href: "/services/farm-produce",
    label: "Farm Produce",
    shortBlurb: "Fresh produce supplied to markets and bulk buyers.",
    icon: LeafIcon,
  },
];
