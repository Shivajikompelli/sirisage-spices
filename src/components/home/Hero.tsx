"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { Icon } from "@/components/shared/Icon";

/**
 * name – used for accessible labels only (nothing is drawn on screen)
 * NOTE: "bay_leaves.png" and "star_anise.png" are new here. If they are not in
 * /public/images/homeScreen yet, add them or delete those two entries.
 */
const spices = [
  { name: "Whole spices", src: "/images/homeScreen/whole_spices.png", alt: "A variety of whole spices in wooden bowls" },
  { name: "Red chilli", src: "/images/homeScreen/red chilli.png", alt: "Dried red chillies, chilli flakes and ground chilli in wooden bowls" },
  { name: "Cardamom", src: "/images/homeScreen/cardamon - f.png", alt: "Green cardamom pods and ground cardamom in wooden bowls" },
  { name: "Cloves", src: "/images/homeScreen/cloves.png", alt: "Cloves in wooden bowls" },
  { name: "Black pepper", src: "/images/homeScreen/black-pepper.png", alt: "Black peppercorns in wooden bowls" },
  { name: "Cinnamon", src: "/images/homeScreen/cinnamon.png", alt: "Cinnamon sticks and ground cinnamon in wooden bowls" },
  { name: "Turmeric", src: "/images/homeScreen/turmeric.png", alt: "Turmeric roots and ground turmeric in wooden bowls" },
  { name: "Bay leaf", src: "/images/homeScreen/bay_leaves - f.png", alt: "Fresh bay leaves in wooden bowls" },
 // { name: "Bay leaf", src: "/images/homeScreen/bay_leaves.png", alt: "Dried bay leaves in wooden bowls" },
  { name: "Saffron", src: "/images/homeScreen/saffron.png", alt: "Saffron threads and crocus flowers in wooden bowls" },
  { name: "Star anise", src: "/images/homeScreen/star anise.png", alt: "Star anise pods in wooden bowls" },

] as const;

const SLIDE_DURATION = 5000; // ms each spice stays on screen
const TRANSITION_MS = 800; // length of the crossfade

type Role = "in" | "out" | "wait";
const css = (v: Record<string, string | number>) => v as CSSProperties;

