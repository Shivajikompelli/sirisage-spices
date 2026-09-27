import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/shared/Icon";
import { Reveal } from "@/components/shared/Reveal";

interface PromoSection {
  title: string;
  description: string;
  ctaText: string;
  href: string;
  photo: string;
  photoSide: "left" | "right";
}

const PROMO_SECTIONS: PromoSection[] = [
  {
    title: "New Products",
    description: "Be the first to try our latest arrivals.",
    ctaText: "Explore New Products",
    href: "/spices/new-products",
    photo: "/images/spices/cloves.jpg",
    photoSide: "right",
  },
  {
    title: "Best Sellers",
    description: "Customer favourites, loved for their quality and flavour.",
    ctaText: "View Best Sellers",
    href: "/spices/best-sellers",
    photo: "/images/spices/turmeric-powder.jpg",
    photoSide: "left",
  },
  {
    title: "Testimonials",
    description: "Real stories from our happy customers.",
    ctaText: "Read Testimonials",
    href: "/#testimonials",
    photo: "/images/spices/green-cardamom.jpg",
    photoSide: "right",
  },
];

/** Image-backed promo bands shown under the catalog grids. */
export function SpicesCategorySections() {
  return (
    <section className="mt-14 space-y-6">
      {PROMO_SECTIONS.map((section, i) => (
        <Reveal key={section.title} delay={i * 90}>
          <div className="group relative overflow-hidden rounded-card border border-parchment-border bg-cream texture-paper">
            <div
              className={`pointer-events-none absolute inset-y-0 hidden w-48 lg:block ${
                section.photoSide === "left" ? "left-0" : "right-0"
              }`}
            >
              <Image
                src={section.photo}
                alt=""
                fill
                sizes="192px"
                className={`object-cover opacity-90 transition-transform duration-700 group-hover:scale-105 ${
                  section.photoSide === "left"
                    ? "[mask-image:linear-gradient(to_right,black_60%,transparent)]"
                    : "[mask-image:linear-gradient(to_left,black_60%,transparent)]"
                }`}
              />
            </div>

            <div
              className={`relative flex flex-col items-start gap-3 px-8 py-9 md:flex-row md:items-center md:justify-between ${
                section.photoSide === "left" ? "lg:pl-64" : "lg:pr-64"
              }`}
            >
              <div className="max-w-lg">
                <h3 className="font-serif text-2xl text-ink">{section.title}</h3>
                <p className="mt-1.5 text-sm text-ink/75">{section.description}</p>
              </div>
              <Link
                href={section.href}
                className="group/btn inline-flex shrink-0 items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-parchment shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest/90 hover:shadow-md"
              >
                {section.ctaText}
                <Icon
                  name="arrow-right"
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5"
                  strokeWidth={2.2}
                />
              </Link>
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
