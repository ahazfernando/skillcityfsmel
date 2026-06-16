"use client";

import { useCookieConsent } from "@/components/cookies/CookieConsentProvider";

export default function CookieSettingsButton() {
    const { openPreferences } = useCookieConsent();

    return (
        <button
            type="button"
            onClick={openPreferences}
            className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
        >
            Cookie settings
        </button>
    );
}
