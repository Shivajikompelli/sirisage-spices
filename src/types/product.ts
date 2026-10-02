/** Placeholder catalog types for the enquiry-led spices page. */
export type CategorySlug =
  | "whole-spices"
  | "best-sellers"
  | "new-launches"
  | "seeds-herbs";

export interface Category {
  slug: CategorySlug;
  label: string;
  description: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  image: {
    src: string;
    alt: string;
  };
  origin: string;
  summary: string;
  sizes: string[];
  categories: CategorySlug[];
}
