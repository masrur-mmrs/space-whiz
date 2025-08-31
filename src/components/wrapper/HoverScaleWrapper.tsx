'use client';

import React, { ReactNode } from 'react';
import { motion } from 'motion/react';

interface HoverScaleWrapperProps {
  children: ReactNode;
  scale?: number;
  style?: string;
}

const HoverScaleWrapper: React.FC<HoverScaleWrapperProps> = ({ 
  children, 
  scale = 1.1,
  style="inline-block"
}) => {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15
      }}
      className={style}
    >
      {children}
    </motion.div>
  );
};

export default HoverScaleWrapper;
