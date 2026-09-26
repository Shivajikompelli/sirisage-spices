import { CONTACT } from "./constants";
import type { Spice } from "@/types/spice";

/**
 * Builds a wa.me deep link pre-filled with a message about a specific spice.
 * No backend required — this is a plain URL the browser/app resolves.
 */
export function buildWhatsAppLink(spice?: Pick<Spice, "name">): string {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  const text = spice
    ? `Hi Sirisage Spices, I'd like to enquire about ${spice.name}.`
    : `Hi Sirisage Spices, I'd like to make an enquiry.`;
  return `${base}?text=${encodeURIComponent(text)}`;
}

/**
 * Builds a mailto: link pre-filled with subject/body for a specific spice.
 * Used as the lightweight fallback to the enquiry form / API route.
 */
export function buildEmailLink(spice?: Pick<Spice, "name">): string {
  const subject = spice
    ? `Enquiry: ${spice.name}`
    : `Product / Export Enquiry`;
  const body = spice
    ? `Hi Sirisage Spices team,\n\nI'd like to enquire about ${spice.name}.\nQuantity:\nDestination:\n\nThanks,`
    : `Hi Sirisage Spices team,\n\nI'd like to enquire about:\n\nThanks,`;
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}
