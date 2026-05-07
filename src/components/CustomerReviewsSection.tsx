"use client";

import * as React from "react";
import Image from "next/image";
import { onSnapshot, collection, orderBy, query, Timestamp } from "firebase/firestore";
import { formatDistanceToNow } from "date-fns";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import { firestoreDb } from "@/lib/firebase";

const TRUST_GREEN = "#00B67A";

/** Local headshots for review cards (`public/peoplelogos`). Cycled by card index. */
const REVIEW_FACE_PEOPLE = [
    { name: "Liam Carter", src: "/peoplelogos/LiamCarter.png" },
    { name: "Sophie Bennett", src: "/peoplelogos/SophieBennett.png" },
    { name: "Daniel Harper", src: "/peoplelogos/DanielHarper.png" },
] as const;

function reviewFaceByIndex(index: number) {
    return REVIEW_FACE_PEOPLE[index % REVIEW_FACE_PEOPLE.length];
}

/** Admin dashboard uses `homepageReviews`; set NEXT_PUBLIC_FIRESTORE_REVIEWS_COLLECTION=reviews to switch. */
const REVIEWS_COLLECTION =
    (typeof process !== "undefined" && process.env.NEXT_PUBLIC_FIRESTORE_REVIEWS_COLLECTION) || "homepageReviews";

export type ReviewCard = {
    id: string;
    text: string;
    name: string;
    timeAgo: string;
    rating: number;
    avatarSrc?: string;
};

const defaultReviewBodies = [
    {
        id: "1",
        text: "Skill City handles our office tower after hours: desks, kitchens, and washrooms are consistently spotless. Account management is responsive and the team respects security protocols.",
        timeAgo: "3 days ago",
        rating: 5,
    },
    {
        id: "2",
        text: "We use them for commercial cleaning across two sites in Melbourne. Clear communication, reliable schedules, and they actually follow the scope we agreed on.",
        timeAgo: "1 week ago",
        rating: 5,
    },
    {
        id: "3",
        text: "Post-renovation builders clean was thorough, with dust gone from every surface. Handover to our team was painless.",
        timeAgo: "1 week ago",
        rating: 5,
    },
    {
        id: "4",
        text: "Reliable partner for retail floor care during peak season. Staff are uniformed, punctual, and the store always looks customer-ready in the morning.",
        timeAgo: "2 weeks ago",
        rating: 5,
    },
    {
        id: "5",
        text: "Healthcare-adjacent tenancy: they understood our hygiene expectations and product constraints. Professional every visit.",
        timeAgo: "2 weeks ago",
        rating: 5,
    },
    {
        id: "6",
        text: "We scaled from one site to five without drama. Same quality standards, single point of contact, exactly what we needed for facility management.",
        timeAgo: "3 weeks ago",
        rating: 5,
    },
    {
        id: "7",
        text: "Transparent quoting and honest timelines. No surprises on invoicing, and they’ll flag issues before they become problems.",
        timeAgo: "3 weeks ago",
        rating: 5,
    },
    {
        id: "8",
        text: "From warehouse aisles to staff amenities, one contractor that gets industrial sites. Recommended for anyone in Victoria scaling operations.",
        timeAgo: "1 month ago",
        rating: 5,
    },
    {
        id: "9",
        text: "House cleaning team is respectful of our home and pets. Deep clean before family visiting was flawless. We’ve booked recurring service.",
        timeAgo: "1 month ago",
        rating: 5,
    },
    {
        id: "10",
        text: "Friendly crew, eco-conscious where we asked for it, and genuinely invested in a good outcome. Our go-to for facility solutions in Melbourne.",
        timeAgo: "1 month ago",
        rating: 5,
    },
] as const;

const defaultReviews: ReviewCard[] = defaultReviewBodies.map((body, index) => {
    const face = reviewFaceByIndex(index);
    return {
        ...body,
        name: face.name,
        avatarSrc: face.src,
    };
});

const DEFAULT_REVIEWS_HEADLINE = (
    <>
        Read Google reviews.
        <br />
        Book cleaning with confidence.
    </>
);

