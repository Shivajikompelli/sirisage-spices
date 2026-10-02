"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icon, StarRating } from "@/components/shared/Icon";
import type { Product } from "@/types/product";

export function CatalogProductCard({ product }: { product: Product }) {
  const isNew = product.categories.includes("new-launches");
  const isBestSeller = product.categories.includes("best-sellers");
  const [loved, setLoved] = useState(false);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-card bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(36,66,39,0.35)]">
      <Link
        href={`/contact?product=${product.slug}`}
        aria-label={`Enquire about ${product.name}`}
        className="relative block aspect-square overflow-hidden bg-cream"
      >
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {isNew || isBestSeller ? (
          <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-parchment shadow-sm ${isNew ? "bg-terracotta" : "bg-forest"}`}>
            {isNew ? "New" : "Bestseller"}
          </span>
        ) : null}
      </Link>

      <button
        type="button"
        onClick={() => setLoved((value) => !value)}
        aria-label={loved ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
        aria-pressed={loved}
        className={`absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-sm transition-transform duration-200 hover:scale-110 ${loved ? "text-terracotta" : "text-ink/55 hover:text-terracotta"}`}
      >
        <Icon name="heart" className="h-5 w-5" filled={loved} />
      </button>

      <div className="flex flex-1 flex-col p-4">
        <h2 className="font-serif text-xl leading-snug text-ink transition-colors group-hover:text-forest">{product.name}</h2>
        <div className="mt-2 flex items-center gap-2">
          <StarRating value={4.8} />
          <span className="text-xs text-ink/50">({product.categories.includes("best-sellers") ? "98" : "76"})</span>
        </div>
        <Link
          href={`/contact?product=${product.slug}`}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-card bg-forest px-4 py-2.5 text-sm font-medium text-parchment transition-colors hover:bg-forest/90"
        >
          Enquire Now
          <Icon name="arrow-right" className="h-4 w-4" strokeWidth={2.2} />
        </Link>
      </div>
    </article>
  );
}
