import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJava, FaBootstrap } from 'react-icons/fa';
import {
  SiSpringboot,
  SiFramer,
  SiMysql,
  SiPython,
  SiDjango,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from 'react-icons/si';

// Lazy load Modal for performance
const Modal = lazy(() => import('./Model'));

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const techIcons = {
  React: <FaReact aria-hidden="true" />,
  Java: <FaJava aria-hidden="true" />,
  'Spring Boot': <SiSpringboot aria-hidden="true" />,
  MySQL: <SiMysql aria-hidden="true" />,
  Bootstrap: <FaBootstrap aria-hidden="true" />,
  'Framer Motion': <SiFramer aria-hidden="true" />,
  Python: <SiPython aria-hidden="true" />,
  Django: <SiDjango aria-hidden="true" />,
  Html: <SiHtml5 aria-hidden="true" />,
  CSS: <SiCss3 aria-hidden="true" />,
  JavaScript: <SiJavascript aria-hidden="true" />,
};

const tagColors = {
  React: '#61dafb',
  Java: '#f89820',
  'Spring Boot': '#6DB33F',
  MySQL: '#00618A',
  Bootstrap: '#7952B3',
  Python: '#3776AB',
  Django: '#092E20',
  Html: '#e34c26',
  CSS: '#264de4',
  JavaScript: '#f0db4f',
};

const Projects = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [expanded, setExpanded] = useState({});

  const demoBtnBg = '#54b689';
  const githubBtnBg = darkMode ? '#111827' : '#333';

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const background = darkMode
    ? 'linear-gradient(135deg, #1e293b, #0f172a)'
    : 'linear-gradient(135deg, #ffffff, #f1f5f9)';
  const textPrimary = darkMode ? '#f9fafb' : '#111827';
  const textSecondary = darkMode ? '#d1d5db' : '#4b5563';
  const sectionBg = darkMode ? '#0E141D' : '#ffffff';
  const title = 'Projects';

  const projects = [
    {
      title: 'Cafe Management System',
      description:
        'A comprehensive full-stack web app designed to streamline café operations by efficiently managing orders, offers, and customer data. Built with Spring Boot backend, React frontend, and MySQL database. Features real-time order tracking, user authentication, and an admin dashboard.',
      tech: ['Java', 'Spring Boot', 'React', 'MySQL'],
      demoLink: '#',
      githubLink: 'https://github.com/AbhiPawar1802/Cafe-Management-System.git',
    },
    {
      title: 'Pet Adoption and Care System',
      description:
        'User-friendly full-stack web app facilitating pet adoption and care resources. Developed with Django backend, Python, MySQL, and a responsive frontend in HTML, CSS, and JavaScript. Features browsing pets, adoption requests, care tips, and admin management.',
      tech: ['Python', 'Django', 'JavaScript', 'Html', 'CSS', 'MySQL'],
      demoLink: 'https://your-demo-link.com',
      githubLink: 'https://github.com/your-username/portfolio',
    },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: '10px 24px',
        maxWidth: '1100px',
        margin: 'auto',
        backgroundColor: sectionBg,
        color: textPrimary,
        minHeight: '80vh',
      }}
      aria-label="Project portfolio section"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          borderLeft: `6px solid ${darkMode ? '#54b689' : '#6366f1'}`,
          paddingLeft: '16px',
          marginBottom: '40px',
          display: 'inline-block',
        }}
      >
        <motion.h2
          style={{
            fontSize: '2.2rem',
            fontWeight: '700',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: textPrimary,
            whiteSpace: 'nowrap',
            margin: 0,
          }}
        >
          {title.split('').map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              style={{ display: 'inline-block' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
        }}
      >
        {projects.map((project, index) => {
          const isExpanded = expanded[index];
          const isLong = project.description.length > 180;
          return (
            <motion.article
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: darkMode
                  ? '0 10px 20px rgba(100,100,255,0.2)'
                  : '0 10px 20px rgba(99,102,241,0.15)',
              }}
              style={{
                background,
                borderRadius: '16px',
                padding: '24px',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                color: textPrimary,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.4s ease',
                boxShadow: '0 0 4px rgba(0,0,0,0.05)',
                cursor: 'default',
                wordWrap: 'break-word',
              }}
              aria-labelledby={`project-title-${index}`}
            >
              <motion.h3
                id={`project-title-${index}`}
                variants={fadeInUp}
                style={{ fontSize: '1.4rem', marginBottom: '12px' }}
              >
                {project.title}
              </motion.h3>

              <motion.p
                id={`project-desc-${index}`}
                variants={fadeInUp}
                style={{
                  fontSize: '1rem',
                  color: textSecondary,
                  marginBottom: '12px',
                }}
              >
                {isExpanded || !isLong
                  ? project.description
                  : project.description.slice(0, 180) + '...'}
                {isLong && (
                  <button
                    onClick={() =>
                      setExpanded({ ...expanded, [index]: !isExpanded })
                    }
                    aria-expanded={isExpanded}
                    aria-controls={`project-desc-${index}`}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#54b689',
                      cursor: 'pointer',
                      fontWeight: '600',
                      paddingLeft: '6px',
                      fontSize: '1rem',
                    }}
                  >
                    {isExpanded ? 'Read Less' : 'Read More'}
                  </button>
                )}
              </motion.p>

              <motion.div
                variants={fadeInUp}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                  gap: '10px',
                  marginBottom: '16px',
                }}
                aria-label="Technologies used"
                role="list"
              >
                {project.tech.map((tech, i) => {
                  const techKey = tech.toLowerCase() === 'django' ? 'Django' : tech;
                  let baseColor = tagColors[techKey] || '#888';
                  if (darkMode && techKey === 'Django') {
                    baseColor = '#7FDBB6';
                  }
                  const pillBg = darkMode ? '#1E293B' : '#e0e7ff';
                  const pillText = darkMode ? '#54b689' : '#3730a3';
                  const icon = techIcons[techKey] || null;

                  return (
                    <motion.div
                      key={i}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.07 }}
                      whileFocus={{ scale: 1.07 }}
                      tabIndex={0}
                      role="tooltip"
                      aria-label={tech}
                      title={tech}
                      style={{
                        backgroundColor: pillBg,
                        color: pillText,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 12px',
                        borderRadius: '999px',
                        fontWeight: '600',
                        fontSize: '0.8rem',
                        border: `2px solid ${baseColor}`,
                        justifyContent: 'center',
                        width: '100%',
                        minHeight: '34px',
                        cursor: 'default',
                        outline: 'none',
                        userSelect: 'none',
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
                      <span style={{ fontSize: '1.1rem', color: baseColor }}>
                        {icon}
                      </span>
                      <span>{tech}</span>
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.div
                variants={fadeInUp}
                style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}
              >
                <button
                  onClick={() => setSelectedProject(project)}
                  aria-haspopup="dialog"
                  style={{
                    padding: '10px 18px',
                    background: demoBtnBg,
                    color: '#fff',
                    borderRadius: '8px',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    flex: '1 1 auto',
                    minWidth: '120px',
                    transition: 'background-color 0.3s ease',
                  }}
                  onFocus={(e) => (e.target.style.backgroundColor = '#3f8267')}
                  onBlur={(e) => (e.target.style.backgroundColor = demoBtnBg)}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#3f8267')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = demoBtnBg)}
                >
                  Preview
                </button>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '10px 18px',
                    background: githubBtnBg,
                    color: '#fff',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    flex: '1 1 auto',
                    minWidth: '120px',
                    textAlign: 'center',
                    transition: 'background-color 0.3s ease',
                  }}
                  onFocus={(e) => (e.target.style.backgroundColor = '#555')}
                  onBlur={(e) => (e.target.style.backgroundColor = githubBtnBg)}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#555')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = githubBtnBg)}
                >
                  GitHub
                </a>
              </motion.div>
            </motion.article>
          );
        })}
      </motion.div>

      {selectedProject && (
        <Suspense fallback={<div style={{ color: textPrimary }}>Loading...</div>}>
          <Modal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            darkMode={darkMode}
          />
        </Suspense>
      )}
    </section>
  );
};

export default Projects;
