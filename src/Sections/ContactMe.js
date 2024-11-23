import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ContactMe() {
  return (
    <Container className="contact-section my-5">
      <div className="text-center mb-4">
        <p className="section-subtitle">Get in Touch</p>
        <h1 className="section-title">Contact Me</h1>
      </div>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6}>
        <div className="contact-card d-flex justify-content-between align-items-center p-4 rounded-pill shadow-sm">
            {/* Email Link */}
            <a
              href="mailto:selinalavery@gmail.com"
              className="contact-link d-flex align-items-center"
              style={{ textDecoration: "none", color: 'inherit' }}
            >
              <i className="fa-solid fa-envelope me-2" style={{ fontSize: "20px" }}></i>
              <span>selinalavery@gmail.com</span>
            </a>

            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link d-flex align-items-center"
              style={{ textDecoration: "none", color: 'inherit'  }}
            >
              <i className="fa-brands fa-linkedin me-2" style={{ fontSize: "20px" }}></i>
              <span>LinkedIn</span>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactMe;