import { useState, useEffect } from 'react';
import { Users2, Eye, BarChart3, Settings2, DollarSign, Search, Link2, TrendingUp, GraduationCap, Monitor } from 'lucide-react';

// Geänderte Reihenfolge der Items
const valueItems = [
  {
    icon: TrendingUp,
    title: 'Personal Perspektive',
    description: 'Individuelle Fördermöglichkeiten in einem großen Ökosystem, mit agilen Entscheidungswegen.'
  },
  {
    icon: DollarSign,
    title: 'Finanzielle Hebel',
    description: 'Finanzielle Stärken bündeln und zum Wohle der Gesamtlösung einsetzen.'
  },
  {
    icon: Settings2,
    title: 'Operative Hebel',
    description: 'Gemeinsame Stärken nutzen und durchgängige Experten-Lösungen schaffen.'
  },
  {
    icon: Users2,
    title: 'Management Team',
    description: 'Ein erfahrenes, kompetentes Managementteam sorgt für strategische Unterstützung.'
  },
  {
    icon: Search,
    title: 'Recruiting',
    description: 'Unterstützung durch Personal-Experten'
  },
  {
    icon: GraduationCap,
    title: 'Ausbildung',
    description: 'Kontinuierliche Schulung und Weiterentwicklung der Mitarbeiterkompetenzen.'
  },
  {
    icon: Eye,
    title: 'Fokus auf Transparenz',
    description: 'Transparenz in allen Prozessen, was Vertrauen und offene Kommunikation fördert.'
  },
  {
    icon: BarChart3,
    title: 'Schlankes Reporting',
    description: 'Ein effektives Berichtssystem ermöglicht es sich auf seine Aufgaben zu konzentrieren und agil zu reagieren.'
  },
  {
    icon: Link2,
    title: 'Gruppenzugehörigkeit',
    description: 'Mehr aus den einzelnen Möglichkeiten rausholen und gemeinsam bessere Lösungen und Entwicklungen schaffen.'
  },
  {
    icon: Monitor,
    title: 'Digitalisierung',
    description: 'Nutzung neuester technischer Möglichkeiten zur Verbesserung von Geschäftsprozessen.'
  }
];

export default function GroupValue() {
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

    const section = document.getElementById('gruppenmehrwert');
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
      <section id="gruppenmehrwert" className="bg-[#C25B3F] py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`mb-10 sm:mb-14 lg:mb-20 mx-auto text-center 
                      ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-10
                       section-enter section-enter-active">
              Unser Gruppenmehrwert
            </h2>
            <p className="font-outfit text-lg sm:text-xl text-white/90 leading-relaxed
                     section-enter section-enter-active delay-100 max-w-4xl mx-auto">
              IT-/Technologieunternehmen zeichnen sich durch ihre Kompetenz und die exzellente Umsetzung von
              Kundenanforderungen aus. Unser Ziel ist es, diese Qualitäten zu erhalten, die Unternehmenskultur
              zu wahren und Raum für weiteres Wachstum und Entwicklung zu schaffen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {valueItems.map((item, index) => {
              const Icon = item.icon;
              return (
                  <div
                      key={index}
                      className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-10
                         transition-all duration-500 group hover:bg-white/20
                         hover:scale-105 hover:shadow-xl will-change-transform
                         ${isVisible ? 'animate-fade-in' : 'opacity-0'}
                         animate-delay-${(index + 1) * 100}`}
                  >
                    <div className="mb-6 sm:mb-8 transform transition-transform duration-300
                            group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="w-12 h-12 sm:w-14 sm:h-14 text-white"
                            strokeWidth={1.5} />
                    </div>
                    <h3 className="font-outfit text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-5
                           transform transition-transform duration-300
                           group-hover:translate-x-1">
                      {item.title}
                    </h3>
                    <p className="font-outfit text-base sm:text-lg text-white/90 leading-relaxed
                          transition-opacity duration-300 group-hover:text-white min-h-20">
                      {item.description}
                    </p>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 to-white/10
                             opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
              );
            })}
          </div>
        </div>
      </section>
  );
}