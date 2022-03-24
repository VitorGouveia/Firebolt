import { memo, ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import styles from "./style.module.css";

type FeatureProps = {
  text: string;
  icon: ReactNode;
  delay: number;
};

const Feature: React.FC<FeatureProps> = ({ icon, text, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  return (
    <motion.div
      className={styles.feature}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView && { opacity: 1 }}
      transition={{ duration: 0.75, delay }}
    >
      {icon}
      <motion.h4>{text}</motion.h4>
    </motion.div>
  );
};

export default memo(Feature);
