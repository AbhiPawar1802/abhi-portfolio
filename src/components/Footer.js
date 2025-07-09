import React from 'react';

const Footer = () => {
  return (
    <footer
      className="bg-dark text-light d-flex flex-column flex-md-row justify-content-between align-items-center p-3"
      style={{ fontSize: '14px' }}
    >
      <div>
        <strong>Abhishek Anil Pawar</strong>
      </div>

      <div className="my-2 my-md-0">
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'lightgray', marginRight: '15px', textDecoration: 'none' }}
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'lightgray', marginRight: '15px', textDecoration: 'none' }}
        >
          LinkedIn
        </a>
        <a
          href="https://leetcode.com/your-leetcode"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'lightgray', textDecoration: 'none' }}
        >
          LeetCode
        </a>
      </div>

      <div>© {new Date().getFullYear()} Abhishek Pawar. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