function GoogleReviewsMark({ className }: { className?: string }) {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            <Image
                src="/reveiw/GoogleReview.png"
                alt="Google Reviews"
                width={120}
                height={40}
                className="h-9 w-auto object-contain md:h-10"
            />
            <span className="text-[15px] font-semibold leading-snug tracking-tight text-foreground">
                Google Reviews
            </span>
        </div>
    );
}

function ReviewBubbleCard({ review }: { review: ReviewCard }) {
    const initials = review.name
        .split(" ")
        .map((p) => p[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    return (
        <div className="flex h-full min-h-0 w-full flex-col gap-3">
            <div className="relative flex min-h-0 flex-1 flex-col rounded-2xl border border-border/60 bg-card px-5 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
                <p className="min-h-0 flex-1 overflow-y-auto text-[15px] leading-relaxed text-muted-foreground [scrollbar-width:thin]">
                    {review.text}
                </p>
                <div className="mt-3 flex shrink-0 items-center gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-[18px] w-[18px] shrink-0" fill={TRUST_GREEN} stroke={TRUST_GREEN} strokeWidth={0} />
                    ))}
                </div>
                <div
                    className="pointer-events-none absolute -bottom-[6px] left-[26px] size-3 rotate-45 border border-border/60 bg-card shadow-sm"
                    aria-hidden
                />
            </div>

            <div className="flex shrink-0 items-center gap-3 pl-1">
                <Avatar className="h-11 w-11 shrink-0 border border-border/80">
                    {review.avatarSrc ? <AvatarImage src={review.avatarSrc} alt="" /> : null}
                    <AvatarFallback className="bg-muted text-sm font-semibold text-foreground">{initials}</AvatarFallback>
                </Avatar>
                <div className="min-w-0 pt-0.5">
                    <p className="text-sm font-semibold text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.timeAgo}</p>
                </div>
            </div>
        </div>
    );
}

type CustomerReviewsSectionProps = {
    reviews?: ReviewCard[];
    aggregateRating?: number;
    reviewCount?: number;
    headline?: React.ReactNode;
    leftBadge?: string;
    leftTitle?: string;
    leftDescription?: string;
};

