import { motion } from "framer-motion";
import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { className = "", error = false, ...props },
  ref,
) {
  return (
    <motion.input
      whileFocus={{ scale: 1.01, y: -1 }}
      transition={{ duration: 0.16 }}
      ref={ref}
      className={`w-full min-h-[48px] rounded-xl border bg-white px-4 py-3 text-base text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 sm:text-sm ${error ? "border-red-400" : "border-slate-200"} ${className}`.trim()}
      aria-invalid={error || undefined}
      {...props}
    />
  );
});

export default Input;
