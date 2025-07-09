import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import certificateAnimation from '../assets/certificate.json';
import badgeIcon from '../assets/certificate.png';

const certifications = [
  {
    title: 'Advanced Java Programming',
    platform: 'LinkedIn Learning',
    issued: '2023',
    badge: badgeIcon,
    description: 'Object-oriented principles, multithreading, and JDBC.',
  },
  {
    title: 'Software Testing Foundations',
    platform: 'LinkedIn Learning',
    issued: '2023',
    badge: badgeIcon,
    description: 'SDLC phases, test strategy, test cases, agile testing.',
  },
  {
    title: 'Database Clinic: MongoDB',
    platform: 'LinkedIn Learning',
    issued: '2024',
    badge: badgeIcon,
    description: 'MongoDB querying, schema design, performance tuning.',
  },
  {
    title: 'JavaScript Essential Training',
    platform: 'LinkedIn Learning',
    issued: '2023',
    badge: badgeIcon,
    description: 'JS fundamentals, ES6, DOM manipulation.',
  },
  {
    title: 'DSA in Java',
    platform: 'LinkedIn Learning',
    issued: '2023',
    badge: badgeIcon,
    description: 'Stacks, queues, trees, sorting algorithms.',
  },
  {
    title: 'MySQL Training',
    platform: 'LinkedIn Learning',
    issued: '2023',
    badge: badgeIcon,
    description: 'Joins, indexes, schema design, and normalization.',
  },
];

const Certifications = ({ darkMode }) => {
  const bg = darkMode ? '#0E141D' : '#ffffff';
  const text = darkMode ? '#f9fafb' : '#1f2937';
  const border = darkMode ? '#374151' : '#e5e7eb';
  const cardBg = darkMode ? '#1e293b' : '#f9fafb';
  const underline = darkMode ? '#54b689' : '#6366f1';

  return (
    <section
      id="certifications"
      style={{
        padding: '40px 24px',
        maxWidth: '1200px',
        margin: 'auto',
        backgroundColor: bg,
        color: text,
        fontFamily: "'Manrope', sans-serif",
      }}
    >
      {/* Section Heading */}
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
          display: 'inline-block',
          borderLeft: `6px solid ${underline}`,
          paddingLeft: '16px',
          marginBottom: '36px',
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: 700,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            whiteSpace: 'nowrap',
          }}
        >
          {'Certifications'.split('').map((char, index) => (
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

      {/* Bootstrap Row Layout */}
      <div className="row g-4 align-items-center">
        {/* Left Column: Certificate Cards */}
        <div className="col-lg-8 col-12">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '20px',
            }}
          >
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                style={{
                  backgroundColor: cardBg,
                  border: `1px solid ${border}`,
                  borderRadius: '12px',
                  padding: '16px',
                  boxShadow: darkMode
                    ? '0 1px 6px rgba(255,255,255,0.03)'
                    : '0 2px 8px rgba(0,0,0,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = 'translateY(-3px)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = 'translateY(0)')
                }
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img
                    src={cert.badge}
                    alt="badge"
                    style={{ width: 32, height: 32, objectFit: 'contain' }}
                  />
                  <div>
                    <h5 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 2 }}>
                      {cert.title}
                    </h5>
                    <p style={{ fontSize: '0.85rem', margin: 0, opacity: 0.75 }}>
                      {cert.platform} · {cert.issued}
                    </p>
                  </div>
                </div>
                <p style={{ fontSize: '0.88rem', margin: 0, opacity: 0.9 }}>
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Lottie Animation */}
        <div className="col-lg-4 col-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 15,
              duration: 0.8,
            }}
            style={{
              width: '100%',
              maxWidth: '360px',
              margin: '0 auto',
            }}
          >
            <Lottie
              animationData={certificateAnimation}
              loop
              autoplay
              style={{
                width: '100%',
                maxWidth: '360px',
                maxHeight: '340px',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
