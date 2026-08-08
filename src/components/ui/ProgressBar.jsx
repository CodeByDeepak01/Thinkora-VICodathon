import { useEffect, useState } from "react";

function ProgressBar({ value = 0, max = 100, className = "", label }) {
  const numericValue = Number(value);
  const numericMax = Number(max);
  const safeMax = Number.isFinite(numericMax) ? Math.max(0, numericMax) : 0;
  const safeValue = Number.isFinite(numericValue)
    ? Math.max(0, numericValue)
    : 0;
  const clampedValue = safeMax === 0 ? 0 : Math.min(safeValue, safeMax);
  const percentage =
    safeMax === 0
      ? 0
      : Math.min(100, Math.max(0, (clampedValue / safeMax) * 100));

  const [animatedWidth, setAnimatedWidth] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      setAnimatedWidth(percentage);
      return;
    }

    const frame = requestAnimationFrame(() => {
      setAnimatedWidth(percentage);
    });

    return () => cancelAnimationFrame(frame);
  }, [percentage]);

  return (
    <div className={`w-full ${className}`.trim()}>
      {label ? (
        <div className="mb-2 flex items-center justify-between gap-2 text-sm">
          <span className="text-slate-400">{label}</span>
          <span className="font-medium text-slate-300">
            {Math.round(clampedValue)}/{safeMax}
          </span>
        </div>
      ) : null}
      <div
        role="progressbar"
        aria-label={label || "Progress"}
        aria-valuenow={Math.round(clampedValue)}
        aria-valuemin={0}
        aria-valuemax={safeMax}
        className="h-2.5 overflow-hidden rounded-full border border-slate-700/60 bg-slate-800"
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500 transition-[width] duration-500 ease-out"
          style={{ width: `${animatedWidth}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
