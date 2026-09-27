import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import { spices } from "@/data/spices";
import { PageHeroBand } from "@/components/shared/PageHeroBand";
import { CatalogTabs } from "@/components/shared/CatalogTabs";
import { CategoryChips } from "@/components/spices/CategoryChips";
import { ProductGridWithSort } from "@/components/spices/ProductGridWithSort";
import { SpicesCategorySections } from "@/components/spices/SpicesCategorySections";
import { SpiceArt } from "@/components/shared/SpiceArt";
import { Reveal } from "@/components/shared/Reveal";
import { CATEGORY_VISUALS } from "@/lib/visuals";
import { COMMERCIAL_NOTE } from "@/lib/constants";
import type { CategorySlug } from "@/types/spice";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export default function CategoryPage({
  params,
}: {
  params: { category: CategorySlug };
}) {
  const category = categories.find((c) => c.slug === params.category);
  if (!category) notFound();

  const items = spices.filter((s) => s.category === params.category);
  const visual = CATEGORY_VISUALS[params.category];

  return (
    <>
      <PageHeroBand
        title={category.name}
        sub={visual.blurb}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Spices", href: "/spices" },
          { label: category.name },
        ]}
        photos={[
          visual.image ?? "/images/spices/black-pepper.jpg",
          "/images/spices/cloves.jpg",
        ]}
      />

      <div className="mx-auto max-w-6xl px-6 py-10 md:py-12">
        <Reveal>
          <CatalogTabs active={`/spices/${params.category}`} />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-6">
            <CategoryChips active={params.category} />
          </div>
        </Reveal>

        <div className="mt-10">
          {items.length > 0 ? (
            <ProductGridWithSort items={items} />
          ) : (
            <Reveal>
              <div className="flex flex-col items-center rounded-card border border-ink/10 bg-white p-10 text-center">
                <SpiceArt variant={visual.art} className="h-28 w-28 rounded-card" />
                <p className="mt-5 max-w-md text-sm text-ink/70">
                  Currently preparing the next harvest lot for this category.
                  Enquire directly for custom procurement.
                </p>
                <Link
                  href="/#contact"
                  className="mt-5 rounded-card bg-forest px-5 py-2.5 text-sm font-medium text-parchment transition-colors hover:bg-forest/90"
                >
                  Contact Procurement
                </Link>
              </div>
            </Reveal>
          )}
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
