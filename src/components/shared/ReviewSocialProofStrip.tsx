import Image from "next/image";
import { Star } from "lucide-react";

import { REVIEW_FACE_PEOPLE } from "@/data/reviewFaces";
import { cn } from "@/lib/utils";

type ReviewSocialProofStripProps = {
    reviewLabel?: string;
    className?: string;
    starClassName?: string;
    labelClassName?: string;
};

export function ReviewSocialProofStrip({
    reviewLabel = "50+ 5-star reviews",
    className,
    starClassName = "fill-yellow-400 text-yellow-400",
    labelClassName = "text-muted-foreground",
}: ReviewSocialProofStripProps) {
    return (
        <div className={cn("flex items-center gap-4", className)}>
            <div className="flex -space-x-2">
                {REVIEW_FACE_PEOPLE.map((face) => (
                    <div
                        key={face.src}
                        className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-white bg-green-400/20 ring-2 ring-green-900/10"
                    >
                        <Image
                            src={face.src}
                            alt={face.name}
                            fill
                            className="object-cover"
                            sizes="40px"
                        />
                    </div>
                ))}
            </div>
            <div>
                <div className="mb-0.5 flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={cn("h-4 w-4", starClassName)} />
                    ))}
                </div>
                <span className={cn("text-sm", labelClassName)}>{reviewLabel}</span>
            </div>
        </div>
    );
}
