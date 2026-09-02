// Shared 34x34 accent line-icon set for service/contact/division cards.
// Same visual language as the homepage "Why Choose Us" icons: stroke var(--accent), width 1.8, round caps/joins.

type IconProps = {
  size?: number;
  className?: string;
};

const base = {
  viewBox: "0 0 34 34",
  fill: "none" as const,
  stroke: "var(--accent)",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ShieldIcon({ size = 34, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...base}>
      <path d="M17 4l11 4v8c0 8-11 14-11 14S6 24 6 16V8l11-4z" />
    </svg>
  );
}

export function RouteIcon({ size = 34, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...base}>
      <path d="M5 28c5-2 5-10 10-10s5 8 10 8 4-8 4-8" />
      <circle cx="29" cy="18" r="2" fill="var(--accent)" stroke="none" />
      <circle cx="5" cy="28" r="2" fill="var(--accent)" stroke="none" />
    </svg>
  );
}

export function LockIcon({ size = 34, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...base}>
      <rect x="8" y="15" width="18" height="14" rx="3" />
      <path d="M12 15v-4a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export function PersonCheckIcon({ size = 34, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...base}>
      <circle cx="13" cy="10" r="5" />
      <path d="M4 29c0-5 4-9 9-9s9 4 9 9" />
      <path d="M23 20l3 3 6-6" />
    </svg>
  );
}

export function PhoneIcon({ size = 34, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...base}>
      <path d="M9 5l4 4-3 3.5a16 16 0 0 0 10 10l3.5-3 4 4-3.5 4C16 30 4 18 5 8.5z" />
    </svg>
  );
}

export function ClockIcon({ size = 34, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...base}>
      <circle cx="17" cy="17" r="12" />
      <path d="M17 10v7l5 3" />
    </svg>
  );
}

export function GlobeIcon({ size = 34, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...base}>
      <circle cx="17" cy="17" r="12" />
      <path d="M5 17h24" />
      <path d="M17 5c4 4 4 20 0 24M17 5c-4 4-4 20 0 24" />
    </svg>
  );
}

export function TruckIcon({ size = 34, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...base}>
      <path d="M4 10h15v13H4z" />
      <path d="M19 15h6l4 4v4h-10z" />
      <circle cx="10" cy="27" r="2.3" fill="var(--accent)" stroke="none" />
      <circle cx="24" cy="27" r="2.3" fill="var(--accent)" stroke="none" />
    </svg>
  );
}

export function TagIcon({ size = 34, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...base}>
      <path d="M18 4h11v11L15 29 4 18 18 4z" />
      <circle cx="24" cy="10" r="2.2" fill="var(--accent)" stroke="none" />
    </svg>
  );
}

export function ClipboardIcon({ size = 34, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...base}>
      <rect x="8" y="6" width="18" height="24" rx="2" />
      <rect x="12" y="3" width="10" height="6" rx="2" />
      <path d="M12 15h10M12 20h10M12 25h6" />
    </svg>
  );
}

export function HandshakeIcon({ size = 34, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...base}>
      <path d="M3 15l8-7 5 4" />
      <path d="M31 15l-8-7-5 4" />
      <path d="M11 12l6 6 6-6" />
      <circle cx="17" cy="18" r="2" fill="var(--accent)" stroke="none" />
    </svg>
  );
}

export function PackageIcon({ size = 34, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...base}>
      <path d="M17 4l13 7v13l-13 7-13-7V11z" />
      <path d="M4 11l13 7 13-7M17 18v13" />
    </svg>
  );
}

export function StoreIcon({ size = 34, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...base}>
      <path d="M4 13l2-8h22l2 8" />
      <path d="M4 13a4 4 0 0 0 8 0 4 4 0 0 0 8 0 4 4 0 0 0 8 0" />
      <path d="M6 13v14h22V13" />
      <path d="M13 27v-8h8v8" />
    </svg>
  );
}

export function BuildingIcon({ size = 34, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...base}>
      <rect x="8" y="4" width="18" height="26" />
      <path d="M12 9h3M19 9h3M12 15h3M19 15h3M12 21h3M19 21h3" />
      <rect x="14" y="25" width="6" height="5" />
    </svg>
  );
}

export function ShoppingBagIcon({ size = 34, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...base}>
      <path d="M8 11h18l-2 19H10z" />
      <path d="M12 11V8a5 5 0 0 1 10 0v3" />
    </svg>
  );
}

export function RepeatIcon({ size = 34, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...base}>
      <path d="M6 15a11 11 0 0 1 19-7l3 3" />
      <path d="M28 8v6h-6" />
      <path d="M28 19a11 11 0 0 1-19 7l-3-3" />
      <path d="M6 26v-6h6" />
    </svg>
  );
}

export function LeafIcon({ size = 34, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...base}>
      <path d="M27 6C11 6 6 17 6 27c14 0 21-8 21-21z" />
      <path d="M8 26C14 20 20 14 26 8" />
    </svg>
  );
}

export function MapPinIcon({ size = 34, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...base}>
      <path d="M17 30S6 20 6 12a11 11 0 0 1 22 0c0 8-11 18-11 18z" />
      <circle cx="17" cy="12" r="4" />
    </svg>
  );
}

export function MailIcon({ size = 34, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...base}>
      <rect x="4" y="8" width="26" height="18" rx="3" />
      <path d="M5 10l12 9 12-9" />
    </svg>
  );
}

export function ChevronDownIcon({ size = 12, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 4l4 4 4-4" />
    </svg>
  );
}
