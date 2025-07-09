import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { FaReact, FaJava, FaBootstrap } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiPython, SiDjango, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';

const hexToRgba = (hex, opacity) => {
  const h = hex.replace('#', '');
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
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

const techIcons = {
  React: <FaReact aria-hidden="true" />,
  Java: <FaJava aria-hidden="true" />,
  'Spring Boot': <SiSpringboot aria-hidden="true" />,
  MySQL: <SiMysql aria-hidden="true" />,
  Bootstrap: <FaBootstrap aria-hidden="true" />,
  Python: <SiPython aria-hidden="true" />,
  Django: <SiDjango aria-hidden="true" />,
  Html: <SiHtml5 aria-hidden="true" />,
  CSS: <SiCss3 aria-hidden="true" />,
  JavaScript: <SiJavascript aria-hidden="true" />,
};

const Modal = ({ project, onClose, darkMode }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTab = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTab);
    firstElement?.focus();

    return () => document.removeEventListener('keydown', handleTab);
  }, []);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        padding: '10px',
      }}
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: darkMode ? '#1e293b' : '#fff',
          borderRadius: '12px',
          padding: '30px',
          maxWidth: '600px',
          width: '100%',
          color: darkMode ? '#f9fafb' : '#111827',
          boxShadow: darkMode
            ? '0 8px 24px rgba(0,0,0,0.7)'
            : '0 8px 24px rgba(0,0,0,0.2)',
          maxHeight: '80vh',
          overflowY: 'auto',
          outline: 'none',
        }}
        tabIndex={-1}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '15px',
            right: '20px',
            fontSize: '1.5rem',
            border: 'none',
            background: 'none',
            color: darkMode ? '#f9fafb' : '#111827',
            cursor: 'pointer',
          }}
        >
          ×
        </button>
        <h2 id="modal-title" style={{ marginBottom: '1rem' }}>
          {project.title}
        </h2>
        <p style={{ marginBottom: '1rem' }}>{project.description}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {project.tech.map((tech, i) => {
            const techKey = tech.toLowerCase() === 'django' ? 'Django' : tech;
            let baseColor = tagColors[techKey] || '#888';
            if (darkMode && techKey === 'Django') {
              baseColor = '#7FDBB6';
            }
            return (
              <span
                key={i}
                style={{
                    background: hexToRgba(baseColor, 0.2),
                    color: baseColor,
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    padding: '6px 14px',
                    borderRadius: '999px',
                    border: `1.5px solid ${baseColor}`,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.3s ease',
                    userSelect: 'none',
                    whiteSpace: 'nowrap',
                    width: '100px',
                    justifyContent: 'center', 
                }}
                role="listitem"
                aria-label={`Technology used: ${tech}`}
                >
                {techIcons[techKey] || null} {tech}
                </span>
            );
          })}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
