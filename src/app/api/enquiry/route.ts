import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT } from "@/lib/constants";
import type { EnquiryPayload } from "@/types/spice";

// No database — every enquiry is just relayed straight to the team's inbox.
const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_for_build");

export async function POST(req: NextRequest) {
  const body = (await req.json()) as EnquiryPayload;

  if (!body.name || !body.email || !body.requirement) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Sirisage Website <onboarding@resend.dev>", // swap for a verified domain sender
      to: CONTACT.email,
      subject: `New enquiry from ${body.name}`,
      text: [
        `Name: ${body.name}`,
        `Email: ${body.email}`,
        `Destination: ${body.destination || "-"}`,
        `Requirement: ${body.requirement}`,
        body.spiceSlug ? `Spice: ${body.spiceSlug}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Enquiry email failed:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
