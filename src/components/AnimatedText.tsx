import { motion } from 'framer-motion';
import { useEffect, useState, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  useHasBeenInView,
  IntersectionOptions,
} from '../utils/useHasBeenInView';
type AnimatedTextProps = {
  // children: string;
  children: ReactNode;
  interSectionOptions?: IntersectionOptions;
};

export function AnimatedText({
  children,
  interSectionOptions = { threshold: 0 },
}: AnimatedTextProps) {
  const { ref, hasBeenInView } = useHasBeenInView(interSectionOptions);

  // split text into words
  // const words = children.split(' ');

  // split each word into letters
  // const wordsLetters = words.map((word) => word.split(''));

  // wordsLetters.forEach((word) => word.push('\u00A0'));

  return (
    <motion.span
      ref={ref}
      style={{ display: 'inline-block' }}
      initial="hidden"
      animate={hasBeenInView ? 'visible' : 'hidden'}
      // variants={containerVariants}
      variants={letterVariants}
    >
      {children}
      {/* {wordsLetters.map((word, i) =>
        <span
          className="overflow-hidden"
          style={{ display: 'inline-block' }}
          key={i}
        >
          <motion.span
            className="overflow-hidden"
            style={{ display: 'inline-block' }}
            variants={letterVariants}
            key={i}
          >
            {word.map((letter, i) => (
              <span
                style={{ display: 'inline-block' }}
                variants={letterVariants}
                key={i}
              >
        {letter}
        </span>
            ))}
          </motion.span>
        </span>
      )} */}
    </motion.span>
  );
}

const containerVariants = {
  visible: {
    transition: {
      // staggerChildren: 0.06, // animating each letter
      // staggerChildren: 0.1, // animating each word
      delay: 1,
    },
  },
};

const letterVariants = {
  hidden: {
    // y: '320%',
    // y: 80,
    opacity: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    // opacity: 0,
    // skewX: 35,
    // skewY: 40,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.75,
      // delay: 0.3,
      // duration: 0.25,
    },
    // opacity: 1,
    // skewX: 0,
    // skewY: 0,
  },
};
