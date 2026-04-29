"use client";

import React, { useEffect, useRef, useState } from "react";
import { Timestamp, collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";

type Review = {
    id: string;
    text: string;
    name: string;
    timeAgo: string;
    rating: number;
    avatar?: string;
    createdAt?: Timestamp;
};

function Stars({ count = 5 }: { count?: number }) {
    return (
        <div className="flex gap-1">
            {Array.from({ length: count }).map((_, i) => (
                <span key={i} className="text-emerald-500 text-lg leading-none">
                    ★
                </span>
            ))}
        </div>
    );
}

export default function ReviewsSection() {
    const rowRef = useRef<HTMLDivElement>(null);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, "homepageReviews"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(
            q,
            (snapshot) => {
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Review[];
                setReviews(data);
                setLoading(false);
            },
            (error) => {
                console.error("Error loading homepage reviews:", error);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, []);

    const scroll = (dir: "left" | "right") => {
        const el = rowRef.current;
        if (!el) return;
        const cardWidth = 420;
        el.scrollBy({
            left: dir === "left" ? -cardWidth : cardWidth,
            behavior: "smooth",
        });
    };

    if (!loading && reviews.length === 0) return null;

    return (
        <section className="bg-white py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                        Read reviews, hire with confidence.
                    </h2>
                    <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
                        <span className="font-semibold text-slate-900">4.2/5</span>
                        <div className="flex items-center gap-2">
                            <span className="text-emerald-500">★</span>
                            <span className="font-semibold text-slate-800">Trusted by Clients All Over Australia</span>
                        </div>
                        <span>Based on 5,210 reviews</span>
                    </div>
                </div>

                <div className="mt-12 grid gap-10 lg:grid-cols-[380px_1fr]">
                    <div className="flex flex-col gap-5">
                        <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                            Testimonial
                        </span>

                        <h3 className="text-3xl font-extrabold leading-tight text-slate-900">
                            Trusted By Top Tier Industry Professionals
                        </h3>

                        <p className="text-slate-600">
                            Leaders and organizations rely on research-led strategy and execution to drive measurable outcomes and confidence in their decisions.
                        </p>

                        <div className="flex items-center gap-3 pt-2">
                            <button
                                onClick={() => scroll("left")}
                                className="h-11 w-11 rounded-full border-2 border-slate-300 text-slate-700 hover:bg-slate-50"
                                aria-label="Previous reviews"
                                type="button"
                            >
                                ←
                            </button>
                            <button
                                onClick={() => scroll("right")}
                                className="h-11 w-11 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-50"
                                aria-label="Next reviews"
                                type="button"
                            >
                                →
                            </button>
                        </div>
                    </div>

                    <div
                        ref={rowRef}
                        className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {reviews.map((r) => (
                            <article key={r.id} className="min-w-[340px] max-w-[400px] flex-shrink-0">
                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                                    <p className="text-slate-600">{r.text}</p>
                                    <div className="mt-4">
                                        <Stars count={Math.max(1, Math.min(5, Number(r.rating) || 5))} />
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center gap-3">
                                    <img
                                        src={r.avatar || "https://i.pravatar.cc/80?img=12"}
                                        alt={r.name}
                                        className="h-11 w-11 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="text-sm font-semibold text-slate-900">{r.name}</p>
                                        <p className="text-xs text-slate-500">{r.timeAgo}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
