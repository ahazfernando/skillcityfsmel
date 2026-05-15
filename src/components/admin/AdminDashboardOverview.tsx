"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
    collection,
    onSnapshot,
    orderBy,
    query,
    Timestamp,
} from "firebase/firestore";
import { format, formatDistanceToNow } from "date-fns";
import {
    ArrowRight,
    ArrowUpRight,
    Mail,
    MessageSquare,
    Sparkles,
    Star,
    Users,
} from "lucide-react";

import { db } from "@/lib/firebase";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type Inquiry = {
    id: string;
    name: string;
    email: string;
    service?: string;
    status?: string;
    createdAt?: Timestamp;
};

type NewsletterSubscriber = {
    id: string;
    email: string;
    source?: string;
    createdAt?: Timestamp;
};

type UserRow = {
    id: string;
    email: string;
    isApproved?: boolean;
    createdAt?: Timestamp;
};

type StatCardProps = {
    title: string;
    value: number | null;
    subtitle: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    accent: string;
    iconBg: string;
};

function StatCard({ title, value, subtitle, href, icon: Icon, accent, iconBg }: StatCardProps) {
    return (
        <Link
            href={href}
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
        >
            <div
                className={cn("absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-[0.12]", accent)}
            />
            <div className="relative flex items-start justify-between gap-3">
                <div className={cn("flex h-11 w-11 items-center justify-center rounded-xl", iconBg)}>
                    <Icon className="h-5 w-5 text-white" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <div className="relative mt-4">
                <p className="text-sm font-medium text-muted-foreground">{title}</p>
                {value === null ? (
                    <Skeleton className="mt-2 h-9 w-14" />
                ) : (
                    <p className="mt-1 text-3xl font-bold tracking-tight text-foreground">{value}</p>
                )}
                <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>
            </div>
        </Link>
    );
}

function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
}

