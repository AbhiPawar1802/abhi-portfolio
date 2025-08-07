import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-100 d-flex flex-column flex-md-row justify-content-between align-items-center px-5 py-4"
      style={{
        fontSize: '14px',
        background: 'linear-gradient(135deg, #1e293b, #0f172a)', // dark gradient bg
        backdropFilter: 'blur(12px)',
        boxShadow: '0 4px 30px rgba(0,0,0,0.3)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        color: '#cbd5e1',
        fontFamily: "'Manrope', sans-serif",
        letterSpacing: '0.02em',
        userSelect: 'none',
      }}
    >
      {/* Branding */}
      <div className="fw-semibold fs-6 text-center text-md-start mb-3 mb-md-0" style={{ color: '#54b689' }}>
        Abhishek Anil Pawar
      </div>

      {/* Links */}
      <nav className="d-flex gap-4 justify-content-center flex-wrap">
        {[
          {
            href: 'https://github.com/AbhiPawar1802',
            label: 'GitHub',
            icon: <FaGithub size={18} />,
          },
          {
            href: 'https://linkedin.com/in/abhi-pawar-058775226',
            label: 'LinkedIn',
            icon: <FaLinkedin size={18} />,
          },
          {
            href: 'https://leetcode.com/your-leetcode',
            label: 'LeetCode',
            icon: null,
          },
        ].map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: '#a1aebd',
              textDecoration: 'none',
              fontWeight: 500,
              padding: '6px 12px',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              boxShadow: 'inset 0 0 0 0 #54b689',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#54b689';
              e.currentTarget.style.boxShadow = 'inset 0 -3px 0 0 #54b689';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#a1aebd';
              e.currentTarget.style.boxShadow = 'inset 0 0 0 0 #54b689';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {icon}
            {label}
          </a>
        ))}
      </nav>

      {/* Copyright */}
      <div
        className="text-center text-md-end mt-3 mt-md-0"
        style={{ color: '#64748b', fontSize: '13px', userSelect: 'text' }}
      >
        © {currentYear} Abhishek Pawar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
