import Link from "next/link";
import { Icon } from "@/components/shared/Icon";
import { Reveal } from "@/components/shared/Reveal";
import { Parallax } from "@/components/shared/Parallax";
import { CONTACT } from "@/lib/constants";

/** Final call-to-action band before the footer. */
export function HomeCta() {
  return (
    <section className="px-6 pb-20">
      <Reveal y={36}>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-card bg-gradient-to-br from-forest via-forest to-[#1a3120] px-8 py-14 text-center text-parchment shadow-[0_30px_70px_-30px_rgba(36,66,39,0.7)] md:py-16">
          {/* Ambient glow orbs — drift in opposite directions */}
          <Parallax
            speed={-0.1}
            className="animate-pulse-glow pointer-events-none absolute -left-16 -top-16"
          >
            <div
              className="h-56 w-56 rounded-full bg-saffron/20 blur-3xl"
              aria-hidden="true"
            />
          </Parallax>
          <Parallax
            speed={0.1}
            className="animate-pulse-glow pointer-events-none absolute -bottom-20 -right-10"
          >
            <div
              className="h-64 w-64 rounded-full bg-olive/30 blur-3xl"
              aria-hidden="true"
              style={{ animationDelay: "1.2s" }}
            />
          </Parallax>

          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-tight md:text-4xl">
              Ready to Taste the Difference of True Purity?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-parchment/85 md:text-base">
              Request samples, wholesale lots or export documentation — our
              procurement desk replies within one business day.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/spices"
                className="group inline-flex items-center gap-2 rounded-card bg-parchment px-7 py-3.5 text-sm font-medium text-forest transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg"
              >
                Browse Catalog
                <Icon
                  name="arrow-right"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2.2}
                />
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-card border border-parchment/40 px-7 py-3.5 text-sm font-medium text-parchment transition-all duration-300 hover:-translate-y-0.5 hover:border-saffron hover:text-saffron"
              >
                <Icon name="mail" className="h-4 w-4" />
                {CONTACT.email}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
