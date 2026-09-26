import Link from "next/link";
import { EnquiryActions } from "@/components/shared/EnquiryActions";
import type { Spice } from "@/types/spice";

export function ProductCard({ spice }: { spice: Spice }) {
  return (
    <div className="rounded-card border border-ink/10 bg-white p-4">
      <Link href={`/spices/product/${spice.slug}`}>
        {/* TODO: replace with next/image using spice.image */}
        <div className="mb-3 aspect-square rounded-card bg-saffron/20" />
        <h3 className="font-serif text-lg text-ink">{spice.name}</h3>
        <p className="text-sm text-ink/70">{spice.descriptors.join(" • ")}</p>
      </Link>
      <div className="mt-3">
        <EnquiryActions spice={spice} />
      </div>
    </div>
  );
}
