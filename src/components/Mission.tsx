import { useState, useEffect } from 'react';
import peterImage from '../../public/images/peter.png';

export default function Mission() {
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

    const section = document.getElementById('mission');
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
      <section id="mission" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start 
                      ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            {/* CEO Image Card */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <div className="group bg-gray-100 rounded-2xl overflow-hidden shadow-lg
                          transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
                <div className="overflow-hidden">
                  <img
                      src={peterImage}
                      alt="Peter Heim"
                      className="w-full aspect-[90/100] object-cover object-top
                           transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-8 bg-gray-800 transform transition-all duration-300
                            group-hover:bg-gray-900">
                  <h3 className="font-outfit text-xl sm:text-2xl font-semibold text-white mb-1
                             transform transition-all duration-300 group-hover:translate-x-1">
                    Peter Heim
                  </h3>
                  <p className="font-outfit text-base sm:text-lg text-gray-200
                             transform transition-all duration-300 group-hover:translate-x-1">
                    CEO
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Text Content */}
            <div className="lg:col-span-8">
              <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900
                          mb-8 sm:mb-12 section-enter section-enter-active">
                Unser Leitbild - Expertise in der Nachfolge
              </h2>

              <div className="space-y-6 sm:space-y-8">
                <p className="font-outfit text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed
                           transition-all duration-300 hover:text-gray-900 section-enter section-enter-active">
                  Das Technologie Team ist eine mittelständische Unternehmensgruppe, die sich auf den
                  IT- und Technologiesektor spezialisiert hat. Wir konzentrieren uns auf Beteiligungen in
                  Nachfolgesituationen und die langfristige Weiterentwicklung erfolgreicher
                  Unternehmen. Unser Ziel ist es, eine führende Rolle in der Technologiebranche zu
                  übernehmen, indem wir vertrauensvolle Transaktionen und nachhaltige Strategien für
                  Unternehmensfortführungen anbieten.
                </p>

                <p className="font-outfit text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed
                           transition-all duration-300 hover:text-gray-900 section-enter section-enter-active
                           delay-100">
                  Wir legen Wert auf langfristige Geschäftsbeziehungen und agieren in agilen
                  Arbeitsstrukturen. Unser Fokus liegt auf der nahtlosen Fortführung des Tagesgeschäfts
                  sowie auf der Unterstützung bei der Erreichung zukünftiger Ziele. So bieten wir
                  umfassende IT- und Technologieleistungen „aus einer Hand" und nutzen die
                  wachsenden Möglichkeiten der IT und Technologien optimal für Ihr Wachstum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}