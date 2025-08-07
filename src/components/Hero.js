import React, { useEffect, useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaJava } from 'react-icons/fa';
import { SiSpringboot, SiPython, SiReact } from 'react-icons/si';
import { motion } from 'framer-motion';
import Typed from 'typed.js';

const Hero = ({ darkMode }) => {
  const [fadeIn, setFadeIn] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const typedRef = useRef(null);
  const elRef = useRef(null);

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

  useEffect(() => {
    typedRef.current = new Typed(elRef.current, {
      strings: ['Java Developer', 'Problem Solver', 'Full Stack Engineer'],
      typeSpeed: 40,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typedRef.current.destroy();
    };
  }, []);

  const parallaxTransform = {
    x: mousePos.x * 10,
    y: mousePos.y * 10,
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '120px 20px 60px',
        backgroundColor: darkMode ? '#0E141D' : '#ffffff',
        color: darkMode ? '#ffffff' : '#1f2937',
        transition: 'background-color 0.3s ease, color 0.3s ease',
        fontFamily: "'Manrope', sans-serif",
        position: 'relative',
      }}
    >
      <Container style={{ maxWidth: '1100px' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: fadeIn ? 1 : 0, y: fadeIn ? 0 : 40 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{
            transform: `translate3d(${parallaxTransform.x}px, ${parallaxTransform.y}px, 0)`,
          }}
        >
          <h3 style={{ fontSize: '1.15rem', color: darkMode ? '#ffffffB3' : '#4b5563' }}>
            Hi, I am
          </h3>

          <h1
            style={{
              fontWeight: 800,
              fontSize: '3.2rem',
              marginBottom: '0.6rem',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            <span
              style={{
                background: 'linear-gradient(to right, #6366f1, #0ea5e9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Abhishek Pawar
            </span>
          </h1>

          <h5
            style={{
              minHeight: '40px',
              fontSize: '1.25rem',
              color: darkMode ? '#d1d5db' : '#374151',
            }}
          >
            <span ref={elRef} />
          </h5>

          <p
            style={{
              maxWidth: '750px',
              fontSize: '1.1rem',
              marginTop: '1rem',
              lineHeight: '1.7',
              color: darkMode ? '#ffffffb3' : '#4b5563',
            }}
          >
            I’m passionate about building scalable web apps using{' '}
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <FaJava size={18} color="#f89820" />
              Java,
            </span>{' '}
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <SiSpringboot size={18} color="#6DB33F" />
              Spring Boot,
            </span>{' '}
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <SiPython size={18} color="#3776AB" />
              Python,
            </span>{' '}
            and{' '}
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <SiReact size={18} color="#61DBFB" />
              React.
            </span>{' '}
            I turn ideas into digital experiences — always learning, always building.{' '}
            <span
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                color: '#54b689',
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
              tabIndex={0}
              role="link"
              onKeyDown={(e) => {
                if (e.key === 'Enter') e.currentTarget.click();
              }}
            >
              Let’s create something awesome together.
            </span>
          </p>

          <div className="d-flex gap-3 mt-4 flex-wrap">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="btn px-4"
              style={{
                fontWeight: 700,
                backgroundColor: darkMode ? '#2F435C' : '#d9d9d9',
                border: `2px solid ${darkMode ? '#54b689' : '#292929'}`,
                color: darkMode ? '#ffffffE6' : '#292929',
                letterSpacing: '1px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = darkMode ? '#54b689' : '#292929';
                e.currentTarget.style.color = darkMode ? '#1f2937' : '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = darkMode ? '#2F435C' : '#d9d9d9';
                e.currentTarget.style.color = darkMode ? '#ffffffE6' : '#292929';
              }}
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

        {/* Scroll cue */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            bottom: '70px',
            left: '50%',
            transform: 'translateX(-50%)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '40px',
            width: '24px',
            border: `2px solid ${darkMode ? '#54b689' : '#292929'}`,
            borderRadius: '20px',
            padding: '4px',
          }}
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="Scroll down"
        >
          <motion.div
            style={{
              height: '8px',
              width: '8px',
              backgroundColor: darkMode ? '#54b689' : '#292929',
              borderRadius: '50%',
            }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          />
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
