"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { collection, addDoc, getDocs, query, serverTimestamp, where } from "firebase/firestore";
import { toast } from "sonner";

import { db } from "@/lib/firebase";

type NewsletterSubscribeFormProps = {
    source?: string;
};

export function NewsletterSubscribeForm({ source = "footer" }: NewsletterSubscribeFormProps) {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const normalizedEmail = email.trim().toLowerCase();
        if (!normalizedEmail) {
            toast.error("Please enter your email address.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(normalizedEmail)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        setLoading(true);

        try {
            const existing = await getDocs(
                query(collection(db, "newsletterSubscribers"), where("email", "==", normalizedEmail)),
            );

            if (!existing.empty) {
                toast.message("You're already subscribed!", {
                    description: "This email is already on our newsletter list.",
                });
                setEmail("");
                return;
            }

            await addDoc(collection(db, "newsletterSubscribers"), {
                email: normalizedEmail,
                source,
                createdAt: serverTimestamp(),
            });

            toast.success("Subscribed successfully!", {
                description: "Thanks for joining our newsletter.",
            });
            setEmail("");
        } catch (error) {
            console.error("Newsletter subscribe error:", error);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        disabled={loading}
                        className="w-full pl-12 pr-4 py-3 rounded-full bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 disabled:opacity-70"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-colors whitespace-nowrap disabled:opacity-70"
                >
                    {loading ? "Subscribing..." : "Subscribe"}
                </button>
            </div>

            <p className="text-white/70 text-sm">
                You will be able to unsubscribe at any time.
                <br />
                Read our privacy policy{" "}
                <Link href="/privacy" className="underline hover:text-white">
                    here
                </Link>
            </p>
        </form>
    );
}
