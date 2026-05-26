import { useRef } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * A link that subtly leans toward the cursor (magnetic effect).
 * Falls back to a plain styled Link when reduced motion is requested.
 *
 * @param {object} props
 * @param {string} props.href
 * @param {string} [props.className] - styling class (e.g. "primary-btn")
 * @param {number} [props.strength] - px of travel at edges
 */
export default function MagneticButton({
  href,
  children,
  className = 'primary-btn',
  strength = 14,
  ...rest
}) {
  const reduce = useReducedMotion();
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 240, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 240, damping: 18, mass: 0.4 });
  const innerX = useTransform(sx, (v) => v * 0.35);
  const innerY = useTransform(sy, (v) => v * 0.35);

  if (reduce) {
    return (
      <Link href={href} className={className} {...rest}>
        <span>{children}</span>
      </Link>
    );
  }

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set((relX / (rect.width / 2)) * strength);
    y.set((relY / (rect.height / 2)) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy, display: 'inline-flex' }}
    >
      <Link href={href} className={className} {...rest}>
        <motion.span style={{ x: innerX, y: innerY, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          {children}
        </motion.span>
      </Link>
    </motion.span>
  );
}
