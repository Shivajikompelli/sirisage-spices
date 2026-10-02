"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/shared/Icon";
import { Reveal } from "@/components/shared/Reveal";
import { Parallax } from "@/components/shared/Parallax";
import { buildWhatsAppLink } from "@/lib/enquiry";


const FEATURES = [
  {
    icon: "sprout" as const,
    title: "Single-Origin Sourcing",
    body: "Partnered directly with spice cultivators across South India — no filler grades, ever.",
  },
  {
    icon: "badge" as const,
    title: "Aroma Retention",
    body: "Climate-monitored cleaning and multi-layer barrier pouches lock in essential oils.",
  },
];

export function HomeVideoShowcase() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section className="texture-paper bg-parchment-subtle">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-10 md:py-14 lg:grid-cols-12">
        {/* Video frame — native 9:16 portrait */}
        <Reveal className="lg:col-span-5" y={36}>
          <div className="relative mx-auto w-[min(72vw,300px)]">
            <Parallax
              speed={-0.06}
              className="absolute -left-4 -top-4 h-full w-full"
            >
              <div
                className="h-full w-full rounded-card border border-olive/30"
                aria-hidden="true"
              />
            </Parallax>
            <div className="relative aspect-[9/16] overflow-hidden rounded-card border border-parchment-border bg-ink shadow-xl">
              <video
                ref={videoRef}
                src="/images/videos/vid_2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-contain"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink/60 to-transparent" />

              {/* Controls */}
              <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-parchment/90 text-forest shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-parchment"
                >
                  <Icon name="play" className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-parchment/90 text-forest shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-parchment"
                >
                  <span className="text-[10px] font-bold">
                    {isMuted ? "OFF" : "ON"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Copy + features */}
        <div className="lg:col-span-7">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-saffron">
              Sirisage in Motion
            </span>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-ink md:text-4xl">
              From Fertile Soil to
              <span className="text-forest"> Culinary Perfection</span>
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink/75 md:text-base">
              Witness our commitment to purity, authentic processing and
              unadulterated spice aromas through every harvest lot.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {FEATURES.map((feature, i) => (
              <Reveal key={feature.title} delay={120 + i * 110}>
                <div className="h-full rounded-card border border-parchment-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest/10 text-forest">
                    <Icon name={feature.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 font-serif text-lg text-ink">{feature.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink/75">
                    {feature.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={280}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#spices"
                className="inline-flex items-center justify-center rounded-card border border-forest px-6 py-3 text-sm font-medium text-forest transition-colors hover:bg-forest/5"
              >
                Browse Catalog
              </Link>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-card bg-forest px-6 py-3 text-sm font-medium text-parchment transition-colors hover:bg-forest/90"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
