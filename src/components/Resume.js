import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt, FaGitAlt , FaDownload
} from 'react-icons/fa';
import { SiLeetcode, SiSpringboot, SiDjango, SiJavascript, SiMongodb, SiMysql, SiPostman } from 'react-icons/si';
import { MdApi } from 'react-icons/md';

const Resume = ({ darkMode }) => {
  const colors = {
    light: {
      background: "#ffffff",
      textPrimary: "#212529",
      textSecondary: "#6c757d",
      accent: "#0d6efd",
      border: "#dee2e6",
      cardBg: "#f8f9fa",
    },
    dark: {
      background: "#0E141D",     
      textPrimary: "#e9ecef",
      textSecondary: "#adb5bd",
      accent: "#54b689",
      border: "#334155",
      cardBg: "#1E293B", 
    },
  };

  const theme = darkMode ? colors.dark : colors.light;

  const containerStyle = {
    backgroundColor: theme.background,
    color: theme.textPrimary,
    minHeight: "100vh",
    padding: "2rem 1rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: "flex",
    justifyContent: "center",
  };

  const cardStyle = {
    backgroundColor: theme.cardBg,
    border: `1px solid ${theme.border}`,
    borderRadius: "1rem",
    padding: "2rem",
    maxWidth: "960px",
    width: "100%",
    boxShadow: darkMode
      ? "0 8px 30px rgba(0,0,0,0.8)"
      : "0 8px 30px rgba(0,0,0,0.1)",
  };

  const sectionTitleStyle = {
    color: theme.accent,
    borderBottom: `3px solid ${theme.accent}`,
    paddingBottom: "0.25rem",
    marginBottom: "1rem",
    fontWeight: "700",
    fontSize: "1.6rem",
  };

  const subHeadingStyle = {
    fontWeight: "600",
    fontSize: "1.2rem",
    color: theme.textPrimary,
    marginTop: "1rem",
  };

  const textSecondaryStyle = {
    color: theme.textSecondary,
    fontSize: "0.95rem",
  };

  const primaryColor = theme.accent;

  return (
    <section style={{ backgroundColor: theme.background, minHeight: "100vh", padding: "3rem 1rem" }}>
      {/* Heading + Download Button */}
      <div style={{ maxWidth: "960px", margin: "0 auto 40px", textAlign: "center" }}>
        <h1
          style={{
            color: theme.textPrimary,
            fontWeight: '900',
            fontSize: '2.1rem',
            marginBottom: '20px',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Online Resume
        </h1>

        <a
          href="/Abhishek%20Resume.pdf"
          download
          style={{
            backgroundColor: primaryColor,
            color: '#fff',
            padding: '12px 28px',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: '600',
            textDecoration: 'none',
            boxShadow: `0 4px 15px ${primaryColor}88`,
            display: 'inline-block',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = darkMode ? '#429c6b' : '#084298';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = primaryColor;
          }}
        >
          <FaDownload />
          Download PDF Version
        </a>
      </div>

      {/* Resume Content Card */}
      <div style={containerStyle}>
        <div style={cardStyle}>
          <header className="mb-5">
            <h1
              style={{
                color: theme.textPrimary,
                fontWeight: '900',
                fontSize: '2.2rem',
                marginBottom: '1.2rem',
              }}
            >
              Abhishek Anil Pawar
            </h1>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px 32px',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FaEnvelope style={{ marginRight: '8px', color: theme.accent }} />
                <span style={{ color: theme.textSecondary }}>pabhi3195@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FaPhoneAlt style={{ marginRight: '8px', color: theme.accent }} />
                <span style={{ color: theme.textSecondary }}>8788142166</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FaMapMarkerAlt style={{ marginRight: '8px', color: theme.accent }} />
                <span style={{ color: theme.textSecondary }}>Pune, Maharashtra</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FaLinkedin style={{ marginRight: '8px', color: theme.accent }} />
                <a
                  href="https://www.linkedin.com/in/abhi-pawar-058775226/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: theme.textSecondary,
                    textDecoration: 'none',
                  }}
                >
                  Linkedin
                </a>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FaGithub style={{ marginRight: '8px', color: theme.accent }} />
                <a
                  href="https://github.com/AbhiPawar1802"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: theme.textSecondary,
                    textDecoration: 'none',
                  }}
                >
                  GitHub
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <SiLeetcode style={{ marginRight: '8px', color: theme.accent }} />
                <a
                  href="https://leetcode.com/u/abhipawar18/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: theme.textSecondary,
                    textDecoration: 'none',
                  }}
                >
                  Leetcode
                </a>
              </div>
            </div>
          </header>

          <section>
            <h2 style={sectionTitleStyle}>Profile</h2>
            <p style={{color: textSecondaryStyle.color, fontSize: "1.05rem", lineHeight: "1.6" }}>
              Passionate Full-Stack Developer with hands-on experience in Java,
              Spring Boot, React, and MySQL. Adept at building scalable and
              user-centric web applications, optimizing database performance, and
              implementing secure payment gateways. Seeking to apply my technical
              expertise in a dynamic development environment.
            </p>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={sectionTitleStyle}>Education</h2>

            {/* MCA */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                marginBottom: '1.5rem',
                gap: '12px',
              }}
            >
              <div style={{ flex: '1 1 60%', minWidth: '250px' }}>
                <h5 style={subHeadingStyle}>Master of Computer Application</h5>
                <p style={textSecondaryStyle}>
                  SuryaDatta Institute of Management and Mass Communication <br />
                  Percentage: 71.20%
                </p>
              </div>
              <div
                style={{
                  flex: '1 1 35%',
                  minWidth: '150px',
                  textAlign: 'right',
                  color: textSecondaryStyle.color,
                  fontWeight: '600',
                  fontSize: '1rem',
                }}
              >
                08/2024 – Present
              </div>
            </div>

            {/* BCA */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <div style={{ flex: '1 1 60%', minWidth: '250px' }}>
                <h5 style={subHeadingStyle}>Bachelor's of Computer Application</h5>
                <p style={textSecondaryStyle}>
                  Savitribai Phule Pune University <br />
                  Percentage: 74.30%
                </p>
              </div>
              <div
                style={{
                  flex: '1 1 35%',
                  minWidth: '150px',
                  textAlign: 'right',
                  color: textSecondaryStyle.color,
                  fontWeight: '600',
                  fontSize: '1rem',
                }}
              >
                07/2019 – 08/2022
              </div>
            </div>
          </section>

          <section>
            <h2 style={sectionTitleStyle}>Skills</h2>
            <div className="row">
              <div className="col-12 col-sm-6 col-lg-3 mb-4">
                <h6 style={subHeadingStyle}>Backend</h6>
                <ul>
                  <li><FaJava style={{ color: '#54b689', marginRight: '6px' }} /> Java</li>
                  <li><SiSpringboot style={{ color: '#54b689', marginRight: '6px' }} /> Spring Boot</li>
                  <li><FaPython style={{ color: '#54b689', marginRight: '6px' }} /> Python</li>
                  <li><SiDjango style={{ color: '#54b689', marginRight: '6px' }} /> Django</li>
                </ul>
              </div>
              <div className="col-12 col-sm-6 col-lg-3 mb-4">
                <h6 style={subHeadingStyle}>Frontend</h6>
                <ul>
                  <li><FaReact style={{ color: '#54b689', marginRight: '6px' }} /> React.js</li>
                  <li><SiJavascript style={{ color: '#54b689', marginRight: '6px' }} /> JavaScript</li>
                  <li><FaHtml5 style={{ color: '#54b689', marginRight: '6px' }} /> HTML</li>
                  <li><FaCss3Alt style={{ color: '#54b689', marginRight: '6px' }} /> CSS</li>
                </ul>
              </div>
              <div className="col-12 col-sm-6 col-lg-3 mb-4">
                <h6 style={subHeadingStyle}>Database</h6>
                <ul>
                  <li><SiMysql style={{ color: '#54b689', marginRight: '6px' }} /> MySQL</li>
                  <li><SiMongodb style={{ color: '#54b689', marginRight: '6px' }} /> MongoDB</li>
                </ul>
              </div>
              <div className="col-12 col-sm-6 col-lg-3 mb-4">
                <h6 style={subHeadingStyle}>Tools</h6>
                <ul>
                  <li><FaGitAlt style={{ color: '#54b689', marginRight: '6px' }} /> Git</li>
                  <li><SiPostman style={{ color: '#54b689', marginRight: '6px' }} /> Postman</li>
                  <li><MdApi style={{ color: '#54b689', marginRight: '6px' }} /> REST APIs</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 style={sectionTitleStyle}>Projects</h2>
            <h5 style={subHeadingStyle}>
              Cafe Management System (Spring Boot, React, MySQL)
            </h5>
            <ul>
              <li>Developed a full-stack system for café management with order tracking, payments, and inventory control.</li>
              <li>Integrated UPI QR Code Payment & Razorpay for seamless transactions.</li>
              <li>Created a React.js dashboard with Bootstrap for real-time order tracking.</li>
            </ul>

            <h5 style={subHeadingStyle}>
              Event Management System (Java, Spring Boot, React, MySQL)
            </h5>
            <ul>
              <li>Comprehensive platform for planning and managing events.</li>
              <li>Implemented user authentication and role-based access.</li>
              <li>Built REST APIs and integrated payment functionality.</li>
            </ul>
          </section>

          <section>
            <h2 style={sectionTitleStyle}>Courses and Training</h2>
            <h5 style={subHeadingStyle}>Full Stack Java Development Course</h5>
            <p style={textSecondaryStyle}>Hefshine Software's PVT LTD | 02/2023 – 09/2023</p>
            <ul>
              <li>Mastered Core Java, Advanced Java, Spring Boot, MySQL.</li>
              <li>Built full-stack apps with Spring Boot and React.</li>
              <li>Developed REST APIs and learned scalable backend design.</li>
            </ul>
          </section>

          <section className="mb-0">
            <h2 style={sectionTitleStyle}>Certificates</h2>
            <ul>
              <li>Advanced Java Programming - LinkedIn Learning</li>
              <li>Testing throughout SDLC - LinkedIn Learning</li>
              <li>MongoDB Basics - LinkedIn Learning</li>
              <li>JavaScript Essential Training - LinkedIn Learning</li>
              <li>DSA in Java - LinkedIn Learning</li>
              <li>MySQL Mastery - LinkedIn Learning</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Resume;
