import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Sections/About.css'
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import appProt from "../assets/app-prot.png"
import webImg from "../assets/website-img.png"
import preOrderImg from '../assets/Full dashboard.png'
import storyBuilderImg from '../assets/Front of card.jpg'
import ies from '../assets/iesLoadingScreen.png'
import swimteamImg from '../assets/swimteamWebsite.png'
import ProjectModal1 from '../Components/ProjectModal1'
import ProjectModal2 from '../Components/ProjectModal2'
import ProjectModal3 from '../Components/ProjectModal3'
import ProjectModal4 from '../Components/ProjectModal4'
import ProjectModal5 from '../Components/ProjectModal5'
import ProjectModal6 from '../Components/ProjectModal6';


function Projects() {
    const [modalShow, setModalShow] = useState(null);

  const projects = [
    {
        id: 1,
        title: "Kionnali App Prototype",
        description:
            "An interactive app prototype built using React to demonstrate platform features.",
        image: appProt,
        modal: 'ProjectModal1',
        demo: "https://selinakionnali.github.io/Kionnali-App_Prototype/#/",
        button1: 'More Info',
        button2: 'View Demo'
    },
    {
        id: 2,
      title: "LightForm Website",
      description:
        "A responsive website developed on Webflow to showcase LightForm's features and facilitate pre-orders.",
      image: webImg,
      modal: 'ProjectModal2',
      demo: "https://www.kionnali.com/",
      button1: 'More Info',
      button2: 'View Website'

    },
    {
        id: 3,
        title: "Pre-Order Booking System",
        description: "A booking system using Bubble.io with Stripe integration and secure login.",
        image: preOrderImg,
        modal: 'ProjectModal3',
        demo: "https://preorder.lightform.homes/",  
        button1: 'More Info',
        button2: 'View Website'
  
    },
    {
        id: 4,
        title: "Story Builder App",
        description: "A booking system using Bubble.io with Stripe integration and secure login.",
        image: storyBuilderImg,
        modal: 'ProjectModal4',
        demo: "https://preorder.lightform.homes/story-builder",  
        button1: 'More Info',
        button2: 'View App'
  
    },
    {
      id: 5,
      title: "IES V0 - Energy Sensor Data Viewer",
      description: "A React Native app to display real-time sensor data for the Integrated Energy System.",
      image: ies,
      modal: 'ProjectModal5',
      button1: 'More Info',
    },
    {
      id: 6,
      title: "Swim Team Website",
      description: "A React-based website built and maintained for the local swim team.",
      image: swimteamImg, 
      modal: 'ProjectModal6',
      demo: "https://www.stonehavenasc.co.uk/", 
      button1: 'More Info',
    },
  ];

  return (
    <Container className="my-5">
        <section id='projects'>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <p className="section__text__p1">Browse My Recent</p>
            <h1 className='title'>Projects</h1>
        </div>
      <Row className="mt-4">
        {projects.map((project, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4">
            <h1 >{project.category}</h1>
            <Card className="shadow-sm h-100 card-height">
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
                    objectFit: "contain", 
                    background: "#f0f0f0", 
                    }}

                />
              </div>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'space-between', justifyContent: 'space-between'}}>
                

                {/* View Modal Btn */}
                <Button 
                variant="outline-secondary"
                onClick={() => setModalShow(project.modal)}
                >
                  {project.button1}
                </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {modalShow === 'ProjectModal1' && (
        <ProjectModal1 show={true} onHide={() => setModalShow(null)}/>
      )}
      {modalShow === 'ProjectModal2' && (
        <ProjectModal2 show={true} onHide={() => setModalShow(null)}/>
      )}
      {modalShow === 'ProjectModal3' && (
        <ProjectModal3 show={true} onHide={() => setModalShow(null)}/>
      )}
      {modalShow === 'ProjectModal4' && (
        <ProjectModal4 show={true} onHide={() => setModalShow(null)}/>
      )}
      {modalShow === 'ProjectModal5' && (
        <ProjectModal5 show={true} onHide={() => setModalShow(null)} />
      )}
      {modalShow === 'ProjectModal6' && (
        <ProjectModal6 show={true} onHide={() => setModalShow(null)} />
      )}
      </section>
    </Container>
  );
}

export default Projects;