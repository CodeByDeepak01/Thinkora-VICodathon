import { motion, useReducedMotion } from "framer-motion";

function PageTransition({ children, className = "" }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
      }
      animate={{ opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
