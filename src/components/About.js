import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaReact } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';
import Lottie from 'lottie-react';
import devAnimation from '../assets/dev.json';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemLeftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const itemRightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const SkillBadge = ({ icon, label, darkMode }) => (
  <motion.div
    whileHover={{
      scale: 1.1,
      boxShadow: darkMode
        ? '0 0 10px 3px rgba(84, 182, 137, 0.7)'
        : '0 0 10px 3px rgba(99, 102, 241, 0.7)',
      transition: { duration: 0.3, yoyo: Infinity },
    }}
    whileTap={{ scale: 0.95 }}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 14px',
      backgroundColor: darkMode ? '#1E293B' : '#e0e7ff',
      borderRadius: '999px',
      color: darkMode ? '#54b689' : '#3730a3',
      fontWeight: '600',
      fontSize: '0.95rem',
      cursor: 'pointer',
    }}
  >
    <span style={{ fontSize: '1.2rem', color: '#54b689' }}>{icon}</span> {label}
  </motion.div>
);

const About = ({ darkMode }) => {
  const headingColor = darkMode ? '#ffffff' : undefined;
  const textColor = darkMode ? '#f3e5ab' : undefined;
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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.05,
              delayChildren: 0.2,
            },
          },
        }}
      >
        <h2
          style={{
            fontSize: '2.2rem',
            fontWeight: '700',
            borderLeft: `6px solid ${darkMode ? '#54b689' : '#6366f1'}`,
            paddingLeft: '16px',
            marginBottom: '40px',
            display: 'inline-block',
            color: headingColor,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          {'About Me'.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  },
                },
              }}
              style={{ display: 'inline-block' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          alignItems: 'center',
          gap: '40px',
        }}
      >
        <motion.div
          variants={itemLeftVariants}
          style={{ fontSize: '1rem', lineHeight: '1.8', color: textColor }}
        >
          <p style={{ marginBottom: '20px' }}>
            Hello! I’m{' '}
            <strong style={{ color: darkMode ? '#fffffff2' : undefined, fontSize: '1.2rem' }}>
              Abhishek Pawar
            </strong>
            , a passionate software engineer with a love for building scalable, efficient web
            applications.
          </p>
          <p style={{ marginBottom: '20px' }}>
            I’m currently pursuing{' '}
            <strong style={{ color: darkMode ? '#FFFFFFD9' : undefined, fontSize: '1rem' }}>
              MCA
            </strong>{' '}
            and completed my{' '}
            <strong style={{ color: darkMode ? '#FFFFFFD9' : undefined, fontSize: '1rem' }}>
              BCA
            </strong>{' '}
            with a{' '}
            <strong style={{ color: darkMode ? '#FFFFFFD9' : undefined, fontSize: '1rem' }}>
              7.40 CGPA
            </strong>
            . I enjoy bringing ideas to life with clean and modern technologies.
          </p>
          <p
            style={{
              maxWidth: '700px',
              color: darkMode ? '#54b689' : undefined,
              fontSize: '1.10rem',
            }}
          >
            My core strengths include working with{' '}
            <strong style={{ color: darkMode ? '#FFFFFFD9' : undefined }}>
              Java, Spring Boot, Python
            </strong>{' '}
            and{' '}
            <strong style={{ color: darkMode ? '#FFFFFFD9' : undefined }}>React</strong> to build
            full-stack applications. I'm always learning, building, and automating.
          </p>

          <blockquote
            style={{
              background: quoteBg,
              padding: '20px 24px',
              borderLeft: `6px solid ${quoteBorder}`,
              borderRadius: '10px',
              fontStyle: 'italic',
              marginTop: '30px',
              marginBottom: '30px',
              color: quoteText,
              boxShadow: darkMode
                ? '0 0 10px rgba(84, 182, 137, 0.1)'
                : '0 4px 8px rgba(0,0,0,0.05)',
            }}
          >
            “Code is the closest thing we have to magic. I don’t just build apps — I craft
            experiences, solve problems, and leave things better than I found them.”
          </blockquote>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <SkillBadge icon={<FaJava />} label="Java" darkMode={darkMode} />
            <SkillBadge icon={<SiSpringboot />} label="Spring Boot" darkMode={darkMode} />
            <SkillBadge icon={<FaPython />} label="Python" darkMode={darkMode} />
            <SkillBadge icon={<FaReact />} label="React" darkMode={darkMode} />
          </div>
        </motion.div>

        <motion.div
          variants={itemRightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            perspective: 800,
          }}
        >
          <motion.div
            style={{ transformStyle: 'preserve-3d' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
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
          >
            <Lottie
              animationData={devAnimation}
              loop
              autoplay
              style={{
                maxWidth: '400px',
                width: '100%',
                borderRadius: '12px',
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
