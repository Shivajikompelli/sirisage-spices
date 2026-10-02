import type { CategorySlug } from "@/types/spice";
import type { IconName } from "@/components/shared/Icon";

/**
 * Visual mapping for the four catalog categories. Categories with real
 * photography use `image`; the rest render an illustrated `art` tile so
 * nothing ever shows a broken image.
 */
export const CATEGORY_VISUALS: Record<
  CategorySlug,
  { image?: string; art: IconName; blurb: string }
> = {
  "whole-spices": { image: "/images/spices/black-pepper.jpg", art: "anise", blurb: "Intact buds and seeds with full essential oils" },
  "best-sellers": { image: "/images/spices/turmeric-powder.jpg", art: "mound", blurb: "Our most frequently requested spices" },
  "new-launches": { image: "/images/homeScreen/saffron.png", art: "mortar", blurb: "Recently added to the range" },
  "seeds-herbs": { image: "/images/spices/cumin-seeds.jpg", art: "sprout", blurb: "Cleaned seeds & dried herbs, 99% purity" },
};

/** Trust bar under the home hero — mirrors the reference mockup. */
export const USP_ITEMS: { icon: IconName; label: string }[] = [
  { icon: "leaf", label: "100% Pure & Natural" },
  { icon: "sprout", label: "Sourced from Trusted Farms" },
  { icon: "ban", label: "No Artificial Additives" },
  { icon: "badge", label: "Authentic Indian Flavours" },
];

/** Decorative star ratings per product (enquiry-led model — no prices shown). */
export const RATINGS: Record<string, { rating: number; count: number }> = {
  "black-pepper": { rating: 4.8, count: 120 },
  "turmeric-powder": { rating: 4.9, count: 98 },
  "red-chilli": { rating: 4.7, count: 110 },
  "green-cardamom": { rating: 4.9, count: 76 },
  cloves: { rating: 4.8, count: 64 },
  "cumin-seeds": { rating: 4.6, count: 88 },
};

/** About-page quality pillars, per the reference template. */
export const QUALITY_CARDS: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "badge",
    title: "Quality First",
    body: "Every lot is lab-checked for purity, colour and essential-oil content before it leaves our unit.",
  },
  {
    icon: "sprout",
    title: "Trusted Farms",
    body: "Long-term partnerships with cultivators across South India guarantee honest, traceable sourcing.",
  },
  {
    icon: "recycle",
    title: "Sustainable Practices",
    body: "Sun-drying, low-waste processing and recyclable multi-layer barrier packaging.",
  },
  {
    icon: "heart",
    title: "Customer Satisfaction",
    body: "Responsive export support, sample lots and documentation handled end-to-end.",
  },
];
