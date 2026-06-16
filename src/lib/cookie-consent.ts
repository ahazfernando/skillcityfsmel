export const COOKIE_CONSENT_STORAGE_KEY = "skillcity_cookie_consent";
export const COOKIE_CONSENT_COOKIE_NAME = "skillcity_consent";
const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

export type CookiePreferences = {
    necessary: true;
    analytics: boolean;
    marketing: boolean;
    updatedAt: string;
};

export const DEFAULT_COOKIE_PREFERENCES: CookiePreferences = {
    necessary: true,
    analytics: false,
    marketing: false,
    updatedAt: "",
};

export function getStoredConsent(): CookiePreferences | null {
    if (typeof window === "undefined") return null;

    try {
        const raw = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw) as CookiePreferences;
        if (parsed.necessary !== true) return null;
        return parsed;
    } catch {
        return null;
    }
}

export function hasConsentBeenGiven(): boolean {
    return getStoredConsent() !== null;
}

export function saveConsent(preferences: Pick<CookiePreferences, "analytics" | "marketing">): CookiePreferences {
    const consent: CookiePreferences = {
        necessary: true,
        analytics: preferences.analytics,
        marketing: preferences.marketing,
        updatedAt: new Date().toISOString(),
    };

    localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(consent));

    const value = encodeURIComponent(
        JSON.stringify({ analytics: consent.analytics, marketing: consent.marketing }),
    );
    document.cookie = `${COOKIE_CONSENT_COOKIE_NAME}=${value}; path=/; max-age=${CONSENT_MAX_AGE_SECONDS}; SameSite=Lax`;

    window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: consent }));

    return consent;
}

export function acceptAllCookies(): CookiePreferences {
    return saveConsent({ analytics: true, marketing: true });
}

export function rejectNonEssentialCookies(): CookiePreferences {
    return saveConsent({ analytics: false, marketing: false });
}
