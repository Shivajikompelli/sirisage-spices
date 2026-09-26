import { buildEmailLink, buildWhatsAppLink } from "@/lib/enquiry";
import type { Spice } from "@/types/spice";

// Replaces "Add to Cart" per the enquiry-only commercial model (slide 07).
export function EnquiryActions({ spice }: { spice?: Pick<Spice, "name"> }) {
  return (
    <div className="flex gap-3">
      <a
        href={buildEmailLink(spice)}
        className="rounded-card border border-forest px-4 py-2 text-sm text-forest"
      >
        Enquire by Email
      </a>
      <a
        href={buildWhatsAppLink(spice)}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-card bg-forest px-4 py-2 text-sm text-parchment"
      >
        Chat on WhatsApp
      </a>
    </div>
  );
}
