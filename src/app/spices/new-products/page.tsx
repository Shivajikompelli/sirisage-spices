import { spices } from "@/data/spices";
import { PageHeroBand } from "@/components/shared/PageHeroBand";
import { CatalogTabs } from "@/components/shared/CatalogTabs";
import { CategoryChips } from "@/components/spices/CategoryChips";
import { ProductGridWithSort } from "@/components/spices/ProductGridWithSort";
import { SpicesCategorySections } from "@/components/spices/SpicesCategorySections";
import { Reveal } from "@/components/shared/Reveal";
import { COMMERCIAL_NOTE } from "@/lib/constants";

export const metadata = {
  title: "New Products & Seasonal Harvest | Sirisage Spices",
  description:
    "Browse the newest spice arrivals and seasonal single-origin harvests from Sirisage Spices. Request export quotes.",
};

export default function NewProductsPage() {
  const newArrivals = spices.filter((s) => s.newArrival === true);

  return (
    <>
      <PageHeroBand
        title="New Products"
        sub="Be the first to try our latest arrivals — freshly harvested lots prepared to export grade."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Spices", href: "/spices" },
          { label: "New Products" },
        ]}
        photos={["/images/spices/red-chilli.jpg", "/images/spices/green-cardamom.jpg"]}
      />

      <div className="mx-auto max-w-6xl px-6 py-10 md:py-12">
        <Reveal>
          <CatalogTabs active="/spices/new-products" />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-6">
            <CategoryChips />
          </div>
        </Reveal>

        <div className="mt-10">
          <ProductGridWithSort items={newArrivals} />
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
