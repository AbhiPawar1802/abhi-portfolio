import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaCode,
  FaFileAlt,
  FaCertificate,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';

import profileImage from '../assets/profile.jpg';
import darkIcon from '../assets/dark.png';
import leetIcon from '../assets/leetcode.png';
import profileIcon from '../assets/profile.png';
import hireMeIcon from '../assets/hire.png';

const Navbar = ({ darkMode, toggleDarkMode, setIsNavOpen }) => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [showSidebar, setShowSidebar] = useState(false);
  const [sidebarHeight, setSidebarHeight] = useState(0);
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (setIsNavOpen) {
      setIsNavOpen(showSidebar);
    }
  }, [showSidebar, setIsNavOpen]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 992;
      setIsMobile(mobile);
      setShowSidebar(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile && showSidebar && sidebarRef.current) {
      setSidebarHeight(sidebarRef.current.scrollHeight);
    } else {
      setSidebarHeight(0);
    }
  }, [isMobile, showSidebar]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (isMobile) {
      setShowSidebar(false);
    }
  }, [location.pathname, isMobile]);

  const navItems = [
    ['/', <FaHome />, 'Home'],
    ['/about', <FaUser />, 'About Me'],
    ['/project', <FaProjectDiagram />, 'Portfolio'],
    ['/skills', <FaCode />, 'Skills'],
    ['/resume', <FaFileAlt />, 'Resume'],
    ['/certifications', <FaCertificate />, 'Certifications'],
    ['/contact', <FaEnvelope />, 'Contact'],
  ];

  const SidebarContent = () => (
    <div
      ref={sidebarRef}
      className="text-white px-3"
      style={{
        backgroundColor: darkMode ? '#1E293B' : '#54b689',
        width: isMobile ? '100%' : '260px',
        height: isMobile ? 'auto' : '100%',
        overflowY: isMobile ? 'visible' : 'auto',
        fontFamily: "'Manrope', sans-serif",
      }}
    >
      {(showSidebar || !isMobile) && (
        <>
          {isMobile && (
            <div className="d-flex align-items-center py-3">
              <img
                src={profileIcon}
                alt="Close"
                width="35"
                height="35"
                style={{ borderRadius: '50%', cursor: 'pointer', filter: 'invert(1)' }}
                onClick={() => setShowSidebar(false)}
              />
              <div className="flex-grow-1 text-center" style={{ marginLeft: '-8px' }}>
                <h5 className="m-0" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Abhishek Pawar
                </h5>
              </div>
              <div style={{ width: '35px' }} />
            </div>
          )}

          <div className="text-center">
            <div
              style={{
                width: '172px',
                height: '172px',
                borderRadius: '50%',
                backgroundColor: darkMode ? '#54b689' : '#0E141D',
                margin: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={profileImage}
                alt="Profile"
                style={{
                  width: '160px',
                  height: '160px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
            </div>

            <p style={{ fontSize: '0.8rem' }}>
              Hi, I’m{' '}
              <span style={{ fontWeight: '600', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Abhishek Pawar
              </span>
              , an enthusiastic software engineer.
            </p>

            <div className="d-flex justify-content-center gap-3 my-3">
              <a href="https://linkedin.com/in/abhi-pawar-058775226" target="_blank" rel="noreferrer">
                <FaLinkedin size={30} style={{ color: darkMode ? '#54b689' : 'white' }} />
              </a>
              <a href="https://github.com/AbhiPawar1802" target="_blank" rel="noreferrer">
                <FaGithub size={30} style={{ color: darkMode ? '#54b689' : 'white' }} />
              </a>
              <a href="https://leetcode.com/u/abhipawar18/" target="_blank" rel="noreferrer">
                <img
                  src={leetIcon}
                  alt="LeetCode"
                  style={{
                    width: 30,
                    height: 30,
                    filter: darkMode
                      ? 'invert(44%) sepia(73%) saturate(385%) hue-rotate(112deg) brightness(110%) contrast(98%)'
                      : 'invert(1)',
                  }}
                />
              </a>
            </div>
          </div>

          <ul className="nav flex-column" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {navItems.map(([to, icon, label], i) => (
              <li key={i}>
                <Link
                  to={to}
                  className="nav-link d-flex align-items-center gap-2"
                  style={{
                    padding: '8px 0',
                    color:
                      location.pathname === to
                        ? darkMode
                          ? '#54b689'
                          : '#00000099'
                        : '#fffffff3',
                    fontWeight: '1100',
                    textDecoration: 'none',
                  }}
                  onClick={() => setShowSidebar(false)}
                >
                  <span>{icon}</span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 mb-2">
            <div
              className="text-white text-center"
              style={{
                backgroundColor: darkMode ? '#54b689' : '#0000004D',
                borderRadius: '0.375rem',
                padding: '1rem',
              }}
            >
              <div className="d-flex justify-content-center align-items-center gap-2">
                <img src={hireMeIcon} alt="Hire Me" width="20" height="20" style={{ filter: 'invert(1)' }} />
                <span className="fw-semibold">Hire Me</span>
              </div>
            </div>
          </div>

          <div
            className="text-center mb-5"
            style={{
              backgroundColor: darkMode ? '#1E293B' : '#54b689',
              borderRadius: '12px',
              padding: '2rem 1rem',
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            <div
              className="d-flex justify-content-center align-items-center gap-2 mb-4"
              style={{ cursor: 'pointer' }}
              onClick={toggleDarkMode}
            >
              <img src={darkIcon} alt="Dark Mode" width="20" height="20" style={{ filter: 'invert(1)' }} />
              <span style={{ fontSize: '1.2rem' }}>Dark Mode</span>
            </div>
            <label
              htmlFor="darkModeSwitch"
              style={{
                display: 'inline-block',
                width: '80px',
                height: '40px',
                backgroundColor: darkMode ? '#0E141D' : '#54b689',
                borderRadius: '999px',
                border: `3px solid ${darkMode ? '#54b689' : '#a2d8c1'}`,
                position: 'relative',
                cursor: 'pointer',
              }}
            >
              <input
                type="checkbox"
                id="darkModeSwitch"
                checked={darkMode}
                onChange={toggleDarkMode}
                style={{ display: 'none' }}
              />
              <span
                style={{
                  position: 'absolute',
                  width: '28px',
                  height: '28px',
                  top: '3.5px',
                  left: darkMode ? '42px' : '4px',
                  backgroundColor: '#a6d5c0',
                  borderRadius: '25px',
                  transition: 'left 0.6s ease',
                }}
              />
            </label>
          </div>
        </>
      )}
    </div>
  );

  return (
    <>
      {/* Top Navbar */}
      <div
        className="d-flex align-items-center px-3 py-2 text-white position-fixed w-100"
        style={{
          zIndex: 1040,
          height: '65px',
          backgroundColor: darkMode ? '#1E293B' : '#54b689',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        <img
          src={profileIcon}
          alt="Menu"
          width="30"
          height="30"
          style={{ cursor: 'pointer', filter: 'invert(1)' }}
          onClick={() => setShowSidebar(!showSidebar)}
        />
        <div className="flex-grow-1 d-flex justify-content-center">
          <h5 className="m-0">Abhishek Pawar</h5>
        </div>
        <div style={{ width: '30px' }} />
      </div>

      {/* Mobile Sidebar */}
      {isMobile ? (
        <div
          style={{
            height: sidebarHeight,
            overflow: 'hidden',
            transition: 'height 0.4s ease-in-out',
          }}
        >
          <SidebarContent />
        </div>
      ) : (
        <div
          style={{
            position: 'fixed',
            top: '65px',
            left: showSidebar ? 0 : '-260px',
            width: '260px',
            height: '100%',
            zIndex: 1030,
            backgroundColor: darkMode ? '#1E293B' : '#54b689',
            transition: 'left 0.4s ease',
            boxShadow: showSidebar ? '2px 0 8px rgba(0,0,0,0.3)' : 'none',
            overflowY: 'auto',
            boxSizing: 'content-box',
          }}
        >
          <style>{`
          div::-webkit-scrollbar {
            width: 8px;
          }
          div::-webkit-scrollbar-track {
            background: ${darkMode ? '#1E293B' : '#54b689'};
          }
          div::-webkit-scrollbar-thumb {
            background-color: ${darkMode ? '#0E141D' : '#388e75'}; /* darker mint green in light mode */
            border-radius: 10px;
            border: 2px solid ${darkMode ? '#1E293B' : '#54b689'}; /* so thumb has padding/match look */
          }
        `}</style>

          <SidebarContent />
        </div>
      )}
    </>
  );
};

export default Navbar;
