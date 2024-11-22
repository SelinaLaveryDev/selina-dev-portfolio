import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ProjectModal1 (props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
      ProjectModal1
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>BA (Hons) Marketing & Communication</h4>
        <p>
          <strong>Institution:</strong> Glasgow Caledonian University
        </p>
        <p>
          Achieved a Bachelor of Arts with Honours, focusing on marketing,
          communication strategies, and consumer behaviour.
        </p>
      </Modal.Body>      
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectModal1;