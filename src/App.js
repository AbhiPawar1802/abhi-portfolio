import React, { useState, useEffect, useRef } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import PortfolioPage from './components/PortfolioPage';
import Resume from './components/Resume';
import ContactPage from './components/Contact';
import About from './components/About';
import Certifications from './components/Certifications';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

const NAVBAR_HEIGHT = 65;

const Spinner = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh',
    }}
  >
    <div
      style={{
        border: '6px solid #f3f3f3',
        borderTop: '6px solid #54b689',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        animation: 'spin 4s linear infinite',
      }}
    />
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

const RoutesWithLoading = ({ darkMode }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [location]);

  if (loading) return <Spinner />;

  return (
    <div style={{ paddingTop: `${NAVBAR_HEIGHT + 20}px` }}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PortfolioPage darkMode={darkMode} />} />
        <Route path="/resume" element={<Resume darkMode={darkMode} />} />
        <Route path="/contact" element={<ContactPage darkMode={darkMode} />} />
        <Route path="/about" element={<About darkMode={darkMode} />} />
        <Route path="/certifications" element={<Certifications darkMode={darkMode} />} />
        <Route path="/hero" element={<Hero darkMode={darkMode} />} />
        <Route path="/project" element={<Projects darkMode={darkMode} />} />
        <Route path="/skills" element={<Skills darkMode={darkMode} />} />
      </Routes>
    </div>
  );
};

const ScrollProgressBar = ({ darkMode }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const ticking = useRef(false);
  const lastProgress = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

          if (Math.abs(progress - lastProgress.current) >= 0.005) {
            setScrollProgress(progress);
            lastProgress.current = progress;
          }
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: NAVBAR_HEIGHT,
        left: 0,
        width: '100%',
        height: '5px',
        backgroundColor: darkMode ? '#334155' : '#d1d5db',
        zIndex: 999,
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${scrollProgress * 100}%`,
          backgroundColor: darkMode ? '#54b689' : '#6366f1',
          transition: 'width 0.15s ease-out',
          borderRadius: '2px',
        }}
      />
    </div>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const updated = !prev;
      localStorage.setItem('darkMode', updated);
      return updated;
    });
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 992);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [darkMode]);

  return (
    <Router>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
      />

      {!isNavOpen && <ScrollProgressBar darkMode={darkMode} />}

      <div
        style={{
          transition: 'margin-left 0.3s ease',
          marginLeft: isDesktop && isNavOpen ? '270px' : '0',
        }}
      >
        <RoutesWithLoading darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;
