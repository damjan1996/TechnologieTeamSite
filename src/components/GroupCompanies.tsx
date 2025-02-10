import { useState, useEffect } from 'react';

const companies = [
  {
    name: 'b.o.c. IT-SECURITY',
    logo: '/images/bocitsec.png',
    link: '#'
  },
  {
    name: 'GIS',
    logo: '/images/gis.png',
    link: '#'
  },
  {
    name: 'RITTER TECHNOLOGIE',
    logo: '/images/rittec.png',
    link: '#'
  },
  {
    name: 'NETRIX',
    logo: '/images/netrix.png',
    link: '#'
  },
  {
    name: 'RITTER digital',
    logo: '/images/ritterdigital.png',
    link: '#'
  },
  {
    name: 'LINQ-IT',
    logo: '/images/linqit.png',
    link: '#'
  },
  {
    name: '2G.digital',
    logo: '/images/2gdigital.png',
    link: '#'
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
          <h2 className={`font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-[#C25B3F] 
                     mb-8 sm:mb-12 lg:mb-16 transition-all duration-700
                     ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Unsere IT-/Technologie Gruppenunternehmen
          </h2>

          {/* Angepasstes Grid für 2 Spalten auf Mobile */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
            {companies.map((company, index) => (
                <a
                    key={index}
                    href={company.link}
                    className={`
                relative bg-white rounded-xl p-4 sm:p-6 lg:p-8
                transition-all duration-500 ease-out
                hover:shadow-xl hover:-translate-y-1
                flex items-center justify-center
                aspect-[4/3] group
                border border-gray-100
                ${hoveredIndex === index ? 'shadow-lg scale-[1.02]' : 'shadow-sm'}
                ${isVisible ? 'animate-fade-in' : 'opacity-0'}
                animate-delay-${(index + 1) * 100}
              `}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    aria-label={`Besuchen Sie ${company.name}`}
                >
                  {/* Logo */}
                  <img
                      src={company.logo}
                      alt={company.name}
                      className="w-full max-w-[85%] max-h-[65%] object-contain
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
                           transition-all duration-300" />
                </a>
            ))}
          </div>
        </div>
      </section>
  );
}