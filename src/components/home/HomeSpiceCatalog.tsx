import { CatalogProductGrid } from "@/components/spices/CatalogProductGrid";
import { EnquiryBand } from "@/components/spices/EnquiryBand";
import { Icon } from "@/components/shared/Icon";
import { products } from "@/data/products";
import { spiceCategories } from "@/data/spice-categories";
import { productsForCategory } from "@/lib/product-queries";

/** The complete spice catalog, grouped into scrollable category sections. */
export function HomeSpiceCatalog() {
  return (
    <section id="catalog" className="scroll-mt-24 bg-[#fbf3e3]">
      <div className="px-4 py-6 md:px-8 md:py-8 lg:px-12 xl:px-16">
        <div>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-medium text-ink/65">
            <span className="inline-flex items-center gap-1.5"><Icon name="leaf" className="h-4 w-4 text-forest" />Pure &amp; natural</span>
            <span className="inline-flex items-center gap-1.5"><Icon name="sprout" className="h-4 w-4 text-forest" />Farm sourced</span>
            <span className="inline-flex items-center gap-1.5"><Icon name="badge" className="h-4 w-4 text-forest" />Quality checked</span>
          </div>

          <div className="mt-6 space-y-12 md:mt-8 md:space-y-16">
            {spiceCategories.map((category) => (
              <section key={category.slug} id={category.slug} className="scroll-mt-24">
                <div className="flex items-center gap-3 text-forest">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest/10">
                    <Icon name="mortar" className="h-5 w-5" />
                  </span>
                  <h2 className="font-serif text-3xl text-forest md:text-4xl">
                    {category.label}
                  </h2>
                </div>
                <div className="mt-5">
                  <CatalogProductGrid products={productsForCategory(products, category.slug)} />
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
      <EnquiryBand />
    </section>
  );
}
