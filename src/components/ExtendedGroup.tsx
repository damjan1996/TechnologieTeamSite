import { useState, useEffect } from 'react';

export default function ExtendedGroup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
    );

    const section = document.getElementById('extended-group');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const stats = [
    { text: 'seit 1984 am Markt', highlight: '1984' },
    { text: 'ca. 140 Unternehmen', highlight: '140' },
    { text: '6500 Mitarbeiter', highlight: '6500' }
  ];

  return (
      <section id="extended-group" className="py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900
                       mb-4 sm:mb-6 section-enter section-enter-active">
              Die erweiterte Unternehmensgruppe
            </h2>
            <p className="font-outfit text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-4xl
                     leading-relaxed section-enter section-enter-active delay-100">
              Das Technologie Team und deren Beteiligungen werden selbstständig und unabhängig geführt.
              Gleichzeitig können die Beteiligungen aber auf die Leistungen und Netzwerke der anderen
              Gesellschafterunternehmen zurückgreifen.
            </p>

            {/* Neuer Link zur erweiterten Unternehmensgruppe */}
            <div className="mb-8 sm:mb-12 section-enter section-enter-active delay-200">
              <a
                  href="https://www.ipm-wagner.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-outfit text-base sm:text-lg font-medium text-[#C25B3F] hover:text-[#A04A33] transition-colors duration-300"
              >
                <span>Mehr Informationen zur erweiterten Unternehmensgruppe</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg group"
                 onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={() => setIsHovered(false)}>
              {/* Image Container */}
              <div className="relative">
                <img
                    src="/images/zentrale.png"
                    alt="Zentrale Oberhausen"
                    className="w-full aspect-[2/1] object-cover transition-transform duration-700
                         group-hover:scale-105 will-change-transform"
                    loading="lazy"
                />

                {/* Dark Overlay */}
                <div className={`absolute inset-0 bg-black/20 transition-opacity duration-500 
                           ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
              </div>

              {/* Info Section */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90
                         via-black/60 to-transparent p-4 sm:p-6 lg:p-8 transform transition-all
                         duration-500 translate-y-0 group-hover:translate-y-0">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white">
                  {stats.map((stat, index) => (
                      <div key={index} className="flex flex-col items-center sm:items-start
                                          transform transition-all duration-500
                                          group-hover:translate-y-0 opacity-90
                                          group-hover:opacity-100">
                        <p className="font-outfit text-base sm:text-lg text-center sm:text-left">
                          <span className="font-semibold text-orange-400">{stat.highlight}</span>
                          {' ' + stat.text.replace(stat.highlight, '')}
                        </p>
                      </div>
                  ))}
                </div>
              </div>

              {/* Location Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2
                         rounded-full shadow-lg transform transition-all duration-300
                         group-hover:scale-105">
                <p className="font-outfit text-sm font-medium text-gray-800">
                  Zentrale: Oberhausen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}