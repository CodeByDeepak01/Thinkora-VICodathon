import { motion } from "framer-motion";
import { forwardRef } from "react";

const buttonVariants = {
  primary: "bg-primary-600 text-white hover:bg-primary-700 shadow-elevated",

  secondary: "bg-surface-200 text-slate-800 hover:bg-surface-300",

  heroSecondary:
  "bg-white/10 border border-white/20 text-slate-700 hover:bg-white/20 backdrop-blur-sm dark:text-white",

  ghost: "bg-transparent text-slate-700 hover:bg-surface-200",
};

const buttonSizes = {
  sm: "min-h-[44px] px-3 text-sm",
  md: "min-h-[46px] px-4 text-sm",
  lg: "min-h-[48px] px-5 text-base",
};

const Button = forwardRef(function Button(
  {
    children,
    className = "",
    variant = "primary",
    size = "md",
    as: Component = "button",
    disabled = false,
    ...props
  },
  ref,
) {
  const baseClasses =
    "inline-flex min-w-0 items-center justify-center rounded-xl font-medium transition-all duration-200 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40 disabled:cursor-not-allowed disabled:opacity-60";

  return (
    <motion.div
      whileHover={disabled ? undefined : { y: -1, scale: 1.01 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.16 }}
    >
      <Component
        ref={ref}
        type={Component === "button" ? "button" : undefined}
        className={`${baseClasses} ${buttonVariants[variant]} ${buttonSizes[size]} ${className}`.trim()}
        disabled={disabled}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  );
});

export default Button;
