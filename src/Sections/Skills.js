import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../Sections/About.css";

function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML", label: "Frequently Used - Visit my CodePen" },
        { name: "CSS", label: "Frequently Used - Visit my CodePen" },
        {
          name: "Bubble.io",
          label: "Applied in Projects - See Projects section",
        },
        {
          name: "Webflow",
          label: "Applied in Projects - See Projects section",
        },
        {
          name: "JavaScript",
          label: "Applied in Projects - See Projects section",
        },
        { name: "React", label: "Applied in Projects - See Projects section" },
        {
          name: "React Native",
          label: "Applied in Projects - See Projects section",
        },
        { name: "Ruby", label: "Visit GitHub for GA project" },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", label: "Applied in Projects - Visit my GitHub" },
        { name: "Express", label: "Applied in Projects - Visit my GitHub" },
        { name: "MongoDB", label: "Visit GitHub for GA project" },
        { name: "PostgreSQL", label: "Visit GitHub for GA project" },
        { name: "Rails", label: "Visit GitHub for GA project" },
      ],
    },
    {
      category: "Design & Prototyping",
      skills: [
        { name: "Figma", label: "Used Frequently - see CV and Projects below" },
        { name: "ERDs", label: "Shown in github Readme's" },
        { name: "Wireframes", label: "Shown in github Readme's" },
        { name: "Expo", label: "See mobile app prototype project" },
        { name: "Xcode", label: "See mobile app prototype project" },
      ],
    },
    {
      category: "Tools & Other Skills",
      skills: [
        { name: "Git", label: "Version Control - visit my GitHub" },
        { name: "RESTful APIs", label: "Visit GitHub for GA projects" },
        { name: "Trello", label: "Visit GitHub for GA projects" },
        {
          name: "Mailchimp",
          label: "Email Campaigns - see Kionnali work experience",
        },
        { name: "Zapier", label: "Forms - see Kionnali work experience" },
        { name: "Slack", label: "Team Collaboration at Kionnali and GA" },
      ],
    },
  ];

  return (
    <Container className=" my-5">
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
                    <Card.Title as="h6" className="mb-1">
                      {skill.name}
                    </Card.Title>
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
