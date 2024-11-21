// src/Components/Hero.js
import React from 'react';
import './Hero.css'; 
import profilePic from '../assets/profile-pic.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="section__pic-container">
        <img src={profilePic} alt='Profile' className='hero-profile-pic' />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Selina Lavery</h1>
        <p className="section__text__p2">Junior Software Engineer</p>
        <p className="profile-description">
          Proactive and versatile Software Engineer with a background in web development, full-stack mobile applications, and digital communication. 
        </p>
        <div className="btn-container">
          <button className="btn btn-colour-2" onClick={() => window.open('../assets/SelinaLavery_CV_13.11.24.pdf')}>Download CV</button>
          <button className="btn btn-colour-1" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact Info</button>
        </div>
        <div id="socials-container">
          <img src={linkedin} alt="LinkedIn profile" className="icon" onClick={() => window.location.href='https://linkedin.com/in/selina-lavery'} />
          <img src={github} alt="GitHub profile" className="icon" onClick={() => window.location.href='https://github.com/sml-40'} />
        </div>
      </div>
    </section>
  );
}