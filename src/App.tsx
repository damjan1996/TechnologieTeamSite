import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useCallback } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Technologies from './components/Technologies';
import GroupValue from './components/GroupValue';
import GroupCompanies from './components/GroupCompanies';
import ExtendedGroup from './components/ExtendedGroup';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import CookieBanner from './components/CookieBanner';
import { CookieConsentProvider } from './components/CookieConsentProvider';
import CookieSettings from './components/CookieSettings';

// SEO-Komponente für dynamisches Meta-Tag Management
const SEO = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // Default Meta-Informationen
  let title = "Technologie Team - IT-/Technologie-Unternehmensgruppe";
  let description = "Das Technologie Team ist eine mittelständische Unternehmensgruppe, die sich auf den IT- und Technologiesektor spezialisiert hat.";
  let canonicalUrl = `https://technologie.team${pathname}`;

  // Seitenspezifische Meta-Tags basierend auf dem Pfad
  if (pathname === "/impressum") {
    title = "Impressum | Technologie Team";
    description = "Impressum und rechtliche Informationen der Technologie Team GmbH, IT-/Technologie-Unternehmensgruppe mit Sitz in Oberhausen.";
  } else if (pathname === "/datenschutz") {
    title = "Datenschutzerklärung | Technologie Team";
    description = "Datenschutzerklärung der Technologie Team GmbH. Erfahren Sie, wie wir Ihre personenbezogenen Daten verarbeiten und schützen.";
  }

  return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
  );
};

// Homepage-Komponente für die Hauptseite
function HomePage() {
  const initializeObserver = useCallback(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px',
        }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const cleanup = initializeObserver();
    return cleanup;
  }, [initializeObserver]);

  return (
      <>
        <main className="flex-grow">
          <Hero />
          <Mission />
          <Technologies />
          <GroupValue />
          <GroupCompanies />
          <ExtendedGroup />
        </main>
      </>
  );
}

function App() {
  return (
      <HelmetProvider>
        <CookieConsentProvider>
          <Router>
            <div className="min-h-screen bg-white flex flex-col">
              <SEO />
              <ScrollProgress />
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/datenschutz" element={<Datenschutz />} />
              </Routes>
              <Footer />
              <ScrollToTop />
              <CookieBanner />
              <CookieSettings />
            </div>
          </Router>
        </CookieConsentProvider>
      </HelmetProvider>
  );
}

export default App;