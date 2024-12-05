import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ProjectModal1(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Kionnali App Prototype
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <h4>My Role</h4>
        <p>
          As the software developer for this project, I worked closely with the co-founders of Kionnali Living Systems to transform their vision into a functional interactive prototype. Using Figma designs as a reference, I developed a React-based app that demonstrated key features of the Kionnali platform. This involved:
        </p>
        <ul>
          <li>Collaborating effectively with stakeholders to refine and implement their ideas.</li>
          <li>Building a user-friendly interface aligned with the company's branding.</li>
          <li>Translating Figma wireframes into reusable React components.</li>
        </ul>

        <h5>Skills Applied</h5>
        <p>
          <ul>
            <li><strong>Frontend Development</strong>: React and custom CSS for responsive and visually appealing designs.</li>
            <li><strong>Prototyping</strong>: Leveraged static data to simulate user interactions and workflows.</li>
            <li><strong>Communication</strong>: Maintained ongoing collaboration with co-founders to align the prototype with their vision.</li>
          </ul>
        </p>

        <h5>Outcome</h5>
        <p>
          This early-stage prototype provided investors and stakeholders with a clear visualisation of the platform's potential. It demonstrated the app’s capability to allow users to monitor and control their Integrated Energy Systems (IES) within LightForm homes.
        </p>
        <h5>Links</h5>
        <Button
          variant="outline-secondary"
          href="https://github.com/SelinaKionnali/Kionnali-App_Prototype"
          target="_blank"
          className="me-2"
        >
          View on GitHub
        </Button>
        <Button
          variant="secondary"
          href="https://selinakionnali.github.io/Kionnali-App_Prototype/#/"
          target="_blank"
        >
          View Demo
        </Button>

      </Modal.Body>
    </Modal>
  );
}

export default ProjectModal1;