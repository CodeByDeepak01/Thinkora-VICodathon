import { motion } from "framer-motion";

function SkeletonCard({ className = "" }) {
  return (
    <motion.div
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      className={`rounded-[1.25rem] bg-slate-200/70 ${className}`}
    />
  );
}

export default SkeletonCard;
