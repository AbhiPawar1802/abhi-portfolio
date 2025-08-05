import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';

const Hero = ({ darkMode }) => {
  const [fadeIn, setFadeIn] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timeout = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const parallaxTransform = {
    x: mousePos.x * 15,
    y: mousePos.y * 15,
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        fontFamily: "'Manrope', sans-serif",
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: darkMode ? '#0E141D' : '#ffffff',
        color: darkMode ? '#ffffff' : '#1f2937',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={8} md={10}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: fadeIn ? 1 : 0, y: fadeIn ? 0 : 40 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{
                transform: `translate3d(${parallaxTransform.x}px, ${parallaxTransform.y}px, 0)`,
              }}
            >
              <h3
                style={{
                  fontWeight: '500',
                  fontSize: '1.15rem',
                  color: darkMode ? '#ffffffB3' : '#4b5563',
                }}
              >
                Hi, I am
              </h3>

              <h1
                style={{
                  fontWeight: '800',
                  fontSize: '3.5rem',
                  marginBottom: '0.75rem',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: darkMode ? '#ffffff' : '#1f2937',
                }}
              >
                Abhishek Pawar
              </h1>

              <h5
                style={{
                  minHeight: '40px',
                  fontSize: '1.25rem',
                  color: darkMode ? '#d1d5db' : '#374151',
                }}
              >
                <ReactTyped
                  strings={['Java Developer', 'Problem Solver', 'Full Stack Engineer']}
                  typeSpeed={30}
                  backSpeed={30}
                  loop
                />
              </h5>

              <p
                style={{
                  maxWidth: '700px',
                  color: darkMode ? '#FFFFFFB3' : '#4B5563',
                  fontSize: '1.10rem',
                  marginTop: '1rem',
                  lineHeight: '1.6',
                }}
              >
                I'm passionate about building scalable web apps and skilled in Java, Spring Boot, Python, and React. I turn ideas into digital experiences. Always exploring, always building.{' '}
                <span
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  style={{
                    color: '#54b689',
                    fontWeight: '600',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    letterSpacing: '1px',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                  onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                  role="link"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') e.currentTarget.click();
                  }}
                >
                  Let's create something awesome together.
                </span>
              </p>              

              <div className="d-flex gap-3 mt-4 flex-wrap">
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="btn px-4"
                  style={{
                    fontWeight: '700',
                    backgroundColor: darkMode ? '#2F435C' : '#d9d9d9',
                    border: `2px solid ${darkMode ? '#54b689' : '#292929'}`,
                    color: darkMode ? '#ffffffE6' : '#292929',
                    transition: 'all 0.3s ease',
                    letterSpacing: '1.5px',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = darkMode ? '#54b689' : '#292929')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = darkMode ? '#2F435C' : '#d9d9d9')
                  }
                >
                  Contact Me
                </a>

                <a
                  href="https://www.linkedin.com/in/abhi-pawar-058775226"
                  target="_blank"
                  rel="noreferrer"
                  className="btn px-4 d-flex align-items-center"
                  style={{
                    backgroundColor: '#54b689',
                    color: 'white',
                    fontWeight: '500',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <FaLinkedin className="me-2" />
                  LinkedIn
                </a>

                <a
                  href="https://github.com/AbhiPawar1802"
                  target="_blank"
                  rel="noreferrer"
                  className="btn px-4 d-flex align-items-center"
                  style={{
                    backgroundColor: '#54b689',
                    color: 'white',
                    fontWeight: '500',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <FaGithub className="me-2" />
                  GitHub
                </a>
              </div>
            </motion.div>
          </Col>
        </Row>

        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            cursor: 'pointer',
            color: darkMode ? '#54b689' : '#292929',
            fontSize: '3rem',
            userSelect: 'none',
          }}
          onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}
          aria-label="Scroll down to About section"
        >
          <FaChevronDown />
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;