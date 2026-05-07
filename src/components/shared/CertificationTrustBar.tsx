import Image from "next/image";

import { cn } from "@/lib/utils";

export const CERTIFICATION_LOGOS = [
    {
        src: "/licenses/Logo_Cm3_Contractor-Management-Prequalification.svg",
        alt: "CM3 contractor management prequalification",
    },
    {
        src: "/licenses/TestandTagW1.png",
        alt: "Electrical test and tag certification",
    },
    {
        src: "/licenses/LabourHire.png",
        alt: "Victorian Labour Hire Authority licence",
    },
] as const;

export const DEFAULT_CERTIFICATION_CAPTION =
    "Certified for safe, compliant facility management in Australia";

type CertificationTrustBarProps = {
    /** Light: grey text on pale backgrounds. Dark: frosted strip on green heroes. White: solid card for green heroes. */
    variant?: "light" | "dark" | "white";
    align?: "start" | "center";
    /** Tighter row so all three marks stay on one line on typical widths. */
    compact?: boolean;
    /** Override heading text above the logos. */
    caption?: string;
    className?: string;
};

export function CertificationTrustBar({
    variant = "light",
    align = "start",
    compact = false,
    caption = DEFAULT_CERTIFICATION_CAPTION,
    className,
}: CertificationTrustBarProps) {
    const isDark = variant === "dark";
    const isWhite = variant === "white";

    return (
        <div
            className={cn(
                isDark && "rounded-xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm",
                isWhite &&
                    "rounded-xl border border-gray-200 bg-white px-4 py-4 shadow-md shadow-black/5",
                className,
            )}
        >
            <p
                className={cn(
                    "mb-3 text-sm leading-snug",
                    isDark && "text-green-100/95",
                    isWhite && "text-gray-600",
                    variant === "light" && "text-muted-foreground",
                    align === "center" ? "text-center" : "text-center sm:text-left",
                )}
            >
                {caption}
            </p>
            <div
                className={cn(
                    "flex items-center",
                    compact
                        ? "min-w-0 gap-2 sm:gap-3 md:gap-4"
                        : "flex-wrap gap-6 md:gap-10",
                    align === "center" ? "justify-center" : "justify-center sm:justify-start",
                    compact && "flex-nowrap overflow-x-auto pb-1 sm:overflow-visible sm:pb-0",
                )}
            >
                {CERTIFICATION_LOGOS.map((logo) => (
                    <div
                        key={logo.src}
                        className={cn("flex shrink-0 items-center", compact ? "h-9 sm:h-10" : "h-10")}
                    >
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={compact ? 120 : 140}
                            height={compact ? 36 : 40}
                            className={cn(
                                "w-auto object-contain",
                                compact
                                    ? "h-6 max-w-[104px] sm:h-7 sm:max-w-[120px]"
                                    : "h-7 max-w-[140px] sm:h-8 sm:max-w-[160px]",
                            )}
                            unoptimized={logo.src.endsWith(".svg")}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
