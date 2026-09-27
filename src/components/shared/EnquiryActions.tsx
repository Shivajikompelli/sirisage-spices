import { buildEmailLink, buildWhatsAppLink } from "@/lib/enquiry";
import type { Spice } from "@/types/spice";

// Replaces "Add to Cart" per the enquiry-only commercial model (slide 07).
export function EnquiryActions({ spice }: { spice?: Pick<Spice, "name"> }) {
  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <a
        href={buildEmailLink(spice)}
        className="flex-1 rounded-card border border-forest px-3 py-2 text-center text-xs font-medium text-forest transition-colors hover:bg-forest/5"
      >
        Enquire by Email
      </a>
      <a
        href={buildWhatsAppLink(spice)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 rounded-card bg-forest px-3 py-2 text-center text-xs font-medium text-parchment transition-colors hover:bg-forest/90"
      >
        Chat on WhatsApp
      </a>
    </div>
  );
}
