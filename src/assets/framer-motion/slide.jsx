// slide animation 

import React from 'react';
import { motion } from 'framer-motion';

const SlideAnimation = () => {
  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      exit={{ x: 1000 }}
    >
      {/* Your content here */}
    </motion.div>
  );
};

export default SlideAnimation;