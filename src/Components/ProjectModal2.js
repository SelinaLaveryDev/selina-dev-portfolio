import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ProjectModal2 (props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
      LightForm Website Development
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <h4>My Role</h4>
        <p>
          The LightForm website was my first experience using Webflow, which greatly enhanced my frontend development skills. Initially, my responsibilities involved keeping the website up to date and fixing bugs to ensure smooth functionality. However, when the co-founders decided to rebrand, my role expanded significantly.
        </p>
        <p>
          Collaborating closely with the co-founders, I worked with them to rebuild the newly branded website based on their Figma designs. The process involved multiple iterations, as we worked together to refine and perfect the site, ensuring that it aligned with the company’s new branding while maintaining responsiveness and a seamless user experience across all devices.
        </p>

        <h5>Skills Applied</h5>
        <ul>
          <li><strong>Frontend Development</strong>: Leveraged Webflow to build and refine responsive and visually engaging designs.</li>
          <li><strong>Adaptability</strong>: Gained proficiency in Webflow while applying my existing frontend development expertise.</li>
          <li><strong>Collaboration</strong>: Worked iteratively with the co-founders, translating their vision into a functional, branded website.</li>
          <li><strong>Problem-Solving</strong>: Diagnosed and fixed bugs to ensure the website’s reliability and usability.</li>
        </ul>

        <h5>Outcome</h5>
        <p>
          The rebranded LightForm website successfully showcased the company’s refreshed identity and offerings. It provided a user-friendly platform for visitors to learn about LightForm's innovative solutions while maintaining responsiveness and professional design standards. This project also strengthened my skills in handling real-world client requirements and collaborative workflows.
        </p>      
        <h5>Link</h5>
        <Button
          variant="secondary"
          href="https://www.kionnali.com/"
          target="_blank"
        >
          View Website
        </Button>
  

      </Modal.Body>      
    </Modal>
  );
}

export default ProjectModal2;