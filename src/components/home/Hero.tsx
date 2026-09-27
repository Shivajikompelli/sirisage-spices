"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@/components/shared/Icon";

const heroBackgrounds = [
  {
    src: "/images/homeScreen/red chilli.png",
    alt: "Dried red chillies, chilli flakes and ground chilli in wooden bowls",
  },
  {
    src: "/images/homeScreen/cardamon - f.png",
    alt: "Green cardamom pods and ground cardamom in wooden bowls",
  },
  {
    src: "/images/homeScreen/cloves.png",
    alt: "Green cloves in wooden bowls",
  },
  {
    src: "/images/homeScreen/black-pepper.png",
    alt: "Black peppercorns in wooden bowls",
  },
  {
    src: "/images/homeScreen/cinnamon.png",
    alt: "Cinnamon sticks and ground cinnamon in wooden bowls",
  },
  
  {
    src: "/images/homeScreen/turmeric.png",
    alt: "Turmeric roots and ground turmeric in wooden bowls",
  },
  {
    src: "/images/homeScreen/bay_leaves - f.png",
    alt: "Fresh bay leaves in wooden bowls",
  },
  {
    src: "/images/homeScreen/saffron.png",
    alt: "Saffron threads in wooden bowls",
  },
  {
    src: "/images/homeScreen/whole_spices.png",
    alt: "A variety of whole spices in wooden bowls",
  }

] as const;

const SLIDE_DURATION = 5000;

export function Hero() {
  const [activeBackground, setActiveBackground] = useState(0);

  // Preload images so the gentle cross-fade stays smooth.
  useEffect(() => {
    heroBackgrounds.forEach(({ src }) => {
      const image = new window.Image();
      image.src = src;
    });

    const rotation = window.setInterval(() => {
      setActiveBackground((current) => (current + 1) % heroBackgrounds.length);
    }, SLIDE_DURATION);

    return () => {
      window.clearInterval(rotation);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative isolate min-h-[620px] overflow-hidden bg-[#fbf3e3] md:min-h-[650px]"
    >
      {/* Right-Side Spice Stage: Positioned more to the left to cover the middle gap */}
      <div className="hero-image-stage absolute inset-y-0 right-0 z-0 w-full overflow-hidden md:w-[58%] lg:w-[52%]">
        {/* Soft feather blend on left border */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-28 bg-gradient-to-r from-[#fbf3e3] via-[#fbf3e3]/80 to-transparent md:block"
          aria-hidden="true"
        />

        <div
          key={`active-page-${activeBackground}`}
          className="hero-image-fade absolute inset-0"
        >
          <Image
            src={heroBackgrounds[activeBackground].src}
            alt={heroBackgrounds[activeBackground].alt}
            fill
            priority={activeBackground === 0}
            sizes="(min-width: 1024px) 64vw, (min-width: 768px) 68vw, 100vw"
            className="object-contain object-right mix-blend-multiply"
          />
        </div>
      </div>

      {/* Mobile-only white gradient overlay so text remains readable on mobile */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#fbf3e3] via-[#fbf3e3]/95 to-transparent md:hidden"
        aria-hidden="true"
      />

      {/* Static copy keeps the message readable while the spices change. */}
      <div className="relative z-20 flex min-h-[620px] items-center px-6 py-20 md:min-h-[650px] md:px-12 md:py-24 lg:px-20 xl:px-28">
        <div className="max-w-xl">
          <p className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-terracotta sm:text-xs">
            <span className="h-px w-9 bg-terracotta" aria-hidden="true" />
            Whole spices, honestly sourced
          </p>

          <h1 className="font-serif text-5xl leading-[0.98] tracking-[-0.045em] text-forest sm:text-6xl lg:text-7xl">
            Spices with
            <span className="block italic text-terracotta">a story.</span>
          </h1>

          <p className="mt-7 max-w-md text-base leading-7 text-ink/70 md:text-lg md:leading-8">
            Carefully sourced whole spices from India, bringing authentic flavour
            and natural goodness to every meal.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              href="/spices"
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

      {/* Clearly Visible Scroll to Discover Indicator */}
      <div className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 md:block" aria-hidden="true">
        <div className="flex flex-col items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-forest/85">
          <span>Scroll to discover</span>
          <div className="relative h-9 w-0.5 overflow-hidden rounded-full bg-forest/25">
            <div className="h-4 w-full rounded-full bg-forest animate-pulse" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-image-fade {
          animation: hero-image-fade 500ms ease-out both;
        }

        @keyframes hero-image-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-image-fade {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
