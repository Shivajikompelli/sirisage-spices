import type { CategorySlug, Product } from "@/types/product";

export function productsForCategory(products: Product[], category: CategorySlug) {
  return products.filter((product) => product.categories.includes(category));
}

export function productCountForCategory(products: Product[], category: CategorySlug) {
  return productsForCategory(products, category).length;
}
