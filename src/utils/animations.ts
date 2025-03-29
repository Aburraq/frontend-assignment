import { Variants } from 'framer-motion';

export const fadeInOut: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

export const slideUp: Variants = {
  initial: { translateY: 560, opacity: 1 },
  animate: {
    translateY: 0,
    transition: { duration: 0.5 },
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

export const rotateIn: Variants = {
  initial: { rotate: -90, opacity: 0 },
  animate: {
    rotate: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};
