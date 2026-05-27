import { motion, useReducedMotion } from 'framer-motion';

/**
 * Word-by-word mask reveal for headings. Each word rises out of a clipped
 * box, staggered. Word spacing comes from `.kinetic-word { margin-right }`.
 */
export default function AnimatedText({
  text,
  as = 'h2',
  className = '',
  delay = 0,
  stagger = 0.055,
  style,
  ...rest
}) {
  const reduce = useReducedMotion();
  const Tag = as;
  const words = String(text).split(' ');

  if (reduce) {
    return (
      <Tag className={className} style={style} {...rest}>
        {text}
      </Tag>
    );
  }

  const MotionTag = motion[as] || motion.h2;

  return (
    <MotionTag
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={text}
      {...rest}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="kinetic-word" aria-hidden="true">
          <motion.span
            variants={{
              hidden: { y: '110%' },
              visible: { y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
