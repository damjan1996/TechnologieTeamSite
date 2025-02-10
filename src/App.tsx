import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useCallback } from 'react';
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

function App() {
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
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <ScrollProgress />
          <Navbar />
          <main className="flex-grow">
            <Hero />
            <Mission />
            <Technologies />
            <GroupValue />
            <GroupCompanies />
            <ExtendedGroup />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
  );
}

export default App;