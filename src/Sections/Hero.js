// src/Components/Hero.js
import React from 'react';
import './Hero.css'; 
import profilePic from '../assets/profile-pic.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import Pdf from '../assets/SelinaLavery__CV_Current.pdf'

export default function Hero() {

  const onResumeClick = () => {
    window.open(Pdf);
  };

  return (
    <section id="home" className="hero-section">
      <div className="section__pic-container">
        <img src={profilePic} alt='Profile' className='hero-profile-pic' />
      </div>
      <div className="section__text">
      <p className="section__text__p1">Hi, I'm</p>
<h1 className="title">Selina Lavery</h1>
<p className="section__text__p2">Web Developer | Front-End Engineer</p>
<p className="profile-description">
  I design and develop web and mobile applications with creativity and purpose. From crafting intuitive interfaces to building scalable systems, my work is grounded in a passion for solving real-world problems with code.
</p>        

<div className="btn-container">
          <button className="btn btn-colour-2" onClick={onResumeClick} >View My CV</button>
          <button className="btn btn-colour-1" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
    Explore My Work
  </button>        </div>
        <div id="socials-container">
          <img src={linkedin} alt="LinkedIn profile" className="icon" onClick={() => window.location.href='https://linkedin.com/in/selina-lavery'} />
          <img src={github} alt="GitHub profile" className="icon" onClick={() => window.location.href='https://github.com/SelinaKionnali'} />
        </div>
      </div>
    </section>
  );
}