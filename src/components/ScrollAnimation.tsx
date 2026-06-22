import React from 'react'
import { motion } from 'framer-motion'

interface ScrollAnimationProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  delay = 0,
  direction = 'up',
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'left':
        return { x: -30, y: 0 };
      case 'right':
        return { x: 30, y: 0 };
      case 'down':
        return { x: 0, y: -30 };
      case 'up':
      default:
        return { x: 0, y: 30 };
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...getInitialPosition(),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: 'easeOut',
      }}
      viewport={{
        once: true,
        margin: '0px 0px -100px 0px',
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
