import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";
import { CATEGORY_VISUALS } from "@/lib/visuals";
import { SpiceArt } from "@/components/shared/SpiceArt";

/** Row of circular category shortcuts with active highlight. */
export function CategoryChips({ active }: { active?: string }) {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-3">
      {categories.map((category) => {
        const visual = CATEGORY_VISUALS[category.slug];
        const isActive = category.slug === active;
        return (
          <Link
            key={category.slug}
            href={`/#${category.slug}`}
            className="group flex flex-col items-center gap-1.5"
          >
            <span
              className={`relative block h-12 w-12 overflow-hidden rounded-full border-2 transition-all duration-300 group-hover:-translate-y-0.5 ${
                isActive
                  ? "border-forest shadow-md"
                  : "border-parchment-border group-hover:border-olive/50"
              }`}
            >
              {visual.image ? (
                <Image
                  src={visual.image}
                  alt=""
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              ) : (
                <SpiceArt variant={visual.art} className="h-full w-full" />
              )}
            </span>
            <span
              className={`max-w-[72px] text-center text-[10px] font-medium leading-tight md:text-[11px] ${
                isActive ? "text-forest" : "text-ink/70 group-hover:text-forest"
              }`}
            >
              {category.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
