import { FileText } from "lucide-react";
import Link from "next/link";

type LegalPageHeroProps = {
    title: string;
    description?: string;
};

export default function LegalPageHero({ title, description }: LegalPageHeroProps) {
    return (
        <section className="relative overflow-hidden bg-forest text-white pt-28 pb-20 md:pt-32 md:pb-24">
            <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-forest via-[#1a3d2e] to-primary/30"
                aria-hidden
            />
            <div
                className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
                aria-hidden
            />
            <div
                className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-white/5 blur-2xl"
                aria-hidden
            />
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                    backgroundSize: "32px 32px",
                }}
                aria-hidden
            />

            <div className="container-custom relative z-10">
                <nav aria-label="Breadcrumb" className="mb-6">
                    <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
                        <li>
                            <Link href="/" className="hover:text-white transition-colors">
                                Home
                            </Link>
                        </li>
                        <li aria-hidden className="text-white/40">
                            /
                        </li>
                        <li className="text-white/90 font-medium">{title}</li>
                    </ol>
                </nav>

                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8 max-w-4xl">
                    <div
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm"
                        aria-hidden
                    >
                        <FileText className="h-7 w-7 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-[2px] bg-primary" />
                            <span className="text-white/90 font-semibold text-xs uppercase tracking-widest">
                                Legal
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-4">
                            {title}
                        </h1>
                        {description ? (
                            <p className="text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                                {description}
                            </p>
                        ) : null}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
                <svg viewBox="0 0 1440 80" className="w-full h-auto fill-background" aria-hidden>
                    <path d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,21,960,16C1120,11,1280,21,1360,26.7L1440,32L1440,80L0,80Z" />
                </svg>
            </div>
        </section>
    );
}
