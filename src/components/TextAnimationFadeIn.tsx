import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import {
  useHasBeenInView,
  IntersectionOptions,
} from '../utils/useHasBeenInView';
type TextAnimationFadeInProps = {
  children: ReactNode;
  interSectionOptions?: IntersectionOptions;
};

export function TextAnimationFadeIn({
  children,
  interSectionOptions = { threshold: 0 },
}: TextAnimationFadeInProps) {
  const { ref, hasBeenInView } = useHasBeenInView({
    options: interSectionOptions,
  });

  return (
    <motion.span
      ref={ref}
      style={{ display: 'inline-block' }}
      initial="hidden"
      animate={hasBeenInView ? 'visible' : 'hidden'}
      variants={letterVariants}
    >
      {children}
    </motion.span>
  );
}

const letterVariants = {
  hidden: {
    y: 40,
    opacity: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.75,
    },
  },
};
