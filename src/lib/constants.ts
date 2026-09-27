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

// One-page experience: every route except /spices lives on the home page
// as a section. NAV_LINKS doubles as the header scroll-spy map.
export const NAV_LINKS = [
  { href: "/", label: "Home", sectionId: "home" },
  { href: "/spices", label: "Spices", sectionId: "" },
  { href: "/#about", label: "About Us", sectionId: "about" },
  { href: "/#testimonials", label: "Testimonials", sectionId: "testimonials" },
  { href: "/#contact", label: "Contact Us", sectionId: "contact" },
] as const;

// Key commercial rule from the deck: no public pricing, enquiry-led selling only.
export const COMMERCIAL_NOTE =
  "Shipping & packaging charges apply and are borne by the buyer.";
