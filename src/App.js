import React from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from './Components/NavBar';
import './App.css';
import Hero from './Sections/Hero';
import About from './Sections/About';
import SkillsSection from './Sections/Skills';
import Projects from './Sections/Projects';

export default function App() {
  return (
    <Container fluid>
      <NavBar />
      <main className="app-main">
        <Hero />
        <About />
        <SkillsSection />
        <Projects />
      </main>
    </Container>
  );
}