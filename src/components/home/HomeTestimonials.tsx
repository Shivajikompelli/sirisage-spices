import Link from "next/link";
import { testimonials } from "@/data/testimonials";
import { StarRating } from "@/components/shared/Icon";
import { Reveal } from "@/components/shared/Reveal";

/** Home testimonials teaser — three quote cards, per the reference. */
export function HomeTestimonials() {
  const picks = testimonials.slice(0, 3);

  return (
    <section
      id="testimonials"
      className="texture-paper scroll-mt-20 bg-parchment-subtle"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <Reveal>
        <h2 className="text-center font-serif text-3xl text-ink md:text-4xl">
          Spices that Bring People Together
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-ink/70 md:text-base">
          Real stories from happy customers across the world.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {picks.map((t, i) => (
          <Reveal key={t.id} delay={i * 120}>
            <blockquote className="flex h-full flex-col rounded-card border border-parchment-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(36,66,39,0.35)]">
              <span className="font-serif text-5xl leading-none text-saffron" aria-hidden="true">
                &ldquo;
              </span>
              <p className="mt-2 flex-1 text-sm italic leading-relaxed text-ink/80">
                {t.quote}
              </p>
              <footer className="mt-6 flex items-center justify-between">
                <div>
                  <cite className="block text-sm font-medium not-italic text-ink">
                    {t.author}
                  </cite>
                  <span className="text-xs text-olive">
                    {t.location || t.theme}
                  </span>
                </div>
                <StarRating value={5} />
              </footer>
            </blockquote>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="mt-9 text-center">
          <Link
            href="/#spices"
            className="inline-flex items-center gap-2 rounded-card bg-forest px-7 py-3 text-sm font-medium text-parchment shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest/90"
          >
            Explore Our Spices
          </Link>
        </div>
      </Reveal>
      </div>
    </section>
  );
}
