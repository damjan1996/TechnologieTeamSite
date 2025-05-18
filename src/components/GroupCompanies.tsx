import { useState, useEffect } from 'react';

const companies = [
  {
    name: 'b.o.c. IT-SECURITY',
    logo: '/images/bocitsec.png',
    link: 'https://www.boc.de',
    description: 'Spezialist für IT-Sicherheitsdienstleistungen und -lösungen'
  },
  {
    name: 'RITTER TECHNOLOGIE',
    logo: '/images/rittec.png',
    link: 'https://www.rittec.de',
    description: 'IT-Dienstleister für Technologielösungen und Infrastruktur'
  },
  {
    name: 'GIS',
    logo: '/images/gis.png',
    link: 'https://www.gis-net.de',
    description: 'Anbieter für Netzwerk- und IT-Infrastrukturlösungen'
  },
  {
    name: 'TIMESYS',
    logo: '/images/timesys.png',
    link: 'https://www.timesys.de',
    description: 'Spezialist für Zeiterfassung und Zutrittskontrollsysteme'
  },
  {
    name: 'RITTER digital',
    logo: '/images/ritterdigital.png',
    link: 'https://www.ritterdigital.de',
    description: 'Digitale Transformation und IT-Dienstleistungen'
  },
  {
    name: 'LINQ-IT',
    logo: '/images/linqit.png',
    link: 'https://www.linq-it.de',
    description: 'IT-Beratung und Softwarelösungen'
  },
  {
    name: 'NETRIX IT',
    logo: '/images/netrix.png',
    link: 'https://www.netrix-it.de',
    description: 'IT-Dienstleister für Netzwerklösungen und IT-Support'
  },
  {
    name: 'DEMOS COMPUTER',
    logo: '/images/demoscomputer.png',
    link: 'https://demoscomputer.de',
    description: 'Hardware und IT-Dienstleistungen für Unternehmen'
  }
];

export default function GroupCompanies() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
    );

    const section = document.getElementById('companies');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
      <section id="companies" className="py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 
                     mb-8 sm:mb-12 lg:mb-16 transition-all duration-700
                     ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Unsere IT-/Technologie Gruppenunternehmen
          </h2>

          {/* Angepasstes Grid für 2 Spalten auf Mobile */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8" role="list">
            {companies.map((company, index) => (
                <a
                    key={index}
                    href={company.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                relative bg-white rounded-xl p-4 sm:p-6 lg:p-8
                transition-all duration-500 ease-out
                hover:shadow-xl hover:-translate-y-1
                flex items-center justify-center
                aspect-[4/3] group
                border border-gray-100
                ${hoveredIndex === index ? 'shadow-lg scale-[1.02]' : 'shadow-sm'}
                ${isVisible ? 'opacity-100' : 'opacity-0'}
                transition-opacity duration-500
              `}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    aria-label={`Besuchen Sie ${company.name} - ${company.description}`}
                    style={{ transitionDelay: `${(index % 8) * 100}ms` }}
                    role="listitem"
                >
                  {/* Logo */}
                  <img
                      src={company.logo}
                      alt={`Logo von ${company.name} - ${company.description}`}
                      className="w-full max-w-[95%] max-h-[80%] object-contain
                         transition-transform duration-500
                         group-hover:scale-110 will-change-transform"
                      loading="lazy"
                  />

                  {/* Company Name Overlay - nur auf größeren Bildschirmen */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 bg-gradient-to-t
                           from-gray-900/10 to-transparent opacity-0
                           group-hover:opacity-100 transition-opacity duration-300
                           hidden sm:block">
                    <p className="text-center text-gray-600 text-sm font-medium">
                      {company.name}
                    </p>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-xl border-2 border-[#C25B3F] opacity-0
                           scale-105 group-hover:opacity-100 group-hover:scale-100
                           transition-all duration-300" aria-hidden="true" />
                </a>
            ))}
          </div>
        </div>
      </section>
  );
}