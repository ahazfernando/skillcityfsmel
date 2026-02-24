"use client";

import { Star, ArrowRight, Play, ChevronRight } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Review {
    name: string;
    location: string;
    rating: number;
    title: string;
    content: string;
    image: string;
    imageCaption: string;
}

interface ReviewsSectionProps {
    reviews?: Review[];
    title?: string;
    description?: string;
}

const ReviewsSection = ({
    reviews = [
        {
            name: "Sarah Nguyen",
            location: "Office Manager, Meridian Group — Melbourne",
            rating: 5,
            title: "Consistently Spotless Office, Every Single Time",
            content:
                "We've been using Skill City Facility Solutions for our Melbourne CBD office for over two years now. Their office cleaning team is thorough, reliable, and always on time. The level of detail they put into every clean — from the workstations to the kitchen — is impressive. We've had zero complaints from our 80-strong team since switching to them. Genuinely couldn't recommend a cleaning company more highly.",
            image: "/home/PHOTO-2025-10-06-14-54-06.jpg",
            imageCaption: "Melbourne Office Cleaning",
        },
        {
            name: "James Whitfield",
            location: "Site Manager, Whitfield Constructions — Victoria",
            rating: 5,
            title: "Builders Clean Done Right — First Time, Every Time",
            content:
                "Skill City handled the post-construction clean on our Oakleigh residential project and the result was outstanding. The team worked efficiently around our handover timeline — removing dust, debris and construction residue without a hitch. The client was blown away by how move-in ready the property looked. We now use them exclusively for all our builders cleans across Victoria.",
            image: "/home/ConstructionCleaner.png",
            imageCaption: "Post-Construction Clean — Oakleigh",
        },
        {
            name: "Dr. Amara Patel",
            location: "Practice Manager, Southgate Medical Centre",
            rating: 5,
            title: "Trusted Healthcare Cleaning Partner",
            content:
                "Hygiene standards in a medical setting are non-negotiable, and Skill City consistently meets and exceeds them. Their healthcare cleaning team is trained in infection control protocols and uses hospital-grade products. Every visit is documented and thorough. Our patients frequently comment on how clean and welcoming our centre feels. They're a team you can genuinely trust with the most sensitive environments.",
            image: "/home/ContactlessHeader.png",
            imageCaption: "Healthcare Facility — Southgate Medical",
        },
    ],
    title = "What Our Clients Say",
    description = "Hear from businesses and homeowners across Melbourne and Victoria who trust Skill City Facility Solutions to keep their spaces spotless, safe, and welcoming every day.",
}: ReviewsSectionProps) => {
    return (
        <section className="px-4 lg:px-6 py-12 lg:py-16 bg-white">
            <div className="max-w-[1120px] mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center text-green-600">
                            <ChevronRight className="w-5 h-5 -mr-2" />
                            <ChevronRight className="w-5 h-5" />
                        </div>
                        <div className="inline-block px-4 py-2 bg-green-50 backdrop-blur-sm rounded-full border border-green-100 shadow-sm">
                            <span className="text-sm text-green-600 font-medium">Client Reviews</span>
                        </div>
                    </div>
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-gray-900">
                        {title.split(" ").slice(0, -2).join(" ")}{" "}
                        <span className="text-green-600">
                            {title.split(" ").slice(-2).join(" ")}
                        </span>
                    </h2>
                    <p className="text-gray-500 text-base lg:text-lg max-w-2xl">
                        {description}
                    </p>
                </div>

                <div className="relative">
                    <Carousel
                        opts={{ align: "start", loop: true }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {reviews.map((review, index) => (
                                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full">
                                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                                        {/* Left — Profile Card */}
                                        <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-sm">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                                                    <span className="text-lg font-semibold text-white">
                                                        {review.name
                                                            .split(" ")
                                                            .map((n) => n[0])
                                                            .join("")}
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900">
                                                        {review.name}
                                                    </h4>
                                                    <p className="text-sm text-gray-500">
                                                        {review.location}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-1 mb-4">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="w-4 h-4 fill-green-500 text-green-500"
                                                    />
                                                ))}
                                            </div>

                                            <h3 className="font-semibold text-lg mb-3 text-gray-900">
                                                {review.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 leading-relaxed mb-4">
                                                {review.content}
                                            </p>

                                            <button className="text-green-600 text-sm font-medium hover:underline inline-flex items-center gap-1">
                                                Read full story
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>

                                        {/* Right — Image */}
                                        <div className="space-y-4">
                                            <div className="bg-green-50 rounded-2xl h-64 lg:h-80 flex items-center justify-center relative group cursor-pointer border border-green-100 shadow-sm overflow-hidden">
                                                <Image
                                                    src={review.image}
                                                    alt={review.imageCaption}
                                                    fill
                                                    className="object-cover"
                                                    unoptimized
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-600 to-green-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                                                        <Play className="w-6 h-6 text-white fill-white ml-1" />
                                                    </div>
                                                </div>
                                                <span className="absolute bottom-4 left-4 text-xs text-gray-900 bg-white/90 px-3 py-1 rounded-full border border-gray-100">
                                                    {review.imageCaption}
                                                </span>
                                            </div>

                                            <div className="flex justify-center lg:justify-start">
                                                <Button
                                                    variant="outline"
                                                    className="rounded-full border-green-200 text-green-700 hover:bg-green-50"
                                                >
                                                    See more reviews
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-0 md:-left-12 border-green-200 text-green-700 hover:bg-green-50" />
                        <CarouselNext className="right-0 md:-right-12 border-green-200 text-green-700 hover:bg-green-50" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
