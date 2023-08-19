import React from 'react';
import { motion } from 'framer-motion';

const RotateAnimation = () => {
  return (
    <motion.div
      initial={{ rotate: -180 }}
      animate={{ rotate: 0 }}
      exit={{ rotate: 180 }}
    >
      {/* Your content here */}
    </motion.div>
  );
};

export default RotateAnimation;
