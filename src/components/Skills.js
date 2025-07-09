import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJava,
  FaPython,
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiMysql,
  SiPostman,
  SiBootstrap,
  SiDjango,
  SiMongodb,
} from 'react-icons/si';

const skills = {
  Frontend: [
    { icon: <FaReact />, label: 'React', color: '#61DAFB' },
    { icon: <FaHtml5 />, label: 'HTML5', color: '#E34F26' },
    { icon: <FaCss3Alt />, label: 'CSS3', color: '#1572B6' },
    { icon: <SiBootstrap />, label: 'Bootstrap', color: '#7952B3' },
  ],
  Backend: [
    { icon: <FaJava />, label: 'Java', color: '#f89820' },
    { icon: <SiSpringboot />, label: 'Spring Boot', color: '#6DB33F' },
    { icon: <FaPython />, label: 'Python', color: '#3776AB' },
    { icon: <SiDjango />, label: 'Django', color: '#7FDBB6' },
  ],
  Databases: [
    { icon: <SiMysql />, label: 'MySQL', color: '#00618A' },
    { icon: <SiMongodb />, label: 'MongoDB', color: '#47A248' },
  ],
  Tools: [
    { icon: <FaGitAlt />, label: 'Git', color: '#F05032' },
    { icon: <SiPostman />, label: 'Postman', color: '#FF6C37' },
  ],
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const Skills = ({ darkMode }) => {
  const sectionBg = darkMode ? '#0E141D' : '#ffffff';
  const textPrimary = darkMode ? '#f9fafb' : '#1f2937';
  const categoryColor = darkMode ? '#a5b4fc' : '#4f46e5';
  const pillBg = darkMode ? '#1e293b' : '#f1f5f9';
  const pillText = '#54b689';
  const cardBg = darkMode ? '#1e293b' : '#f9fafb';
  const cardShadow = darkMode
    ? '0 2px 12px rgba(255, 255, 255, 0.05)'
    : '0 4px 12px rgba(0, 0, 0, 0.08)';

  return (
    <section
      id="skills"
      style={{
        padding: '40px 24px',
        maxWidth: '1100px',
        margin: 'auto',
        backgroundColor: sectionBg,
        color: textPrimary,
      }}
    >
      {/* Section title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.05,
              delayChildren: 0.2,
            },
          },
        }}
        style={{
          borderLeft: `6px solid ${darkMode ? '#54b689' : '#6366f1'}`,
          paddingLeft: '16px',
          marginBottom: '40px',
          display: 'inline-block',
        }}
      >
        <h2
          style={{
            fontSize: '2.2rem',
            fontWeight: '700',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            display: 'inline-block',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          {'Skills'.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
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

      {/* Skill category cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
        }}
      >
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={index}
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              background: cardBg,
              padding: '24px',
              borderRadius: '16px',
              boxShadow: cardShadow,
              transition: 'box-shadow 0.3s ease',
            }}
          >
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: '20px',
                color: categoryColor,
                textAlign: 'center',
              }}
            >
              {category}
            </h3>

            <motion.div
              className="skill-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{
                display: 'grid',
                gap: '12px',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              }}
            >
              {items.map((skill, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUpVariants}
                  whileHover={{ scale: 1.07 }}
                  whileFocus={{ scale: 1.07 }}
                  tabIndex={0}
                  role="tooltip"
                  aria-label={skill.label}
                  title={skill.label}
                  style={{
                    backgroundColor: pillBg,
                    color: pillText,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    fontWeight: '600',
                    fontSize: '0.85rem',
                    border: `2px solid ${skill.color}`,
                    height: '38px',
                    width: '100%',
                    whiteSpace: 'nowrap',
                    boxSizing: 'border-box',
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.currentTarget.style.transform = 'scale(1.07)';
                      setTimeout(() => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }, 150);
                    }
                  }}
                >
                  <span style={{ fontSize: '1.1rem', color: skill.color }}>
                    {skill.icon}
                  </span>
                  <span>{skill.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
