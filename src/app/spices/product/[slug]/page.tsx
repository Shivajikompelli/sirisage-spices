import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { spices } from "@/data/spices";
import { categories } from "@/data/categories";
import { EnquiryActions } from "@/components/shared/EnquiryActions";
import { ProductCard } from "@/components/spices/ProductCard";
import { SpiceArt } from "@/components/shared/SpiceArt";
import { Icon, StarRating } from "@/components/shared/Icon";
import { Reveal } from "@/components/shared/Reveal";
import { CATEGORY_VISUALS, RATINGS } from "@/lib/visuals";
import { COMMERCIAL_NOTE } from "@/lib/constants";

export function generateStaticParams() {
  return spices.map((s) => ({ slug: s.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const spice = spices.find((s) => s.slug === params.slug);
  if (!spice) notFound();

  const category = categories.find((c) => c.slug === spice.category);
  const visual = CATEGORY_VISUALS[spice.category];
  const rating = RATINGS[spice.slug] ?? { rating: 4.7, count: 50 };
  const related = spices.filter((s) => s.slug !== spice.slug).slice(0, 4);

  const specs: [string, string][] = [
    ["Origin", spice.origin],
    ["Format", spice.format],
    ["Quality", spice.quality],
    ["Use", spice.use],
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
      {/* Breadcrumb */}
      <Reveal>
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-ink/60"
        >
          <Link href="/" className="transition-colors hover:text-forest">
            Home
          </Link>
          <Icon name="chevron-down" className="h-3 w-3 -rotate-90 opacity-50" />
          <Link href="/spices" className="transition-colors hover:text-forest">
            Spices
          </Link>
          <Icon name="chevron-down" className="h-3 w-3 -rotate-90 opacity-50" />
          {category && (
            <>
              <Link
                href={`/spices/${category.slug}`}
                className="transition-colors hover:text-forest"
              >
                {category.name}
              </Link>
              <Icon name="chevron-down" className="h-3 w-3 -rotate-90 opacity-50" />
            </>
          )}
          <span className="font-medium text-ink">{spice.name}</span>
        </nav>
      </Reveal>

      <section className="grid gap-10 lg:grid-cols-2">
        {/* Image */}
        <Reveal>
          <div className="group relative aspect-square overflow-hidden rounded-card border border-parchment-border bg-[#F4EFE6] shadow-[0_24px_60px_-28px_rgba(36,66,39,0.4)]">
            {spice.image ? (
              <Image
                src={spice.image}
                alt={spice.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            ) : (
              <SpiceArt variant={visual.art} className="h-full w-full" />
            )}
            {spice.newArrival && (
              <span className="absolute left-4 top-4 rounded-full bg-terracotta px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-parchment shadow-sm">
                New Arrival
              </span>
            )}
          </div>
        </Reveal>

        {/* Info */}
        <Reveal delay={140}>
          <div className="flex h-full flex-col justify-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-saffron">
              {category?.name}
            </span>
            <h1 className="mt-2 font-serif text-3xl text-ink md:text-5xl">
              {spice.name}
            </h1>
            <p className="mt-2 text-base text-ink/75">{spice.tagline}</p>

            <div className="mt-4 flex items-center gap-2">
              <StarRating value={rating.rating} starClass="h-4 w-4" />
              <span className="text-xs text-ink/50">
                {rating.rating.toFixed(1)} · {rating.count} reviews
              </span>
            </div>

            {/* Descriptor chips */}
            <div className="mt-5 flex flex-wrap gap-2">
              {spice.descriptors.map((d) => (
                <span
                  key={d}
                  className="rounded-full border border-olive/30 bg-olive/10 px-3 py-1 text-xs font-medium text-forest"
                >
                  {d}
                </span>
              ))}
            </div>

            {/* Spec cards */}
            <dl className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {specs.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-card border border-parchment-border bg-white p-4"
                >
                  <dt className="text-[11px] font-medium uppercase tracking-wide text-ink/50">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm text-ink">{value}</dd>
                </div>
              ))}
            </dl>

            {/* Enquiry */}
            <div className="mt-8">
              <h2 className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-ink/60">
                Direct Enquiry
              </h2>
              <EnquiryActions spice={spice} />
              <p className="mt-4 text-xs text-ink/50">{COMMERCIAL_NOTE}</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Related products */}
      <section className="mt-16 md:mt-20">
        <Reveal>
          <h2 className="font-serif text-2xl text-ink md:text-3xl">
            You May Also Like
          </h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {related.map((s, i) => (
            <Reveal key={s.slug} delay={i * 90}>
              <ProductCard spice={s} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
