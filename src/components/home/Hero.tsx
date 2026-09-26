import Link from "next/link";
import { BRAND } from "@/lib/constants";

// TODO: hero image — overhead spice bowls + cinnamon + chilli + botanical leaves
// (see slide 05, "Hero image direction"). Swap the placeholder div for next/image.
export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h1 className="max-w-lg font-serif text-4xl leading-tight text-ink md:text-6xl">
        {BRAND.tagline}
      </h1>
      <p className="mt-4 max-w-md text-ink/80">
        Bringing authentic flavours of nature to kitchens around the world.
      </p>
      <Link
        href="/spices"
        className="mt-6 inline-block rounded-card bg-forest px-6 py-3 text-parchment"
      >
        Shop Spices
      </Link>
    </section>
  );
}
