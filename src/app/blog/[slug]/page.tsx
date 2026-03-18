"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Clock, Calendar, Tag, Plus, Minus, Building2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getBlogPostBySlug } from "@/data/blogPosts";

export default function BlogPost() {
    const params = useParams();
    const slug = typeof params?.slug === "string" ? params.slug : Array.isArray(params?.slug) ? params.slug[0] : "";
    const post = getBlogPostBySlug(slug);

    const [expandedSections, setExpandedSections] = useState<number[]>([0]);

    if (!post) {
        notFound();
    }

    const toggleSection = (index: number) => {
        setExpandedSections((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    return (
        <div className="bg-background min-h-screen pt-20">
            <div className="border-b border-border">
                <div className="container mx-auto px-4 py-4">
                    <nav className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
                        <Link href="/" className="hover:text-foreground">
                            Home
                        </Link>
                        <ChevronRight className="w-4 h-4 shrink-0" />
                        <Link href="/blog" className="hover:text-foreground">
                            Blog
                        </Link>
                        <ChevronRight className="w-4 h-4 shrink-0" />
                        <span className="text-foreground line-clamp-2">{post.title}</span>
                    </nav>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-[1fr,340px] gap-12">
                    <div>
                        <div className="relative rounded-2xl overflow-hidden aspect-video mb-6 group">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full z-10">
                                {post.category}
                            </span>
                        </div>

                        <p className="text-sm text-muted-foreground mb-2">
                            Article by{" "}
                            <span className="text-foreground font-medium">{post.author.name}</span>
                            <span className="text-muted-foreground"> · Skill City Facility Solutions</span>
                        </p>
                        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{post.title}</h1>

                        <div className="space-y-4 text-muted-foreground mb-12 leading-relaxed">
                            {post.intro.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>

                        <div className="mb-12">
                            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
                                In this article
                            </h3>
                            <div className="border border-border rounded-xl divide-y divide-border">
                                {post.tableOfContents.map((section, index) => (
                                    <div key={index}>
                                        <button
                                            type="button"
                                            onClick={() => toggleSection(index)}
                                            className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50"
                                        >
                                            <span className="font-medium text-foreground">{section.title}</span>
                                            {expandedSections.includes(index) ? (
                                                <Minus className="w-5 h-5 text-muted-foreground shrink-0" />
                                            ) : (
                                                <Plus className="w-5 h-5 text-muted-foreground shrink-0" />
                                            )}
                                        </button>
                                        {section.content && expandedSections.includes(index) && (
                                            <div className="px-4 pb-4 text-sm text-muted-foreground">
                                                {section.content}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <aside className="lg:sticky lg:top-24 lg:self-start space-y-6">
                        <div className="rounded-2xl border border-border bg-card p-6 space-y-5">
                            <div className="flex items-start gap-3 text-sm">
                                <Calendar className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <div>
                                    <span className="text-muted-foreground block">Published</span>
                                    <span className="font-medium text-foreground">{post.date}</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 text-sm">
                                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <div>
                                    <span className="text-muted-foreground block">Reading time</span>
                                    <span className="font-medium text-foreground">{post.readTime}</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 text-sm">
                                <Tag className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <div>
                                    <span className="text-muted-foreground block">Topic</span>
                                    <span className="font-medium text-foreground">{post.category}</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 text-sm">
                                <Building2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <div>
                                    <span className="text-muted-foreground block">About</span>
                                    <span className="font-medium text-foreground leading-snug">
                                        Commercial & residential facility cleaning across Melbourne, Oakleigh &
                                        Victoria.
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
                            <p className="text-sm font-medium uppercase tracking-wide text-primary-foreground/90 mb-2">
                                Need cleaning for your site?
                            </p>
                            <p className="text-lg font-semibold mb-4">
                                Book a free consultation with our facility solutions team.
                            </p>
                            <div className="flex flex-col gap-3">
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                                >
                                    <Link href="/contact-us">Book a Free Consultation</Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="w-full border-primary-foreground/40 text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
                                >
                                    <Link href="/services">View Services</Link>
                                </Button>
                            </div>
                            <a
                                href="tel:0370447710"
                                className="mt-4 flex items-center justify-center gap-2 text-sm text-primary-foreground/90 hover:text-primary-foreground"
                            >
                                <Phone className="w-4 h-4" />
                                037 044 7710
                            </a>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
