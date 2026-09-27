import { ICON_PATHS, type IconName } from "./Icon";

/**
 * Illustrated spice tile — a gradient wash in palette colors with a large
 * line-art glyph. Used for categories/pages that don't have photography yet
 * so every visual stays crisp and on-brand instead of a broken image.
 */
export function SpiceArt({
  variant = "leaf",
  className = "",
}: {
  variant?: IconName;
  className?: string;
}) {
  const gradId = `spiceart-${variant}`;
  const paths = ICON_PATHS[variant];
  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden="true">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F0E9D8" />
            <stop offset="100%" stopColor="#E2D7BE" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" fill={`url(#${gradId})`} />
        <circle cx="50" cy="47" r="27" fill="#F7F2E7" opacity="0.85" />
        <circle cx="82" cy="16" r="5" fill="#C6913E" opacity="0.35" />
        <circle cx="15" cy="84" r="7" fill="#B15B38" opacity="0.25" />
        <g
          transform="translate(27, 24) scale(1.9)"
          fill="none"
          stroke="#244227"
          strokeOpacity="0.55"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {paths.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>
      </svg>
    </div>
  );
}