export function Hero() {
  const [state, setState] = useState<{ active: number; leaving: number | null; dir: number }>({
    active: 0,
    leaving: null,
    dir: 1,
  });
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const activeRef = useRef(0);
  const lockRef = useRef(false);
  const timerRef = useRef<number | undefined>(undefined);

  const go = useCallback((to: number, dir = 1) => {
    const next = (to + spices.length) % spices.length;
    if (lockRef.current || next === activeRef.current) return;
    lockRef.current = true;
    const from = activeRef.current;
    activeRef.current = next;
    setState({ active: next, leaving: from, dir });
    timerRef.current = window.setTimeout(() => {
      setState((s) => ({ ...s, leaving: null }));
      lockRef.current = false;
    }, TRANSITION_MS);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPaused(true);
    return () => window.clearTimeout(timerRef.current);
  }, []);

  const { active, leaving, dir } = state;
  const upcoming = (active + 1) % spices.length;

  // Layers: the one leaving, the active one, and the upcoming one (kept hidden so its image is already loaded).
  const roles = new Map<number, Role>([[upcoming, "wait"]]);
  if (leaving !== null) roles.set(leaving, "out");
  roles.set(active, "in");
  const weight = { out: 0, wait: 1, in: 2 } as const;
  const layers = [...roles.entries()].sort((a, b) => weight[a[1]] - weight[b[1]]);

  return (
    <section
      id="home"
      className="relative isolate flex flex-col overflow-hidden bg-[#fbf3e3] md:min-h-[650px] md:block"
    >
      {/* Copy – unchanged */}
      <div className="relative z-20 flex items-center px-4 py-10 md:min-h-[560px] md:px-8 md:py-14 lg:px-12 xl:px-16">
        <div className="max-w-xl">
          <p className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-terracotta sm:text-xs">
            <span className="h-px w-9 bg-terracotta" aria-hidden="true" />
            Whole spices, honestly sourced
          </p>

          <h1 className="font-serif text-5xl leading-[0.98] tracking-[-0.045em] text-forest sm:text-6xl lg:text-7xl">
            SIRISAGE
            <span className="block italic text-terracotta">Pure Spices.</span>
          </h1>

          <p className="mt-7 max-w-md text-base leading-7 text-ink/70 md:text-lg md:leading-8">
            Carefully sourced whole spices from India, bringing authentic flavour
            and natural goodness to every meal.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              href="/#spices"
              className="group inline-flex items-center gap-3 rounded-full bg-forest px-7 py-3.5 text-sm font-medium text-parchment shadow-[0_14px_28px_-14px_rgba(36,66,39,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest/90 hover:shadow-[0_18px_32px_-14px_rgba(36,66,39,0.6)]"
            >
              Explore spices
              <Icon
                name="arrow-right"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2}
              />
            </Link>
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-ink/55">
              From farm to flavour
            </span>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-forest/10 pt-6">
            {[
              ["100%", "Traceable lots"],
              ["No", "Additives"],
              ["India", "Single origin"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-serif text-xl text-forest">{value}</p>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-ink/55">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Spice stage: a simple crossfade with a gentle slide */}
      <div
        className={`sp-stage relative h-[440px] w-full md:absolute md:inset-y-0 md:right-0 md:h-auto md:w-[58%] lg:w-[52%]${
          paused || hovered ? " is-held" : ""
        }`}
        style={css({ "--dir": dir, "--dur": `${SLIDE_DURATION}ms` })}
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured spices"
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        <div className="sp-tilt">
          {layers.map(([i, role]) => (
            <div key={`l-${i}`} className={`sp-layer sp-${role}`}>
              <div className="sp-main">
                <Image
                  src={spices[i].src}
                  alt={role === "in" ? spices[i].alt : ""}
                  fill
                  priority={i === 0}
                  loading="eager"
                  sizes="(min-width: 1024px) 48vw, (min-width: 768px) 52vw, 92vw"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="sp-ui">
          <div className="sp-dots">
            {spices.map((s, i) => (
              <button
                key={i}
                type="button"
                className="sp-dot"
                aria-label={s.name + (i === 7 ? ", dried" : i === 6 ? ", fresh" : "")}
                aria-current={i === active}
                onClick={() => go(i, i > active ? 1 : -1)}
              >
                <i onAnimationEnd={i === active ? () => go(i + 1, 1) : undefined} />
              </button>
            ))}
          </div>
          <button
            type="button"
            className="sp-pp"
            aria-label={paused ? "Play slideshow" : "Pause slideshow"}
            onClick={() => setPaused((p) => !p)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {paused ? <path d="M8 5v14l11-7z" /> : <path d="M9 5v14M15 5v14" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Scroll to Discover Indicator */}
      <div className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 md:block" aria-hidden="true">
        <div className="flex flex-col items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-forest/85">
          <span>Scroll to discover</span>
          <div className="relative h-9 w-0.5 overflow-hidden rounded-full bg-forest/25">
            <div className="h-4 w-full rounded-full bg-forest animate-pulse" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .sp-stage { z-index: 0; }
        .sp-tilt { position: absolute; inset: 2% 0 8% 0; pointer-events: none; }
        .sp-layer { position: absolute; inset: 0; }
        .sp-layer.sp-wait { visibility: hidden; }
        .sp-main { position: absolute; inset: 0; will-change: transform, opacity; filter: drop-shadow(0 24px 26px rgba(60, 30, 10, 0.25)); }

        /* crossfade: the old spice drifts out, the new one drifts in */
        .sp-layer.sp-out .sp-main { animation: sp-out 500ms ease-in both; }
        .sp-layer.sp-in .sp-main { animation: sp-in 700ms cubic-bezier(.2, .7, .2, 1) 150ms backwards; }

        @keyframes sp-out {
          to { transform: translateX(calc(var(--dir) * -28px)) scale(0.97); opacity: 0; }
        }
        @keyframes sp-in {
          from { transform: translateX(calc(var(--dir) * 28px)) scale(0.97); opacity: 0; }
        }

        /* controls */
        .sp-ui { position: absolute; left: 0; right: 0; bottom: 14px; display: flex; justify-content: center; align-items: center; gap: 14px; }
        .sp-dots { display: flex; gap: 4px; }
        .sp-dot { display: grid; align-items: center; width: 24px; height: 20px; padding: 0; border: 0; background: none; cursor: pointer; }
        .sp-dot i { position: relative; display: block; height: 3px; border-radius: 3px; overflow: hidden; background: rgba(36, 66, 39, 0.2); }
        .sp-dot:hover i { background: rgba(36, 66, 39, 0.4); }
        .sp-dot i::after { content: ""; position: absolute; inset: 0; background: rgb(36, 66, 39); transform: scaleX(0); transform-origin: left; }
        .sp-dot[aria-current="true"] i::after { animation: sp-prog var(--dur) linear forwards; }
        .is-held .sp-dot[aria-current="true"] i::after { animation-play-state: paused; }
        @keyframes sp-prog { to { transform: scaleX(1); } }
        .sp-pp { display: grid; place-items: center; width: 28px; height: 28px; padding: 0; border-radius: 9999px; border: 1.5px solid rgba(36, 66, 39, 0.35); background: none; color: rgb(36, 66, 39); cursor: pointer; }
        .sp-pp svg { width: 12px; height: 12px; fill: currentColor; stroke: currentColor; stroke-width: 2.2; stroke-linecap: round; }
        .sp-stage button:focus-visible { outline: 2px solid rgb(36, 66, 39); outline-offset: 3px; }

        @media (prefers-reduced-motion: reduce) {
          .sp-layer.sp-in .sp-main { animation: sp-fade 500ms both; }
          .sp-layer.sp-out .sp-main { animation: sp-fade-out 300ms both; }
          @keyframes sp-fade { from { opacity: 0; } }
          @keyframes sp-fade-out { to { opacity: 0; } }
        }
      `}</style>
    </section>
  );
}
