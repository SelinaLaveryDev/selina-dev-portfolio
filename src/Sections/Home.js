import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Selina Lavery</h1>
      <h2 className="home-subtitle">Junior Software Engineer</h2>
      <p className="home-description">
        Versatile Junior Software Engineer with a background in marketing, finance, and operational training. Known for adaptability in dynamic, fast-paced environments and a proactive approach to delivering high-quality results. Skilled in front-end and back-end technologies, I create user-focused solutions while collaborating effectively with teams to meet project goals.
      </p>
      <div className="home-links">
        <a href="https://github.com/SelinaLaveryDev" target="_blank" rel="noopener noreferrer" className="home-link">GitHub</a>
        <a href="https://linkedin.com/in/selina-lavery" target="_blank" rel="noopener noreferrer" className="home-link">LinkedIn</a>
        <a href="/path/to/CV.pdf" target="_blank" rel="noopener noreferrer" className="home-link">Download CV</a>
      </div>
    </div>
  );
}

export default Home;