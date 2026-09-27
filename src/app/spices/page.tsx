import { spices } from "@/data/spices";
import { categories } from "@/data/categories";
import { PageHeroBand } from "@/components/shared/PageHeroBand";
import { CategoryChips } from "@/components/spices/CategoryChips";
import { ProductGridWithSort } from "@/components/spices/ProductGridWithSort";
import { SpicesCategorySections } from "@/components/spices/SpicesCategorySections";
import { Reveal } from "@/components/shared/Reveal";
import { COMMERCIAL_NOTE } from "@/lib/constants";

export const metadata = {
  title: "All Spices Catalog | Sirisage Spices",
  description:
    "Explore our fixed catalog of pure, premium Indian spices. Request wholesale export quotes via WhatsApp or email.",
};

export default function SpicesPage() {
  return (
    <>
      <PageHeroBand
        title="Explore Our Spices Collection"
        sub="Discover a wide range of premium spices, carefully sourced and packed to preserve natural goodness."
        photos={["/images/spices/turmeric-powder.jpg", "/images/spices/red-chilli.jpg"]}
      />

      <div className="mx-auto max-w-6xl px-6 py-10 md:py-12">
        {/* Circular category strip */}
        <Reveal>
          <CategoryChips />
        </Reveal>

        {/* Product grid */}
        <div className="mt-10">
          <Reveal>
            <h2 className="mb-4 font-serif text-2xl text-ink md:text-3xl">
              Our Spice Products
            </h2>
          </Reveal>
          <ProductGridWithSort items={spices} />
        </div>

        {/* Commercial note */}
        <Reveal>
          <p className="mt-12 border-t border-ink/10 pt-4 text-xs text-ink/60">
            {COMMERCIAL_NOTE}
          </p>
        </Reveal>

        {/* Promo banners */}
        <SpicesCategorySections />
      </div>
    </>
  );
}
