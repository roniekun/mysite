// scale animation

import React from 'react';
import { motion } from 'framer-motion';

const ScaleAnimation = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
    >
      {/* Your content here */}
    </motion.div>
  );
};

export default ScaleAnimation;


