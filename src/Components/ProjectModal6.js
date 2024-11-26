import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ProjectModal6(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Swim Team Website
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>My Role</h4>
        <p>
          As a volunteer and committee member for the local swim team, I serve as the <strong>Digital & Communications Officer</strong>. In this role, I built and now maintain the team’s website to provide an engaging platform for swimmers, parents, and committee members.
        </p>
        <p>
          I designed the website in **Figma**, creating a unique and personal aesthetic that reflects the swim team’s colours and branding. Using **React**, I developed the site with a component-based architecture, ensuring it is easy to update and maintain.
        </p>

        <h5>Key Features</h5>
        <ul>
          <li>A dynamic homepage featuring a **photo slideshow** showcasing the swim team in action.</li>
          <li>Clean navigation for users to access information about events, team members, and contact details.</li>
          <li>A responsive layout, ensuring the website looks great on all devices.</li>
        </ul>

        <h5>Skills Applied</h5>
        <ul>
          <li><strong>Frontend Development:</strong> Built a scalable website using React, ensuring fast updates and consistent design.</li>
          <li><strong>Design Tools:</strong> Used Figma to craft a custom UI that aligns with the team’s branding.</li>
          <li><strong>Responsiveness:</strong> Developed a mobile-friendly interface, ensuring accessibility across all devices.</li>
          <li><strong>Team Collaboration:</strong> Worked closely with other committee members to ensure the website met the needs of the swim team and its community.</li>
        </ul>

        <h5>Outcome</h5>
        <p>
          The swim team’s website has provided a professional and user-friendly platform for managing communications, showcasing achievements, and promoting the team’s identity. This project allowed me to apply my web development skills in a meaningful way while giving back to my community.
        </p>

        <h5>Link</h5>
        <Button
          variant="secondary"
          href="https://www.stonehavenasc.co.uk/" 
          target="_blank"
        >
          View Website
        </Button>
      </Modal.Body>    </Modal>
  );
}

export default ProjectModal6;