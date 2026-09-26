import type { Spice } from "@/types/spice";

// Fixed catalog — edit this file directly to add/update products.
// No `price` field: the business model is enquiry-led, not price-led (see slide 07).
// Images live in /public/images/spices/<slug>.jpg
export const spices: Spice[] = [
  {
    slug: "black-pepper",
    name: "Black Pepper",
    tagline: "Bold, sharp, unmistakably peppery",
    category: "whole-spices",
    origin: "India",
    format: "Whole / packed to requirement",
    quality: "Sourced from trusted farms",
    use: "Culinary & food applications",
    descriptors: ["Bold", "Aromatic"],
    image: "/images/spices/black-pepper.jpg",
    bestSeller: true,
  },
  {
    slug: "turmeric-powder",
    name: "Turmeric Powder",
    tagline: "Golden, earthy, deeply aromatic",
    category: "ground-spices",
    origin: "India",
    format: "Ground / packed to requirement",
    quality: "Sourced from trusted farms",
    use: "Culinary & food applications",
    descriptors: ["Golden", "Earthy"],
    image: "/images/spices/turmeric-powder.jpg",
    bestSeller: true,
  },
  {
    slug: "red-chilli",
    name: "Red Chilli",
    tagline: "Vibrant colour, bold heat",
    category: "whole-spices",
    origin: "India",
    format: "Whole / packed to requirement",
    quality: "Sourced from trusted farms",
    use: "Culinary & food applications",
    descriptors: ["Vibrant", "Bold"],
    image: "/images/spices/red-chilli.jpg",
  },
  {
    slug: "green-cardamom",
    name: "Green Cardamom",
    tagline: "A timeless aroma from India",
    category: "whole-spices",
    origin: "India",
    format: "Whole / packed to requirement",
    quality: "Sourced from trusted farms",
    use: "Culinary & food applications",
    descriptors: ["Aromatic", "Fresh"],
    image: "/images/spices/green-cardamom.jpg",
    featured: true,
  },
];
