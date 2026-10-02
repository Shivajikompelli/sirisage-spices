import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/shared/Icon";
import { Reveal } from "@/components/shared/Reveal";

/** "Spices that Bring People Together" banner with photo edges, per reference. */
export function TogetherBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-cream texture-paper">
      {/* Decorative photo edges — drift gently for depth */}
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-52 md:block lg:w-72 xl:w-80">
        <Image
          src="/images/spices/cloves.jpg"
          alt=""
          fill
          sizes="(min-width: 1280px) 320px, (min-width: 1024px) 288px, 208px"
          className="object-cover object-center opacity-90 [mask-image:linear-gradient(to_right,black_56%,transparent_100%)]"
        />
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-52 md:block lg:w-72 xl:w-80">
        <Image
          src="/images/spices/green-cardamom.jpg"
          alt=""
          fill
          sizes="(min-width: 1280px) 320px, (min-width: 1024px) 288px, 208px"
          className="object-cover object-center opacity-90 [mask-image:linear-gradient(to_left,black_56%,transparent_100%)]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-10 text-center md:py-12">
        <Reveal>
          <h2 className="font-serif text-3xl leading-tight tracking-[-0.02em] text-ink md:text-[2.45rem]">
            Spices that Bring People Together
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-ink/75 md:text-[1.05rem]">
            From our farms to your home, we deliver the essence of tradition
            with uncompromising quality.
          </p>
          <Link
            href="/#spices"
            className="group mt-7 inline-flex items-center gap-2 rounded-card bg-forest px-7 py-3 text-sm font-medium text-parchment shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest/90 hover:shadow-lg"
          >
            Explore Now
            <Icon
              name="arrow-right"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={2.2}
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
