import { useRef } from 'react';
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * Pointer-tracking 3D tilt + spotlight glow. Falls back to a static element
 * under prefers-reduced-motion. The spotlight uses CSS custom props (--mx/--my)
 * consumed by `.tilt-card::after`.
 */
export default function TiltCard({
  children,
  className = '',
  as = 'div',
  max = 8,
  style,
  ...rest
}) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const MotionTag = motion[as] || motion.div;

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 20 });
  const sry = useSpring(ry, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(srx, (v) => `${v}deg`);
  const rotateY = useTransform(sry, (v) => `${v}deg`);

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={`tilt-card ${className}`} style={style} {...rest}>
        {children}
      </Tag>
    );
  }

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    ry.set((px - 0.5) * max * 2);
    rx.set((0.5 - py) * max * 2);
    el.style.setProperty('--mx', `${px * 100}%`);
    el.style.setProperty('--my', `${py * 100}%`);
  };

  const handleLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`tilt-card ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 900, ...style }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
