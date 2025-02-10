import { useState, useEffect } from 'react';
import { Users2, Eye, BarChart3, Settings2, DollarSign, Search, Link2, TrendingUp, GraduationCap, Monitor } from 'lucide-react';

const valueItems = [
  {
    icon: Users2,
    title: 'Management Team',
    description: 'Ein erfahrenes, kompetentes Managementteam sorgt für strategische Unterstützung.'
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
    icon: Settings2,
    title: 'Operative Hebel',
    description: 'Gemeinsame Stärken nutzen und durchgängige Experten-Lösungen schaffen.'
  },
  {
    icon: DollarSign,
    title: 'Finanzielle Hebel',
    description: 'Finanzielle Stärken bündeln und zum Wohle der Gesamtlösung einsetzen.'
  },
  {
    icon: Search,
    title: 'Recruiting',
    description: 'Unterstützung durch Personal-Experten'
  },
  {
    icon: Link2,
    title: 'Gruppenzugehörigkeit',
    description: 'Mehr aus den einzelnen Möglichkeiten rausholen und gemeinsam bessere Lösungen und Entwicklungen schaffen.'
  },
  {
    icon: TrendingUp,
    title: 'Personal Perspektive',
    description: 'Individuelle Fördermöglichkeiten in einem großen Ökosystem, mit agilen Entscheidungswegen.'
  },
  {
    icon: GraduationCap,
    title: 'Ausbildung',
    description: 'Kontinuierliche Schulung und Weiterentwicklung der Mitarbeiterkompetenzen.'
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

    const section = document.getElementById('group-value');
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
      <section id="group-value" className="bg-[#C25B3F] py-12 sm:py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto text-center 
                      ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-8
                       section-enter section-enter-active">
              Unser Gruppenmehrwert
            </h2>
            <p className="font-outfit text-base sm:text-lg text-white/90 leading-relaxed
                     section-enter section-enter-active delay-100">
              IT-/Technologieunternehmen zeichnen sich durch ihre Kompetenz und die exzellente Umsetzung von
              Kundenanforderungen aus. Unser Ziel ist es, diese Qualitäten zu erhalten, die Unternehmenskultur
              zu wahren und Raum für weiteres Wachstum und Entwicklung zu schaffen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {valueItems.map((item, index) => {
              const Icon = item.icon;
              return (
                  <div
                      key={index}
                      className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8
                         transition-all duration-500 group hover:bg-white/20
                         hover:scale-102 hover:shadow-xl will-change-transform
                         ${isVisible ? 'animate-fade-in' : 'opacity-0'}
                         animate-delay-${(index + 1) * 100}`}
                  >
                    <div className="mb-4 sm:mb-6 transform transition-transform duration-300
                            group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                            strokeWidth={1.5} />
                    </div>
                    <h3 className="font-outfit text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3
                           transform transition-transform duration-300
                           group-hover:translate-x-1">
                      {item.title}
                    </h3>
                    <p className="font-outfit text-sm text-white/80 leading-relaxed
                          transition-opacity duration-300 group-hover:text-white">
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