import type { Transition, Variants } from "motion/react";

export const MOTION_TRANSITION: Transition = {
  duration: 1,
  ease: [0.2, 0.7, 0.2, 1],
};

export const SCROLL_REVEAL_VIEWPORT = {
  once: true,
  amount: 0.22,
  margin: "0px 0px -15% 0px",
} as const;

export function createRevealVariants(
  reduceMotion: boolean,
  delay = 0,
): Variants {
  return {
    hidden: {
      opacity: reduceMotion ? 1 : 0,
      y: reduceMotion ? 0 : 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion
        ? { duration: 0, delay: 0 }
        : { ...MOTION_TRANSITION, delay },
    },
  };
}

export function createStaggerVariants(reduceMotion: boolean): Variants {
  return {
    hidden: {},
    visible: {
      transition: reduceMotion
        ? { duration: 0, delayChildren: 0, staggerChildren: 0 }
        : { delayChildren: 0.14, staggerChildren: 0.1 },
    },
  };
}
