import React from 'react'
import Container from 'react-bootstrap/Container';

import './App.css';
import NavBar from './Components/NavBar';

export default function App() {
  return(
    <Container fluid>
      <NavBar />
      <div className='app-container'>
        <p>About Page</p>
        <p>
            My name is Selina Lavery. I am a Junior Software Engineer with experience in the fields of marketing, finance, and training.
        </p>
      </div>
    </Container>
  )
  
}