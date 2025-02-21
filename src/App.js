import React from "react";
import Container from "react-bootstrap/Container";
import NavBar from "./Components/NavBar";
import "./App.css";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import SkillsSection from "./Sections/Skills";
import Projects from "./Sections/Projects";
import ContactMe from "./Sections/ContactMe";

export default function App() {
  return (
    <Container fluid className="app-container">
      <div className="heading-container">
        <h1 className="heading">SELINA LAVERY</h1>
      </div>
      <NavBar className="sticky-nav" />
      <main className="app-main">
        <Hero />
        <About />
        <SkillsSection />
        <Projects />
        <ContactMe />
      </main>
    </Container>
  );
}
