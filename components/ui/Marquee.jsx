/**
 * Infinite marquee. Renders the items twice so the CSS translate(-100%) loop
 * is seamless. Pauses on hover and under prefers-reduced-motion (via globals).
 *
 * @param {object} props
 * @param {string[]} props.items
 * @param {boolean} [props.reverse]
 * @param {number} [props.duration] - seconds for one full cycle
 * @param {boolean} [props.ghost] - render every other item as outline text
 */
export default function Marquee({ items, reverse = false, duration = 38, ghost = true, className = '' }) {
  const renderGroup = (keyPrefix) =>
    items.map((item, i) => (
      <span
        key={`${keyPrefix}-${item}-${i}`}
        className={`marquee-item ${ghost && i % 2 === 1 ? 'ghost' : ''}`}
      >
        {item}
        <span className="dot" aria-hidden="true" />
      </span>
    ));

  return (
    <div
      className={`marquee ${reverse ? 'reverse' : ''} ${className}`}
      style={{ '--marquee-dur': `${duration}s` }}
      aria-hidden="true"
    >
      <div className="marquee-track">{renderGroup('a')}</div>
      <div className="marquee-track" aria-hidden="true">{renderGroup('b')}</div>
    </div>
  );
}
