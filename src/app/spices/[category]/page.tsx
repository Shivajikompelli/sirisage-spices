import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import { spices } from "@/data/spices";
import { ProductCard } from "@/components/spices/ProductCard";
import type { CategorySlug } from "@/types/spice";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export default function CategoryPage({
  params,
}: {
  params: { category: CategorySlug };
}) {
  const category = categories.find((c) => c.slug === params.category);
  if (!category) notFound();

  const items = spices.filter((s) => s.category === params.category);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-serif text-3xl text-ink">{category.name}</h1>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {items.map((spice) => (
          <ProductCard key={spice.slug} spice={spice} />
        ))}
      </div>
    </section>
  );
}
