// src/Components/Hero.js
import React from "react";
import "./Hero.css";
import profilePic from "../assets/profile-pic.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import Pdf from "../assets/Selina_Lavery_CV_27.10.25.pdf";

export default function Hero() {
  const onResumeClick = () => {
    window.open(Pdf);
  };

  return (
    <section id="hero" className="hero-section">
      <div className="section__pic-container">
        <img src={profilePic} alt="Profile" className="hero-profile-pic" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hi, I'm</p>
        <h1 className="title">Selina Lavery</h1>
        <p className="section__text__p2">Web Developer | Front-End Engineer</p>
        <div className="profile-description">
          <quote className="profile-description">
            I am a front-end web developer with a strong foundation in HTML,
            CSS, JavaScript, React, and a background spanning marketing,
            operational training, and communications.
          </quote>
        </div>
        <div className="btn-container">
          <button className="btn btn-colour-2" onClick={onResumeClick}>
            View My CV
          </button>
          <button
            className="btn btn-colour-1"
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore My Work
          </button>{" "}
        </div>
        <div id="socials-container">
          <img
            src={linkedin}
            alt="LinkedIn profile"
            className="icon"
            onClick={() =>
              window.open("https://linkedin.com/in/selina-lavery", "_blank")
            }
          />
          <img
            src={github}
            alt="GitHub profile"
            className="icon"
            onClick={() =>
              window.open("https://github.com/SelinaLaveryDev", "_blank")
            }
          />
          <img
            src={
              "https://sel-dev-bucket.s3.us-east-1.amazonaws.com/portfolio-images/dev-icons/dev_icons/codepen.png"
            }
            alt="Codepen profile"
            className="icon"
            onClick={() =>
              window.open("https://codepen.io/your-work", "_blank")
            }
          />
        </div>
      </div>
    </section>
  );
}
