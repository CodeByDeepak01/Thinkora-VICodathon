function Badge({ children, className = "", tone = "neutral" }) {
  const tones = {
    neutral: "bg-slate-100 text-slate-700",
    success: "bg-emerald-100 text-emerald-700",
    warning: "bg-amber-100 text-amber-700",
    accent: "bg-primary-100 text-primary-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]} ${className}`.trim()}
    >
      {children}
    </span>
  );
}

export default Badge;
