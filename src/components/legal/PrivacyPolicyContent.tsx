import type { ReactNode } from "react";
import Link from "next/link";
import LegalPageHero from "@/components/legal/LegalPageHero";

const LAST_UPDATED = "17 May 2026";

type PolicySection = {
    id: string;
    title: string;
    content: ReactNode;
};

const sections: PolicySection[] = [
    {
        id: "introduction",
        title: "1. Introduction",
        content: (
            <>
                <p>
                    Skill City Facility Solutions (&quot;Skill City&quot;, &quot;we&quot;, &quot;us&quot;, or
                    &quot;our&quot;) respects your privacy and is committed to protecting your personal
                    information. This Privacy Policy explains how we collect, use, disclose, and store
                    personal information when you visit our website at{" "}
                    <a href="https://www.skillcityfs.com.au" className="text-primary hover:underline">
                        www.skillcityfs.com.au
                    </a>
                    , contact us, subscribe to our newsletter, or use our cleaning and facility services.
                </p>
                <p>
                    We handle personal information in accordance with the <em>Privacy Act 1988</em> (Cth)
                    and the Australian Privacy Principles (APPs). By using our website or providing your
                    information to us, you acknowledge that you have read and understood this policy.
                </p>
            </>
        ),
    },
    {
        id: "who-we-are",
        title: "2. Who we are",
        content: (
            <p>
                Skill City Facility Solutions is a provider of residential and commercial cleaning
                services operating in Melbourne, Oakleigh, and across Victoria. Our registered business
                address is 4A Haughton Road, Oakleigh VIC 3166, Australia. For privacy enquiries,
                contact us using the details in section 14 below.
            </p>
        ),
    },
    {
        id: "information-we-collect",
        title: "3. Information we collect",
        content: (
            <>
                <p>We may collect the following types of personal information:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>
                        <strong>Identity and contact details:</strong> name, email address, phone number,
                        postal address, state, and postcode.
                    </li>
                    <li>
                        <strong>Service enquiries:</strong> service type, property details, preferred
                        schedule, and messages you submit through our contact or quote forms.
                    </li>
                    <li>
                        <strong>Newsletter subscriptions:</strong> email address and subscription source.
                    </li>
                    <li>
                        <strong>Customer and account information:</strong> details relating to bookings,
                        quotes, invoices, and service history where you become a client.
                    </li>
                    <li>
                        <strong>Website usage data:</strong> IP address, browser type, device information,
                        pages visited, and referring URLs (where collected through cookies or similar
                        technologies).
                    </li>
                    <li>
                        <strong>Communications:</strong> records of emails, phone calls, and other
                        correspondence with our team.
                    </li>
                </ul>
                <p className="mt-4">
                    Where lawful and appropriate, we may also collect sensitive information (such as
                    health-related information relevant to aged-care or medical facility cleaning) only
                    with your consent or as otherwise permitted by law.
                </p>
            </>
        ),
    },
    {
        id: "how-we-collect",
        title: "4. How we collect information",
        content: (
            <ul className="list-disc pl-6 space-y-2">
                <li>Directly from you when you complete forms on our website, call us, or email us.</li>
                <li>When you subscribe to our newsletter or request a free quote or consultation.</li>
                <li>When you engage our cleaning or facility services.</li>
                <li>Automatically through cookies and similar technologies when you browse our website.</li>
                <li>From third parties such as referral partners, only where you have consented or we are lawfully permitted to receive that information.</li>
            </ul>
        ),
    },
    {
        id: "why-we-use",
        title: "5. Why we use your information",
        content: (
            <>
                <p>We collect and use personal information for purposes including:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Responding to enquiries and providing quotes or consultations.</li>
                    <li>Delivering, managing, and improving our cleaning and facility services.</li>
                    <li>Communicating with you about appointments, service updates, and customer support.</li>
                    <li>Sending newsletters and marketing communications where you have opted in.</li>
                    <li>Maintaining our customer records and internal administration systems.</li>
                    <li>Complying with legal obligations, resolving disputes, and enforcing our agreements.</li>
                    <li>Improving our website, security, and user experience.</li>
                </ul>
                <p className="mt-4">
                    If we need to use your information for a purpose not reasonably expected from the
                    collection context, we will notify you and, where required, obtain your consent.
                </p>
            </>
        ),
    },
    {
        id: "disclosure",
        title: "6. Disclosure to third parties",
        content: (
            <>
                <p>We may share personal information with:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>
                        <strong>Service providers</strong> who assist us with email delivery, cloud
                        hosting, customer relationship management, and IT support (for example, Firebase,
                        Resend, or similar providers used to operate our website and communications).
                    </li>
                    <li>
                        <strong>Professional advisers</strong> such as lawyers, accountants, or insurers
                        where necessary.
                    </li>
                    <li>
                        <strong>Government authorities</strong> when required or authorised by law.
                    </li>
                </ul>
                <p className="mt-4">
                    We do not sell your personal information. Third parties we engage are required to
                    handle information securely and only for the purposes we specify.
                </p>
            </>
        ),
    },
    {
        id: "overseas",
        title: "7. Overseas disclosure",
        content: (
            <p>
                Some of our technology providers may store or process data outside Australia (for
                example, in the United States or other countries where their servers are located). Where
                personal information is disclosed overseas, we take reasonable steps to ensure recipients
                comply with privacy standards comparable to the APPs, or we otherwise comply with APP 8
                requirements.
            </p>
        ),
    },
    {
        id: "security",
        title: "8. Storage and security",
        content: (
            <p>
                We store personal information in secure systems with access limited to authorised staff
                and contractors. We implement reasonable technical and organisational measures to protect
                information from misuse, interference, loss, unauthorised access, modification, or
                disclosure. No method of transmission over the internet is completely secure; while we
                strive to protect your data, we cannot guarantee absolute security.
            </p>
        ),
    },
    {
        id: "cookies",
        title: "9. Cookies and website analytics",
        content: (
            <>
                <p>
                    Our website may use cookies and similar technologies to remember preferences,
                    maintain session security, and understand how visitors use our site. You can control
                    cookies through your browser settings. Disabling cookies may affect some website
                    functionality.
                </p>
                <p>
                    If we use analytics tools in the future, we will update this policy to describe what
                    data is collected and how you can opt out where applicable.
                </p>
            </>
        ),
    },
    {
        id: "marketing",
        title: "10. Marketing communications",
        content: (
            <p>
                If you subscribe to our newsletter or opt in to marketing, we may send you updates about
                our services, promotions, and cleaning tips. You can unsubscribe at any time using the
                link in our emails or by contacting us. Even if you opt out of marketing, we may still
                send essential service-related messages.
            </p>
        ),
    },
    {
        id: "your-rights",
        title: "11. Your rights",
        content: (
            <>
                <p>Under Australian privacy law, you may:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Request access to the personal information we hold about you.</li>
                    <li>Request correction of inaccurate, out-of-date, incomplete, or misleading information.</li>
                    <li>Withdraw consent for certain uses of your information, where consent is the legal basis.</li>
                    <li>Make a complaint if you believe we have breached the APPs.</li>
                </ul>
                <p className="mt-4">
                    We will respond to access or correction requests within a reasonable period, usually
                    within 30 days. We may need to verify your identity before releasing information. In
                    some cases, we may refuse access where permitted by law; if so, we will explain our
                    reasons.
                </p>
                <p>
                    If you are not satisfied with our response, you may contact the Office of the
                    Australian Information Commissioner (OAIC) at{" "}
                    <a
                        href="https://www.oaic.gov.au"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                    >
                        www.oaic.gov.au
                    </a>
                    .
                </p>
            </>
        ),
    },
    {
        id: "retention",
        title: "12. Retention",
        content: (
            <p>
                We retain personal information only for as long as needed to fulfil the purposes for
                which it was collected, including to satisfy legal, accounting, or reporting requirements.
                When information is no longer required, we take reasonable steps to destroy or de-identify
                it securely.
            </p>
        ),
    },
    {
        id: "children",
        title: "13. Children's privacy",
        content: (
            <p>
                Our website and services are not directed at children under 16. We do not knowingly
                collect personal information from children without parental or guardian consent. If you
                believe we have collected information from a child, please contact us so we can delete it.
            </p>
        ),
    },
    {
        id: "changes",
        title: "14. Changes to this policy",
        content: (
            <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices,
                technology, or legal requirements. The updated version will be posted on this page with a
                revised &quot;Last updated&quot; date. We encourage you to review this policy periodically.
            </p>
        ),
    },
    {
        id: "contact",
        title: "15. Contact us",
        content: (
            <>
                <p>
                    For privacy questions, access requests, or complaints, please contact Skill City
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
                    Need a quote instead?{" "}
                    <Link href="/contact-us" className="text-primary hover:underline font-medium">
                        Contact us here
                    </Link>
                    .
                </p>
            </>
        ),
    },
];

export default function PrivacyPolicyContent() {
    return (
        <>
            <LegalPageHero
                title="Privacy Policy"
                description="How Skill City Facility Solutions collects, uses, and protects your personal information."
            />

            <section className="section-padding bg-background">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-sm text-muted-foreground mb-10">
                            Last updated: {LAST_UPDATED}
                        </p>

                        <nav
                            aria-label="Privacy policy sections"
                            className="mb-12 rounded-2xl border border-border bg-card p-6"
                        >
                            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                                On this page
                            </h2>
                            <ol className="grid sm:grid-cols-2 gap-2 text-sm">
                                {sections.map((section) => (
                                    <li key={section.id}>
                                        <a
                                            href={`#${section.id}`}
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {section.title}
                                        </a>
                                    </li>
                                ))}
                            </ol>
                        </nav>

                        <div className="space-y-12 text-muted-foreground leading-relaxed [&_p+p]:mt-4 [&_strong]:text-foreground">
                            {sections.map((section) => (
                                <article key={section.id} id={section.id} className="scroll-mt-28">
                                    <h2 className="text-xl font-bold text-foreground mb-4">
                                        {section.title}
                                    </h2>
                                    {section.content}
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
