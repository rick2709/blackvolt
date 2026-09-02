type LabelPillProps = {
  children: React.ReactNode;
  variant?: "dark" | "light";
};

export default function LabelPill({ children, variant = "light" }: LabelPillProps) {
  const isDark = variant === "dark";
  return (
    <span
      className={`inline-flex items-center gap-[10px] px-4 py-[10px] rounded-[90px] ${
        isDark ? "bg-white/5" : "bg-black/5"
      }`}
    >
      <span className="w-2 h-2 rounded-full bg-[var(--accent)] flex-none" />
      <span
        className={`text-base leading-[20.8px] font-medium tracking-[-0.48px] ${
          isDark ? "text-white" : "text-[var(--ink)]"
        }`}
      >
        {children}
      </span>
    </span>
  );
}
