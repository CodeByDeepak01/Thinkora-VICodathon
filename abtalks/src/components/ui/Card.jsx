function Card({
  children,
  className = "",
  padding = "md",
  ...props
}) {
  const paddingClasses = {
    sm: "p-4",
    md: "p-5",
    lg: "p-6",
  };

  const paddingClass =
    paddingClasses[padding] || paddingClasses.md;

  return (
    <section
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        text-slate-900
        shadow-[0_10px_30px_rgba(15,23,42,0.06)]

        dark:border-slate-800/80
        dark:bg-gradient-to-br
        dark:from-slate-950
        dark:via-slate-950
        dark:to-slate-900
        dark:text-slate-100
        dark:shadow-[0_18px_45px_rgba(2,6,23,0.28)]

        transition-all
        duration-300
        ease-out

        hover:-translate-y-1
        hover:border-slate-300
        hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]

        dark:hover:border-slate-700
        dark:hover:shadow-[0_24px_55px_rgba(2,6,23,0.45)]

        ${paddingClass}
        ${className}
      `.trim()}
      {...props}
    >
      {/* Blue glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-20
          -top-20
          h-48
          w-48
          rounded-full
          bg-indigo-500/5
          blur-3xl
          transition-all
          duration-500
          dark:bg-indigo-500/10
          dark:group-hover:bg-indigo-500/15
        "
      />

      {/* Green glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          -right-20
          h-56
          w-56
          rounded-full
          bg-emerald-500/5
          blur-3xl
          transition-all
          duration-500
          dark:bg-teal-400/10
          dark:group-hover:bg-teal-400/15
        "
      />

      {/* Card content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}

export default Card;