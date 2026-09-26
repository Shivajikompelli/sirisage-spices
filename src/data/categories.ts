import type { Category } from "@/types/spice";

// Fixed catalog — edit this file directly to add/rename categories.
// Images live in /public/images/categories/<slug>.jpg
export const categories: Category[] = [
  { slug: "whole-spices", name: "Whole Spices", image: "/images/categories/whole-spices.jpg" },
  { slug: "ground-spices", name: "Ground Spices", image: "/images/categories/ground-spices.jpg" },
  { slug: "blends-masalas", name: "Blends & Masalas", image: "/images/categories/blends-masalas.jpg" },
  { slug: "seeds-herbs", name: "Seeds & Herbs", image: "/images/categories/seeds-herbs.jpg" },
  { slug: "organic-spices", name: "Organic Spices", image: "/images/categories/organic-spices.jpg" },
  { slug: "seasonings", name: "Seasonings", image: "/images/categories/seasonings.jpg" },
];
