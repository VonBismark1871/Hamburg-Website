/**
 * Animated aurora / mesh-gradient atmosphere. Pure CSS (transform + opacity),
 * compositor-friendly, paused under prefers-reduced-motion via globals.css.
 *
 * Place inside a `position: relative; overflow: hidden` parent. Render content
 * above it with a higher z-index.
 *
 * @param {object} props
 * @param {boolean} [props.grid] - show the masked grid overlay
 * @param {boolean} [props.grain] - show the grain texture
 */
export default function AuroraBackground({ grid = true, grain = true, className = '' }) {
  return (
    <div className={`aurora-wrap ${className}`} aria-hidden="true">
      <span className="aurora-blob a" />
      <span className="aurora-blob b" />
      <span className="aurora-blob c" />
      {grid && <span className="grid-overlay" />}
      {grain && <span className="grain" />}
    </div>
  );
}
