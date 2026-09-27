"use client";

import { useMemo, useState } from "react";
import { spices } from "@/data/spices";
import type { Spice } from "@/types/spice";
import { ProductCard } from "@/components/spices/ProductCard";
import { Icon } from "@/components/shared/Icon";
import { RATINGS } from "@/lib/visuals";

type SortKey = "popularity" | "rating" | "name";

const SORT_LABELS: Record<SortKey, string> = {
  popularity: "Popularity",
  rating: "Highest Rated",
  name: "Name (A–Z)",
};

function score(spice: Spice): number {
  let s = 0;
  if (spice.bestSeller) s += 4;
  if (spice.featured) s += 2;
  if (spice.newArrival) s += 1;
  return s;
}

export function ProductGridWithSort({ items }: { items: Spice[] }) {
  const [sort, setSort] = useState<SortKey>("popularity");
  const [sortEpoch, setSortEpoch] = useState(0); // re-triggers pop animation

  const sorted = useMemo(() => {
    const list = [...items];
    if (sort === "popularity") {
      list.sort((a, b) => score(b) - score(a));
    } else if (sort === "rating") {
      list.sort(
        (a, b) =>
          (RATINGS[b.slug]?.rating ?? 0) - (RATINGS[a.slug]?.rating ?? 0)
      );
    } else {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }
    return list;
  }, [items, sort]);

  return (
    <div>
      <div className="flex items-center justify-end gap-2">
        <label htmlFor="sort" className="text-sm text-ink/70">
          Sort By
        </label>
        <div className="relative">
          <select
            id="sort"
            value={sort}
            onChange={(e) => {
              setSort(e.target.value as SortKey);
              setSortEpoch((n) => n + 1);
            }}
            className="appearance-none rounded-card border border-ink/15 bg-white py-2 pl-4 pr-9 text-sm font-medium text-ink outline-none transition-colors hover:border-forest focus:border-forest"
          >
            {(Object.keys(SORT_LABELS) as SortKey[]).map((key) => (
              <option key={key} value={key}>
                {SORT_LABELS[key]}
              </option>
            ))}
          </select>
          <Icon
            name="chevron-down"
            className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink/50"
            strokeWidth={2.4}
          />
        </div>
      </div>

      <div
        key={`${sort}-${sortEpoch}`}
        className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {sorted.map((spice, i) => (
          <div
            key={spice.slug}
            className="animate-pop"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <ProductCard spice={spice} />
          </div>
        ))}
      </div>
    </div>
  );
}
