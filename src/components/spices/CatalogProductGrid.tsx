import type { Product } from "@/types/product";
import { CatalogProductCard } from "@/components/spices/CatalogProductCard";

export function CatalogProductGrid({ products }: { products: Product[] }) {
  if (!products.length) {
    return <p className="rounded-[2rem] bg-forest/[0.04] px-6 py-10 text-sm text-ink/70">There are no products in this category yet.</p>;
  }

  return <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{products.map((product) => <CatalogProductCard key={product.id} product={product} />)}</div>;
}
