import { useState, useEffect } from 'react';
import {
  useInView,
  IntersectionOptions as IntersectionOptionsOriginal,
} from 'react-intersection-observer';

// re export IntersectionOptions
export type IntersectionOptions = IntersectionOptionsOriginal;

export type UseHasBeenInViewProps = {
  options?: IntersectionOptions;
};
export function useHasBeenInView({
  options = { threshold: 0 },
}: UseHasBeenInViewProps) {
  const [hasBeenInView, setHasBeenInView] = useState(false);

  const { ref, inView } = useInView(options);

  useEffect(() => {
    if (inView && !hasBeenInView) {
      setHasBeenInView(true);
    }
  }, [inView, hasBeenInView]);

  return { hasBeenInView, ref };
}
