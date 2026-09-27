import Link from "next/link";
import { spices } from "@/data/spices";
import { ProductCard } from "@/components/spices/ProductCard";
import { Icon } from "@/components/shared/Icon";
import { Reveal } from "@/components/shared/Reveal";

/** Home product row — a hand-picked selection from the fixed catalog. */
export function FeaturedProducts() {
  const featured = spices
    .filter((s) => s.featured || s.bestSeller || s.newArrival)
    .slice(0, 4);

  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-20">
      <Reveal>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl text-ink md:text-4xl">
              Our Signature Spices
            </h2>
            <p className="mt-2 text-sm text-ink/70 md:text-base">
              Hand-picked lots loved by kitchens and importers worldwide.
            </p>
          </div>
          <Link
            href="/spices"
            className="group hidden shrink-0 items-center gap-1.5 text-sm font-medium text-forest sm:inline-flex"
          >
            View All
            <Icon
              name="arrow-right"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={2.2}
            />
          </Link>
        </div>
      </Reveal>

      <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {featured.map((spice, i) => (
          <Reveal key={spice.slug} delay={i * 100}>
            <ProductCard spice={spice} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
