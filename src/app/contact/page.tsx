import { EnquiryForm } from "@/components/shared/EnquiryForm";
import { CONTACT, COMMERCIAL_NOTE } from "@/lib/constants";

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-4xl gap-10 px-6 py-16 md:grid-cols-2">
      <div>
        <h1 className="font-serif text-3xl text-ink">Get In Touch</h1>
        <p className="mt-2 text-ink/70">We'd love to hear from you.</p>

        <div className="mt-6 space-y-3 text-sm">
          <p>Email: {CONTACT.email}</p>
          <p>Office: {CONTACT.officeLocation}</p>
        </div>

        <p className="mt-6 text-xs text-ink/50">{COMMERCIAL_NOTE}</p>
      </div>

      <EnquiryForm />
    </section>
  );
}
