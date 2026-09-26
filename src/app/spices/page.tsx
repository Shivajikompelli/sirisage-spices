import { spices } from "@/data/spices";
import { categories } from "@/data/categories";
import { ProductCard } from "@/components/spices/ProductCard";
import Link from "next/link";

export default function SpicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-serif text-3xl text-ink">Explore Our Spices Collection</h1>
      <p className="mt-2 max-w-xl text-ink/70">
        Discover a wide range of premium spices, carefully sourced and packed
        to preserve natural goodness.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/spices/${c.slug}`}
            className="rounded-full border border-ink/10 px-4 py-2 text-sm"
          >
            {c.name}
          </Link>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {spices.map((spice) => (
          <ProductCard key={spice.slug} spice={spice} />
        ))}
      </div>
    </section>
  );
}