export function AdminDashboardOverview() {
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
    const [users, setUsers] = useState<UserRow[]>([]);
    const [reviewCount, setReviewCount] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let ready = { inquiries: false, newsletter: false, users: false, reviews: false };

        const checkReady = () => {
            if (ready.inquiries && ready.newsletter && ready.users && ready.reviews) {
                setLoading(false);
            }
        };

        const unsubInquiries = onSnapshot(
            query(collection(db, "inquiries"), orderBy("createdAt", "desc")),
            (snapshot) => {
                setInquiries(
                    snapshot.docs.map((d) => ({ id: d.id, ...d.data() }) as Inquiry),
                );
                ready.inquiries = true;
                checkReady();
            },
            () => {
                setInquiries([]);
                ready.inquiries = true;
                checkReady();
            },
        );

        const unsubNewsletter = onSnapshot(
            query(collection(db, "newsletterSubscribers"), orderBy("createdAt", "desc")),
            (snapshot) => {
                setSubscribers(
                    snapshot.docs.map((d) => ({ id: d.id, ...d.data() }) as NewsletterSubscriber),
                );
                ready.newsletter = true;
                checkReady();
            },
            () => {
                setSubscribers([]);
                ready.newsletter = true;
                checkReady();
            },
        );

        const unsubUsers = onSnapshot(
            query(collection(db, "users"), orderBy("createdAt", "desc")),
            (snapshot) => {
                setUsers(snapshot.docs.map((d) => ({ id: d.id, ...d.data() }) as UserRow));
                ready.users = true;
                checkReady();
            },
            () => {
                setUsers([]);
                ready.users = true;
                checkReady();
            },
        );

        const unsubReviews = onSnapshot(
            query(collection(db, "homepageReviews"), orderBy("createdAt", "desc")),
            (snapshot) => {
                setReviewCount(snapshot.size);
                ready.reviews = true;
                checkReady();
            },
            () => {
                setReviewCount(0);
                ready.reviews = true;
                checkReady();
            },
        );

        return () => {
            unsubInquiries();
            unsubNewsletter();
            unsubUsers();
            unsubReviews();
        };
    }, []);

    const newInquiryCount = useMemo(
        () => inquiries.filter((i) => (i.status || "new") === "new").length,
        [inquiries],
    );

    const pendingUsers = useMemo(
        () => users.filter((u) => !u.isApproved).length,
        [users],
    );

    const serviceBreakdown = useMemo(() => {
        const counts: Record<string, number> = {};
        for (const inquiry of inquiries) {
            const key = inquiry.service?.trim() || "Unspecified";
            counts[key] = (counts[key] || 0) + 1;
        }
        return Object.entries(counts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 6);
    }, [inquiries]);

    const maxServiceCount = serviceBreakdown[0]?.[1] ?? 1;

    const recentInquiries = inquiries.slice(0, 5);
    const recentSubscribers = subscribers.slice(0, 5);

    const quickActions = [
        { label: "Review inquiries", href: "/admin/inquiries", icon: MessageSquare },
        { label: "Newsletter list", href: "/admin/newsletter", icon: Mail },
        { label: "Manage users", href: "/admin/users", icon: Users },
        { label: "Edit reviews", href: "/admin/reviews", icon: Star },
    ];

    return (
        <div className="space-y-8 pb-4">
            {/* Welcome banner */}
            <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-[#0d3d1a] via-[#145a24] to-[#1a6b2e] p-6 text-white shadow-lg md:p-8">
                <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                    }}
                />
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute -bottom-8 left-1/3 h-32 w-32 rounded-full bg-primary/30 blur-3xl" />
                <div className="relative flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                            <Sparkles className="h-3.5 w-3.5 text-primary" />
                            Skill City Admin
                        </div>
                        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                            {getGreeting()}
                        </h1>
                        <p className="mt-2 max-w-xl text-sm text-white/80 md:text-base">
                            Here&apos;s what&apos;s happening across inquiries, newsletter signups, and your
                            team — {format(new Date(), "EEEE, d MMMM yyyy")}.
                        </p>
                    </div>
                    {newInquiryCount > 0 && (
                        <Badge className="w-fit bg-white/15 text-white hover:bg-white/20 border-white/20">
                            {newInquiryCount} new {newInquiryCount === 1 ? "inquiry" : "inquiries"} to review
                        </Badge>
                    )}
                </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <StatCard
                    title="Total Inquiries"
                    value={loading ? null : inquiries.length}
                    subtitle={
                        newInquiryCount > 0
                            ? `${newInquiryCount} awaiting response`
                            : "All caught up"
                    }
                    href="/admin/inquiries"
                    icon={MessageSquare}
                    accent="bg-emerald-500"
                    iconBg="bg-emerald-600"
                />
                <StatCard
                    title="Newsletter"
                    value={loading ? null : subscribers.length}
                    subtitle="Footer & site subscribers"
                    href="/admin/newsletter"
                    icon={Mail}
                    accent="bg-sky-500"
                    iconBg="bg-sky-600"
                />
                <StatCard
                    title="Team Users"
                    value={loading ? null : users.length}
                    subtitle={
                        pendingUsers > 0
                            ? `${pendingUsers} pending approval`
                            : "Everyone approved"
                    }
                    href="/admin/users"
                    icon={Users}
                    accent="bg-violet-500"
                    iconBg="bg-violet-600"
                />
                <StatCard
                    title="Homepage Reviews"
                    value={loading ? null : reviewCount ?? 0}
                    subtitle="Live on marketing site"
                    href="/admin/reviews"
                    icon={Star}
                    accent="bg-amber-500"
                    iconBg="bg-amber-600"
                />
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Service breakdown */}
                <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm lg:col-span-1">
                    <div className="mb-5 flex items-center justify-between">
                        <div>
                            <h2 className="font-semibold text-foreground">Inquiries by service</h2>
                            <p className="text-xs text-muted-foreground">Most requested cleaning types</p>
                        </div>
                    </div>
                    {loading ? (
                        <div className="space-y-3">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <Skeleton key={i} className="h-8 w-full" />
                            ))}
                        </div>
                    ) : serviceBreakdown.length === 0 ? (
                        <p className="text-sm text-muted-foreground py-6 text-center">
                            No inquiry data yet.
                        </p>
                    ) : (
                        <ul className="space-y-4">
                            {serviceBreakdown.map(([service, count]) => (
                                <li key={service}>
                                    <div className="mb-1.5 flex items-center justify-between text-sm">
                                        <span className="font-medium truncate pr-2">{service}</span>
                                        <span className="text-muted-foreground shrink-0">{count}</span>
                                    </div>
                                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                                        <div
                                            className="h-full rounded-full bg-gradient-to-r from-primary to-emerald-400 transition-all"
                                            style={{
                                                width: `${Math.max(8, (count / maxServiceCount) * 100)}%`,
                                            }}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Recent inquiries */}
                <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm lg:col-span-2">
                    <div className="mb-5 flex items-center justify-between">
                        <div>
                            <h2 className="font-semibold text-foreground">Recent inquiries</h2>
                            <p className="text-xs text-muted-foreground">Latest quote requests</p>
                        </div>
                        <Button variant="ghost" size="sm" asChild className="text-primary">
                            <Link href="/admin/inquiries">
                                View all
                                <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                    {loading ? (
                        <div className="space-y-3">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Skeleton key={i} className="h-14 w-full rounded-xl" />
                            ))}
                        </div>
                    ) : recentInquiries.length === 0 ? (
                        <p className="text-sm text-muted-foreground py-8 text-center">
                            No inquiries yet. They&apos;ll appear here when customers submit the contact form.
                        </p>
                    ) : (
                        <ul className="divide-y divide-border/60">
                            {recentInquiries.map((inquiry) => (
                                <li
                                    key={inquiry.id}
                                    className="flex flex-col gap-2 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                                >
                                    <div className="min-w-0">
                                        <p className="font-medium truncate">{inquiry.name}</p>
                                        <p className="text-xs text-muted-foreground truncate">
                                            {inquiry.email}
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                                        {inquiry.service && (
                                            <Badge variant="secondary" className="text-xs font-normal">
                                                {inquiry.service}
                                            </Badge>
                                        )}
                                        <Badge
                                            variant={
                                                (inquiry.status || "new") === "new"
                                                    ? "default"
                                                    : "outline"
                                            }
                                            className="text-xs capitalize"
                                        >
                                            {inquiry.status || "new"}
                                        </Badge>
                                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                                            {inquiry.createdAt
                                                ? formatDistanceToNow(inquiry.createdAt.toDate(), {
                                                      addSuffix: true,
                                                  })
                                                : "—"}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {/* Newsletter + quick actions */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
                    <div className="mb-5 flex items-center justify-between">
                        <div>
                            <h2 className="font-semibold text-foreground">Recent subscribers</h2>
                            <p className="text-xs text-muted-foreground">Newsletter signups</p>
                        </div>
                        <Button variant="ghost" size="sm" asChild className="text-primary">
                            <Link href="/admin/newsletter">
                                View all
                                <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                    {loading ? (
                        <div className="space-y-3">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <Skeleton key={i} className="h-10 w-full rounded-lg" />
                            ))}
                        </div>
                    ) : recentSubscribers.length === 0 ? (
                        <p className="text-sm text-muted-foreground py-6 text-center">
                            No subscribers yet.
                        </p>
                    ) : (
                        <ul className="space-y-2">
                            {recentSubscribers.map((sub) => (
                                <li
                                    key={sub.id}
                                    className="flex items-center justify-between rounded-xl bg-muted/40 px-4 py-3"
                                >
                                    <span className="text-sm font-medium truncate pr-2">{sub.email}</span>
                                    <span className="text-xs text-muted-foreground shrink-0">
                                        {sub.createdAt
                                            ? formatDistanceToNow(sub.createdAt.toDate(), {
                                                  addSuffix: true,
                                              })
                                            : "—"}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
                    <h2 className="font-semibold text-foreground">Quick actions</h2>
                    <p className="text-xs text-muted-foreground mb-4">Jump to common tasks</p>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {quickActions.map(({ label, href, icon: Icon }) => (
                            <Link
                                key={href}
                                href={href}
                                className="flex items-center gap-3 rounded-xl border border-border/50 bg-muted/30 px-4 py-3 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-primary/5"
                            >
                                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Icon className="h-4 w-4" />
                                </span>
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
