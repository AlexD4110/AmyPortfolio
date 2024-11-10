// src/components/PageTransition.tsx
import { motion } from "framer-motion";
import React from "react";

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 50 },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.5,
};

interface PageTransitionProps {
  children: React.ReactNode;
  disableTransition?: boolean;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, disableTransition = false }) => (
  <motion.div
    initial={disableTransition ? {} : "initial"}
    animate={disableTransition ? {} : "in"}
    exit={disableTransition ? {} : "out"}
    variants={disableTransition ? {} : pageVariants}
    transition={disableTransition ? {} : pageTransition}
  >
    {children}
  </motion.div>
);

export default PageTransition;
