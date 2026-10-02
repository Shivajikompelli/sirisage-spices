import Link from "next/link";
import { Icon } from "@/components/shared/Icon";

export function EnquiryBand() {
  return (
    <section className="bg-forest px-4 py-8 text-parchment md:px-8 md:py-10 lg:px-12 xl:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-7 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl"><h2 className="font-serif text-3xl tracking-[-0.03em] md:text-4xl">Looking for something specific?</h2><p className="mt-3 text-sm leading-6 text-parchment/75 md:text-base">Tell us the spice, the quantity and where it&apos;s going. We&apos;ll reply with availability and pricing.</p></div>
        <Link href="/contact" className="group inline-flex w-fit items-center gap-3 rounded-full bg-parchment px-7 py-3.5 text-sm font-medium text-forest transition-all duration-300 motion-reduce:transition-none hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-parchment">Enquire now <Icon name="arrow-right" className="h-4 w-4 transition-transform duration-300 motion-reduce:transition-none group-hover:translate-x-1" strokeWidth={2} /></Link>
      </div>
    </section>
  );
}
