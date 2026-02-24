"use client";

import { useState, useEffect } from "react";
import { X, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function WelcomePopup() {
    const [visible, setVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        // Only show once per session
        const seen = sessionStorage.getItem("welcome_popup_seen");
        if (!seen) {
            const timer = setTimeout(() => setVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const dismiss = () => {
        sessionStorage.setItem("welcome_popup_seen", "true");
        setVisible(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setSubmitted(true);
        sessionStorage.setItem("welcome_popup_seen", "true");
        setTimeout(() => setVisible(false), 2500);
    };

    if (!visible) return null;

    return (
        <div
            className="fixed inset-0 z-[999] flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
        >
            <div
                className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col sm:flex-row"
                style={{ minHeight: 380 }}
            >
                {/* Close button */}
                <button
                    onClick={dismiss}
                    className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors"
                    aria-label="Close"
                >
                    <X className="w-4 h-4 text-gray-600" />
                </button>

                {/* Left – image panel */}
                <div className="relative sm:w-5/12 h-52 sm:h-auto bg-green-50 flex-shrink-0">
                    <Image
                        src="/home/PHOTO-2025-10-06-14-54-06.jpg"
                        alt="Professional Cleaning Service"
                        fill
                        className="object-cover"
                        unoptimized
                    />
                    {/* Green overlay tint */}
                    <div className="absolute inset-0 bg-green-900/20" />
                    {/* Decorative badge */}
                    <div className="absolute bottom-4 left-4 bg-white/90 rounded-2xl px-4 py-2 shadow-md">
                        <p className="text-xs font-bold text-green-700 uppercase tracking-wide">
                            Skill City Facility Solutions
                        </p>
                        <p className="text-[11px] text-gray-500">Trusted across Australia</p>
                    </div>
                </div>

                {/* Right – content */}
                <div className="flex-1 p-8 flex flex-col justify-center">
                    {submitted ? (
                        <div className="text-center py-6">
                            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                                <Sparkles className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                You&apos;re all set! 🎉
                            </h3>
                            <p className="text-gray-500 text-sm">
                                We&apos;ve sent your <strong className="text-green-600">15% off</strong> code to{" "}
                                <span className="font-medium text-gray-700">{email}</span>.
                            </p>
                        </div>
                    ) : (
                        <>
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-3 py-1 mb-5 w-fit">
                                <Sparkles className="w-3.5 h-3.5 text-green-600" />
                                <span className="text-xs font-semibold text-green-700 uppercase tracking-wider">
                                    Limited Time Offer
                                </span>
                            </div>

                            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-2">
                                Unlock{" "}
                                <span className="text-green-600">15% Off</span>
                                <br />
                                Your First Service
                            </h2>
                            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                                Enter your email below and we&apos;ll send you a discount code for
                                your first booking. No commitment needed.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-3">
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition"
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold text-sm py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-green-200"
                                >
                                    CLAIM MY 15% OFF
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </form>

                            <p className="text-[11px] text-gray-400 mt-4 leading-relaxed">
                                By signing up, you agree to receive occasional emails from Skill City
                                Facility Solutions. You can unsubscribe at any time.
                            </p>

                            <button
                                onClick={dismiss}
                                className="mt-4 text-sm text-gray-400 hover:text-gray-600 transition-colors underline underline-offset-2"
                            >
                                No, thanks
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
