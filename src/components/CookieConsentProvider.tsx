import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { CookieConsent, getCookieConsent, saveCookieConsent } from './CookieBanner';

// Context für die Cookie-Einwilligung
interface CookieConsentContextType {
    consent: CookieConsent;
    updateConsent: (newConsent: CookieConsent) => void;
    resetConsent: () => void;
    openCookieSettings: () => void;
    isCookieSettingsOpen: boolean;
    closeCookieSettings: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

// Default-Werte für die Cookie-Einwilligung
const defaultConsent: CookieConsent = {
    essential: true,
    analytics: false,
    marketing: false,
    consented: false
};

// Props für den Provider
interface CookieConsentProviderProps {
    children: ReactNode;
}

// Provider-Komponente
export function CookieConsentProvider({ children }: CookieConsentProviderProps) {
    // Zustand für die Cookie-Einwilligung
    const [consent, setConsent] = useState<CookieConsent>(defaultConsent);
    // Zustand für den Dialog zum Ändern der Cookie-Einstellungen
    const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState(false);

    // Beim ersten Laden die gespeicherten Einstellungen abrufen
    useEffect(() => {
        const savedConsent = getCookieConsent();
        setConsent(savedConsent);
    }, []);

    // Aktualisierung der Cookie-Einwilligung
    const updateConsent = (newConsent: CookieConsent) => {
        setConsent(newConsent);
        saveCookieConsent(newConsent);

        // Hier können wir zusätzliche Aktionen basierend auf den Einstellungen ausführen
        // z.B. Analytics-Skripte aktivieren/deaktivieren
        applyConsentSettings(newConsent);
    };

    // Zurücksetzen der Cookie-Einwilligung
    const resetConsent = () => {
        const resetConsentValue = { ...defaultConsent, consented: false };
        setConsent(resetConsentValue);
        saveCookieConsent(resetConsentValue);
        localStorage.removeItem('cookieConsent');

        // Cookie-Banner erneut anzeigen
        window.location.reload();
    };

    // Öffnen der Cookie-Einstellungen
    const openCookieSettings = () => {
        setIsCookieSettingsOpen(true);
    };

    // Schließen der Cookie-Einstellungen
    const closeCookieSettings = () => {
        setIsCookieSettingsOpen(false);
    };

    // Anwenden der Einstellungen (z.B. aktivieren/deaktivieren von Analytics)
    const applyConsentSettings = (consentSettings: CookieConsent) => {
        // Hier könnte Code stehen, der basierend auf den Cookie-Einstellungen
        // z.B. Analytics-Tracking aktiviert oder deaktiviert

        // Beispiel:
        if (consentSettings.analytics) {
            // Analytics aktivieren (hierbei wäre noch die Implementation notwendig)
            console.log('Analytics aktiviert');
        } else {
            // Analytics deaktivieren
            console.log('Analytics deaktiviert');
        }

        if (consentSettings.marketing) {
            // Marketing-Cookies aktivieren
            console.log('Marketing-Cookies aktiviert');
        } else {
            // Marketing-Cookies deaktivieren
            console.log('Marketing-Cookies deaktiviert');
        }
    };

    return (
        <CookieConsentContext.Provider
            value={{
                consent,
                updateConsent,
                resetConsent,
                openCookieSettings,
                isCookieSettingsOpen,
                closeCookieSettings
            }}
        >
            {children}
        </CookieConsentContext.Provider>
    );
}

// Hook für den einfachen Zugriff auf den Cookie-Consent-Context
export function useCookieConsent() {
    const context = useContext(CookieConsentContext);

    if (context === undefined) {
        throw new Error('useCookieConsent muss innerhalb eines CookieConsentProviders verwendet werden');
    }

    return context;
}