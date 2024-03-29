import { motion } from 'framer-motion';
import { useHasBeenInView } from '../utils/useHasBeenInView';

export function MediaCover() {
  const { ref, hasBeenInView } = useHasBeenInView({
    options: {
      threshold: 0.0,
    },
  });

  return (
    <motion.div
      ref={ref}
      animate={{
        x: hasBeenInView ? '100%' : 0,
        transition: {
          ease: [0.455, 0.03, 0.515, 0.955],
          duration: 0.5,
          delay: 0.8,
        },
      }}
      className="absolute w-full h-full bg-background"
      style={{ zIndex: 1 }}
    />
  );
}
