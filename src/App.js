import React from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from './Components/NavBar';
import { Outlet } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <Container fluid>
      <NavBar />
      <main className="app-main">
        <Outlet /> 
      </main>
    </Container>
  );
}