import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/shared/Icon";

export interface Crumb {
  label: string;
  href?: string;
}

/**
 * Cream textured header band used on inner pages — centered serif title,
 * subtitle, optional photo tiles on the right (like the reference pages).
 */
export function PageHeroBand({
  title,
  sub,
  crumbs = [],
  photos = [],
}: {
  title: string;
  sub?: string;
  crumbs?: Crumb[];
  photos?: string[];
}) {
  return (
    <section className="relative overflow-hidden bg-cream texture-paper">
      {/* Right-edge photo tiles */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/3 items-center justify-end gap-3 pr-10 md:flex">
        {photos.map((src, i) => (
          <div
            key={src}
            className={`relative overflow-hidden rounded-full border-2 border-parchment shadow-md ${
              i === 0 ? "h-28 w-28 rotate-6" : "h-20 w-20 -rotate-6"
            }`}
          >
            <Image src={src} alt="" fill sizes="112px" className="object-cover" />
          </div>
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-14 md:py-16">
        {crumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex flex-wrap items-center gap-1.5 text-xs text-ink/60"
          >
            {crumbs.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-1.5">
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-forest">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-medium text-ink">{crumb.label}</span>
                )}
                {i < crumbs.length - 1 && (
                  <Icon name="chevron-down" className="h-3 w-3 -rotate-90 opacity-50" />
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="max-w-2xl">
          <h1
            className="animate-slide-up font-serif text-3xl leading-tight text-ink md:text-5xl"
            style={{ animationDelay: "0.05s" }}
          >
            {title}
          </h1>
          {sub && (
            <p
              className="animate-slide-up mt-3 text-sm leading-relaxed text-ink/75 md:text-base"
              style={{ animationDelay: "0.18s" }}
            >
              {sub}
            </p>
          )}
        </div>
      </div>

      {/* Bottom fade into the page */}
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-b from-transparent to-parchment/60" />
    </section>
  );
}
