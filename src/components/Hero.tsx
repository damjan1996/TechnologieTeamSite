import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section className="relative overflow-hidden bg-gray-900">
            {/* Hero section with background */}
            <div className="relative min-h-screen flex items-center">
                {/* Background image with overlay */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: 'url("/images/hero.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />
                </div>

                {/* Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`${isLoaded ? 'animate-fade-in' : ''}`}>
                        <h1 className="font-outfit text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                                     font-bold text-white mb-4 sm:mb-6 md:mb-8 tracking-normal leading-tight
                                     section-enter section-enter-active">
                            <span className="block">
                                IHRE IT-/TECHNOLOGIE-
                            </span>
                            <span className="block">
                                UNTERNEHMENSGRUPPE
                            </span>
                        </h1>
                        <p className="font-outfit text-lg xs:text-xl sm:text-2xl md:text-3xl text-gray-200
                                    mb-6 sm:mb-8 md:mb-12 tracking-normal leading-relaxed
                                    section-enter section-enter-active delay-200">
                            Gemeinsam Stärker | Für Unsere Kunden | Durchgängig In Ihren Prozessen
                        </p>
                        <div className="section-enter section-enter-active delay-300">
                            <Link
                                to="/mehr"
                                className="group relative font-outfit inline-flex items-center justify-center
                                         overflow-hidden rounded bg-[#C25B3F] px-6 sm:px-8 py-3 sm:py-4
                                         text-base sm:text-lg md:text-xl font-medium uppercase tracking-wide
                                         text-white w-full sm:w-auto shadow-lg
                                         transition-all duration-300 ease-out
                                         hover:bg-[#A34832]"
                            >
                                <span className="flex items-center gap-2">
                                    Mehr erfahren
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500/10 rounded-full
                              blur-3xl mix-blend-overlay opacity-75" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-500/10 rounded-full
                              blur-3xl mix-blend-overlay opacity-75" />
            </div>
        </section>
    );
}