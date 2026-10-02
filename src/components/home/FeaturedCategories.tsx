import Link from "next/link";
import { categories } from "@/data/categories";

export function FeaturedCategories() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 md:py-12">
      <h2 className="text-center font-serif text-2xl text-ink">Featured Categories</h2>
      <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-6">
        {categories.map((category) => (
          <Link
            key={category.slug}
                href={`#${category.slug}`}
            className="flex flex-col items-center gap-2 text-center"
          >
            {/* TODO: replace with next/image using category.image */}
            <div className="h-16 w-16 rounded-full bg-olive/20" />
            <span className="text-sm text-ink">{category.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
