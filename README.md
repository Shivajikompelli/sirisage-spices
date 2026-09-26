# Sirisage Spices — Website

Marketing + spice catalog website for Sirisage Spices LLP. Enquiry-led export
model: no cart, no online payment — every product routes to an email or
WhatsApp enquiry. Catalog is fixed and edited directly in code (no CMS/admin).

## Stack

| Layer      | Choice                          | Why |
|------------|---------------------------------|-----|
| Framework  | Next.js 14 (App Router) + TS    | Static generation for every page → fast, free-tier-friendly hosting, strong SEO |
| Styling    | Tailwind CSS                    | Fast to theme against the deck's exact palette (`tailwind.config.ts`) |
| Data       | Local TypeScript files (`src/data/`) | Catalog is fixed → no database needed |
| Enquiries  | Resend (email) + `wa.me` links  | No backend/database for leads; both are near-zero cost |
| Hosting    | Vercel (free tier)              | Native Next.js support, HTTPS + CDN included |
| Images     | `/public` (or Backblaze B2 + Cloudflare CDN if the image set grows) | Keeps hosting cost at zero for a modest image set |

No payment gateway, no user accounts, no admin/CMS — deliberately left out
per the enquiry-only, fixed-catalog decision. See "Upgrade paths" below if
that changes later.

## Folder structure

```
sirisage-spices/
├── src/
│   ├── app/                     # Routes (Next.js App Router)
│   │   ├── layout.tsx           # Root layout: <Header /> + <Footer />
│   │   ├── page.tsx             # Home
│   │   ├── globals.css
│   │   ├── spices/
│   │   │   ├── page.tsx         # All spices + category chips
│   │   │   ├── [category]/page.tsx   # e.g. /spices/whole-spices
│   │   │   └── product/[slug]/page.tsx  # e.g. /spices/product/black-pepper
│   │   ├── about/page.tsx
│   │   ├── testimonials/page.tsx
│   │   ├── contact/page.tsx
│   │   └── api/enquiry/route.ts # POST handler → sends email via Resend
│   │
│   ├── components/
│   │   ├── layout/               # Header, Footer (site chrome)
│   │   ├── home/                 # Hero, TrustStrip, FeaturedCategories, StoryBanner
│   │   ├── spices/                # ProductCard (grid item)
│   │   ├── shared/                # EnquiryActions, EnquiryForm (reused everywhere)
│   │   └── testimonials/          # (add TestimonialCard here if it grows beyond inline)
│   │
│   ├── data/                     # ← EDIT THESE FILES TO UPDATE THE CATALOG
│   │   ├── spices.ts             # every product: name, category, descriptors, image path
│   │   ├── categories.ts         # the 6 fixed categories
│   │   └── testimonials.ts
│   │
│   ├── lib/
│   │   ├── constants.ts          # brand colors, nav links, contact info — single source of truth
│   │   └── enquiry.ts            # builds wa.me / mailto: links
│   │
│   └── types/
│       └── spice.ts              # Spice / Category / Testimonial / EnquiryPayload types
│
├── public/images/
│   ├── hero/                     # home page hero photography
│   ├── spices/                   # one image per product, filename matches `slug`
│   └── categories/                # one image per category, filename matches `slug`
│
├── tailwind.config.ts             # brand palette (parchment/forest/olive/terracotta/saffron/ink)
├── next.config.js
├── .env.example                   # copy to .env.local and fill in RESEND_API_KEY
└── package.json
```

## Process — how to actually build this out

1. **Install & run**
   ```bash
   npm install
   cp .env.example .env.local   # add your Resend API key
   npm run dev
   ```

2. **Drop in real photography.**
   Add images to `public/images/{hero,spices,categories}/`, named to match
   each item's `slug` in `src/data/`. Then swap the placeholder `<div>`s in
   `Hero.tsx`, `ProductCard.tsx`, `FeaturedCategories.tsx`, and the product
   detail page for `next/image`.

3. **Fill out the catalog.**
   Every product lives in `src/data/spices.ts` — no `price` field by design.
   Add a new spice by adding one object; it's picked up automatically by the
   `/spices`, category, and product-detail pages via `generateStaticParams`.

4. **Wire up real contact details.**
   Update `CONTACT.email` and `CONTACT.whatsappNumber` in `src/lib/constants.ts`.

5. **Style pass.**
   The scaffold is intentionally undecorated (skeleton layout only). Use the
   `frontend-design` skill/plugin for the actual visual pass — palette,
   type scale, and imagery treatment are already pinned in
   `tailwind.config.ts` and the original design deck, so the pass is about
   composition and polish, not re-deciding the brand.

6. **Test the enquiry flow end-to-end.**
   Submit the contact form and confirm the email lands (Resend's free tier
   sandbox sends only to your own verified address until you verify a
   domain). Click through "Chat on WhatsApp" on a product card to confirm
   the pre-filled message is correct.

7. **Deploy.**
   Push to GitHub → import into Vercel → add `RESEND_API_KEY` as an
   environment variable in the Vercel project settings → deploy.

## Upgrade paths (not built now, but the scaffold doesn't block them)

- **Client-editable catalog** → swap `src/data/*.ts` for a headless CMS
  (e.g. Sanity free tier) without touching page/component structure — the
  data shape (`Spice`, `Category`) stays the same.
- **Real e-commerce** (cart + checkout) → would need a rethink beyond this
  scaffold: product pricing, cart state, and a payment gateway (Razorpay
  fits the India context) — deliberately out of scope per the enquiry-only
  decision.
- **Lead logging** → forward `api/enquiry/route.ts` submissions to a Google
  Sheet in addition to email, if you want a lightweight enquiry log without
  a database.
