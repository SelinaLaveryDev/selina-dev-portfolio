import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Prof1Modal (props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Kionnali Living Systems Ltd
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Software Developer</h4>
        <p>
          As Kionnali's sole software specialist, my role was broad-ranging and 
          allowed me to showcase my ability to manage multiple tasks, each requiring 
          diverse skill sets. Key responsibilities included:
        </p>
        <ul>
          <li>
            Web Development & CMS Integration: Revamped the company's website using Webflow, 
            implementing responsive designs and managing dynamic content through Webflow CMS.
          </li>
          <li>
            Interactive App Prototypes: Built app prototypes using React and React Native, showcasing 
            platform features to stakeholders.
          </li>
          <li>
            Automated Communication: Designed and coded monthly newsletters via Mailchimp 
            and developed employee email signatures for consistent branding.
          </li>
          <li>
            Feature Development: Created a pre-order booking system with Stripe integration 
            using Bubble.io, enabling secure user management and seamless payments.
          </li>
          <li>
            Content Creation: Authored engaging blogs via Webflow CMS, aligning content with 
            the company's branding and audience needs.
          </li>
        </ul>
        <p>
          This role demanded technical proficiency, creativity, and adaptability to deliver 
          impactful solutions in a fast-paced, innovative environment.
        </p>
      </Modal.Body>      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Prof1Modal;