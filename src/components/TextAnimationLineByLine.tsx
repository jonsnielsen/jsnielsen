import { SplitText, SplitTextProps } from './SplitText';
import { motion } from 'framer-motion';
import React from 'react';
import {
  useHasBeenInView,
  IntersectionOptions,
} from '../utils/useHasBeenInView';

type TextAnimationLineByLineProps = {
  children: string;
  interSectionOptions?: IntersectionOptions;
};

export function TextAnimationLineByLine({
  children,
  interSectionOptions = { threshold: 0 },
}: TextAnimationLineByLineProps) {
  const { ref, hasBeenInView } = useHasBeenInView({
    options: interSectionOptions,
  });

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
    <span className="overflow-hidden inline-flex" style={{ lineHeight: 1.3 }}>
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
