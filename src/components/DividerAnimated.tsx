import { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { useHasBeenInView } from '../utils/useHasBeenInView';

export function DividerAnimated({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  const { hasBeenInView, ref } = useHasBeenInView({});

  return (
    <motion.div
      ref={ref}
      className={`${className} bg-text`}
      animate={hasBeenInView ? 'visible' : 'hidden'}
      variants={variants}
      style={{
        // borderBottom: '1px solid black',
        height: '1px',
        ...style,
      }}
    />
  );
}

const variants = {
  hidden: {
    width: '0%',
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    width: '100%',
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
};
