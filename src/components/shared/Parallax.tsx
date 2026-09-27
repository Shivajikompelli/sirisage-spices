"use client";

import { useEffect, useRef } from "react";

/** True when the user prefers reduced motion. */
function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

interface ParallaxProps {
  children?: React.ReactNode;
  /**
   * Fraction of the element's distance from the viewport centre to drift by.
   * Positive = drifts up as you scroll down. Keep |speed| ≤ 0.2 for subtlety.
   */
  speed?: number;
  className?: string;
}

/**
 * Scroll-linked parallax: translates its content vertically based on how far
 * the element is from the viewport centre. rAF-throttled, disabled for
 * prefers-reduced-motion.
 */
export function Parallax({ children, speed = 0.1, className = "" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    let raf = 0;
    let applied = 0;

    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      // Strip the already-applied transform so measurements stay stable
      const centre = rect.top + rect.height / 2 - applied;
      const delta = centre - window.innerHeight / 2;
      applied = -delta * speed;
      el.style.transform = `translate3d(0, ${applied.toFixed(1)}px, 0)`;
    };

    const request = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    return () => {
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}

interface ScrollFadeProps {
  children: React.ReactNode;
  className?: string;
  /** Fraction of the viewport height over which the fade completes. */
  range?: number;
  /** Minimum opacity the content settles at. */
  floor?: number;
}

/**
 * Scroll-linked fade: content is fully opaque while in view, then gently
 * fades toward `floor` as it scrolls past the top of the viewport.
 */
export function ScrollFade({
  children,
  className = "",
  range = 0.5,
  floor = 0.3,
}: ScrollFadeProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(1, Math.max(0, -rect.top / (vh * range)));
      el.style.opacity = (1 - progress * (1 - floor)).toFixed(3);
    };
    const request = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    return () => {
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [range, floor]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
