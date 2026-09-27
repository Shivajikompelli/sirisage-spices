import type { ReactNode } from "react";

/**
 * Minimal icon system — every glyph is a list of SVG path `d` strings drawn
 * with currentColor, so icons inherit any palette color automatically.
 */
export const ICON_PATHS = {
  search: ["M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14z", "M21 21l-4.35-4.35"],
  user: [
    "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",
    "M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
  ],
  bag: ["M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z", "M3 6h18", "M16 10a4 4 0 0 1-8 0"],
  menu: ["M3 6h18", "M3 12h18", "M3 18h18"],
  close: ["M18 6 6 18", "M6 6l12 12"],
  "arrow-right": ["M5 12h14", "M12 5l7 7-7 7"],
  check: ["M20 6 9 17l-5-5"],
  leaf: [
    "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z",
    "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",
  ],
  sprout: [
    "M12 22v-8",
    "M12 14c0-4.5 3-7.5 8-7.5 0 4.5-3 7.5-8 7.5z",
    "M12 14c0-3.5-2.4-6-6.5-6 0 3.5 2.4 6 6.5 6z",
  ],
  ban: ["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z", "M5.6 5.6l12.8 12.8"],
  badge: ["M12 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12z", "M8.2 13.9 7 22l5-3 5 3-1.2-8.1", "M9.5 8l1.8 1.8L15 6.5"],
  recycle: [
    "M23 4v6h-6",
    "M1 20v-6h6",
    "M3.5 9a9 9 0 0 1 14.9-3.4L23 10",
    "M20.5 15a9 9 0 0 1-14.9 3.4L1 14",
  ],
  heart: [
    "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z",
  ],
  pin: ["M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z", "M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"],
  phone: [
    "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z",
  ],
  mail: [
    "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
    "M22 6 12 13 2 6",
  ],
  clock: ["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z", "M12 7v5l3 2"],
  star: ["M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"],
  facebook: ["M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"],
  instagram: [
    "M8 2h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z",
    "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
    "M17.5 5.5h.01",
  ],
  whatsapp: [
    "M12.04 2a9.9 9.9 0 0 0-8.4 15.2L2 22l4.9-1.6A9.9 9.9 0 1 0 12.04 2zm5.8 14.1c-.25.7-1.45 1.35-2 1.4-.5.05-1.15.25-3.85-.8-3.25-1.3-5.3-4.6-5.45-4.8-.15-.2-1.3-1.75-1.3-3.35 0-1.6.85-2.4 1.15-2.7.3-.3.65-.4.85-.4h.6c.2 0 .45-.05.7.55.25.6.85 2.1.9 2.25.05.15.1.35 0 .55-.1.2-.15.35-.3.55l-.45.55c-.15.15-.3.3-.15.6.15.3.75 1.25 1.6 2 1.1 1 2 1.3 2.3 1.45.3.15.5.1.65-.05.2-.2.75-.85.95-1.15.2-.3.4-.25.65-.15.25.1 1.6.75 1.9.9.3.15.5.2.55.35.1.1.1.7-.15 1.4z",
  ],
  mortar: [
    "M3 12h18a9 9 0 0 1-5.3 7.4L15 21H9l-.7-1.6A9 9 0 0 1 3 12z",
    "M13.5 10.5 19.5 3.5 21 5l-5.5 6.5",
  ],
  shaker: [
    "M9 2h6v3.5l1.6 2.6c.3.5.4 1 .4 1.6V19a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-9.3c0-.6.1-1.1.4-1.6L9 5.5V2z",
    "M10.5 14h.01",
    "M13.5 14h.01",
    "M12 17h.01",
  ],
  anise: [
    "M12 2l1.7 5.3 5.3-1.5-3.4 4.2 4.2 3.4-5.5.9L12 20l-2.3-5.7-5.5-.9 4.2-3.4L5 4.8l5.3 1.5z",
  ],
  mound: [
    "M3 18c2.2-4.8 5.7-7.5 9-7.5s6.8 2.7 9 7.5z",
    "M5 18h14",
    "M9 7c1-1.5 5-1.5 6 0",
  ],
  play: ["M8 5v14l11-7z"],
  "chevron-down": ["M6 9l6 6 6-6"],
} as const;

export type IconName = keyof typeof ICON_PATHS;

const FILL_ICONS = new Set<IconName>(["star", "whatsapp", "play"]);

export function Icon({
  name,
  className = "h-5 w-5",
  strokeWidth = 1.8,
  filled = false,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
  filled?: boolean;
}) {
  const isFill = filled || FILL_ICONS.has(name);
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={isFill ? "currentColor" : "none"}
      stroke={isFill ? "none" : "currentColor"}
      strokeWidth={isFill ? 0 : strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICON_PATHS[name].map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

/** Five-star rating row in saffron gold, matching the reference mockups. */
export function StarRating({
  value = 5,
  className = "",
  starClass = "h-3.5 w-3.5",
}: {
  value?: number;
  className?: string;
  starClass?: string;
}) {
  const full = Math.round(value);
  return (
    <span
      className={`inline-flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`Rated ${value} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`${starClass} ${i <= full ? "fill-saffron" : "fill-ink/15"}`}
          aria-hidden="true"
        >
          <path d={ICON_PATHS.star[0]} />
        </svg>
      ))}
    </span>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  sub,
  align = "center",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  sub?: ReactNode;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  return (
    <div className={`flex max-w-2xl flex-col ${alignCls}`}>
      {eyebrow}
      <h2 className="font-serif text-3xl leading-tight text-ink md:text-4xl">{title}</h2>
      {sub ? <p className="mt-3 text-sm leading-relaxed text-ink/70 md:text-base">{sub}</p> : null}
    </div>
  );
}
