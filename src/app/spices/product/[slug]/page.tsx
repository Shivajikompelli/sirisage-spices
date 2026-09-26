import { notFound } from "next/navigation";
import { spices } from "@/data/spices";
import { EnquiryActions } from "@/components/shared/EnquiryActions";
import { COMMERCIAL_NOTE } from "@/lib/constants";

export function generateStaticParams() {
  return spices.map((s) => ({ slug: s.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const spice = spices.find((s) => s.slug === params.slug);
  if (!spice) notFound();

  return (
    <section className="mx-auto grid max-w-4xl gap-8 px-6 py-16 md:grid-cols-2">
      {/* TODO: replace with next/image using spice.image */}
      <div className="aspect-square rounded-card bg-saffron/20" />

      <div>
        <h1 className="font-serif text-3xl text-ink">{spice.name}</h1>
        <p className="mt-1 text-ink/70">{spice.tagline}</p>

        <dl className="mt-6 space-y-2 text-sm">
          <div className="flex gap-2">
            <dt className="w-24 text-ink/60">Origin</dt>
            <dd>{spice.origin}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-24 text-ink/60">Format</dt>
            <dd>{spice.format}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-24 text-ink/60">Quality</dt>
            <dd>{spice.quality}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-24 text-ink/60">Use</dt>
            <dd>{spice.use}</dd>
          </div>
        </dl>

        <div className="mt-6">
          <EnquiryActions spice={spice} />
        </div>

        <p className="mt-4 text-xs text-ink/50">{COMMERCIAL_NOTE}</p>
      </div>
    </section>
  );
}
