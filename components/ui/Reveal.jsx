import { motion, useReducedMotion } from 'framer-motion';

const directionOffset = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: 24 },
  right: { x: -24 },
  none: {}
};

/**
 * Scroll-triggered fade/slide reveal. Respects prefers-reduced-motion.
 *
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {'up'|'down'|'left'|'right'|'none'} [props.direction]
 * @param {number} [props.delay]
 * @param {number} [props.duration]
 * @param {string} [props.as] - motion element tag (div, li, article...)
 */
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  as = 'div',
  className = '',
  amount = 0.2,
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  const offset = directionOffset[direction] || directionOffset.up;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Stagger container — children fade in sequentially as the group enters view.
 */
export function RevealGroup({
  children,
  className = '',
  as = 'div',
  stagger = 0.08,
  amount = 0.2,
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } }
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export const revealItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

/**
 * Child element for use inside <RevealGroup>. Pass `as` to control the tag.
 */
export function RevealItem({ children, as = 'div', className = '', ...rest }) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag className={className} variants={revealItem} {...rest}>
      {children}
    </MotionTag>
  );
}
