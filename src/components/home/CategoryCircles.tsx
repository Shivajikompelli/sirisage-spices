import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";
import { CATEGORY_VISUALS } from "@/lib/visuals";
import { SpiceArt } from "@/components/shared/SpiceArt";
import { Reveal } from "@/components/shared/Reveal";

/** Featured Categories — the row of circular spice tiles from the reference. */
export function CategoryCircles() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-5 md:py-6">
      <Reveal>
        <h2 className="text-center font-serif text-3xl text-ink md:text-4xl">
          Featured Categories
        </h2>
      </Reveal>

      <div className="mx-auto mt-4 grid max-w-3xl grid-cols-2 gap-x-3 gap-y-4 sm:grid-cols-4">
        {categories.map((category, i) => {
          const visual = CATEGORY_VISUALS[category.slug];
          return (
            <Reveal key={category.slug} delay={i * 80}>
              <Link
                href={`#${category.slug}`}
                className="group flex flex-col items-center gap-3"
              >
                <span className="relative block h-16 w-16 overflow-hidden rounded-full border border-parchment-border/50 shadow-sm transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_14px_30px_-12px_rgba(36,66,39,0.4)] sm:h-20 sm:w-20">
                  {visual.image ? (
                    <Image
                      src={visual.image}
                      alt={category.name}
                      fill
                      sizes="96px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <SpiceArt
                      variant={visual.art}
                      className="h-full w-full transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                </span>
                <span className="text-center text-xs font-medium text-ink/80 transition-colors group-hover:text-forest md:text-sm">
                  {category.name}
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
