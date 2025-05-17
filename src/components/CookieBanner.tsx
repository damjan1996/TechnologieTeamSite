import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

// Definition der Cookie-Kategorie-Typen
export type CookieCategory = 'essential' | 'analytics' | 'marketing';

// Interface für die Cookie-Einstellungen
export interface CookieConsent {
    essential: boolean;  // Immer true, da essentiell
    analytics: boolean;
    marketing: boolean;
    consented: boolean;  // Ob der Benutzer überhaupt eine Entscheidung getroffen hat
}

// Standard-Einstellungen
const defaultConsent: CookieConsent = {
    essential: true,
    analytics: false,
    marketing: false,
    consented: false
};

// Funktion zum Speichern der Cookie-Einstellungen im localStorage
export const saveCookieConsent = (consent: CookieConsent): void => {
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
};

// Funktion zum Abrufen der gespeicherten Cookie-Einstellungen
export const getCookieConsent = (): CookieConsent => {
    const savedConsent = localStorage.getItem('cookieConsent');
    if (savedConsent) {
        return JSON.parse(savedConsent);
    }
    return defaultConsent;
};

// Props für den Cookie-Banner
interface CookieBannerProps {
    onConsentChange?: (consent: CookieConsent) => void;
}

export default function CookieBanner({ onConsentChange }: CookieBannerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [showAdvanced, setShowAdvanced] = useState(false);
    const [consent, setConsent] = useState<CookieConsent>(defaultConsent);

    // Beim ersten Laden prüfen, ob bereits eine Einwilligung vorliegt
    useEffect(() => {
        const savedConsent = getCookieConsent();
        setConsent(savedConsent);

        // Banner nur anzeigen, wenn noch keine Einwilligung vorliegt
        if (!savedConsent.consented) {
            setIsOpen(true);
        }
    }, []);

    // Alle Cookies akzeptieren
    const acceptAll = () => {
        const newConsent: CookieConsent = {
            essential: true,
            analytics: true,
            marketing: true,
            consented: true
        };

        setConsent(newConsent);
        saveCookieConsent(newConsent);

        if (onConsentChange) {
            onConsentChange(newConsent);
        }

        setIsOpen(false);
    };

    // Nur essentielle Cookies akzeptieren
    const acceptEssential = () => {
        const newConsent: CookieConsent = {
            essential: true,
            analytics: false,
            marketing: false,
            consented: true
        };

        setConsent(newConsent);
        saveCookieConsent(newConsent);

        if (onConsentChange) {
            onConsentChange(newConsent);
        }

        setIsOpen(false);
    };

    // Benutzerdefinierte Einstellungen speichern
    const saveSettings = () => {
        const newConsent: CookieConsent = {
            ...consent,
            consented: true
        };

        setConsent(newConsent);
        saveCookieConsent(newConsent);

        if (onConsentChange) {
            onConsentChange(newConsent);
        }

        setIsOpen(false);
    };

    // Änderung einer einzelnen Cookie-Kategorie
    const handleCategoryChange = (category: CookieCategory, value: boolean) => {
        setConsent(prev => ({
            ...prev,
            [category]: value
        }));
    };

    if (!isOpen) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-lg">
            <div className="max-w-7xl mx-auto">
                {/* Hauptcontainer */}
                <div className="flex flex-col space-y-4">

                    {/* Schließen-Button (rechts oben) */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        aria-label="Cookie-Banner schließen"
                    >
                        <X size={20} />
                    </button>

                    {/* Überschrift und Text */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">Datenschutzeinstellungen</h2>
                        <p className="text-gray-600 mb-4">
                            Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
                            Weitere Informationen zu den von uns verwendeten Cookies finden Sie in unserer {' '}
                            <Link to="/datenschutz" className="text-[#C25B3F] hover:underline">
                                Datenschutzerklärung
                            </Link>.
                        </p>
                    </div>

                    {/* Erweiterte Einstellungen */}
                    {showAdvanced && (
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookie-Einstellungen anpassen</h3>

                            {/* Essentielle Cookies (immer aktiviert) */}
                            <div className="mb-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-medium text-gray-900">Essentielle Cookies</h4>
                                        <p className="text-sm text-gray-600">
                                            Diese Cookies sind für die Funktion unserer Website erforderlich und können nicht deaktiviert werden.
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={true}
                                            disabled={true}
                                            className="h-4 w-4 text-[#C25B3F] border-gray-300 rounded cursor-not-allowed"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Analyse-Cookies */}
                            <div className="mb-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-medium text-gray-900">Analyse-Cookies</h4>
                                        <p className="text-sm text-gray-600">
                                            Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={consent.analytics}
                                            onChange={(e) => handleCategoryChange('analytics', e.target.checked)}
                                            className="h-4 w-4 text-[#C25B3F] border-gray-300 rounded cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Marketing-Cookies */}
                            <div className="mb-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-medium text-gray-900">Marketing-Cookies</h4>
                                        <p className="text-sm text-gray-600">
                                            Diese Cookies werden verwendet, um Werbung relevanter für Sie zu gestalten.
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={consent.marketing}
                                            onChange={(e) => handleCategoryChange('marketing', e.target.checked)}
                                            className="h-4 w-4 text-[#C25B3F] border-gray-300 rounded cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center sm:justify-end">
                        <button
                            onClick={() => setShowAdvanced(!showAdvanced)}
                            className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md
                         hover:bg-gray-50 transition-colors text-sm sm:text-base"
                        >
                            {showAdvanced ? 'Einfache Ansicht' : 'Erweiterte Einstellungen'}
                        </button>

                        <button
                            onClick={acceptEssential}
                            className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md
                         hover:bg-gray-50 transition-colors text-sm sm:text-base"
                        >
                            Nur essenzielle Cookies
                        </button>

                        {showAdvanced ? (
                            <button
                                onClick={saveSettings}
                                className="px-4 py-2 bg-[#C25B3F] text-white rounded-md
                           hover:bg-[#A34832] transition-colors text-sm sm:text-base"
                            >
                                Einstellungen speichern
                            </button>
                        ) : (
                            <button
                                onClick={acceptAll}
                                className="px-4 py-2 bg-[#C25B3F] text-white rounded-md
                           hover:bg-[#A34832] transition-colors text-sm sm:text-base"
                            >
                                Alle akzeptieren
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}