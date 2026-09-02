type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
  labelClassName?: string;
  align?: "left" | "center";
};

export default function Eyebrow({
  children,
  className = "",
  labelClassName = "text-[var(--muted)]",
  align = "left",
}: EyebrowProps) {
  return (
    <div
      className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""} ${className}`}
    >
      <span className="w-5 h-px bg-[var(--accent)] flex-none" aria-hidden />
      <span className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${labelClassName}`}>
        {children}
      </span>
    </div>
  );
}
