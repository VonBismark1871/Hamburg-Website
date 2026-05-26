import { useScroll, useTransform, useReducedMotion } from 'framer-motion';

/**
 * Scroll-linked parallax offset. Returns a MotionValue (px) you can bind to
 * `style={{ y }}`. Returns 0 (static) under prefers-reduced-motion.
 *
 * @param {React.RefObject<HTMLElement>} ref - target element
 * @param {number} [distance] - total travel in px across the scroll range
 */
export function useParallax(ref, distance = 80) {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-distance / 2, distance / 2]);
  return y;
}
