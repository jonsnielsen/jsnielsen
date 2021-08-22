import { motion } from 'framer-motion';
import { useHasBeenInView } from '../utils/useHasBeenInView';
export function AnimatedImageOverlay() {
  const { ref, hasBeenInView } = useHasBeenInView({
    threshold: 0.0,
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
      // animate={{ x: hasBeenInView ? 0 : 0 }}
      className="absolute w-full h-full"
      style={{ background: 'rgba(245, 245, 245)', zIndex: 1 }}
    />
  );
}
