"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MetaPixel from "@/components/analytics/MetaPixel";
import { CookieConsentProvider } from "@/components/cookies/CookieConsentProvider";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isAdmin = pathname?.startsWith("/admin");

    if (isAdmin) {
        return (
            <div className="min-h-screen flex flex-col">
                <main className="flex-1">{children}</main>
            </div>
        );
    }

    return (
        <CookieConsentProvider>
            <MetaPixel />
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </div>
        </CookieConsentProvider>
    );
}
