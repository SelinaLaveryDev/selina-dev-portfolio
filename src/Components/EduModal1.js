import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Prof4Modal (props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Regional Trainer
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Lloyds Banking Group, Glasgow</h4>
        <p>
          Provided training during the integration of Bank of Scotland and
          Lloyds TSB. Key responsibilities:
        </p>
        <ul>
          <li>
            Delivered training on new systems, products, and sales processes.
          </li>
          <li>
            Facilitated a six-week sellers course including role-play and
            assessments.
          </li>
          <li>
            Supported staff in adapting to changes in business workflows.
          </li>
        </ul>
      </Modal.Body>      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Prof4Modal;