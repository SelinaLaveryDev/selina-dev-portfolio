import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import '../Sections/About.css'

function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML", level: "Experienced" },
        { name: "CSS", level: "Experienced" },
        { name: "Bubble.io", level: "Experienced" },
        { name: "Webflow", level: "Experienced" },
        { name: "JavaScript", level: "Experienced" },
        { name: "React", level: "Experienced" },
        { name: "React Native", level: "Experienced" },
        { name: "Ruby", level: "Basic" },

      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: "Intermediate" },
        { name: "Express", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "PostgreSQL", level: "Intermediate" },
        { name: "Rails", level: "Basic" },
      ],
    },
    {
      category: "Design & Prototyping",
      skills: [
        { name: "Figma", level: "Experienced" },
        { name: "ERDs", level: "Intermediate" },
        { name: "Wireframes", level: "Experienced" },
        { name: "Expo", level: "Experienced" },
        { name: "Xcode", level: "Experienced" },
    ],
    },
    {
      category: "Tools & Other Skills",
      skills: [
        { name: "Git", level: "Experienced" },
        { name: "RESTful APIs", level: "Intermediate" },
        { name: "Trello", level: "Experienced" },
        { name: "Mailchimp", level: "Experienced" },
        { name: "Zapier", level: "Experienced" },
        { name: "Slack", level: "Experienced" },
    ],
    },
  ];

  return (
    <Container className="my-5">
    <section id='about'>
     <p className="section__text__p1">Explore My</p>
     <h1 className='title'>Skills</h1>
      {skillCategories.map((category, index) => (
        <div key={index} className="mb-5">
          <h3 className="text-center mb-4">{category.category}</h3>
          <Row>
            {category.skills.map((skill, idx) => (
              <Col key={idx} xs={12} sm={6} md={4} className="mb-4">
                <Card className="text-center p-3 shadow-sm">
                  <Card.Body>
                    <div
                      style={{
                        fontSize: "24px",
                        marginBottom: "10px",
                        color: "#4CAF50", // Example checkmark colour
                      }}
                    >
                      ✔️
                    </div>
                    <Card.Title as="h5" className="mb-2">{skill.name}</Card.Title>
                    <Card.Text className="text-muted">{skill.level}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
      </section>
    </Container>
  );
}

export default SkillsSection;