import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ProjectModal3(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Pre-Order Booking System
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>My Role</h4>
        <p>
          I was tasked with building the Pre-Order Booking System using Bubble.io, which would allow users to secure a build slot for their LightForm home. This was my first time using Bubble.io, and I worked under a tight deadline to deliver a fully functional, responsive platform. The pre-order system was a more complex project compared to the LightForm website, as it required both frontend and backend functionality.
        </p>

        <h5>Skills Applied</h5>
        <ul>
          <li>Full-Stack Development: Built the system with CRUD functionality, enabling users to create, read, update, and delete their data securely.</li>
          <li>Payment Integration: Integrated Stripe to process payments seamlessly and securely.</li>
          <li>Authentication: Implemented a magic link system to allow users to log in without passwords.</li>
          <li>Database Management: Designed and implemented a database to securely store user information.</li>
          <li>Problem-Solving: Navigated the challenges of learning and applying Bubble.io to deliver the project on time.</li>
        </ul>

        <h5>Challenges</h5>
        <p>
          Building the pre-order system required balancing frontend design and backend functionality. Ensuring security and scalability while learning a new platform was a significant challenge. However, this project deepened my understanding of full-stack development and gave me valuable experience in integrating payment systems and handling user data securely.
        </p>

        <h5>Outcome</h5>
        <p>
          The pre-order system enabled users to book their LightForm build slots easily and securely. It provided Kionnali Living Systems with a professional and efficient solution to manage bookings and user data, contributing to the smooth launch of their product.
        </p>

        <h5>Link</h5>
        <Button
          variant="secondary"
          href="https://preorder.lightform.homes/"
          target="_blank"
        >
          View Website
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default ProjectModal3;