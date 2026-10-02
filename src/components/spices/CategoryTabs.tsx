import Link from "next/link";
import type { Category, CategorySlug, Product } from "@/types/product";
import { productCountForCategory } from "@/lib/product-queries";

export function CategoryTabs({
  activeCategory,
  categories,
  products,
}: {
  activeCategory: CategorySlug;
  categories: Category[];
  products: Product[];
}) {
  return (
    <nav aria-label="Spice categories" className="flex flex-wrap gap-2 border-b border-forest/10 pb-5">
      {categories.map((category) => {
        const active = category.slug === activeCategory;
        return (
          <Link
            key={category.slug}
            href={`/#${category.slug}`}
            aria-current={active ? "page" : undefined}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest ${
              active
                ? "bg-forest text-parchment"
                : "text-forest hover:bg-forest/[0.06]"
            }`}
          >
            {category.label} <span className="ml-1 text-current/70">{productCountForCategory(products, category.slug)}</span>
          </Link>
        );
      })}
    </nav>
  );
}
