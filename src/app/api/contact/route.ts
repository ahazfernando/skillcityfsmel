import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
    name: z.string().trim().min(1, "Name is required").max(200),
    email: z.string().trim().email("Invalid email address"),
    phone: z.string().trim().min(1, "Phone is required").max(50),
    service: z.string().trim().min(1, "Service is required"),
    state: z.string().trim().optional(),
    postalCode: z.string().trim().optional(),
    message: z.string().trim().min(1, "Message is required").max(5000),
});

function escapeHtml(text: string): string {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error("RESEND_API_KEY is not configured");
        return NextResponse.json(
            { error: "Email service is not configured. Please try again later." },
            { status: 503 },
        );
    }

    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
        return NextResponse.json(
            { error: "Please check your form and try again.", details: parsed.error.flatten() },
            { status: 400 },
        );
    }

    const data = parsed.data;
    const toEmail = process.env.CONTACT_FORM_TO_EMAIL ?? "esh@skillcityfs.com.au";
    const fromEmail =
        process.env.RESEND_FROM_EMAIL ?? "Skill City FS <noreply@skillcityfs.com.au>";

    const resend = new Resend(apiKey);

    const stateDisplay = data.state?.trim() || "Not provided";
    const postalDisplay = data.postalCode?.trim() || "Not provided";

    const { error } = await resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        replyTo: data.email,
        subject: `New contact inquiry: ${data.service} — ${data.name}`,
        html: `
            <h2>New contact form submission</h2>
            <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
            <p><strong>Email:</strong> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></p>
            <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
            <p><strong>Service:</strong> ${escapeHtml(data.service)}</p>
            <p><strong>State:</strong> ${escapeHtml(stateDisplay)}</p>
            <p><strong>Postal code:</strong> ${escapeHtml(postalDisplay)}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${escapeHtml(data.message)}</p>
        `,
        text: [
            "New contact form submission",
            "",
            `Name: ${data.name}`,
            `Email: ${data.email}`,
            `Phone: ${data.phone}`,
            `Service: ${data.service}`,
            `State: ${stateDisplay}`,
            `Postal code: ${postalDisplay}`,
            "",
            "Message:",
            data.message,
        ].join("\n"),
    });

    if (error) {
        console.error("Resend error:", error);
        return NextResponse.json(
            { error: "Failed to send your message. Please try again or call us directly." },
            { status: 502 },
        );
    }

    return NextResponse.json({ success: true });
}
