import type { ReactNode } from "react";
import Link from "next/link";
import { Calendar, ChevronRight, Mail, Phone } from "lucide-react";

export type LegalSection = {
    id: string;
    title: string;
    content: ReactNode;
};

type LegalPageLayoutProps = {
    lastUpdated: string;
    navAriaLabel: string;
    sections: LegalSection[];
    relatedLinks?: { href: string; label: string }[];
    ctaDescription?: string;
};

function sectionNumber(title: string): string {
    const match = title.match(/^(\d+)\./);
    return match?.[1] ?? "";
}

export default function LegalPageLayout({
    lastUpdated,
    navAriaLabel,
    sections,
    relatedLinks = [],
    ctaDescription = "Our team is happy to answer questions about how this information applies to you.",
}: LegalPageLayoutProps) {
    return (
        <section className="pb-16 md:pb-24 bg-gradient-to-b from-secondary/30 to-background">
            <div className="container-custom -mt-6 relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-8">
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground shadow-sm">
                        <Calendar className="h-4 w-4 text-primary" aria-hidden />
                        Last updated {lastUpdated}
                    </span>
                    {relatedLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
                        >
                            {link.label}
                            <ChevronRight className="h-4 w-4" aria-hidden />
                        </Link>
                    ))}
                </div>

                <div className="grid lg:grid-cols-[minmax(0,260px)_1fr] gap-8 xl:gap-12 items-start">
                    <aside className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
                        <nav
                            aria-label={navAriaLabel}
                            className="rounded-2xl border border-border bg-card p-5 shadow-sm"
                        >
                            <h2 className="text-xs font-bold text-foreground uppercase tracking-wider mb-4">
                                On this page
                            </h2>
                            <ol className="space-y-1">
                                {sections.map((section) => {
                                    const num = sectionNumber(section.title);
                                    return (
                                        <li key={section.id}>
                                            <a
                                                href={`#${section.id}`}
                                                className="group flex items-start gap-2.5 rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-secondary/80 hover:text-primary transition-colors"
                                            >
                                                {num ? (
                                                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-primary/10 text-[10px] font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                                        {num}
                                                    </span>
                                                ) : null}
                                                <span className="leading-snug">
                                                    {section.title.replace(/^\d+\.\s*/, "")}
                                                </span>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ol>
                        </nav>

                        <div className="mt-4 lg:block hidden rounded-2xl border border-border bg-card p-5 shadow-sm">
                            <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                                Need help?
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a
                                        href="tel:+61390346492"
                                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        <Phone className="h-4 w-4 shrink-0" aria-hidden />
                                        03 9034 6492
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:info@skillcityfs.com.au"
                                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors break-all"
                                    >
                                        <Mail className="h-4 w-4 shrink-0" aria-hidden />
                                        info@skillcityfs.com.au
                                    </a>
                                </li>
                            </ul>
                            <Link
                                href="/contact-us"
                                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                            >
                                Contact us
                            </Link>
                        </div>
                    </aside>

                    <div className="min-w-0 space-y-5">
                        <nav
                            aria-label={`${navAriaLabel} (mobile)`}
                            className="lg:hidden rounded-2xl border border-border bg-card p-4 shadow-sm"
                        >
                            <h2 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">
                                Jump to section
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {sections.map((section) => (
                                    <a
                                        key={section.id}
                                        href={`#${section.id}`}
                                        className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors"
                                    >
                                        {section.title.replace(/^\d+\.\s*/, "")}
                                    </a>
                                ))}
                            </div>
                        </nav>

                        <div className="space-y-5 text-muted-foreground leading-relaxed legal-prose">
                            {sections.map((section) => {
                                const num = sectionNumber(section.title);
                                const heading = section.title.replace(/^\d+\.\s*/, "");

                                return (
                                    <article
                                        key={section.id}
                                        id={section.id}
                                        className="scroll-mt-28 rounded-2xl border border-border/80 bg-card p-6 md:p-8 shadow-sm"
                                    >
                                        <div className="flex items-start gap-4 mb-5 pb-5 border-b border-border/60">
                                            {num ? (
                                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-sm shadow-primary/20">
                                                    {num}
                                                </span>
                                            ) : null}
                                            <h2 className="text-xl md:text-2xl font-bold text-foreground leading-tight pt-1">
                                                {heading}
                                            </h2>
                                        </div>
                                        <div className="[&_p+p]:mt-4 [&_strong]:text-foreground [&_ul]:mt-3 [&_a]:text-primary [&_a]:hover:underline">
                                            {section.content}
                                        </div>
                                    </article>
                                );
                            })}
                        </div>

                        <div className="rounded-2xl bg-gradient-to-br from-forest to-primary p-6 md:p-8 text-white shadow-lg">
                            <h2 className="text-lg md:text-xl font-bold mb-2">Questions about this page?</h2>
                            <p className="text-white/80 text-sm md:text-base mb-5 max-w-xl">
                                {ctaDescription}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href="/contact-us"
                                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-forest hover:bg-white/90 transition-colors"
                                >
                                    Get in touch
                                </Link>
                                <a
                                    href="tel:+61390346492"
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                                >
                                    <Phone className="h-4 w-4" aria-hidden />
                                    03 9034 6492
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
