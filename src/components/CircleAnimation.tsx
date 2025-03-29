import { motion } from 'motion/react';

const CircleAnimation: React.FC = () => {
  return (
    <motion.svg width="56" height="56" viewBox="0 0 48 48" className="absolute">
      <motion.circle
        cx="24"
        cy="24"
        r="23.5"
        fill="none"
        stroke="#0381FF"
        strokeWidth="1"
        initial={{ pathLength: 0, rotate: 270, scaleX: -1 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
      />
    </motion.svg>
  );
};

export default CircleAnimation;
