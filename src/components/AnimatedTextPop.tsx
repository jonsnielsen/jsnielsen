import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  IntersectionOptions,
  useHasBeenInView,
} from '../utils/useHasBeenInView';

type AnimatedTextPopProps = {
  children: string;
  interSectionOptions?: IntersectionOptions;
};
export function AnimatedTextPop({
  children,
  interSectionOptions,
}: AnimatedTextPopProps) {
  const { ref, hasBeenInView } = useHasBeenInView({
    options: interSectionOptions,
  });

  // split text into words
  const words = children.split(' ');

  // split each word into letters
  const wordsLetters = words.map((word) => word.split(''));

  wordsLetters.forEach((word) => word.push('\u00A0'));

  return (
    <motion.span
      ref={ref}
      style={{ display: 'inline-block' }}
      initial="hidden"
      animate={hasBeenInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {wordsLetters.map((word, i) => (
        <span style={{ display: 'inline-block' }} key={i}>
          <span
            // style={{ display: 'inline-block' }}
            // variants={letterVariants}
            key={i}
          >
            {word.map((letter, i) => (
              <motion.span
                // style={{ display: 'inline-block' }}
                variants={letterVariants}
                key={i}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </span>
      ))}
    </motion.span>
  );
}

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.02, // animating each letter
      // staggerChildren: 0.1, // animating each word

      // delay: 0.06,
    },
  },
};

const letterVariants = {
  hidden: {
    // y: '320%',
    // y: 80,
    opacity: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0 },
    // opacity: 0,
    // skewX: 35,
    // skewY: 40,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      // duration: 0.75,
      duration: 0,
      // delay: 0.3,
      // duration: 0.25,
    },
    // opacity: 1,
    // skewX: 0,
    // skewY: 0,
  },
};
