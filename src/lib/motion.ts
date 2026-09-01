import type { Transition, Variants } from "motion/react";

export const MOTION_TRANSITION: Transition = {
  duration: 0.7,
  ease: [0.2, 0.7, 0.2, 1],
};

export function createRevealVariants(reduceMotion: boolean): Variants {
  return {
    hidden: {
      opacity: reduceMotion ? 1 : 0,
      y: reduceMotion ? 0 : 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0 } : MOTION_TRANSITION,
    },
  };
}

export function createStaggerVariants(reduceMotion: boolean): Variants {
  return {
    hidden: {},
    visible: {
      transition: reduceMotion
        ? { duration: 0 }
        : { delayChildren: 0.08, staggerChildren: 0.08 },
    },
  };
}
