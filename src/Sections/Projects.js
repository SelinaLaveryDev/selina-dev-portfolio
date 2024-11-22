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
      <h2 className="text-center mb-4">Browse My Recent <strong>Projects</strong></h2>
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
                <Button variant="primary" href={project.github} className="me-2">
                  GitHub
                </Button>
                <Button variant="secondary" href={project.demo}>
                  View Demo
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;