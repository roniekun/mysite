/* fade animation */

import React from 'react';
import { motion } from 'framer-motion';

const FadeAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Your content here */}
    </motion.div>
  );
};

export default FadeAnimation;