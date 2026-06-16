"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
    acceptAllCookies,
    DEFAULT_COOKIE_PREFERENCES,
    getStoredConsent,
    hasConsentBeenGiven,
    rejectNonEssentialCookies,
    saveConsent,
    type CookiePreferences,
} from "@/lib/cookie-consent";

type CookieConsentContextValue = {
    preferences: CookiePreferences;
    hasChosen: boolean;
    showBanner: boolean;
    showPreferences: boolean;
    openPreferences: () => void;
    closePreferences: () => void;
    acceptAll: () => void;
    rejectNonEssential: () => void;
    savePreferences: (analytics: boolean, marketing: boolean) => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function useCookieConsent() {
    const context = useContext(CookieConsentContext);
    if (!context) {
        throw new Error("useCookieConsent must be used within CookieConsentProvider");
    }
    return context;
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
    const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_COOKIE_PREFERENCES);
    const [hasChosen, setHasChosen] = useState(false);
    const [showBanner, setShowBanner] = useState(false);
    const [showPreferences, setShowPreferences] = useState(false);
    const [draftAnalytics, setDraftAnalytics] = useState(false);
    const [draftMarketing, setDraftMarketing] = useState(false);

    useEffect(() => {
        const stored = getStoredConsent();
        if (stored) {
            setPreferences(stored);
            setHasChosen(true);
            setDraftAnalytics(stored.analytics);
            setDraftMarketing(stored.marketing);
        } else {
            setShowBanner(true);
        }
    }, []);

    const applyConsent = useCallback((next: CookiePreferences) => {
        setPreferences(next);
        setDraftAnalytics(next.analytics);
        setDraftMarketing(next.marketing);
        setHasChosen(true);
        setShowBanner(false);
        setShowPreferences(false);
    }, []);

    const acceptAll = useCallback(() => {
        applyConsent(acceptAllCookies());
    }, [applyConsent]);

    const rejectNonEssential = useCallback(() => {
        applyConsent(rejectNonEssentialCookies());
    }, [applyConsent]);

    const savePreferencesHandler = useCallback(
        (analytics: boolean, marketing: boolean) => {
            applyConsent(saveConsent({ analytics, marketing }));
        },
        [applyConsent],
    );

    const openPreferences = useCallback(() => {
        setDraftAnalytics(preferences.analytics);
        setDraftMarketing(preferences.marketing);
        setShowPreferences(true);
        setShowBanner(true);
    }, [preferences.analytics, preferences.marketing]);

    const closePreferences = useCallback(() => {
        setShowPreferences(false);
        if (hasConsentBeenGiven()) {
            setShowBanner(false);
        }
    }, []);

    const value = useMemo(
        () => ({
            preferences,
            hasChosen,
            showBanner,
            showPreferences,
            openPreferences,
            closePreferences,
            acceptAll,
            rejectNonEssential,
            savePreferences: savePreferencesHandler,
        }),
        [
            preferences,
            hasChosen,
            showBanner,
            showPreferences,
            openPreferences,
            closePreferences,
            acceptAll,
            rejectNonEssential,
            savePreferencesHandler,
        ],
    );

    return (
        <CookieConsentContext.Provider value={value}>
            {children}
            {showBanner && (
                <div
                    className="fixed bottom-0 left-0 right-0 z-[1000] p-4 md:p-6 pointer-events-none"
                    role="dialog"
                    aria-label="Cookie consent"
                    aria-live="polite"
                >
                    <div className="pointer-events-auto mx-auto max-w-4xl rounded-2xl border border-border bg-white shadow-2xl overflow-hidden">
                        {showPreferences ? (
                            <div className="p-6 md:p-8">
                                <div className="flex items-start justify-between gap-4 mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <Cookie className="h-5 w-5" aria-hidden />
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-semibold text-foreground">Cookie preferences</h2>
                                            <p className="text-sm text-muted-foreground mt-0.5">
                                                Choose which cookies we may use on this site.
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={closePreferences}
                                        className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                                        aria-label="Close cookie preferences"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <PreferenceRow
                                        title="Strictly necessary"
                                        description="Required for the site to work, including security and basic functionality. These cannot be turned off."
                                        checked
                                        disabled
                                    />
                                    <PreferenceRow
                                        title="Analytics"
                                        description="Help us understand how visitors use our website so we can improve pages and services."
                                        checked={draftAnalytics}
                                        onCheckedChange={setDraftAnalytics}
                                    />
                                    <PreferenceRow
                                        title="Marketing"
                                        description="Used to measure campaigns and show relevant offers. We only enable these if you opt in."
                                        checked={draftMarketing}
                                        onCheckedChange={setDraftMarketing}
                                    />
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
                                    <Button variant="outline" onClick={rejectNonEssential}>
                                        Reject non-essential
                                    </Button>
                                    <Button
                                        onClick={() => savePreferencesHandler(draftAnalytics, draftMarketing)}
                                    >
                                        Save preferences
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <div className="p-6 md:p-8">
                                <div className="flex flex-col md:flex-row md:items-center gap-6">
                                    <div className="flex items-start gap-4 flex-1 min-w-0">
                                        <div className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <Cookie className="h-5 w-5" aria-hidden />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-foreground mb-1">We use cookies</p>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                We use cookies to keep the site working, remember your choices, and
                                                (if you agree) understand how our site is used. See our{" "}
                                                <Link href="/privacy#cookies" className="text-primary hover:underline font-medium">
                                                    Privacy Policy
                                                </Link>{" "}
                                                for details.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                                        <Button variant="outline" size="sm" onClick={openPreferences}>
                                            Manage cookies
                                        </Button>
                                        <Button variant="outline" size="sm" onClick={rejectNonEssential}>
                                            Reject all
                                        </Button>
                                        <Button size="sm" onClick={acceptAll}>
                                            Accept all
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </CookieConsentContext.Provider>
    );
}

function PreferenceRow({
    title,
    description,
    checked,
    disabled,
    onCheckedChange,
}: {
    title: string;
    description: string;
    checked: boolean;
    disabled?: boolean;
    onCheckedChange?: (checked: boolean) => void;
}) {
    return (
        <div className="flex items-start justify-between gap-4 rounded-xl border border-border p-4 bg-muted/30">
            <div>
                <p className="font-medium text-foreground text-sm">{title}</p>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{description}</p>
            </div>
            <Switch
                checked={checked}
                disabled={disabled}
                onCheckedChange={onCheckedChange}
                aria-label={`${title} cookies`}
                className="mt-0.5"
            />
        </div>
    );
}
