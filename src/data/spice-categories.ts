import type { Category, CategorySlug } from "@/types/product";

export const spiceCategories: Category[] = [
  {
    slug: "whole-spices",
    label: "Whole spices",
    description:
      "The full range, packed whole so the flavour stays locked in until you grind.",
  },
  {
    slug: "best-sellers",
    label: "Best sellers",
    description: "The spices our customers reorder most often.",
  },
  {
    slug: "new-launches",
    label: "New launches",
    description: "Recently added to the range.",
  },
  {
    slug: "seeds-herbs",
    label: "Seeds & herbs",
    description: "Whole seeds and leaves selected for everyday cooking.",
  },
];

export const DEFAULT_CATEGORY: CategorySlug = "whole-spices";

export function getCategorySlug(value: unknown): CategorySlug {
  return spiceCategories.some((category) => category.slug === value)
    ? (value as CategorySlug)
    : DEFAULT_CATEGORY;
}
