"use client";

import { useState } from "react";
import type { EnquiryPayload } from "@/types/spice";

type Status = "idle" | "sending" | "sent" | "error";

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
    return <p className="text-forest">Thanks — we'll be in touch shortly.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input name="name" placeholder="Name" required className="border border-ink/20 p-3" />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="border border-ink/20 p-3"
      />
      <input
        name="destination"
        placeholder="Country / Destination"
        className="border border-ink/20 p-3"
      />
      <textarea
        name="requirement"
        placeholder="Spice / Requirement"
        required
        className="border border-ink/20 p-3"
        rows={4}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-card bg-forest px-6 py-3 text-parchment disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
      {status === "error" && (
        <p className="text-sm text-terracotta">
          Something went wrong — please try WhatsApp or email instead.
        </p>
      )}
    </form>
  );
}
