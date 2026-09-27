import { Icon } from "@/components/shared/Icon";
import { Reveal } from "@/components/shared/Reveal";
import { USP_ITEMS } from "@/lib/visuals";

/** Trust bar directly under the hero — mirrors the reference mockup. */
export function UspBar() {
  return (
    <section className="border-y border-parchment-border bg-white/70">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-6 py-9 sm:grid-cols-4">
        {USP_ITEMS.map((item, i) => (
          <Reveal key={item.label} delay={i * 90}>
            <div className="flex flex-col items-center gap-2.5 text-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-forest/25 text-forest transition-transform duration-300 hover:scale-110">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <span className="text-xs font-medium text-ink/80 md:text-sm">
                {item.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
