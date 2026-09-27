"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { Spice } from "@/types/spice";
import { Icon, StarRating } from "@/components/shared/Icon";
import { SpiceArt } from "@/components/shared/SpiceArt";
import { CATEGORY_VISUALS, RATINGS } from "@/lib/visuals";
import { categories } from "@/data/categories";

export function ProductCard({ spice, delay = 0 }: { spice: Spice; delay?: number }) {
  const [loved, setLoved] = useState(false);
  const category = categories.find((c) => c.slug === spice.category);
  const rating = RATINGS[spice.slug] ?? { rating: 4.7, count: 50 };

  return (
    <div
      className="group relative flex flex-col rounded-card border border-ink/10 bg-white transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-18px_rgba(36,66,39,0.35)]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image */}
      <Link
        href={`/spices/product/${spice.slug}`}
        className="relative block aspect-square overflow-hidden rounded-t-card bg-[#F4EFE6]"
        aria-label={`View ${spice.name}`}
      >
        {spice.image ? (
          <Image
            src={spice.image}
            alt={spice.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        ) : (
          <SpiceArt variant={CATEGORY_VISUALS[spice.category]?.art ?? "leaf"} className="h-full w-full" />
        )}

        {/* New / Bestseller flags */}
        {spice.newArrival && (
          <span className="absolute left-3 top-3 rounded-full bg-terracotta px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-parchment shadow-sm">
            New
          </span>
        )}
        {spice.bestSeller && (
          <span className="absolute left-3 top-3 rounded-full bg-forest px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-parchment shadow-sm">
            Bestseller
          </span>
        )}
      </Link>

      {/* Wishlist heart */}
      <button
        type="button"
        onClick={() => setLoved((v) => !v)}
        aria-pressed={loved}
        aria-label={loved ? `Remove ${spice.name} from wishlist` : `Add ${spice.name} to wishlist`}
        className={`absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
          loved ? "text-terracotta" : "text-ink/60 hover:text-terracotta"
        }`}
      >
        <Icon
          name="heart"
          className={`h-4 w-4 transition-transform duration-300 ${loved ? "scale-110" : ""}`}
          filled={loved}
        />
      </button>

      {/* Body */}
      <div className="flex flex-1 flex-col p-4">
        <Link href={`/spices/product/${spice.slug}`} className="block">
          <h3 className="font-serif text-base leading-snug text-ink transition-colors group-hover:text-forest">
            {spice.name}
          </h3>
          <p className="mt-0.5 text-xs text-ink/60">{category?.name ?? spice.descriptors.join(" • ")}</p>
        </Link>

        <div className="mb-4 mt-2 flex items-center gap-1.5">
          <StarRating value={rating.rating} />
          <span className="text-[11px] text-ink/50">({rating.count})</span>
        </div>

        {/* CTA — enquiry-led model: no cart, no public pricing */}
        <Link
          href={`/spices/product/${spice.slug}`}
          className="mt-auto inline-flex items-center justify-center gap-1.5 rounded-card bg-forest px-4 py-2.5 text-xs font-medium text-parchment transition-all duration-300 hover:bg-forest/90 hover:shadow-md"
        >
          Enquire Now
          <Icon
            name="arrow-right"
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
            strokeWidth={2.2}
          />
        </Link>
      </div>
    </div>
  );
}
