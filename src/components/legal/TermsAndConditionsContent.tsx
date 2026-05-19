import type { ReactNode } from "react";
import Link from "next/link";
import LegalPageHero from "@/components/legal/LegalPageHero";
import LegalPageLayout, { type LegalSection } from "@/components/legal/LegalPageLayout";

const LAST_UPDATED = "19 May 2026";

const sections: LegalSection[] = [
    {
        id: "introduction",
        title: "1. Introduction",
        content: (
            <>
                <p>
                    These Terms and Conditions (&quot;Terms&quot;) govern your use of the website at{" "}
                    <a href="https://www.skillcityfs.com.au" className="text-primary hover:underline">
                        www.skillcityfs.com.au
                    </a>{" "}
                    and your engagement of cleaning and facility services provided by Skill City Facility
                    Solutions (&quot;Skill City&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
                </p>
                <p>
                    By accessing our website, requesting a quote, booking a service, or otherwise engaging
                    with us, you agree to these Terms. If you do not agree, please do not use our website
                    or services. Where you enter into a separate written service agreement or quote that
                    conflicts with these Terms, the terms of that specific agreement will prevail to the
                    extent of any inconsistency.
                </p>
            </>
        ),
    },
    {
        id: "who-we-are",
        title: "2. Who we are",
        content: (
            <p>
                Skill City Facility Solutions provides residential and commercial cleaning services in
                Melbourne, Oakleigh, and across Victoria. Our business address is 4A Haughton Road,
                Oakleigh VIC 3166, Australia. Contact details are set out in section 17 below.
            </p>
        ),
    },
    {
        id: "services",
        title: "3. Our services",
        content: (
            <>
                <p>
                    We offer a range of cleaning services including, without limitation, house cleaning,
                    end-of-lease cleaning, carpet and steam cleaning, emergency call-outs, and commercial
                    facility cleaning. Service scope, inclusions, and exclusions will be described in your
                    quote, booking confirmation, or service checklist.
                </p>
                <p>
                    We reserve the right to refuse or discontinue service where we reasonably believe it
                    would be unsafe, unlawful, or impractical to perform the work (for example, due to
                    hazardous conditions, access restrictions, or abusive conduct toward our staff).
                </p>
            </>
        ),
    },
    {
        id: "quotes-pricing",
        title: "4. Quotes and pricing",
        content: (
            <>
                <p>
                    Quotes provided via our website, phone, or email are estimates based on the information
                    you supply. Final pricing may vary if the scope of work changes, access is restricted,
                    or additional time or materials are required. We will communicate material price
                    changes before proceeding where reasonably practicable.
                </p>
                <p>
                    Unless stated otherwise, prices are in Australian dollars (AUD) and may be subject to
                    GST where applicable. Promotional offers are subject to their stated terms and expiry
                    dates.
                </p>
            </>
        ),
    },
    {
        id: "bookings",
        title: "5. Bookings and scheduling",
        content: (
            <>
                <p>
                    Bookings are confirmed when we accept your request and, where applicable, any required
                    deposit or agreement is received. We will use reasonable efforts to attend at the
                    agreed date and time window. Delays may occur due to traffic, weather, or prior jobs
                    running over time; we will notify you where possible if we expect to be late.
                </p>
                <p>
                    Recurring service schedules may be paused or adjusted by mutual agreement. One-off and
                    emergency jobs are subject to crew availability.
                </p>
            </>
        ),
    },
    {
        id: "access",
        title: "6. Access to your premises",
        content: (
            <>
                <p>
                    You are responsible for providing safe, timely access to the areas to be cleaned,
                    including keys, codes, parking, and instructions for pets or alarm systems. If we
                    cannot access the property at the scheduled time, a call-out or rebooking fee may apply.
                </p>
                <p>
                    You should secure or disclose valuables, cash, jewellery, and sensitive documents before
                    our arrival. While our team is trained to work carefully, we are not responsible for
                    loss or damage to items not properly secured or disclosed.
                </p>
            </>
        ),
    },
    {
        id: "customer-responsibilities",
        title: "7. Your responsibilities",
        content: (
            <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate information when requesting quotes or booking services.</li>
                <li>
                    Ensure the work area is reasonably clear and that electrical, plumbing, and gas
                    utilities are in safe working order.
                </li>
                <li>
                    Inform us of any allergies, chemical sensitivities, or surfaces requiring special care.
                </li>
                <li>
                    Disclose known hazards such as asbestos, mould, biohazards, or aggressive animals before
                    service commences.
                </li>
                <li>Treat our staff with respect and comply with reasonable site safety requirements.</li>
            </ul>
        ),
    },
    {
        id: "cancellations",
        title: "8. Cancellations and rescheduling",
        content: (
            <>
                <p>
                    Please provide as much notice as possible if you need to cancel or reschedule. Our
                    standard notice period and any applicable fees will be confirmed at booking or on your
                    invoice. Late cancellations or lock-outs may incur a fee to cover lost time and travel.
                </p>
                <p>
                    We may cancel or reschedule due to severe weather, staff illness, or events outside our
                    reasonable control. In such cases, we will work with you to arrange an alternative time.
                </p>
            </>
        ),
    },
    {
        id: "satisfaction",
        title: "9. Service quality and complaints",
        content: (
            <>
                <p>
                    We take pride in delivering professional cleaning. If you are not satisfied with an
                    aspect of our work, please contact us within a reasonable time (typically within 24–48
                    hours of service completion) with specific details so we can inspect and, where
                    appropriate, rectify the issue at no extra charge.
                </p>
                <p>
                    Remedies may include re-cleaning of the affected area. Refunds or credits are at our
                    discretion and are not automatic for subjective preferences unrelated to the agreed
                    scope of work.
                </p>
            </>
        ),
    },
    {
        id: "liability",
        title: "10. Liability and insurance",
        content: (
            <>
                <p>
                    To the maximum extent permitted by Australian Consumer Law, our liability for loss or
                    damage arising from our services is limited to the re-supply of the services or the
                    cost of having the services supplied again, except where liability cannot be excluded
                    by law.
                </p>
                <p>
                    We are not liable for indirect or consequential loss, loss of profit, or damage caused
                    by pre-existing defects, normal wear and tear, or events outside our reasonable control.
                    We maintain appropriate insurance for our operations; claims for damage caused by our
                    negligence should be reported promptly with supporting evidence.
                </p>
                <p>
                    Nothing in these Terms excludes, restricts, or modifies any consumer guarantee or right
                    you have under the <em>Competition and Consumer Act 2010</em> (Cth) or other applicable
                    law that cannot lawfully be excluded.
                </p>
            </>
        ),
    },
    {
        id: "payment",
        title: "11. Payment",
        content: (
            <>
                <p>
                    Payment terms will be stated on your quote or invoice. Unless otherwise agreed, payment
                    is due on completion of the service or within the period specified on your invoice.
                    Late payments may incur interest or suspension of future bookings.
                </p>
                <p>
                    For end-of-lease and larger commercial jobs, we may require a deposit or payment prior to
                    release of keys or sign-off. Chargebacks without prior contact to resolve a dispute may
                    be referred for debt recovery where permitted by law.
                </p>
            </>
        ),
    },
    {
        id: "website-use",
        title: "12. Website use",
        content: (
            <>
                <p>
                    You may use our website for lawful purposes only. You must not attempt to interfere with
                    site security, scrape content without permission, upload malicious code, or use the site
                    in any way that could harm Skill City or other users.
                </p>
                <p>
                    Information on this website is general in nature and does not constitute professional
                    advice. We endeavour to keep content accurate but do not warrant that all information is
                    complete or current at all times.
                </p>
            </>
        ),
    },
    {
        id: "intellectual-property",
        title: "13. Intellectual property",
        content: (
            <p>
                All content on this website—including text, logos, images, and design—is owned by or
                licensed to Skill City Facility Solutions and protected by Australian intellectual property
                laws. You may not reproduce, distribute, or modify our content without prior written
                consent, except for personal, non-commercial viewing.
            </p>
        ),
    },
    {
        id: "privacy",
        title: "14. Privacy",
        content: (
            <p>
                Our collection and use of personal information is described in our{" "}
                <Link href="/privacy" className="text-primary hover:underline font-medium">
                    Privacy Policy
                </Link>
                . By using our services, you acknowledge that we will handle personal information in
                accordance with that policy and applicable Australian privacy law.
            </p>
        ),
    },
    {
        id: "governing-law",
        title: "15. Governing law",
        content: (
            <p>
                These Terms are governed by the laws of Victoria, Australia. You submit to the non-exclusive
                jurisdiction of the courts of Victoria for disputes arising in connection with these Terms or
                our services, subject to any rights you have under consumer protection legislation.
            </p>
        ),
    },
    {
        id: "changes",
        title: "16. Changes to these Terms",
        content: (
            <p>
                We may update these Terms from time to time. The current version will be published on this
                page with an updated &quot;Last updated&quot; date. Continued use of our website or services
                after changes are posted constitutes acceptance of the revised Terms where permitted by law.
            </p>
        ),
    },
    {
        id: "contact",
        title: "17. Contact us",
        content: (
            <>
                <p>
                    For questions about these Terms, bookings, or service enquiries, contact Skill City
                    Facility Solutions:
                </p>
                <ul className="mt-4 space-y-2 not-prose">
                    <li>
                        <strong>Email:</strong>{" "}
                        <a
                            href="mailto:info@skillcityfs.com.au"
                            className="text-primary hover:underline"
                        >
                            info@skillcityfs.com.au
                        </a>
                    </li>
                    <li>
                        <strong>Phone:</strong>{" "}
                        <a href="tel:+61390346492" className="text-primary hover:underline">
                            03 9034 6492
                        </a>
                    </li>
                    <li>
                        <strong>Address:</strong> 4A Haughton Road, Oakleigh VIC 3166, Australia
                    </li>
                </ul>
                <p className="mt-6">
                    Ready to book?{" "}
                    <Link href="/contact-us" className="text-primary hover:underline font-medium">
                        Get in touch here
                    </Link>
                    .
                </p>
            </>
        ),
    },
];

export default function TermsAndConditionsContent() {
    return (
        <>
            <LegalPageHero
                title="Terms and Conditions"
                description="The terms that apply when you use our website or engage Skill City Facility Solutions for cleaning services."
            />

            <LegalPageLayout
                lastUpdated={LAST_UPDATED}
                navAriaLabel="Terms and conditions sections"
                sections={sections}
                relatedLinks={[{ href: "/privacy", label: "Privacy Policy" }]}
                ctaDescription="Our team can clarify how these terms apply to your home or business cleaning booking."
            />
        </>
    );
}
