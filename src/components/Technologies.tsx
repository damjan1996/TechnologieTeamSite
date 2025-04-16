import { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Technology {
  title: string;
  image: string;
}

const technologies: Technology[] = [
  {
    title: 'ERP, eCommerce, Warenwirtschaft, digitale Geschäftsprozesse',
    image: '/images/tech01.png',
  },
  {
    title: 'IT-Infrastruktur, as a Service Modelle, Cloudsysteme',
    image: '/images/tech02.png',
  },
  {
    title: 'IT-Sicherheitstechnik, Netzwerktechnik',
    image: '/images/tech03.png',
  },
  {
    title: 'Beratung, Projektunterstützung',
    image: '/images/tech04.png',
  },
];

export default function Technologies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? technologies.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === technologies.length - 1 ? 0 : prev + 1));
  }, []);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.touches[0].clientX);
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrevious();
    }
    setTouchStart(null);
  };

  return (
      <section id="technologien" className="bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-[#C25B3F]">
              Unterstützte Technologien in der gesamten Prozesskette
            </h2>
            {!isMobile && (
                <div className="flex gap-3">
                  <button
                      onClick={handlePrevious}
                      className="p-2 rounded-full bg-white shadow-lg
                         transition-all duration-300 hover:bg-gray-50 active:scale-95
                         focus:outline-none focus:ring-2 focus:ring-orange-500"
                      aria-label="Vorherige"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                      onClick={handleNext}
                      className="p-2 rounded-full bg-[#C25B3F] shadow-lg
                         transition-all duration-300 hover:bg-[#A34832] active:scale-95
                         focus:outline-none focus:ring-2 focus:ring-orange-500"
                      aria-label="Nächste"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>
            )}
          </div>

          {/* Desktop View */}
          {!isMobile && (
              <div className="relative">
                <div className="grid grid-cols-4 gap-6">
                  {technologies.map((tech, idx) => {
                    const isVisible = Math.abs(idx - currentIndex) <= 3;
                    const order = (idx - currentIndex + technologies.length) % technologies.length;

                    return (
                        <div
                            key={idx}
                            className={`transition-all duration-500 transform
                      ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                      order-${order}`}
                        >
                          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                            <img
                                src={tech.image}
                                alt={tech.title}
                                className="w-full h-full object-cover transition-transform duration-700
                                 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90
                                   via-black/40 to-transparent">
                              <div className="absolute bottom-0 left-0 right-0 p-4">
                                <h3 className="font-outfit text-white text-lg font-medium leading-snug">
                                  {tech.title}
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                    );
                  })}
                </div>
              </div>
          )}

          {/* Mobile View */}
          {isMobile && (
              <div
                  className="relative"
                  onTouchStart={onTouchStart}
                  onTouchEnd={onTouchEnd}
              >
                <div className="absolute z-10 inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
                  <button
                      onClick={handlePrevious}
                      className="pointer-events-auto p-2 rounded-full bg-white/90 shadow-lg
                         transition-all duration-300 hover:bg-white active:scale-95
                         focus:outline-none focus:ring-2 focus:ring-orange-500"
                      aria-label="Vorherige"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                      onClick={handleNext}
                      className="pointer-events-auto p-2 rounded-full bg-[#C25B3F] shadow-lg
                         transition-all duration-300 hover:bg-[#A34832] active:scale-95
                         focus:outline-none focus:ring-2 focus:ring-orange-500"
                      aria-label="Nächste"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>

                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                  <img
                      src={technologies[currentIndex].image}
                      alt={technologies[currentIndex].title}
                      className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-outfit text-white text-lg font-medium leading-snug">
                        {technologies[currentIndex].title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-2 mt-4">
                  {technologies.map((_, idx) => (
                      <button
                          key={idx}
                          onClick={() => setCurrentIndex(idx)}
                          className={`h-1 rounded-full transition-all duration-300 
                    ${currentIndex === idx ? 'w-8 bg-[#C25B3F]' : 'w-4 bg-gray-300'}`}
                          aria-label={`Gehe zu Slide ${idx + 1}`}
                      />
                  ))}
                </div>
              </div>
          )}
        </div>
      </section>
  );
}