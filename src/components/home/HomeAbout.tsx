import Image from "next/image";
import { Icon } from "@/components/shared/Icon";
import { Reveal } from "@/components/shared/Reveal";
import { Parallax } from "@/components/shared/Parallax";
import { QUALITY_CARDS } from "@/lib/visuals";
import { BRAND } from "@/lib/constants";

/** About Us — now a home page section (id="about") for scroll-spy nav. */
export function HomeAbout() {
  return (
    <section id="about" className="texture-paper scroll-mt-20 bg-parchment-subtle">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Photo with accent frame */}
          <Reveal>
            <div className="relative">
              <Parallax
                speed={-0.06}
                className="absolute -left-4 -top-4 h-full w-full"
              >
                <div
                  className="h-full w-full rounded-card border border-olive/30"
                  aria-hidden="true"
                />
              </Parallax>
              <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-[0_24px_60px_-24px_rgba(36,66,39,0.45)]">
                <Image
                  src="/images/spices/cumin-seeds.jpg"
                  alt="Cumin seeds freshly cleaned for packing"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              {/* Floating badge */}
              <div className="animate-float-slow absolute -bottom-4 right-4 rounded-card bg-forest px-4 py-2.5 shadow-xl">
                <span className="flex items-center gap-2 text-xs font-medium text-parchment">
                  <Icon name="sprout" className="h-4 w-4 text-saffron" />
                  Since day one — zero adulteration
                </span>
              </div>
            </div>
          </Reveal>

          {/* Story */}
          <Reveal delay={140}>
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-saffron">
                About Us
              </span>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-ink md:text-4xl">
                From Trusted Farms to
                <span className="text-forest"> Kitchens Around the World</span>
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink/75 md:text-base">
                <p>
                  At {BRAND.legalName}, we are passionate about bringing pure,
                  high-quality spices that add flavour, health and happiness to
                  your life.
                </p>
                <p>
                  We work closely with trusted farmers, ensure ethical sourcing
                  and maintain the highest standards of quality — from harvest
                  to hygienic packing.
                </p>
              </div>

              {/* Mini stats */}
              <div className="mt-7 grid grid-cols-3 gap-4">
                {[
                  ["100%", "Pure & Natural"],
                  ["0", "Artificial Additives"],
                  ["1", "Mission — Your Trust"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-card border border-parchment-border bg-white p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <span className="block font-serif text-2xl text-forest">
                      {value}
                    </span>
                    <span className="mt-1 block text-[11px] leading-tight text-ink/60">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Quality pillars */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {QUALITY_CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 100}>
              <div className="h-full rounded-card border border-parchment-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <Icon name={card.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-serif text-lg text-ink">{card.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink/70">
                  {card.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
