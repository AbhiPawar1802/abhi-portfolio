import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaReact } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';
import Lottie from 'lottie-react';
import devAnimation from '../assets/dev.json';

const SkillBadge = ({ icon, label, gradient }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 14px',
      background: '#0f172a',
      borderRadius: '999px',
      fontWeight: '600',
      fontSize: '0.95rem',
      cursor: 'pointer',
      color: '#fff',
    }}
  >
    <span
      style={{
        background: gradient,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {icon}
    </span>
    <span
      style={{
        background: gradient,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {label}
    </span>
  </motion.div>
);

const About = ({ darkMode }) => {
  const textColor = '#ffffff';
  const quoteBg = darkMode ? '#1E293B' : '#f1f5f9';
  const quoteText = darkMode ? '#ffffffb3' : '#334155';
  const quoteBorder = darkMode ? '#54b689' : '#6366f1';

  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setTilt({ rotateX: -rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section
      id="about"
      style={{
        padding: '10px 20px',
        maxWidth: '1100px',
        margin: 'auto',
        color: textColor,
        fontFamily: "'Manrope', sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: '2.2rem',
          fontWeight: '700',
          borderLeft: `6px solid ${darkMode ? '#54b689' : '#6366f1'}`,
          paddingLeft: '16px',
          marginBottom: '40px',
          color: textColor,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        About Me
      </h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '40px',
        }}
      >
        <div style={{ flex: '1 1 500px', fontSize: '1rem', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '20px' }}>
            Hello! I’m{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #f43f5e, #f97316)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
                fontSize: '1.2rem',
              }}
            >
              Abhishek Pawar
            </span>
            , a passionate software engineer with a love for building scalable, efficient web
            applications.
          </p>
          <p style={{ marginBottom: '20px' }}>
            I’m currently pursuing{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #6366f1, #0ea5e9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
              }}
            >
              MCA
            </span>{' '}
            and completed my{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #10b981, #34d399)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
              }}
            >
              BCA
            </span>{' '}
            with a{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #eab308, #f59e0b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
              }}
            >
              7.40 CGPA
            </span>
            . I enjoy bringing ideas to life with clean and modern technologies.
          </p>
          <p style={{ fontSize: '1.10rem' }}>
            My core strengths include working with{' '}
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'linear-gradient(to right, #facc15, #f97316)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '600',
              }}
            >
              <FaJava /> Java
            </span>
            ,{' '}
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'linear-gradient(to right, #22d3ee, #2563eb)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '600',
              }}
            >
              <SiSpringboot /> Spring Boot
            </span>
            ,{' '}
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'linear-gradient(to right, #ec4899, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '600',
              }}
            >
              <FaPython /> Python
            </span>{' '}
            and{' '}
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'linear-gradient(to right, #34d399, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '600',
              }}
            >
              <FaReact /> React
            </span>{' '}
            to build full-stack applications. I'm always learning, building, and automating.
          </p>
        </div>

        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            flex: '1 1 400px',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '-80px',
            perspective: 800,
          }}
        >
          <motion.div
            animate={{
              rotateX: tilt.rotateX,
              rotateY: tilt.rotateY,
              scale: 1.05,
            }}
            transition={{
              type: 'spring',
              stiffness: 120,
              damping: 14,
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Lottie
              animationData={devAnimation}
              loop
              autoplay
              style={{
                maxWidth: '440px',
                width: '100%',
                borderRadius: '12px',
              }}
            />
          </motion.div>
        </div>
      </div>

      <motion.blockquote
        style={{
          background: quoteBg,
          padding: '20px 24px',
          borderLeft: `6px solid ${quoteBorder}`,
          borderRadius: '10px',
          fontStyle: 'italic',
          marginBottom: '30px',
          color: quoteText,
          textAlign: 'center',
          maxWidth: '800px',
          marginInline: 'auto',
        }}
      >
        “Code is the closest thing we have to magic. I don’t just build apps — I craft experiences,
        solve problems, and leave things better than I found them.”
      </motion.blockquote>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          justifyContent: 'center',
        }}
      >
        <SkillBadge
          icon={<FaJava />}
          label="Java"
          gradient="linear-gradient(to right, #facc15, #f97316)"
        />
        <SkillBadge
          icon={<SiSpringboot />}
          label="Spring Boot"
          gradient="linear-gradient(to right, #22d3ee, #2563eb)"
        />
        <SkillBadge
          icon={<FaPython />}
          label="Python"
          gradient="linear-gradient(to right, #ec4899, #8b5cf6)"
        />
        <SkillBadge
          icon={<FaReact />}
          label="React"
          gradient="linear-gradient(to right, #34d399, #06b6d4)"
        />
      </div>
    </section>
  );
};

export default About;
