import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaDownload
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
    <section style={{
      backgroundColor: theme.background,
      minHeight: "100vh",
      padding: "3rem 1rem",
      paddingBottom: "5rem",
      overflowX: "hidden"
    }}>
      {/* Heading + Download Button */}
      <div style={{ maxWidth: "960px", margin: "0 auto 40px", textAlign: "center" }}>
        <h1 style={{
          color: theme.textPrimary,
          fontWeight: '900',
          fontSize: '2.1rem',
          marginBottom: '20px',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>
          Online Resume
        </h1>

        <a
          href="/Abhishek%20Resume.pdf"
          download
          className="resume-download-btn"
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
          <FaDownload className="me-2" />
          Download PDF Version
        </a>
      </div>

      {/* Resume Content */}
      <div style={containerStyle}>
        <div style={cardStyle}>
          {/* Header Contact */}
          <header className="mb-5">
            <h1 style={{
              color: theme.textPrimary,
              fontWeight: '900',
              fontSize: '2.2rem',
              marginBottom: '1.2rem',
            }}>
              Abhishek Anil Pawar
            </h1>

            <div className="row gy-3">
              {[
                [FaEnvelope, "pabhi3195@gmail.com"],
                [FaPhoneAlt, "8788142166"],
                [FaMapMarkerAlt, "Pune, Maharashtra"],
                [FaLinkedin, "https://www.linkedin.com/in/abhi-pawar-058775226/", "LinkedIn"],
                [FaGithub, "https://github.com/AbhiPawar1802", "GitHub"],
                [SiLeetcode, "https://leetcode.com/u/abhipawar18/", "Leetcode"]
              ].map(([Icon, value, text], i) => (
                <div className="col-12 col-sm-6 d-flex align-items-center" key={i}>
                  <Icon style={{ marginRight: '8px', color: theme.accent }} />
                  {value.startsWith("http") ? (
                    <a href={value} target="_blank" rel="noreferrer" style={{ color: theme.textSecondary, textDecoration: 'none' }}>
                      {text}
                    </a>
                  ) : (
                    <span style={{ color: theme.textSecondary }}>{value}</span>
                  )}
                </div>
              ))}
            </div>
          </header>

          {/* Sections */}
          <section>
            <h2 style={sectionTitleStyle}>Profile</h2>
            <p style={{ color: textSecondaryStyle.color, fontSize: "1.05rem", lineHeight: "1.6" }}>
              Passionate Full-Stack Developer with hands-on experience in Java,
              Spring Boot, React, and MySQL. Adept at building scalable and
              user-centric web applications, optimizing database performance, and
              implementing secure payment gateways. Seeking to apply my technical
              expertise in a dynamic development environment.
            </p>
          </section>

          {/* Education */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={sectionTitleStyle}>Education</h2>
            {[
              ["Master of Computer Application", "SuryaDatta Institute of Management and Mass Communication", "08/2024 – Present", "71.20%"],
              ["Bachelor's of Computer Application", "Savitribai Phule Pune University", "07/2019 – 08/2022", "74.30%"]
            ].map(([degree, college, dates, percent], idx) => (
              <div className="row mb-3" key={idx}>
                <div className="col-12 col-sm-8">
                  <h5 style={subHeadingStyle}>{degree}</h5>
                  <p style={textSecondaryStyle}>{college}<br />Percentage: {percent}</p>
                </div>
                <div className="col-12 col-sm-4 text-sm-end text-start" style={{ color: textSecondaryStyle.color, fontWeight: '600' }}>
                  {dates}
                </div>
              </div>
            ))}
          </section>

          {/* Skills */}
          <section>
            <h2 style={sectionTitleStyle}>Skills</h2>
            <div className="row">
              {[
                ["Backend", [[FaJava, "Java"], [SiSpringboot, "Spring Boot"], [FaPython, "Python"], [SiDjango, "Django"]]],
                ["Frontend", [[FaReact, "React.js"], [SiJavascript, "JavaScript"], [FaHtml5, "HTML"], [FaCss3Alt, "CSS"]]],
                ["Database", [[SiMysql, "MySQL"], [SiMongodb, "MongoDB"]]],
                ["Tools", [[FaGitAlt, "Git"], [SiPostman, "Postman"], [MdApi, "REST APIs"]]]
              ].map(([title, skills], idx) => (
                <div className="col-12 col-sm-6 col-lg-3 mb-4" key={idx}>
                  <h6 style={subHeadingStyle}>{title}</h6>
                  <ul style={{ paddingLeft: "1rem" }}>
                    {skills.map(([Icon, text], i) => (
                      <li key={i}>
                        <Icon style={{ color: '#54b689', marginRight: '6px' }} />
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 style={sectionTitleStyle}>Projects</h2>
            {[
              ["Cafe Management System (Spring Boot, React, MySQL)", [
                "Developed a full-stack system for café management with order tracking, payments, and inventory control.",
                "Integrated UPI QR Code Payment & Razorpay for seamless transactions.",
                "Created a React.js dashboard with Bootstrap for real-time order tracking."
              ]],
              ["Event Management System (Java, Spring Boot, React, MySQL)", [
                "Comprehensive platform for planning and managing events.",
                "Implemented user authentication and role-based access.",
                "Built REST APIs and integrated payment functionality."
              ]]
            ].map(([project, details], i) => (
              <div key={i}>
                <h5 style={subHeadingStyle}>{project}</h5>
                <ul>
                  {details.map((line, j) => <li key={j}>{line}</li>)}
                </ul>
              </div>
            ))}
          </section>

          {/* Training */}
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

          {/* Certifications */}
          <section>
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
