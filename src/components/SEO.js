import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title || 'Abhi Pawar | Software Developer'}</title>
      <meta name="description" content={description || 'Abhi Pawar’s portfolio showcasing projects, skills, and contact.'} />
      <meta name="keywords" content={keywords || 'Software Developer, React, Node.js, Portfolio, Abhi Pawar'} />
      <meta name="author" content="Abhi Pawar" />
      
      <meta property="og:title" content={title || 'Abhi Pawar | Software Developer'} />
      <meta property="og:description" content={description || 'Abhi Pawar’s portfolio showcasing projects, skills, and contact.'} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://your-portfolio.netlify.app" />
      <meta property="og:image" content="https://your-portfolio.netlify.app/og-image.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || 'Abhi Pawar | Software Developer'} />
      <meta name="twitter:description" content={description || 'Abhi Pawar’s portfolio showcasing projects, skills, and contact.'} />
      <meta name="twitter:image" content="https://your-portfolio.netlify.app/og-image.png" />
    </Helmet>
  );
};

export default SEO;
