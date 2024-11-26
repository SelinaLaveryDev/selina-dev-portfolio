import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import '../Sections/About.css';

function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML", label: "Frequently Used" },
        { name: "CSS", label: "Frequently Used" },
        { name: "Bubble.io", label: "Applied in Projects" },
        { name: "Webflow", label: "Applied in Projects" },
        { name: "JavaScript", label: "Frequently Used" },
        { name: "React", label: "Applied in Projects" },
        { name: "React Native", label: "Recent Project" },
        { name: "Ruby", label: "Learning" },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", label: "Used in APIs" },
        { name: "Express", label: "Used in APIs" },
        { name: "MongoDB", label: "Applied in Projects" },
        { name: "PostgreSQL", label: "Used in APIs" },
        { name: "Rails", label: "Learning" },
      ],
    },
    {
      category: "Design & Prototyping",
      skills: [
        { name: "Figma", label: "UI Design & Prototypes" },
        { name: "ERDs", label: "Database Structuring" },
        { name: "Wireframes", label: "UI Planning" },
        { name: "Expo", label: "Mobile Deployment" },
        { name: "Xcode", label: "iOS Development" },
      ],
    },
    {
      category: "Tools & Other Skills",
      skills: [
        { name: "Git", label: "Version Control" },
        { name: "RESTful APIs", label: "API Integration" },
        { name: "Trello", label: "Project Management" },
        { name: "Mailchimp", label: "Email Campaigns" },
        { name: "Zapier", label: "Workflow Automation" },
        { name: "Slack", label: "Team Collaboration" },
      ],
    },
  ];

  return (
    <Container id="skills" className=" my-5">
      <div className="center">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Skills</h1>
      </div>
      {skillCategories.map((category, index) => (
        <div key={index} className="mb-5">
          <h3 className="text-center mb-4">{category.category}</h3>
          <Row>
            {category.skills.map((skill, idx) => (
              <Col key={idx} xs={12} sm={6} md={4} className="mb-3">
                <Card className="text-center p-2 shadow-sm skill-card">
                  <Card.Body>
                    <div
                      style={{
                        fontSize: "20px",
                        marginBottom: "8px",
                      }}
                    >
                      ✔️
                    </div>
                    <Card.Title as="h6" className="mb-1">{skill.name}</Card.Title>
                    <Card.Text className="text-muted">{skill.label}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
}

export default SkillsSection;