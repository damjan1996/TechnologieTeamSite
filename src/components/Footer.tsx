import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

type FooterSection = {
    title: string;
    content: React.ReactNode;
};

const links = [
    { href: '#technologien', text: 'Unterstützte Technologien' },
    { href: '#gruppenmehrwert', text: 'Gruppenmehrwert' },
    { href: 'mailto:kontakt@technologie.team?subject=Gruppenbeitritt%20anfragen', text: 'Gruppenbeitritt anfragen' },
    { href: '#impressum', text: 'Impressum' },
];

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const footer = document.querySelector('footer');
        if (footer) {
            observer.observe(footer);
        }

        return () => {
            if (footer) {
                observer.unobserve(footer);
            }
        };
    }, []);

    // Funktion zum Öffnen von mailto Links
    const handleMailtoClick = (e: React.MouseEvent<HTMLAnchorElement>, mailtoUrl: string) => {
        e.preventDefault(); // Verhindert die Standard-Link-Aktion
        window.location.href = mailtoUrl; // Öffnet den mailto-Link direkt
    };

    const sections: FooterSection[] = [
        {
            title: 'Links',
            content: (
                <div className="space-y-3">
                    {links.map((link) => {
                        // Prüfen, ob es ein mailto-Link ist
                        const isMailto = link.href.startsWith('mailto:');

                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                className="block transform transition-all duration-300 hover:text-white
                                   hover:translate-x-1 focus:outline-none focus:text-white
                                   group relative"
                                onMouseEnter={() => setHoveredLink(link.href)}
                                onMouseLeave={() => setHoveredLink(null)}
                                onClick={isMailto ? (e) => handleMailtoClick(e, link.href) : undefined}
                            >
                                <span className="relative z-10 inline-block">{link.text}</span>
                                <span className={`absolute left-0 bottom-0 w-0 h-0.5 bg-[#C25B3F] 
                                    transition-all duration-300 group-hover:w-full
                                    ${hoveredLink === link.href ? 'w-full' : 'w-0'}`} />
                            </a>
                        );
                    })}
                </div>
            ),
        },
        {
            title: 'Ort',
            content: (
                <address className="not-italic space-y-2">
                    <p className="transition-colors duration-300 hover:text-white">
                        Essener Straße 2-24
                    </p>
                    <p className="transition-colors duration-300 hover:text-white">
                        46047 Oberhausen
                    </p>
                </address>
            ),
        },
        {
            title: 'Mailkontakt',
            content: (
                <div>
                    <a href="mailto:kontakt@technologie.team"
                       className="block mb-4 transition-all duration-300 hover:text-white
                          hover:translate-x-1 relative group"
                       onClick={(e) => handleMailtoClick(e, "mailto:kontakt@technologie.team")}>
                        <span>kontakt@technologie.team</span>
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#C25B3F]
                             transition-all duration-300 group-hover:w-full" />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/technologie-team"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block transform transition-all duration-300
                         hover:scale-110 focus:outline-none focus:scale-110"
                        aria-label="Besuchen Sie uns auf LinkedIn"
                    >
                        <img
                            src="/images/linkedin.svg"
                            alt="LinkedIn"
                            className="h-8 w-8 sm:h-10 sm:w-10"
                        />
                    </a>
                </div>
            ),
        },
    ];

    return (
        <footer className="bg-gray-900 text-gray-400 py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex flex-col space-y-12 sm:space-y-16 
                      transition-all duration-700 transform
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {/* Logo */}
                    <Link to="/"
                          className="block transition-transform duration-300 hover:scale-105
                         focus:outline-none focus:scale-105">
                        <img
                            src="/logos/tteamhell.png"
                            alt="Technologie Team Logo"
                            className="h-12 sm:h-15"
                            loading="lazy"
                        />
                    </Link>

                    {/* Navigation Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                        {sections.map((section, index) => (
                            <div key={section.title}
                                 className={`transition-all duration-500 delay-${index * 100}
                           ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                 style={{ transitionDelay: `${index * 100}ms` }}>
                                <h3 className="font-outfit text-white font-semibold mb-4 text-base sm:text-lg
                           transform transition-all duration-300 hover:text-[#C25B3F]">
                                    {section.title}
                                </h3>
                                {section.content}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 sm:mt-16 pt-6 sm:pt-8
                     text-center text-sm text-gray-500">
                    <p className="transition-colors duration-300 hover:text-gray-400">
                        Copyright © {new Date().getFullYear()} TechnologieTeam
                    </p>
                </div>
            </div>
        </footer>
    );
}