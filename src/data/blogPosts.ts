import blogCleanHome from "@/assets/blog-clean-home.jpg";
import blogEcoCleaning from "@/assets/blog-eco-cleaning.jpg";
import blogOfficeTips from "@/assets/blog-office-tips.jpg";
import cleanHomeImg from "@/assets/clean-home.jpg";
import deepCleaningImg from "@/assets/deep-cleaning.jpg";
import officeCleaningImg from "@/assets/office-cleaning.jpg";
import moveCleaningImg from "@/assets/move-cleaning.jpg";
import type { StaticImageData } from "next/image";

export type BlogPostTocItem = { title: string; content: string | null };

export type BlogPost = {
    id: number;
    title: string;
    excerpt: string;
    image: StaticImageData;
    category: string;
    author: { name: string; avatar: string };
    date: string;
    readTime: string;
    featured: boolean;
    intro: string[];
    tableOfContents: BlogPostTocItem[];
};

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "10 Tips for a Cleaner Home",
        excerpt:
            "Discover the best practices and hidden gems for maintaining a spotless living space. From daily habits to weekly routines, we cover everything you need to know.",
        image: blogCleanHome,
        category: "Home Tips",
        author: { name: "Sarah Johnson", avatar: "SJ" },
        date: "20 Jan 2026",
        readTime: "5 min read",
        featured: true,
        intro: [
            "A tidy home supports wellbeing and makes daily life easier. These practical tips from Skill City Facility Solutions help you stay on top of dust, clutter, and high-traffic areas: whether you maintain the space yourself or complement routines with professional residential cleaning.",
            "Use this guide as a checklist for weekly habits and deeper seasonal tasks that keep Melbourne and Victoria homes guest-ready and healthy.",
        ],
        tableOfContents: [
            { title: "Why consistency matters", content: "Short daily resets beat occasional marathon cleans." },
            { title: "High-touch surfaces first", content: "Door handles, switches, and benches: sanitize regularly." },
            { title: "Zone cleaning", content: "Tackle one room type per day to avoid overwhelm." },
            { title: "When to call professionals", content: "Move-outs, post-renovation, or periodic deep cleans." },
        ],
    },
    {
        id: 2,
        title: "Benefits of Eco-Friendly Cleaning",
        excerpt:
            "How professional green cleaning services can improve your health and property value. Learn about sustainable products and methods.",
        image: blogEcoCleaning,
        category: "Sustainability",
        author: { name: "Michael Chen", avatar: "MC" },
        date: "18 Jan 2026",
        readTime: "4 min read",
        featured: true,
        intro: [
            "Eco-friendly cleaning reduces chemical exposure for staff, residents, and visitors: critical in offices, healthcare-adjacent spaces, and family homes across Australia.",
            "Skill City Facility Solutions uses methods and products that meet strong environmental and safety standards while delivering the same level of clean your facility expects.",
        ],
        tableOfContents: [
            { title: "Indoor air quality", content: "Fewer harsh VOCs means healthier workspaces and homes." },
            { title: "Surfaces and longevity", content: "Gentler formulations can extend life of finishes and fixtures." },
            { title: "Compliance and reputation", content: "Aligns with sustainability goals many Victorian businesses publish." },
            { title: "What to ask your provider", content: "Certifications, dilution practices, and waste handling." },
        ],
    },
    {
        id: 3,
        title: "Office Cleaning Best Practices",
        excerpt:
            "Explore the most effective strategies for maintaining a productive clean workspace that boosts employee morale and efficiency.",
        image: blogOfficeTips,
        category: "Commercial",
        author: { name: "Emily Davis", avatar: "ED" },
        date: "15 Jan 2026",
        readTime: "6 min read",
        featured: true,
        intro: [
            "Commercial facilities need schedules that match foot traffic, shared equipment use, and client-facing areas. A structured office cleaning program prevents buildup in kitchens, washrooms, and meeting rooms.",
            "Below is how facility managers and business owners can align daily, weekly, and periodic tasks with professional commercial cleaning services.",
        ],
        tableOfContents: [
            { title: "Scope and high-priority zones", content: "Reception, restrooms, and break rooms first." },
            { title: "Desk and touchpoint hygiene", content: "Phones, keyboards, and collaboration spaces." },
            { title: "Floors and waste", content: "Vacuuming, hard-floor care, and bin protocols." },
            { title: "Partnering with a contractor", content: "SLAs, after-hours access, and quality checks." },
        ],
    },
    {
        id: 4,
        title: "Spring Cleaning Checklist",
        excerpt:
            "Your ultimate guide to spring cleaning. A comprehensive checklist to ensure every corner of your home gets the attention it deserves.",
        image: cleanHomeImg,
        category: "Home Tips",
        author: { name: "Jessica Williams", avatar: "JW" },
        date: "12 Jan 2026",
        readTime: "7 min read",
        featured: false,
        intro: [
            "Spring is ideal for resetting windows, storage, and overlooked areas after winter. This checklist works for houses and small commercial sites preparing for busier seasons.",
            "Skill City can handle heavy lifts: carpet extraction, high dusting, and detailed kitchens: while you work through the list room by room.",
        ],
        tableOfContents: [
            { title: "Declutter before you clean", content: "Donate, recycle, then wipe surfaces." },
            { title: "Windows and tracks", content: "Let light in and remove mould-prone debris." },
            { title: "Appliances and cupboards", content: "Fridge, oven, and pantry refresh." },
            { title: "Outdoor and entry", content: "Porches, mats, and garage thresholds." },
        ],
    },
    {
        id: 5,
        title: "Deep Cleaning vs Regular Cleaning",
        excerpt:
            "Understanding the difference between deep cleaning and regular cleaning services. When do you need each?",
        image: deepCleaningImg,
        category: "Guides",
        author: { name: "David Brown", avatar: "DB" },
        date: "10 Jan 2026",
        readTime: "5 min read",
        featured: false,
        intro: [
            "Regular cleaning maintains appearance and hygiene on a recurring basis. Deep cleaning targets built-up grime, neglected corners, and sanitization at a level suited to turnovers or seasonal resets.",
            "Facilities often schedule deep cleans before audits, after construction, or when onboarding a new cleaning vendor.",
        ],
        tableOfContents: [
            { title: "Regular maintenance", content: "Trash, vacuum, wipe, restock: predictable cadence." },
            { title: "Deep clean scope", content: "Baseboards, behind equipment, detailed washrooms." },
            { title: "Timing for businesses", content: "End of lease, pre-opening, or annual shutdowns." },
            { title: "Residential use cases", content: "Moving, allergies, or post-illness refresh." },
        ],
    },
    {
        id: 6,
        title: "How to Choose a Cleaning Service",
        excerpt:
            "A complete guide to selecting the right professional cleaning service for your home or business needs.",
        image: officeCleaningImg,
        category: "Guides",
        author: { name: "Amanda Taylor", avatar: "AT" },
        date: "8 Jan 2026",
        readTime: "4 min read",
        featured: false,
        intro: [
            "The right facility solutions partner is insured, references commercial experience, and communicates clearly about scope and scheduling.",
            "Use these criteria when comparing providers in Melbourne, Oakleigh, and broader Victoria.",
        ],
        tableOfContents: [
            { title: "Verify credentials", content: "Insurance, workers’ comp, and training." },
            { title: "Define your site", content: "Square metres, hours, and security requirements." },
            { title: "Quotes and inclusions", content: "Supplies, equipment, and extra services." },
            { title: "Start with a consult", content: "Walkthrough and written scope of work." },
        ],
    },
    {
        id: 7,
        title: "Complete Guide to Move-Out Cleaning",
        excerpt:
            "Moving out? Make sure you get your security deposit back with our comprehensive move-out cleaning checklist.",
        image: moveCleaningImg,
        category: "Moving Tips",
        author: { name: "James Wilson", avatar: "JW" },
        date: "5 Jan 2026",
        readTime: "8 min read",
        featured: false,
        intro: [
            "End-of-lease cleaning must meet agent or landlord standards: ovens, bathrooms, and floors are inspected closely. A thorough pass reduces bond disputes.",
            "Skill City offers move-out packages that align with common Victorian rental expectations.",
        ],
        tableOfContents: [
            { title: "Kitchen and appliances", content: "Oven, rangehood, cupboards inside and out." },
            { title: "Bathrooms", content: "Grout, screens, and fixtures to a shine." },
            { title: "Walls and floors", content: "Spot marks, skirting, and carpet considerations." },
            { title: "Final walkthrough", content: "Photos and checklist before handover." },
        ],
    },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    const id = parseInt(slug, 10);
    if (Number.isNaN(id)) return undefined;
    return blogPosts.find((p) => p.id === id);
}
