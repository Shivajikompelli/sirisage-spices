// Single source of truth for brand tokens + business info.
// Pulled directly from the "Sirisage Spices — Visual Website Concept" deck.

export const BRAND = {
  name: "Sirisage Spices",
  tagline: "Pure Spices. Pure Trust.",
  legalName: "Sirisage Spices LLP",
} as const;

// Color palette (slide 03 — Visual Language)
export const COLORS = {
  parchment: "#F7F2E7",
  forest: "#244227",
  olive: "#696F41",
  terracotta: "#B15B38",
  saffron: "#C6913E",
  ink: "#1F231B",
} as const;

// Contact / enquiry channels (slide 09 — Contact & Conversion)
export const CONTACT = {
  email: "enquiry@sirisage.com",
  whatsappNumber: "91XXXXXXXXXX", // replace with real number, no + or spaces
  officeLocation: "Hyderabad, India",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/spices", label: "Spices" },
  { href: "/about", label: "About Us" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact Us" },
] as const;

// Key commercial rule from the deck: no public pricing, enquiry-led selling only.
export const COMMERCIAL_NOTE =
  "Shipping & packaging charges apply and are borne by the buyer.";
