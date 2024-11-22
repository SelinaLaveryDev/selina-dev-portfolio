import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Sections/About.css'
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import appProt from "../assets/app-prot.png"
import webImg from "../assets/website-img.png"

function Projects() {
  const projects = [
    {
      title: "Kionnali App Prototype",
      description:
        "An interactive app prototype built using React to demonstrate platform features.",
      image: appProt,
      github: "#",
      demo: "#",
    },
    {
      title: "LightForm Website",
      description:
        "A responsive website developed on Webflow to showcase LightForm's features and facilitate pre-orders.",
      image: webImg,
      github: "#",
      demo: "#",
    },
  ];

  return (
    <Container className="my-5">
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <p className="section__text__p1">Browse My Recent</p>
            <h1 className='title'>Projects</h1>
        </div>
      <Row className="mt-4">
        {projects.map((project, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4">
            <Card className="shadow-sm">
              <div className="ratio ratio-16x9">
                <Card.Img
                  variant="top"
                  src={project.image}
                    alt={project.title}
                    style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    objectFit: "contain", // Ensures the full image is visible
                    background: "#f0f0f0", // Optional: Add a background to handle empty spaces
                    }}

                />
              </div>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                <Button variant="outline-secondary" href={project.github} className="me-2">
                  GitHub
                </Button>
                <Button variant="secondary" href={project.demo}>
                  View Demo
                </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;