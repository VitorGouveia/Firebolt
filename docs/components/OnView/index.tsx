import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function OnView({ children }) {
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView && { opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      {children}
    </motion.p>
  );
}