export function CustomerReviewsSection({
    reviews = defaultReviews,
    aggregateRating = 4.8,
    reviewCount = 100,
    headline = DEFAULT_REVIEWS_HEADLINE,
    leftBadge = "Google Reviews",
    leftTitle = "Trusted by facilities and homes across Australia",
    leftDescription =
        "Skill City Facility Solutions delivers commercial, industrial, and residential cleaning with trained teams, reliable service, and consistent quality across offices, warehouses, and end-of-lease cleans.",
}: CustomerReviewsSectionProps) {
    const [dbReviews, setDbReviews] = React.useState<ReviewCard[]>([]);
    const [loadedDbReviews, setLoadedDbReviews] = React.useState(false);
    const [api, setApi] = React.useState<CarouselApi>();
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    React.useEffect(() => {
        if (!firestoreDb) {
            setLoadedDbReviews(true);
            return;
        }
        const reviewsQuery = query(collection(firestoreDb, REVIEWS_COLLECTION), orderBy("createdAt", "desc"));
        const unsub = onSnapshot(
            reviewsQuery,
            (snapshot) => {
                const mapped = snapshot.docs
                    .map((reviewDoc, idx) => {
                        const data = reviewDoc.data() as Record<string, unknown>;
                        const createdAtRaw = data.createdAt;
                        let createdAtMs = Date.now();
                        if (createdAtRaw instanceof Timestamp) {
                            createdAtMs = createdAtRaw.toMillis();
                        } else if (
                            createdAtRaw &&
                            typeof createdAtRaw === "object" &&
                            "seconds" in createdAtRaw &&
                            typeof (createdAtRaw as { seconds: number }).seconds === "number"
                        ) {
                            createdAtMs = (createdAtRaw as { seconds: number }).seconds * 1000;
                        }
                        const status = ((data.status as string) ?? "published").toLowerCase();
                        if (status === "draft") return null;
                        const rating = Math.min(5, Math.max(1, Number(data.rating ?? 5)));
                        const name = (data.name as string) ?? "Anonymous";
                        const text = (data.text as string) ?? "";
                        if (!text.trim()) return null;
                        const manualTimeAgo = (data.timeAgo as string) ?? "";
                        const avatarFromDb =
                            (data.avatarSrc as string) || (data.avatar as string) || undefined;
                        return {
                            id: reviewDoc.id,
                            name,
                            text,
                            rating,
                            timeAgo: manualTimeAgo.trim() || formatDistanceToNow(new Date(createdAtMs), { addSuffix: true }),
                            avatarSrc: avatarFromDb || reviewFaceByIndex(idx).src,
                        } as ReviewCard;
                    })
                    .filter((review): review is ReviewCard => Boolean(review));
                setDbReviews(mapped);
                setLoadedDbReviews(true);
            },
            () => {
                setLoadedDbReviews(true);
            }
        );
        return unsub;
    }, []);

    const displayReviews = loadedDbReviews && dbReviews.length > 0 ? dbReviews : reviews;

    React.useEffect(() => {
        if (!api) return;
        const syncSnap = () => {
            setCanScrollPrev(api.canScrollPrev());
            setCanScrollNext(api.canScrollNext());
        };
        syncSnap();
        api.on("select", syncSnap);
        api.on("reInit", syncSnap);
        return () => {
            api.off("select", syncSnap);
            api.off("reInit", syncSnap);
        };
    }, [api]);

    const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api]);
    const scrollNext = React.useCallback(() => api?.scrollNext(), [api]);

    return (
        <section className="bg-white py-20 md:py-24">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">{aggregateRating}/5</span>
                        <GoogleReviewsMark />
                        <span>Based on {reviewCount.toLocaleString()}+ reviews</span>
                    </div>
                </div>

                <div className="mt-14 grid items-stretch gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-12 xl:grid-cols-[minmax(0,420px)_1fr]">
                    <div className="flex max-w-lg flex-col gap-6 lg:max-w-none">
                        <span className="inline-flex w-fit items-center rounded-full bg-muted px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
                            {leftBadge}
                        </span>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold leading-[1.15] tracking-tight text-foreground md:text-[1.75rem] md:leading-tight lg:text-[2rem]">
                                {leftTitle}
                            </h3>
                            <p className="text-[15px] leading-relaxed text-muted-foreground md:text-base">{leftDescription}</p>
                        </div>

                        <div className="flex items-center gap-2.5 pt-2">
                            <Button
                                type="button"
                                variant="outline"
                                size="icon"
                                className="size-11 shrink-0 flex-none rounded-full border-2 border-foreground/45 bg-background p-0 text-foreground/85 shadow-none hover:border-foreground/60 hover:bg-muted/40 hover:text-foreground disabled:opacity-40 [&_svg]:size-5"
                                onClick={scrollPrev}
                                disabled={!canScrollPrev}
                                aria-label="Previous reviews"
                            >
                                <ChevronLeft className="stroke-[1.5] text-foreground/80" />
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                size="icon"
                                className="size-11 shrink-0 flex-none rounded-full border-2 border-foreground bg-background p-0 text-foreground shadow-none hover:bg-muted/30 disabled:border-border disabled:text-muted-foreground disabled:opacity-40 [&_svg]:size-5"
                                onClick={scrollNext}
                                disabled={!canScrollNext}
                                aria-label="Next reviews"
                            >
                                <ChevronRight className="stroke-[1.75]" />
                            </Button>
                        </div>
                    </div>

                    <div className="min-w-0 -mx-4 px-4 sm:mx-0 sm:px-0">
                        <Carousel
                            setApi={setApi}
                            opts={{
                                align: "start",
                                loop: false,
                                dragFree: false,
                                containScroll: "trimSnaps",
                            }}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-4 items-stretch">
                                {displayReviews.map((review) => (
                                    <CarouselItem
                                        key={review.id}
                                        className="flex basis-[min(100%,340px)] pl-4 sm:basis-[85%] md:basis-[380px] lg:basis-[400px]"
                                    >
                                        <div className="flex h-full min-h-0 w-full min-w-0">
                                            <ReviewBubbleCard review={review} />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
}
