"use client";

import { useCookieConsent } from "@/components/cookies/CookieConsentProvider";

export default function CookieSettingsButton() {
    const { openPreferences } = useCookieConsent();

    return (
        <button
            type="button"
            onClick={openPreferences}
            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
        >
            Cookie settings
        </button>
    );
}
