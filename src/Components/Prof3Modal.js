import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Prof3Modal (props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Operational Trainer
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>BSKYB, Livingstone</h4>
        <p>
          Delivered comprehensive training to new inductees and existing staff.
          Key achievements include:
        </p>
        <ul>
          <li>
            Facilitated 'Train the Trainer' programmes to upskill team members.
          </li>
          <li>
            Delivered behavioural training for call centre staff and managers.
          </li>
          <li>
            Organised course materials, flip charts, and presentation equipment
            for seamless training delivery.
          </li>
        </ul>
      </Modal.Body>      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Prof3Modal;