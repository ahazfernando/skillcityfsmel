"use client";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import WelcomePopup from "@/components/home/WelcomePopup";

export default function Providers({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <TooltipProvider>
                    {children}
                    <WelcomePopup />
                    <Toaster />
                    <Sonner />
                </TooltipProvider>
            </AuthProvider>
        </QueryClientProvider>
    );
}
