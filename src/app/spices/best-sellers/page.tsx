import { spices } from "@/data/spices";
import { PageHeroBand } from "@/components/shared/PageHeroBand";
import { CatalogTabs } from "@/components/shared/CatalogTabs";
import { CategoryChips } from "@/components/spices/CategoryChips";
import { ProductGridWithSort } from "@/components/spices/ProductGridWithSort";
import { SpicesCategorySections } from "@/components/spices/SpicesCategorySections";
import { Reveal } from "@/components/shared/Reveal";
import { COMMERCIAL_NOTE } from "@/lib/constants";

export const metadata = {
  title: "Best-Selling Spices | Sirisage Spices",
  description:
    "Browse our most requested staple spices, trusted by commercial buyers and culinary businesses globally. Request an export quote.",
};

export default function BestSellersPage() {
  const bestSellers = spices.filter((s) => s.bestSeller === true);

  return (
    <>
      <PageHeroBand
        title="Best Sellers"
        sub="Customer favourites, loved for their quality and flavour — trusted by kitchens across India."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Spices", href: "/spices" },
          { label: "Best Sellers" },
        ]}
        photos={["/images/spices/black-pepper.jpg", "/images/spices/turmeric-powder.jpg"]}
      />

      <div className="mx-auto max-w-6xl px-6 py-10 md:py-12">
        <Reveal>
          <CatalogTabs active="/spices/best-sellers" />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-6">
            <CategoryChips />
          </div>
        </Reveal>

        <div className="mt-10">
          <ProductGridWithSort items={bestSellers} />
        </div>

        <Reveal>
          <p className="mt-12 border-t border-ink/10 pt-4 text-xs text-ink/60">
            {COMMERCIAL_NOTE}
          </p>
        </Reveal>

        <SpicesCategorySections />
      </div>
    </>
  );
}
