import { SplitText, SplitTextProps } from './SplitText';
import { motion } from 'framer-motion';
import React from 'react';
import {
  useHasBeenInView,
  IntersectionOptions,
} from '../utils/useHasBeenInView';

type AnimatedTextLineByLineProps = {
  children: string;
  interSectionOptions?: IntersectionOptions;
};

export function AnimatedTextLineByLine({
  children,
  interSectionOptions = { threshold: 0 },
}: AnimatedTextLineByLineProps) {
  const { ref, hasBeenInView } = useHasBeenInView({
    options: interSectionOptions,
  });

  console.log({ hasBeenInView });

  // Split yourself
  // on window resize, calculate again, but only after some buffer time
  // Actually, if the animation has already ocurred, don't recalculate, as we just need the lines when animating

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={hasBeenInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <SplitText text={children} LineWrapper={LineWrapper} />
    </motion.span>
  );
}

const LineWrapper: SplitTextProps['LineWrapper'] = function lineWrapper({
  children,
}) {
  return (
    <span className="overflow-hidden inline-flex">
      <motion.span
        variants={lineVariants}
        className="inline-block"
        style={{ fontSize: 'inherit', fontWeight: 'inherit' }}
      >
        {children}
      </motion.span>
    </span>
  );
};

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2, // animating each line
      delay: 1,
    },
  },
};

const lineVariants = {
  hidden: {
    y: '100%',
    opacity: 0,
    // transition: { ease: [0.455, 0.03, 0.515, 0.955] },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.7,
    },
  },
};
