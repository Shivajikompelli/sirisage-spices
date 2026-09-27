import { Icon, type IconName } from "@/components/shared/Icon";
import { EnquiryForm } from "@/components/shared/EnquiryForm";
import { Reveal } from "@/components/shared/Reveal";
import { CONTACT } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/enquiry";

const INFO_ITEMS: { icon: IconName; label: string; value: string; href?: string }[] = [
  { icon: "pin", label: "Our Office", value: CONTACT.officeLocation },
  { icon: "phone", label: "Call Us", value: "+91 99999 99999" },
  { icon: "mail", label: "Email Us", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: "clock", label: "Working Hours", value: "Mon – Sat: 9 AM – 6 PM" },
];

/** Contact Us — now a home page section (id="contact") for scroll-spy nav. */
export function HomeContact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-parchment">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-saffron">
              Contact Us
            </span>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-ink md:text-4xl">
              Get In Touch
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink/70 md:text-base">
              We'd love to hear from you — samples, wholesale quotes or custom
              requirements. Our procurement desk replies within one business
              day.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Info cards */}
          <div className="space-y-4 lg:col-span-2">
            {INFO_ITEMS.map((item, i) => {
              const inner = (
                <div className="flex items-start gap-4 rounded-card border border-parchment-border bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-ink/50">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-ink">{item.value}</p>
                  </div>
                </div>
              );
              return (
                <Reveal key={item.label} delay={i * 90}>
                  {item.href ? (
                    <a href={item.href} className="block">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </Reveal>
              );
            })}

            <Reveal delay={380}>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-card bg-forest px-5 py-3.5 text-sm font-medium text-parchment transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest/90 hover:shadow-lg"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={150} className="lg:col-span-3">
            <div className="rounded-card border border-parchment-border bg-white p-7 shadow-sm md:p-9">
              <EnquiryForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
