export type CategorySlug =
  | "whole-spices"
  | "ground-spices"
  | "blends-masalas"
  | "seeds-herbs"
  | "organic-spices"
  | "seasonings";

export interface Category {
  slug: CategorySlug;
  name: string;
  image: string; // path under /public/images/categories
}

export interface Spice {
  slug: string;          // used in /spices/product/[slug]
  name: string;           // e.g. "Green Cardamom"
  tagline: string;        // e.g. "A timeless aroma from India"
  category: CategorySlug;
  origin: string;         // e.g. "India"
  format: string;         // e.g. "Whole / packed to requirement"
  quality: string;        // e.g. "Sourced from trusted farms"
  use: string;            // e.g. "Culinary & food applications"
  descriptors: string[];  // e.g. ["Aromatic", "Fresh"]
  image: string;          // path under /public/images/spices
  featured?: boolean;     // show on Home > Featured
  newArrival?: boolean;
  bestSeller?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  theme: "Quality" | "Service" | "Authenticity";
}

export interface EnquiryPayload {
  name: string;
  email: string;
  destination: string;
  requirement: string; // spice / quantity / requirement free text
  spiceSlug?: string;   // pre-filled when enquiring from a product page
}
