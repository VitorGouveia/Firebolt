import useIntro from "hooks/useIntro";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Heading: React.FC = ({ children }) => {
  // const showAnimation = useIntro();

  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  return (
    <motion.h1
      className="text-center font-extrabold md:text-5xl mt-8"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView && { opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      {children}
    </motion.h1>
  );
};

export const Description: React.FC = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  return (
    <motion.div
      className="mx-auto max-w-full w-[880px] text-center px-4 mb-10"
      ref={ref}
      animate={inView && { opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.75, delay: 0.4 }}
    >
      <motion.p className="text-lg mb-2 text-gray-600 md:!text-2xl">
        {children}
      </motion.p>
    </motion.div>
  );
};
