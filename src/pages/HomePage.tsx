// src/pages/HomePage.tsx

import React from 'react';
import { motion } from 'framer-motion';
import LandingPageComponent from '@/components/LandingPageComponent';

const HomePage: React.FC = () => {
  // Define animation variants for entrance transition
  const landingVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 60 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={landingVariants}
      transition={{ duration: 0.9, ease: "easeInOut" }}
    >
      <LandingPageComponent />
      {/* Add other HomePage sections here if needed */}
    </motion.div>
  );
};

export default HomePage;
