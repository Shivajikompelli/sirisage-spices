"use client";

import { useState } from "react";
import { Icon } from "@/components/shared/Icon";
import type { EnquiryPayload } from "@/types/spice";

type Status = "idle" | "sending" | "sent" | "error";

const FIELD =
  "w-full rounded-card border border-ink/15 bg-parchment-subtle px-4 py-3 text-sm text-ink placeholder:text-ink/40 outline-none transition-all duration-300 focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/15";

export function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = new FormData(e.currentTarget);
    const payload: EnquiryPayload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      destination: String(form.get("destination") ?? ""),
      requirement: String(form.get("requirement") ?? ""),
    };

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="animate-pop flex flex-col items-center rounded-card bg-forest/5 px-6 py-12 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest text-parchment">
          <Icon name="check" className="h-7 w-7" strokeWidth={2.4} />
        </span>
        <p className="mt-4 font-serif text-xl text-forest">
          Message sent successfully!
        </p>
        <p className="mt-1 text-sm text-ink/70">
          Thanks — our team will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" placeholder="Your Name" required className={FIELD} />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className={FIELD}
        />
      </div>
      <input
        name="destination"
        placeholder="Country / Destination"
        className={FIELD}
      />
      <textarea
        name="requirement"
        placeholder="Your Message — spice, quantity, requirement…"
        required
        className={`${FIELD} resize-none`}
        rows={5}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex items-center justify-center gap-2 rounded-card bg-forest px-6 py-3.5 text-sm font-medium text-parchment transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest/90 hover:shadow-lg disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
        {status !== "sending" && (
          <Icon
            name="arrow-right"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={2.2}
          />
        )}
      </button>
      {status === "error" && (
        <p className="text-sm text-terracotta">
          Something went wrong — please try WhatsApp or email instead.
        </p>
      )}
    </form>
  );
}
