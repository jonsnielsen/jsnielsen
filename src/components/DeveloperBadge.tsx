import Image from 'next/image';
import badgeSvg from '../assets/images/badge.svg';
import styles from './developerBadge.module.css';
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from 'framer-motion';

export function DeveloperBadge() {
  const { scrollY } = useViewportScroll();
  const slowedRotateAnim = useTransform(scrollY, (latest) => latest / 8);
  const rotateAnim = useSpring(slowedRotateAnim, {
    stiffness: 400,
    damping: 90,
  });

  return (
    <motion.span
      style={{ rotateZ: rotateAnim, transformOrigin: '50% 50%' }}
      className={styles.badgeWrapper}
    >
      <Image src={badgeSvg} alt="developer badge" width={120} height={120} />
    </motion.span>
  );
}
