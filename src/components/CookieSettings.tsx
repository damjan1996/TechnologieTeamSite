import { useState } from 'react';
import { X } from 'lucide-react';
import { useCookieConsent } from './CookieConsentProvider';
import { CookieCategory } from './CookieBanner';

export default function CookieSettings() {
    const { consent, updateConsent, isCookieSettingsOpen, closeCookieSettings, resetConsent } = useCookieConsent();

    // Lokaler Zustand für die angezeigten Einstellungen
    const [localConsent, setLocalConsent] = useState({ ...consent });

    // Handler für Änderungen an den Cookie-Kategorien
    const handleCategoryChange = (category: CookieCategory, value: boolean) => {
        setLocalConsent(prev => ({
            ...prev,
            [category]: value
        }));
    };

    // Speichern der Einstellungen
    const saveSettings = () => {
        updateConsent({
            ...localConsent,
            consented: true
        });
        closeCookieSettings();
    };

    // Abbrechen der Änderungen
    const cancelChanges = () => {
        setLocalConsent({ ...consent });
        closeCookieSettings();
    };

    if (!isCookieSettingsOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-semibold text-gray-900">Cookie-Einstellungen</h2>
                        <button
                            onClick={cancelChanges}
                            className="text-gray-500 hover:text-gray-700"
                            aria-label="Schließen"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Inhalt */}
                    <div className="space-y-6">
                        <p className="text-gray-600">
                            Hier können Sie festlegen, welche Cookies Sie auf unserer Website zulassen möchten.
                            Essentielle Cookies sind für die Funktionalität der Website notwendig und können nicht deaktiviert werden.
                        </p>

                        {/* Cookie-Kategorien */}
                        <div className="space-y-4">
                            {/* Essentielle Cookies (immer aktiviert) */}
                            <div className="p-4 border rounded-lg">
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
                                            className="h-5 w-5 text-[#C25B3F] border-gray-300 rounded cursor-not-allowed"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Analyse-Cookies */}
                            <div className="p-4 border rounded-lg">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-medium text-gray-900">Analyse-Cookies</h4>
                                        <p className="text-sm text-gray-600">
                                            Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.
                                            Sie sammeln anonymisierte Daten, die uns helfen, unsere Inhalte zu verbessern.
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={localConsent.analytics}
                                            onChange={(e) => handleCategoryChange('analytics', e.target.checked)}
                                            className="h-5 w-5 text-[#C25B3F] border-gray-300 rounded cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Marketing-Cookies */}
                            <div className="p-4 border rounded-lg">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-medium text-gray-900">Marketing-Cookies</h4>
                                        <p className="text-sm text-gray-600">
                                            Diese Cookies werden verwendet, um Werbung relevanter für Sie zu gestalten und
                                            Ihre Interaktionen mit Marketing-Inhalten zu verfolgen.
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={localConsent.marketing}
                                            onChange={(e) => handleCategoryChange('marketing', e.target.checked)}
                                            className="h-5 w-5 text-[#C25B3F] border-gray-300 rounded cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Aktionsbuttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:justify-between">
                        <button
                            onClick={resetConsent}
                            className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md
                        hover:bg-gray-50 transition-colors text-sm"
                        >
                            Alle Cookies ablehnen
                        </button>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={cancelChanges}
                                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md
                          hover:bg-gray-50 transition-colors text-sm"
                            >
                                Abbrechen
                            </button>

                            <button
                                onClick={saveSettings}
                                className="px-4 py-2 bg-[#C25B3F] text-white rounded-md
                          hover:bg-[#A34832] transition-colors text-sm"
                            >
                                Einstellungen speichern
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}