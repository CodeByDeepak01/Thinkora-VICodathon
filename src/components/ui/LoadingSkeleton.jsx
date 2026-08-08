function LoadingSkeleton({ lines = 3, compact = false }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`
            animate-pulse
            rounded-2xl

            /* Light mode */
            bg-slate-200

            /* Dark mode */
            dark:bg-slate-800

            ${compact ? "h-3" : "h-4"}
          `}
          style={{
            width: `${index === lines - 1 ? 70 : 100}%`,
          }}
        />
      ))}
    </div>
  );
}

export default LoadingSkeleton;