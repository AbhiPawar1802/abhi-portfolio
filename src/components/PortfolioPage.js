import React, { useState } from 'react';
import { FaFileAlt } from 'react-icons/fa';
import Hero from './Hero';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';
import Certificate from './Certifications';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const PortfolioPage = ({ darkMode }) => {
  const primaryGreen = '#54b689';
  const [isHover, setIsHover] = React.useState(false);

  return (
    <>
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <div className="text-center my-5">
        <Link to="/resume" style={{ textDecoration: 'none' }}>
          <button
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: isHover ? '#44996f' : primaryGreen,
              color: '#fff',
              border: 'none',
              padding: '12px 28px',
              borderRadius: '30px',
              fontWeight: '600',
              fontSize: '1.1rem',
              cursor: 'pointer',
              userSelect: 'none',
            }}
            aria-label="View my resume"
          >
            <FaFileAlt style={{ fontSize: '1.3rem' }} aria-hidden="true" />
            View My Resume
          </button>
        </Link>
      </div>
      <Certificate darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </>
  );
};

export default PortfolioPage;
